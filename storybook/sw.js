/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "focus-visible-7f07070e.js",
    "revision": "6a4e56cde425bc2710e4cc205a97f467"
  },
  {
    "url": "iframe.html",
    "revision": "d200a4034336b28586dda8adf33c382c"
  },
  {
    "url": "index-a0efc471.js",
    "revision": "8f1e8be5099390ad78233e018858c6e5"
  },
  {
    "url": "index-f1b2895c.js",
    "revision": "1a6f0b97f09dead50efc25dc7f6e8aec"
  },
  {
    "url": "index.html",
    "revision": "a37421eae8600cb92817a3ca0ea436f5"
  },
  {
    "url": "inline-entry.0-666a7f65.js",
    "revision": "4617325fba923a1b93ba842421aafd67"
  },
  {
    "url": "legacy/focus-visible-277ab479.js",
    "revision": "be013b6a871ce1ff86262164fc04fd90"
  },
  {
    "url": "legacy/index-4e09cdcc.js",
    "revision": "008b3717d7ce0a8145394ae66e32f0ee"
  },
  {
    "url": "legacy/index-e3e1082e.js",
    "revision": "520b7fef60f1218651e022579522fa2a"
  },
  {
    "url": "legacy/inline-entry.0-229cd823.js",
    "revision": "c56f2b109eeccae54b64e614bc3938aa"
  },
  {
    "url": "legacy/lit-html-0543cf9e.js",
    "revision": "a47dd9a6ffac9c38b3794a0cbb1c7f03"
  },
  {
    "url": "legacy/manager-048dc424.js",
    "revision": "4565329816e5847f7968f2913f7e8619"
  },
  {
    "url": "legacy/storybook-492ee7c6.js",
    "revision": "847ba6fc86f81db3a5de555a4d05ceda"
  },
  {
    "url": "legacy/storybook-b9a36b2f.js",
    "revision": "e68b9ff4841dbe0806eb7ee81fe92c6b"
  },
  {
    "url": "lit-html-4f143448.js",
    "revision": "f4375a8887295fcf0d298b6109f7f906"
  },
  {
    "url": "manager-129abf2a.js",
    "revision": "d5dc4781fa2915dbccf0846b5d229629"
  },
  {
    "url": "polyfills/core-js.577a5602a7262d6256830802d4aaab43.js",
    "revision": "ccf205728fe514f8276191669b5ea48d"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/fetch.e0fa1d30ce1c9b23c0898a2e34c3fe3b.js",
    "revision": "16a2d81480a8b178ad740f425229fe34"
  },
  {
    "url": "polyfills/regenerator-runtime.323cb013cc2a9c88ff67ee256cbf5942.js",
    "revision": "076165f8bec91d0f16c0b51615ef95a4"
  },
  {
    "url": "polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js",
    "revision": "683aabfb9b006607885b83e45e9a1768"
  },
  {
    "url": "polyfills/webcomponents.d406f4685fdfb412c61f23b3ae18f2dc.js",
    "revision": "b1db7cb76380495a55ff4f65a9648f0e"
  },
  {
    "url": "storybook-2b8e436c.js",
    "revision": "ea15128451c2e5c42e5a462c1bfbd62d"
  },
  {
    "url": "storybook-35ea0fcf.js",
    "revision": "2087ff1313fea3c39ce9d1a0bd6d59b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));