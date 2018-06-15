importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/main.js",
    "revision": "f36516af73a4e39685ffa31d01815621"
  },
  {
    "url": "assets/manifest.json",
    "revision": "3888a747f670e0351c2d464b77c3c8b9"
  },
  {
    "url": "assets/style.css",
    "revision": "2167437bd190073b0b9c3e0d323d9990"
  },
  {
    "url": "index.html",
    "revision": "975c0144f40a9236c9cabce879e42c2b"
  }
]);
workbox.routing.registerRoute(
    new RegExp('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/(.*)'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    /.*\.(png|jpg|jpeg|gif)/,
    workbox.strategies.staleWhileRevalidate()
);


//
// wb.routing.registerRoute(
//     // Cache image files
//     /.*\.(?:png|jpg|jpeg|svg|gif)/,
//     // Use the cache if it's available
//     workbox.strategies.cacheFirst({
//         // Use a custom cache name
//         cacheName: 'image-cache',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 // Cache only 20 images
//                 maxEntries: 20,
//                 // Cache for a maximum of a week
//                 maxAgeSeconds: 7 * 24 * 60 * 60,
//             })
//         ],
//     })
// );

//
// self.addEventListener('install', async e => {
//     self.skipWaiting();
//     const cache = await caches.open('static-assets');
//     cache.addAll(assetsToCache);
// });
//
//
// self.addEventListener('fetch', event => {
//     const req = event.request;
//
//     const url = new URL(req.url);
//
//     if (url.origin === location.origin) {
//         event.respondWith(cacheFirst(req));
//     } else {
//         event.respondWith(networkFirst(req));
//     }
//
// });
//
//
// async function networkFirst(req) {
//
//     const cache = await caches.open('world-cup-dynamic');
//
//     try {
//         const res = await fetch(req);
//
//         cache.put(req, res.clone());
//
//         return res;
//
//     } catch (e) {
//         return await cache.match(req);
//     }
//
// }
//
// async function cacheFirst(req) {
//
//     const cachedResponse = await caches.match(req);
//
//     return cachedResponse || fetch(req);
//
// }
//
//
//
//

