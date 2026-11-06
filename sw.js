/* Conectwork · service worker: guarda o app para abrir sem internet. Ao publicar uma versão nova, troque VERSAO. */
const VERSAO='conectwork-v12';
const BASE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','icons/favicon-32.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSAO).then(c=>c.addAll(BASE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSAO).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  if(u.origin===location.origin){ /* rede primeiro: versão nova aparece logo; sem internet, usa a guardada */
    e.respondWith(fetch(r).then(res=>{ const c=res.clone(); caches.open(VERSAO).then(x=>x.put(r,c)); return res; }).catch(()=>caches.match(r).then(m=>m||caches.match('index.html')))); return; }
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){ e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{ const c=res.clone(); caches.open(VERSAO).then(x=>x.put(r,c)); return res; }))); }
});
