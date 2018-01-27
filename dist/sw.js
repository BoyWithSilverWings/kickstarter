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
    "url": "/2e43d67840765639817c.bundle.js",
    "revision": "7632f3c1c845d62d19236a7a42f93dda"
  },
  {
    "url": "/index.html",
    "revision": "86d2a14970600f6f951025dcdeca8986"
  },
  {
    "url": "/styles.css",
    "revision": "017445449f290665e0fba765786a9c51"
  },
  {
    "url": "/vendor.js",
    "revision": "000975dab878afdd33b4eee879ece7be"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
