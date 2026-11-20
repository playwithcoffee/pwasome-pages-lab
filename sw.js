// Version-paired N3 SDK and optional N5 digest form one atomic offline asset set.
// The site assembler replaces the N4 version token and (only for a selected build)
// the exact N5 optional list marker. Unselected builds still cache 13 assets.
const CACHE = 'pwasome-hex-lab-e0298fd450bbe62a04f050a9-pages-r1';
const FILES = [
  './','./index.html','./app.css','./app.mjs','./manifest.webmanifest',
  './icon-192.png','./icon-512.png','./build-info.json',
  './sdk/descriptor.json','./sdk/hex.mjs','./sdk/hex.wasm',
  './sdk/pwasome-hex.mjs','./sdk/manifest.json'
];
const EXTRA = ['./modules/digest/sha256.mjs']; /*__N5_OPTIONAL__*/
const ROOT = new URL('./', self.registration.scope);
const INDEX = new URL('./index.html', self.registration.scope);
const URLS = new Set([...FILES, ...EXTRA].map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    try {
      for (const url of URLS) {
        const response = await fetch(new Request(url, {cache:'reload', redirect:'error'}));
        if (!response.ok || response.type === 'opaque' || response.redirected) throw new Error('offline asset unavailable');
        await cache.put(url, response);
      }
    } catch (e) {await caches.delete(CACHE);throw e;}
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('pwasome-hex-lab-') && name !== CACHE).map(name => caches.delete(name)));
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  let key = event.request.url;
  // Normalize query strings ONLY for app-document navigations.
  // Preserve exact URLs for the SDK and independently selected digest module.
  if (!URLS.has(key) && event.request.mode === 'navigate') {
    const target = new URL(key);
    if (target.origin === ROOT.origin) {
      if (target.pathname === ROOT.pathname) key = ROOT.href;
      else if (target.pathname === INDEX.pathname) key = INDEX.href;
    }
  }
  if (!URLS.has(key)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(key, {ignoreSearch:false});
    return cached ?? Response.error();
  })());
});
self.addEventListener('message', event => {if(event.data?.type === 'ACTIVATE_UPDATE')self.skipWaiting();});
