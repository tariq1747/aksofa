'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "cf8d429fe0563b8050dc61f229f3dc63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ddcb3aa56bce1af9ac9308e6c4400dda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5464f81478481c282f248f8feba9bfe3",
".git/logs/refs/heads/main": "68df56b3fa7a3a27b7273afc8c009ad3",
".git/logs/refs/remotes/origin/main": "cb0080257cf517bc6d631ba02313b219",
".git/objects/03/dacf5f439e4c882af37f7db10083ea322ebd30": "64effa220f63afe1409b88283892f0d2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/e9243ffcb13f32bf8f85d8175db93f6ed80f98": "daf35f52bf3c26fbd9a11aae0e736db6",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/6097ddc386fac2ab2a4de13233ceb752c2d595": "b40fce77b12eeac45011aabd680a232a",
".git/objects/38/5586404914470048bd8e586f438617fc60c58d": "bb9e4830568761fb5787fe0af5d2a40d",
".git/objects/3f/ba08673e1c4a5aa0d122a26df86af33b52b79c": "77ff75f6492016ddacdfc9b0b33f9094",
".git/objects/40/c0cd5cc008002d39b053966ed23f199efd9fde": "fb91b8efed5f89022d5ab37b59faeaad",
".git/objects/45/51256bca0e7ec436ce4f2411046997f5ffb282": "43cb8288842feb88f7626ab460b6d70c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/4eb28b1ac3bab73d8b9e7f78dec2162149dcda": "5b54b37ae750125a60593e99eb4f4eb1",
".git/objects/4e/b002e8449cfd5719c44c87c76f41b80ee55c85": "2adf057ed673f7080d86353fbd491068",
".git/objects/52/ebdbb928d248c1f06e1d23ac91fb2510235f28": "0ae592a3d31caf46ccbc745dfc0732a1",
".git/objects/56/d8ba35df83820362d26a30f56d8f3739423d9c": "34e43472d4b72886e65777eaaf3ff4a3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/07d2767d3cd8b6b7cc71cac02970d93b7cdfbd": "1c1c535ce57344082736830550edd277",
".git/objects/5b/44a6ca03ef7b4b5106f3a5d3cb44b64c537e83": "4eeb2e3db2db8fb3c6c516ec71cdf7ee",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/7d42be96923638b5ab0da0c731d0a5d341a282": "1660c2c336533305a0a2ebfdccb03866",
".git/objects/7f/8a9b5553c63fca5ad66ef84d702358d65978ff": "4ecc098a900b4d3ab0307db035010e6d",
".git/objects/85/10114be78707382c10bdb7f07a96434a1d6241": "d8418b38b50e019d41f4862eac2be24a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/5f76ee5d45c3bbecb9e9d1cafe65bcb817bdb3": "22dbfc960337580887cf9beee1bc9719",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/9204718327a878d8e1a0a3d1ac5858202e9e78": "ebc1a43f632c108eb02663b8fb99dbfd",
".git/objects/ae/32b03f788381dc6e4d4462416ac9e0d72b7c44": "81b167deacd319abe3af049b51cdc3d4",
".git/objects/af/ddd4a23655b1a19d653778760f2c53f1ab3705": "afb0ac6f9681e4360be09dd6d23f80dc",
".git/objects/b3/88648f6852527b929d125571406bc67a05f139": "a26b4c8e5a69178aa1e173e488c69422",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b5edd025057073815f38056c09f75fc9e1b2e4": "5e3e7f5ded10ead6d7dba4758521c597",
".git/objects/c5/f21561e86771778ebdbae39cf73942c2a28091": "1458810bb73206061844db6e5b5791d9",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/f9dd12378efe3f0029d83848e226cdaaf6bd81": "f4c78870e97ddd287c7b07426fc38802",
".git/objects/cd/51d6bb2a9547d8869de522fbcd376bcdb1b684": "353b668e5d3d26e219b5d582b901bacc",
".git/objects/d0/94519f325e5f63a0222d9ec4d99d47efaf8929": "8887ee84ce7654ac3c7f91f6795e3e28",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/3546d2c2491239d5b80ec8811c0437f7a150b7": "e64d2293954e6b2f393faa14231bbec5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/d4921a5b23d96af211415e7cfd6c06a4b621c9": "df4ad6160180ac38affdcfd45fbdf6e9",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/ee/7668e60ffc1494f01fd9961580bbaa75597bda": "29fd6b455897573fdb9027a91453bc13",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/52dc89e69b7d8facbcbb5aa50086416203c8f1": "24cce7573eed9f2243d9a20f3eacba6d",
".git/refs/heads/main": "19fba7fd42c05a33a5c59484ca3349af",
".git/refs/remotes/origin/main": "19fba7fd42c05a33a5c59484ca3349af",
"assets/AssetManifest.bin": "16e854e2132fc4611c1754b00ad3c5bf",
"assets/AssetManifest.bin.json": "a74e3ca764148e8b93e124d9b610cdbe",
"assets/AssetManifest.json": "53077a0a74b0970375d38069ff0a43b0",
"assets/assets/sofa.png": "66522f7f4856011f6c6e36830799b598",
"assets/assets/sofa1.png": "b62c4308c8ba3b4a9a0ea941765e6b8b",
"assets/assets/sofa2.png": "fe96f3afff06e9e92d8f9c57d0702765",
"assets/assets/sofa3.png": "15169e4fe7e441678995fbda5d976e1b",
"assets/assets/sofa4.png": "61435f22ab460f0553c060dcd4a9dedb",
"assets/assets/sofa5.png": "cadc7f4b5a611501f20b61afa2885474",
"assets/assets/sofa6.png": "69373c38761d15aee73a17cfd611e613",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2fe501f6611cb30a5819c509d8605f1a",
"assets/NOTICES": "5a64f5e3e6c970f15f617360b67a666a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "48d850f2dae2039937fd00230794a250",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "431841ef4207c036a265d8e632bae065",
"icons/gif.gif": "cef14dd5f19fc12322dd58b8792556c5",
"icons/icon_1.png": "a52aa3f4f3bf00a5d6902e5df5ccba89",
"icons/icon_2.png": "d9acf7dd3f3953cac3667a0aec2597fd",
"icons/icon_3.png": "7216150f7afc911a1070e3864808b532",
"icons/icon_4.png": "a10ce5f9c471cd1a0e8b3ebb7a1bea59",
"index.html": "6382cf9058c9917cc154b45f61da0650",
"/": "6382cf9058c9917cc154b45f61da0650",
"main.dart.js": "136c39e1004f5e92c088b017c6c25e3b",
"manifest.json": "a5fefa5afd1036d0b0fe669910c97311",
"version.json": "0d8d24cc119a85809875747065bde0e9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
