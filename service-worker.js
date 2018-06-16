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
