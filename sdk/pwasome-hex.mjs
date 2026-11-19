// PWAS-0064 / revision 1. Generated as a single public ES module.
// The generator substitutes exactly one JSON expression. No external runtime imports.
const EXPECTED = {"descriptor":{"descriptor_revision":1,"assembly_id":"pwasome.hex","transport_revision":1,"capabilities":[{"id":"encoding.hex","contract_revision":1,"operations":["H01"]}],"execution":{"location":"browser-main","mode":"serialized-sync","public_results":"copied"},"admission":{"max_input_bytes":65536,"max_output_bytes":131072},"resources":{"staging_bytes":196608,"grant_metadata_bytes":64,"control_bytes":256,"frame_bytes":64,"configuration_identity_bytes":32,"stack_bytes":65536,"initial_linear_memory_bytes":1048576},"build":{"configuration":"Size","target":"wasm32-unknown-emscripten","cpp_standard":23,"exceptions":false,"rtti":false,"memory_growth":false,"shared_memory":false,"simd":false,"compile_flags":["-std=c++23","-fno-exceptions","-fno-rtti","-Oz","-x","c++"],"link_flags":["-Oz","-fno-exceptions","-fno-rtti","-sDEFAULT_TO_CXX=1","--no-entry","-sMODULARIZE=1","-sEXPORT_ES6=1","-sENVIRONMENT=web","-sINITIAL_MEMORY=1048576","-sALLOW_MEMORY_GROWTH=0","-sSTACK_SIZE=65536","-sASSERTIONS=0","-sSTACK_OVERFLOW_CHECK=2","-sFILESYSTEM=0","-sMALLOC=none","-sEXPORTED_RUNTIME_METHODS=HEAPU8","-sINCOMING_MODULE_JS_API=wasmBinary,onAbort","-sEXPORTED_FUNCTIONS=[\"_pwasome_hex_request_offset\",\"_pwasome_hex_response_offset\",\"_pwasome_hex_query\",\"_pwasome_hex_begin\",\"_pwasome_hex_prepare\",\"_pwasome_hex_finish\",\"_pwasome_hex_abort\",\"_pwasome_hex_encode\"]"]},"host_requirements":[],"unsupported":["async-engine-io","workers","shared-memory","persistent-domain-state","live-upgrade"]},"manifest":{"manifest_revision":1,"source":{"object_format":"sha1","commit":"1c34948b82d0eb748a263bafe282c74e04eddff6","tree":"bb4762076f865f8ca4bf683f29b41504d332fd83"},"profile":{"id":"wasm-hex-browser-v1","sha256":"b7c37e7fd66827ea4583faf765351082db493a0e9c98943746e93f9f6fa7c0f3"},"configuration":"Size","configuration_sha256":"b07ebf6bb81aa105af82bfda70acadbdcd7697404ff3058f98d37cc0e4479f89","members":[{"path":"descriptor.json","bytes":1933,"sha256":"b07ebf6bb81aa105af82bfda70acadbdcd7697404ff3058f98d37cc0e4479f89"},{"path":"hex.mjs","bytes":5021,"sha256":"af5fbaf8dfae1bccb76680ed6a478d97e1743be4d84b89d543865e80f1510d5b"},{"path":"hex.wasm","bytes":1669,"sha256":"6704a4989ecd187da5b1b319796c668476c88d84e3caf7e0e475ce84d1b5adb4"}],"sdk":{"manager_commit":"d7b4130688bfa348392b921ab04015aa15c4f154","release":"6.0.13","release_build":"eb132757325583b787fe9414b09afea9442b72ad","emcc_commit":"e13ee988ce3d87a738dd8f3661d02223308c412a","llvm_commit":"83ee07799c341b60965f07892f7bb3d175da05be"},"tools":[{"role":"sdk-python","version":"Python 3.13.3","sha256":"d87063e5597f257004c731b66c59c56c91038861c6877b1a3dca6b8c4e919125"},{"role":"emcc-driver","version":"emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 6.0.13 (e13ee988ce3d87a738dd8f3661d02223308c412a)","sha256":"5ccd3b66c9433389b0338706182197340bfdf241777cc8985821e7d150818e46"},{"role":"clang","version":"clang version 24.0.0git (https://github.com/llvm/llvm-project 83ee07799c341b60965f07892f7bb3d175da05be)","sha256":"e1fce785201ff8c33f62cbdf4c58f2014ab6a213ae8c06a9d15d2bf93d4abab1"},{"role":"wasm-ld","version":"LLD 24.0.0 (llvm-project 83ee07799c341b60965f07892f7bb3d175da05be)","sha256":"3bd857ebf70a67a7fadf47cd66e9d09cc4b35e05d45e16df3361ac60c55be4d6"},{"role":"wasm-opt","version":"wasm-opt version 133 (version_133-96-ga631c1445)","sha256":"3218704c7c7f21c2beb196ece44257c694e87363916ab32e5eaa094de7bb5cb5"}],"effective":{"target":"wasm32-unknown-emscripten","pointer_bytes":4,"cpp_standard":23,"exceptions":false,"rtti":false,"memory_growth":false,"shared_memory":false,"simd":false,"initial_memory_bytes":1048576,"stack_bytes":65536,"compile_flags":["-std=c++23","-fno-exceptions","-fno-rtti","-Oz","-x","c++"],"link_flags":["-Oz","-fno-exceptions","-fno-rtti","-sDEFAULT_TO_CXX=1","--no-entry","-sMODULARIZE=1","-sEXPORT_ES6=1","-sENVIRONMENT=web","-sINITIAL_MEMORY=1048576","-sALLOW_MEMORY_GROWTH=0","-sSTACK_SIZE=65536","-sASSERTIONS=0","-sSTACK_OVERFLOW_CHECK=2","-sFILESYSTEM=0","-sMALLOC=none","-sEXPORTED_RUNTIME_METHODS=HEAPU8","-sINCOMING_MODULE_JS_API=wasmBinary,onAbort","-sEXPORTED_FUNCTIONS=[\"_pwasome_hex_request_offset\",\"_pwasome_hex_response_offset\",\"_pwasome_hex_query\",\"_pwasome_hex_begin\",\"_pwasome_hex_prepare\",\"_pwasome_hex_finish\",\"_pwasome_hex_abort\",\"_pwasome_hex_encode\"]"]}},"layout":{"request":197824,"response":197952,"staging":1152}};
const CAP = Object.freeze({descriptor:16384,manifest:65536,wasm:8388608,loader:1048576,facade:262144});
const LOAD_MS = 60000;
const PREFIX = '_pwasome_hex_';
const EXPORTS = ['request_offset','response_offset','query','begin','prepare','encode','finish','abort'];
const error = (code, cause) => Object.assign(new Error(code), {code, ...(cause===undefined?{}:{cause})});
const incompatible = () => error('incompatible');
const insist = value => { if(!value) throw incompatible(); };
const fatal = cause => error('unusable',cause);
const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
const fail = error => ({ok:false,error});
const hex = a => Array.from(a, b=>b.toString(16).padStart(2,'0')).join('');
const hashSyntax = x => typeof x==='string' && /^[a-f0-9]{64}$/.test(x);
const integer = x => Number.isSafeInteger(x) && x>=0;
const disjoint=(a,n,b,m)=>a+n<=b||b+m<=a;
const inside=(a,n)=>integer(a)&&integer(n)&&a>0&&a+n<=1048576;
const round16=n=>Math.ceil(n/16)*16;

// Bounded grammar-specific JSON reader. Decode object keys before duplicate
// detection (including escaped aliases); reject BOM, trailing data and excessive
// nesting before ordinary schema checks. JSON.parse is used only for string tokens.
function strictJSON(text) {
  let i=0;
  const ws=()=>{while(i<text.length && ' \t\r\n'.includes(text[i]))++i;};
  const require=c=>{ws();insist(text[i]===c);++i;};
  function str(){
    ws();insist(text[i]==='"');const start=i++;
    while(i<text.length){
      const c=text[i++];
      if(c==='"'){try{return JSON.parse(text.slice(start,i));}catch{throw incompatible();}}
      insist(c.charCodeAt(0)>=32);
      if(c==='\\'){insist(i<text.length);const e=text[i++];insist('"\\/bfnrtu'.includes(e));if(e==='u'){insist(/^[0-9a-fA-F]{4}$/.test(text.slice(i,i+4)));i+=4;}}
    }
    throw incompatible();
  }
  function value(depth){
    insist(depth<=16);ws();const c=text[i];
    if(c==='"')return str();
    if(c==='{'){
      ++i;const o=Object.create(null);ws();if(text[i]==='}'){++i;return o;}
      for(;;){const k=str();insist(!own(o,k));require(':');o[k]=value(depth+1);ws();if(text[i]==='}'){++i;return o;}require(',');}
    }
    if(c==='['){
      ++i;const a=[];ws();if(text[i]===']'){++i;return a;}
      for(;;){a.push(value(depth+1));ws();if(text[i]===']'){++i;return a;}require(',');}
    }
    for(const [token,v] of [['true',true],['false',false],['null',null]])if(text.startsWith(token,i)){i+=token.length;return v;}
    const m=/-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/y;m.lastIndex=i;const hit=m.exec(text);insist(hit!==null);i=m.lastIndex;const n=Number(hit[0]);insist(Number.isFinite(n));return n;
  }
  const v=value(0);ws();insist(i===text.length);return v;
}
function decodeJSON(bytes){
  try {return strictJSON(new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes));}
  catch(e){throw incompatible();}
}
function exact(actual, expected){
  if(expected===null || typeof expected!=='object')return Object.is(actual,expected);
  if(actual===null||typeof actual!=='object'||Array.isArray(actual)!==Array.isArray(expected))return false;
  const keys=Object.keys(expected);return Object.keys(actual).length===keys.length&&keys.every(k=>own(actual,k)&&exact(actual[k],expected[k]));
}
function keys(o, names){return o!==null&&typeof o==='object'&&!Array.isArray(o)&&Object.keys(o).length===names.length&&names.every(k=>own(o,k));}
function descriptorCheck(d){insist(exact(d,EXPECTED.descriptor));}
function manifestCheck(m){
  const e=EXPECTED.manifest;
  insist(keys(m,['manifest_revision','source','profile','configuration','configuration_sha256','members','sdk','tools','effective']));
  for(const k of ['manifest_revision','source','profile','configuration','configuration_sha256','sdk','tools','effective'])insist(exact(m[k],e[k]));
  insist(Array.isArray(m.members)&&m.members.length===4);
  const names=['descriptor.json','hex.mjs','hex.wasm','pwasome-hex.mjs'];
  const caps=[CAP.descriptor,CAP.loader,CAP.wasm,CAP.facade];
  for(let i=0;i<4;i++){
    const x=m.members[i];insist(keys(x,['path','bytes','sha256'])&&x.path===names[i]&&integer(x.bytes)&&x.bytes>0&&x.bytes<=caps[i]&&hashSyntax(x.sha256));
    if(i<3)insist(exact(x,e.members[i]));
  }
}

// Captured internal-slot accessors; do not consult instance properties, species,
// coercion or iterators. Missing required intrinsics reject the load attempt.
const U8=globalThis.Uint8Array, AB=globalThis.ArrayBuffer;
const getter=(o,k)=>o&&Object.getOwnPropertyDescriptor(o,k)?.get;
const ta=U8&&Object.getPrototypeOf(U8.prototype);
const getTag=getter(ta,Symbol.toStringTag), getBuffer=getter(ta,'buffer'), getOffset=getter(ta,'byteOffset'), getLength=getter(ta,'byteLength');
const getABLength=getter(AB?.prototype,'byteLength'), getResizable=getter(AB?.prototype,'resizable'), getDetached=getter(AB?.prototype,'detached');
const apply=Reflect.apply, set=U8?.prototype.set, fill=U8?.prototype.fill;
const copy=(to,from,at=0)=>apply(set,to,[from,at]);
function requireIntrinsics(){
  if(![U8,AB,getTag,getBuffer,getOffset,getLength,getABLength,getResizable,getDetached,set,fill,globalThis.fetch,globalThis.AbortController,globalThis.TextDecoder,globalThis.DataView,globalThis.crypto?.subtle?.digest,globalThis.performance?.now,globalThis.setTimeout,globalThis.clearTimeout].every(x=>typeof x==='function'))throw error('unsupported-environment');
}
function admit(value,privateBuffer){
  let b,at,n;
  try{
    if(apply(getTag,value,[])!=='Uint8Array')return fail('invalid-description');
    b=apply(getBuffer,value,[]);const extent=apply(getABLength,b,[]);
    if(b===privateBuffer||apply(getResizable,b,[])||apply(getDetached,b,[]))return fail('invalid-description');
    at=apply(getOffset,value,[]);n=apply(getLength,value,[]);
    if(!integer(at)||!integer(n)||at+n>extent)return fail('invalid-description');
    if(n>65536)return fail('capacity');
  }catch{return fail('invalid-description');}
  // Allocation failure after valid intrinsic admission is a host failure.
  return {n,view:new U8(b,at,n)};
}

// Sequential, bounded decoded-body accounting. No Content-Length authority,
// unbounded convenience read, chunk list, clone or tee.
async function readBody(name,cap,expected,attempt){
  attempt.check();
  let response;
  try {response=await fetch(new URL(name,import.meta.url),{redirect:'error',signal:attempt.signal});}
  catch(e){attempt.check();throw error('host-failure',e);}
  attempt.check();
  if(!response.ok||!response.body)throw error('host-failure');
  const max=expected??cap;insist(integer(max)&&max>0&&max<=cap);
  const reader=response.body.getReader();let used=0,done=false;
  const cancel=()=>{try{Promise.resolve(reader.cancel()).catch(()=>{});}catch{}};
  attempt.reader=cancel;
  try{
    const dest=new U8(max);
    for(;;){
      attempt.check();const part=await reader.read();attempt.check();
      if(part.done){done=true;break;}
      const bytes=part.value;insist(bytes instanceof U8&&bytes.byteLength<=max-used);
      copy(dest,bytes,used);used+=bytes.byteLength;
    }
    insist(expected===undefined||used===expected);
    return new U8(dest.buffer,0,used);
  }catch(e){cancel();throw e;}
  finally{attempt.reader=null;if(!done)cancel();try{reader.releaseLock();}catch{}}
}
async function digest(bytes,attempt){
  attempt.check();const result=hex(new U8(await crypto.subtle.digest('SHA-256',bytes)));attempt.check();return result;
}

// One private instance; private calls validate all scalar and wire outputs.
// All errors from private exports or invalid engine data are fatal, never replayed.
function createFacade(initialModule, wasAborted){
  let mod=initialModule, state='ready', busy=false, generation=1, backing;
  const layout=EXPECTED.layout;
  const guard=x=>{if(!x)throw fatal();};
  function heap(){
    try{
      guard(mod&&!wasAborted());const h=mod.HEAPU8;
      guard(apply(getTag,h,[])==='Uint8Array'&&apply(getOffset,h,[])===0&&apply(getLength,h,[])===1048576);
      const b=apply(getBuffer,h,[]);guard(apply(getABLength,b,[])===1048576&&!apply(getResizable,b,[])&&!apply(getDetached,b,[]));
      if(backing===undefined)backing=b;else guard(backing===b);return h;
    }catch(e){throw fatal(e);}
  }
  function call(name){try{heap();const r=mod[PREFIX+name]();guard(Number.isInteger(r)&&r>=-2147483648&&r<=4294967295);heap();return r>>>0;}catch(e){throw fatal(e);}}
  function drop(){mod=null;initialModule=null;backing=undefined;}
  let req,res;
  const dv=base=>new DataView(heap().buffer,base,128);
  const get=(base,at)=>dv(base).getUint32(at,true);
  const put=(base,at,x)=>dv(base).setUint32(at,x,true);
  const tail=(base,n)=>{const h=heap();for(let j=n;j<128;j++)if(h[base+j]!==0)return false;return true;};
  // Bootstrap failure is incompatibility; the instance is never published.
  try{
    const names=Object.keys(mod).filter(k=>k.startsWith(PREFIX)).sort();
    guard(exact(names,EXPORTS.map(k=>PREFIX+k).sort())&&names.every(k=>typeof mod[k]==='function'));
    req=call('request_offset');res=call('response_offset');
    guard(inside(req,128)&&inside(res,128)&&disjoint(req,128,res,128)&&req===layout.request&&res===layout.response);
    guard(inside(layout.staging,196608)&&layout.staging%16===0&&disjoint(req,128,layout.staging,196608)&&disjoint(res,128,layout.staging,196608));
    guard(call('query')===0&&get(res,0)===1&&get(res,4)===64&&get(res,8)===1&&get(res,12)===0&&get(res,48)===req&&get(res,52)===128&&get(res,56)===res&&get(res,60)===128&&tail(res,64));
    guard(hex(new U8(heap().buffer,res+16,32))===EXPECTED.manifest.configuration_sha256);
  }catch(e){drop();throw incompatible();}
  function request(op,payload){apply(fill,heap(),[0,req,req+128]);[op,1,16+payload.length*4,0,...payload].forEach((x,i)=>put(req,i*4,x));}
  function response(status,op,size){guard(status===0&&get(res,0)===status&&get(res,4)===op&&get(res,8)===size&&get(res,12)===0&&tail(res,size));}
  function grant(slot,n,base){const at=16+slot*16;guard(get(res,at)===slot&&get(res,at+4)===generation&&get(res,at+8)===(n?base:0)&&get(res,at+12)===n);return n?base:0;}
  function advance(){if(generation===0xffffffff)state='retired';else ++generation;}
  function operate(value){
    let began=false,grants=false;
    try{
      if(state==='unusable')throw fatal();
      if(state==='closed')return fail('not-ready');
      if(state==='retired')return fail('sequence-exhausted');
      const a=admit(value,heap().buffer);if(a.ok===false)return a;
      const n=a.n, out=new U8(2*n);
      guard(call('begin')===0);began=true;
      guard(tail(req,0)&&tail(res,0));
      request(1,[n,2*n]);response(call('prepare'),1,48);grants=true;
      const i=grant(0,n,layout.staging),o=grant(1,2*n,layout.staging+round16(n));
      guard(round16(n)+round16(2*n)<=196608&&(!n||disjoint(i,n,o,2*n)));
      if(n)copy(heap(),a.view,i);
      request(16,[0,generation,n,1,generation,2*n]);response(call('encode'),16,20);guard(get(res,16)===2*n);
      if(n)copy(out,new U8(heap().buffer,o,2*n));
      const result={ok:true,bytes:out};
      guard(call('finish')===0);began=false;advance();return result;
    }catch(e){
      if(e?.code==='unusable'){state='unusable';drop();throw e;}
      if(began){try{guard(call('abort')===0);if(grants)advance();}catch(cause){state='unusable';drop();throw fatal(cause);}}
      throw error('host-failure',e);
    }
  }
  return Object.freeze({
    encode(value){if(busy)return fail('boundary-state');busy=true;try{return operate(value);}finally{busy=false;}},
    close(){if(busy)throw error('boundary-state');busy=true;try{if(state==='closed')return;drop();if(state!=='unusable')state='closed';}finally{busy=false;}}
  });
}

// Terminal attempt state; a late import/initializer cannot publish. The timer
// requests abandonment, not a claim of preemption or physical reclamation.
function loadAttempt(work,start=performance.now()){
  const controller=new AbortController();
  let terminal=false,timer;
  return new Promise((resolve,reject)=>{
    const attempt={signal:controller.signal,reader:null,check(){if(terminal||performance.now()-start>=LOAD_MS){abandon();throw error('load-timeout');}}};
    function finish(fn,value){if(terminal)return;terminal=true;clearTimeout(timer);fn(value);}
    function abandon(){if(terminal)return;finish(reject,error('load-timeout'));try{controller.abort();}catch{}try{attempt.reader?.();}catch{}}
    timer=setTimeout(abandon,Math.max(0,LOAD_MS-(performance.now()-start)));
    Promise.resolve().then(()=>{attempt.check();return work(attempt);}).then(facade=>{
      if(terminal){try{facade?.close();}catch{}return;}
      try{attempt.check();finish(resolve,facade);}catch(e){try{facade?.close();}catch{}}
    },e=>{
      if(terminal)return;
      if(performance.now()-start>=LOAD_MS){abandon();return;}
      const reason=['incompatible','unsupported-environment','host-failure','load-timeout'].includes(e?.code)?e:error('host-failure',e);
      finish(reject,reason);try{controller.abort();}catch{}try{attempt.reader?.();}catch{}
    });
  });
}
export async function createHexEngine(){
  const start=globalThis.performance?.now?.();
  requireIntrinsics();
  return loadAttempt(async attempt=>{
    let metadata=await readBody('./manifest.json',CAP.manifest,undefined,attempt);attempt.check();manifestCheck(decodeJSON(metadata));metadata=null;
    const d=EXPECTED.manifest.members[0];metadata=await readBody('./descriptor.json',CAP.descriptor,d.bytes,attempt);
    insist(await digest(metadata,attempt)===d.sha256);descriptorCheck(decodeJSON(metadata));metadata=null;
    const w=EXPECTED.manifest.members[2];let wasm=await readBody('./hex.wasm',CAP.wasm,w.bytes,attempt);
    insist(await digest(wasm,attempt)===w.sha256);attempt.check();
    const {default:factory}=await import('./hex.mjs');attempt.check();
    let aborted=false;let module=await factory({wasmBinary:wasm,onAbort:()=>{aborted=true;}});wasm=null;
    attempt.check();if(aborted){module=null;throw error('host-failure');}
    const facade=createFacade(module,()=>aborted);module=null;
    try{attempt.check();return facade;}catch(e){facade.close();throw e;}
  },start);
}
