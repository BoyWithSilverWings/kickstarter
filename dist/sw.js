importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/f7b82485cb5c72673e2d.bundle.js",
    "revision": "c9710b112e93b47babc6ae60ec91d7fd"
  },
  {
    "url": "/index.html",
    "revision": "6a5cbd68991f75aeab100f732a6e04a3"
  },
  {
    "url": "/styles.css",
    "revision": "a5f9944772b10a01d799454f2bc34a2d"
  },
  {
    "url": "/vendor.js",
    "revision": "b43c78e7474899eed88edc91d2038e40"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
