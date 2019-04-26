importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/43db439ed1f42a17a95f.js",
    "revision": "fea27aabdf61738fd2bf1485c7a32780"
  },
  {
    "url": "/_nuxt/4c15d463a9cd1997407d.js",
    "revision": "9b92e552dec445348b5c385f7d9f6ce5"
  },
  {
    "url": "/_nuxt/63ab9fabd95a3107f87e.js",
    "revision": "fbb5344827131f9ad4dc4e002f1369ab"
  },
  {
    "url": "/_nuxt/654f313c117c0b2606e4.js",
    "revision": "acb917000a25a79d7494ba2ddc2391fd"
  },
  {
    "url": "/_nuxt/6a4cec24f6539f441030.js",
    "revision": "c1d2171f73f3308f02be70e36db227d3"
  },
  {
    "url": "/_nuxt/aadff5a2d68db8b1e1c9.js",
    "revision": "77e4dd9311edb260d4fb1949e2f63274"
  },
  {
    "url": "/_nuxt/af8f9ecd0cf5d13172cb.js",
    "revision": "45a16a00c9aa1bf2f0e65e3b31d1173b"
  },
  {
    "url": "/_nuxt/c45ded97d091868ac644.js",
    "revision": "7537f38b78f8626e0b68650f2918ebf9"
  },
  {
    "url": "/_nuxt/d797904b34b0e4b483e0.js",
    "revision": "1f2e83ad0e9e897ce425583349189b8f"
  },
  {
    "url": "/_nuxt/d86012d36d7de202ece0.js",
    "revision": "1aef7d3b2b478a7dac524888e0b7f9bf"
  }
], {
  "cacheId": "joji",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
