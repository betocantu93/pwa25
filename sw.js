importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    new RegExp('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/(.*)'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    /.*\.(png|jpg|jpeg|gif)/,
    workbox.strategies.staleWhileRevalidate()
);
