// Modo sin conexión básico: la página se pide a la red primero; fotos y librerías salen de la caché.
const C='hc-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','icon.svg','img/r/hero-960.webp'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),same=u.origin===location.origin;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{caches.open(C).then(c=>c.put(r,res.clone()));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));return}
  if(same&&/\.(webp|jpe?g|png|svg)$/.test(u.pathname)||u.host==='cdnjs.cloudflare.com'||u.host==='fonts.gstatic.com'){
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cl=res.clone();caches.open(C).then(c=>c.put(r,cl))}return res})))}
});
