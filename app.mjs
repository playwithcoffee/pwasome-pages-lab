// N4 Hex Lab — UI owns presentation; the qualified SDK owns Hex semantics.
// No runtime registry, framework, global scheduler or implicit retry.
const $ = id => document.getElementById(id);
const MAX_INPUT = 65536;
const input = $('input'), output = $('output');
const loadButton = $('load'), closeButton = $('close'), encodeButton = $('encode');
const copyButton = $('copy');
const digestSelected = document.body.dataset.n5Digest === 'selected';
const digestButton = $('digest'), digestOutput = $('digest-output'), digestStatus = $('digest-status');
let digestSequence = 0, digestBusy = false, digestModulePromise = null;
$('digest-panel').hidden = !digestSelected;
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8', {fatal:true});
let engine = null, phase = 'closed', generation = 0, loading = false;
let installEvent = null, registration = null;

function state(next, label, detail) {
  phase = next;
  $('state').textContent = label;
  $('state').dataset.kind = next;
  $('details').textContent = detail;
  loadButton.disabled = loading || next === 'ready';
  closeButton.disabled = !loading && !engine;
  encodeButton.disabled = next !== 'ready';
  digestButton.disabled = !digestSelected || next !== 'ready' || digestBusy;
}
function invalidateDigest() {
  digestSequence++;
  digestBusy = false;
  digestOutput.value = '';
  digestStatus.textContent = 'No digest for current input';
  digestButton.disabled = !digestSelected || phase !== 'ready';
}
function clearOutput() {output.value = '';copyButton.disabled = true;$('output-size').textContent = '0 bytes';}
function close() {
  invalidateDigest();
  generation++; loading = false;
  const old = engine; engine = null;
  if (old) {try {old.close();}catch { /* cleanup is best effort */ }}
  state('closed', 'Closed', 'The engine is no longer usable. Load a new instance when needed.');
}
async function load() {
  if (phase === 'ready' || loading) return;
  close();
  const mine = ++generation;
  loading = true;
  state('loading', 'Loading…', 'Checking the five-member SDK package and initializing Wasm.');
  try {
    const {createHexEngine} = await import('./sdk/pwasome-hex.mjs');
    const created = await createHexEngine();
    if (mine !== generation) {created.close();return;}
    engine = created; loading = false;
    state('ready', 'Ready', 'Qualified N3 SDK · explicit engine lifetime · no background work');
  } catch (e) {
    if (mine !== generation) return;
    loading = false; engine = null;
    state('error', 'Unable to load SDK', `The SDK was not started: ${String(e?.code ?? e?.message ?? 'unknown error')}. Check the package and online/offline state.`);
  }
}
function inputByteCount() {
  const n = encoder.encode(input.value).byteLength;
  $('input-size').textContent = `${n.toLocaleString()} / ${MAX_INPUT.toLocaleString()} bytes`;
  $('input-size').style.color = n > MAX_INPUT ? '#ff9f9f' : '';
  return n;
}
function encode() {
  if (!engine || phase !== 'ready') return;
  clearOutput();
  const bytes = encoder.encode(input.value);
  if (bytes.byteLength > MAX_INPUT) {
    state('ready', 'Ready', 'Input exceeds the SDK limit of 65,536 UTF-8 bytes.');return;
  }
  try {
    const result = engine.encode(bytes);
    if (!result?.ok) {
      state('ready', 'Ready', `SDK refused encoding: ${String(result?.error?.code ?? result?.error ?? 'unknown')}`);
      return;
    }
    const value = decoder.decode(result.bytes);
    if (value.length !== 2*bytes.length || !/^[a-f0-9]*$/.test(value)) throw new Error('unexpected output');
    output.value = value;
    $('output-size').textContent = `${result.bytes.length.toLocaleString()} bytes`;
    copyButton.disabled = false;
    state('ready', 'Ready', 'Encoding complete. Results are JavaScript-owned bytes.');
  } catch (e) {
    // Fatal domain errors can make the instance unusable. Never attempt an
    // implicit retry on a possibly retired/unusable handle.
    close();state('error', 'Encoding failed', `The instance has been closed: ${String(e?.code ?? e?.message ?? 'unknown')}`);
  }
}

async function computeDigest() {
  if (!digestSelected || phase !== 'ready' || !engine) return;
  const bytes = encoder.encode(input.value);
  invalidateDigest();
  if (bytes.byteLength > MAX_INPUT) {
    digestStatus.textContent = 'Input exceeds 65,536 UTF-8 bytes.';
    return;
  }
  const seq = digestSequence, engineGeneration = generation;
  const stillCurrent = () => seq === digestSequence && engineGeneration === generation && phase === 'ready' && !!engine;
  digestBusy = true;
  digestButton.disabled = true;
  digestStatus.textContent = 'Computing SHA-256 with the optional module…';
  try {
    // No eager load: when omitted, this branch is not reachable and the module
    // is not placed in the deployed site or the service-worker asset inventory.
    const module = await (digestModulePromise ??= import('./modules/digest/sha256.mjs'));
    if (!stillCurrent()) return;
    const hashed = await module.sha256(bytes);
    if (!stillCurrent()) return;
    if (!hashed?.ok || !(hashed.bytes instanceof Uint8Array) || hashed.bytes.byteLength !== 32) {
      digestStatus.textContent = `SHA-256 unavailable: ${String(hashed?.error ?? 'invalid result')}`;
      return;
    }
    // Composition boundary: the digest module yields bytes; the N3 SDK owns hex.
    const rendered = engine.encode(hashed.bytes);
    if (!rendered?.ok) {
      digestStatus.textContent = `Hex SDK refused digest: ${String(rendered?.error ?? 'unknown')}`;
      return;
    }
    const hex = decoder.decode(rendered.bytes);
    if (!/^[0-9a-f]{64}$/.test(hex)) throw new Error('digest encoding mismatch');
    digestOutput.value = hex;
    digestStatus.textContent = 'SHA-256 complete · independently owned digest, N3 Hex formatting';
  } catch (error) {
    if (stillCurrent()) digestStatus.textContent = `Digest unavailable: ${String(error?.message ?? 'host failure')}`;
  } finally {
    if (stillCurrent()) {
      digestBusy = false;
      digestButton.disabled = false;
    }
  }
}

function online() {$('network').textContent = navigator.onLine ? 'Online' : 'Offline';}
function pendingUpdate() {$('apply-update').hidden = !registration?.waiting;}
async function setupServiceWorker() {
  if (!('serviceWorker' in navigator)) {$('offline-status').textContent = 'This browser does not support service workers';return;}
  try {
    registration = await navigator.serviceWorker.register('./sw.js', {scope:'./', updateViaCache:'none'});
    const ready = await navigator.serviceWorker.ready;
    $('offline-status').textContent = ready.active ? 'Offline assets cached for future visits' : 'Offline support pending';
    registration.addEventListener('updatefound', () => {
      const worker=registration.installing;
      worker?.addEventListener('statechange',pendingUpdate);
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
    pendingUpdate();
  } catch (e) {$('offline-status').textContent = `Offline setup failed: ${String(e?.message ?? 'unknown')}`;}
}
input.addEventListener('input', () => {inputByteCount();invalidateDigest();});
digestButton.addEventListener('click', computeDigest);
encodeButton.addEventListener('click', encode);
loadButton.addEventListener('click', load);
closeButton.addEventListener('click', close);
$('clear').addEventListener('click', () => {input.value='';inputByteCount();invalidateDigest();clearOutput();input.focus();});
copyButton.addEventListener('click', async () => {
  try {await navigator.clipboard.writeText(output.value);$('details').textContent='Hex output copied.';}
  catch {$('details').textContent='Clipboard access unavailable in this context.';}
});
window.addEventListener('online', online);window.addEventListener('offline', online);
window.addEventListener('beforeinstallprompt', e => {e.preventDefault();installEvent=e;$('install').hidden=false;});
$('install').addEventListener('click', async () => {if (!installEvent)return;const e=installEvent;installEvent=null;$('install').hidden=true;await e.prompt();});
$('check-update').addEventListener('click', async () => {
  if (!registration) return;
  try {await registration.update();pendingUpdate();$('details').textContent='Update check completed.';}
  catch {$('details').textContent='Unable to check for updates while offline.';}
});
$('apply-update').addEventListener('click', () => {
  if(!registration?.waiting)return;
  close();registration.waiting.postMessage({type:'ACTIVATE_UPDATE'});
});
window.addEventListener('pagehide', close);
inputByteCount();online();state('closed','Not loaded','Select Load SDK to initialize the Wasm engine.');
void setupServiceWorker();
