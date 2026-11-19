// N5 optional SHA-256 capability. Pure browser host JavaScript, no PWAsome Core or Hex dependency.
// Copy-before-await is intentional. No background worker, runtime registry, or implicit retry.
const MAX = 65536;
const ta = Object.getPrototypeOf(Uint8Array.prototype);
const getLength = Object.getOwnPropertyDescriptor(ta, 'byteLength').get;
const getBuffer = Object.getOwnPropertyDescriptor(ta, 'buffer').get;
const arrayBufferLength = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get;
const resizable = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'resizable')?.get;
const slice = Uint8Array.prototype.slice;
const apply = Reflect.apply;

/**
 * sha256(Uint8Array) -> Promise<{ok:true, bytes: Uint8Array}|{ok:false, error: string}>
 * A valid input is an attached, fixed nonshared Uint8Array view of <= 65,536 bytes.
 * Output is a fresh JavaScript-owned 32-byte Uint8Array. Host errors never retain input.
 * This operation cannot cancel an already-started WebCrypto digest; the consumer must
 * discard any stale result when its own operation/engine generation has changed.
 */
export async function sha256(input) {
  let snapshot;
  try {
    if (Object.prototype.toString.call(input) !== '[object Uint8Array]')
      return {ok:false,error:'invalid-description'};
    const n = apply(getLength,input,[]);
    const b = apply(getBuffer,input,[]);
    apply(arrayBufferLength,b,[]); // excludes SharedArrayBuffer
    if (resizable && apply(resizable,b,[])) return {ok:false,error:'invalid-description'};
    if (n > MAX) return {ok:false,error:'capacity'};
    snapshot = apply(slice,input,[]); // owned copy, before first await
    if (snapshot.byteLength !== n) return {ok:false,error:'invalid-description'};
  } catch {
    return {ok:false,error:'invalid-description'};
  }
  const digest = globalThis.crypto?.subtle?.digest;
  if (typeof digest !== 'function') return {ok:false,error:'unsupported-environment'};
  try {
    const result = await globalThis.crypto.subtle.digest('SHA-256',snapshot);
    if (!(result instanceof ArrayBuffer) || result.byteLength !== 32)
      return {ok:false,error:'host-failure'};
    return {ok:true,bytes:new Uint8Array(result)};
  } catch {
    return {ok:false,error:'host-failure'};
  }
}
