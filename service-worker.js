/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2017.html","8c7cc4c7f5dd81d8368f13c8b35b42b6"],["404.html","6ac7b95f3ed6142ac247608df54b2c59"],["images/background2.jpg","f30b0e29dd9681200ba99c8f63a95d73"],["images/background2.png","75f1e9f800f60a662cdec142187243fb"],["images/background_2017.jpg","97183b6bcb7dd0f8e5cfecc977dc3216"],["images/background_2018 - Copy (2).jpg","72438b806ce2593aba0ae62875db6da8"],["images/background_2018.jpg","6f10b7d5cfe31687d1634e6a8d3c9d83"],["images/event/awards.jpg","ac0c93fdc12e91e86148261c4a59416c"],["images/event/food.jpg","7c78992cbff90a22977c57a1482286a1"],["images/event/hackers.jpg","e6d0f8e2e949873c7b1904f0819f1104"],["images/event/mrnguyen.jpg","3b4010392a20085d209188bb18c40886"],["images/event/presentation.jpg","c4ebe05c4e41795808aad73ddb1daa73"],["images/mvhacks.svg","ff5848a4cff3fb0934bdc6410d758090"],["images/mvhacks2.png","d9a16aa205994882265fa7efee191aa5"],["images/mvhacks2.svg","12febba62bbb42e7f99e774e6f3dfe52"],["images/profiles/2017/aayush.jpg","5265921a0dad4c347d78b557567e0d4b"],["images/profiles/2017/adrian.jpg","c9841b54d66a38d5b1ac90b8f398d7cc"],["images/profiles/2017/ben.jpg","0c689c1a5f74e31e625561378b2da5e8"],["images/profiles/2017/chetan.jpg","7fb6bec64d36bb54ccf14ccbc275ab34"],["images/profiles/2017/daniel.jpg","d35d2d71cc8a49093a80ac3f6dba3e9e"],["images/profiles/2017/david.png","0def0a2b8b2a267a68f6a741a510ddd8"],["images/profiles/2017/karan.jpg","117b8a2235f276a6a0195fa0f8562591"],["images/profiles/2017/marc.png","d82e6572bcbacc6d90366e93ae3148ca"],["images/profiles/2017/nakul.jpg","17deb3d75250f9ca5c108c8d06f55166"],["images/profiles/2017/paran.jpg","4a7488060bcc9e35d2fd00b23c905e2e"],["images/profiles/2017/rebecca.jpg","befb5c014ef2db68c1be7b30a69009f5"],["images/profiles/2017/shashank.jpg","018be454cec7bbc341b8e5f2c027ad11"],["images/profiles/2017/stuart.jpg","68f865c3273824bd9466b1ffcf901436"],["images/profiles/2017/surya.jpg","fc9902d0c107ca40af523b046d87edc0"],["images/profiles/2018/Akhand.jpeg","ddb4368dc7483fc9870b0766349cf588"],["images/profiles/2018/Annemarie.jpg","34812dc752a98689b3b74db342e8e751"],["images/profiles/2018/Arjun.jpg","897ccc398abbdedb37eeb4ee311f8f6d"],["images/profiles/2018/Izzy.jpg","f807b89906a14244aeaea307acc5ceb1"],["images/profiles/2018/Jeremy.jpg","813d01c25ad799254c9893ca49e06a14"],["images/profiles/2018/Julia.jpg","f96df061a4722eca408a1e1dd2b3c4f4"],["images/profiles/2018/Marc.jpeg","f6dd59bd3ea4704f08416175795a2e52"],["images/profiles/2018/Sammy.jpg","1a2091a7cd1d0065e6d0cbbbcd4518f7"],["images/profiles/2018/Stuart.jpg","68f865c3273824bd9466b1ffcf901436"],["images/profiles/2018/Stuart2.jpg","fae6756bf347bc174a89c211303c5000"],["images/profiles/2018/Tanay.jpg","485104e2f915fbe53c1afdc09b6412bb"],["images/profiles/2018/Tanay2.jpeg","e8fe32171730189c794adcb26cc2fb01"],["images/social/account-box.svg","816060e7b0414676870ef142919c0f40"],["images/social/email-box.svg","26015521682e43570edcd67e3b52a000"],["images/social/email.svg","26015521682e43570edcd67e3b52a000"],["images/social/facebook-box-colored.svg","7c75126c1c59bdada0b2e6ed8b2be804"],["images/social/facebook-box.svg","370f8e295396c1a5fc63efb5bcd8c58e"],["images/social/github-box.svg","b0fed53b3bb69384983c4a5ec6c43535"],["images/social/instagram-colored.svg","5d76d40eb411617573471549522d6db6"],["images/social/instagram.svg","b9753cfbe0f323c526970f2b32625fb8"],["images/social/linkedin-box.svg","16c3be801dc94b3e7354b4f83c34e11a"],["images/social/twitter-box-colored.svg","62452ba65e5a11ba8b9aed7b79997fab"],["images/social/twitter-box.svg","54b48294d158cae0e12fc002fc48be4a"],["images/sponsors/2017/asian-box.png","e2de2f55b6d292d97200d8ba3487f6b2"],["images/sponsors/2017/desmos.png","fe00952aaf5761c3b9a9c0418b1687bf"],["images/sponsors/2017/dottech.svg","d7fa01ad1bdfeee1bc314fd700896359"],["images/sponsors/2017/hackplus.png","04ca3d84bcc06a61909886059202bdf0"],["images/sponsors/2017/ignite-labs.svg","9382b86512632edf3b2cac26a1824d16"],["images/sponsors/2017/leangap.png","7aabe259a38ce52b3e323d5f46584776"],["images/sponsors/2017/linkedin-logo.png","ed29d40987394e6ce373d11e964c7b01"],["images/sponsors/2017/microsoft.png","09d1144e957dbac14a89b43f7045ef59"],["images/sponsors/2017/soylent.svg","356e3f499097867b944321ef43b2425c"],["images/sponsors/2017/symantec.svg","ca805ab7465752625e05d5dd24067fa7"],["images/sponsors/2018/CiscoLogo.png","ade8d954cf79e9a089ae266bb8fec2c3"],["images/sponsors/2018/DevExpress.png","7780a677dd5c50d1b8203f4cb3ed012d"],["images/sponsors/2018/Ford.png","b5e4f6d13905afe270be62f0822f21cf"],["images/sponsors/2018/WolframCorporateLogoWhite.png","1e3de1076f7706cf948420be8c485799"],["images/sponsors/2018/balsamiq-logo.png","87b28dde318b202715e13fef7d54f638"],["images/sponsors/2018/github.png","e7801092345c99aabf7963c8386e3271"],["images/sponsors/2018/hackclubbank-logo.png","cccd6d3a6909a72067d7e93fa1f5a1e9"],["images/sponsors/2018/hackerearth-logo.png","a27b86be75663f02d7e4350c25a74442"],["images/sponsors/2018/hobags-logo.png","aef2f35a3177a705bfafb1effe3d9916"],["images/sponsors/2018/jetbrains-logo.png","1d91b9f9b8abba2c1e4f79fd6e971155"],["images/sponsors/2018/linkedin-logo.png","ed29d40987394e6ce373d11e964c7b01"],["images/sponsors/2018/sketch.svg","174940a20fce4db4169866133ee58bd2"],["images/sponsors/2018/tech_logo.png","720a1320a0c2f74202324be621a56bfd"],["images/sponsors/2018/wolfram-logo.png","202087de80e699dd186b0cd52902a15b"],["images/touch/android-chrome-144x144.png","d5472fc6dab4843e3b374f01f02fc7f3"],["images/touch/android-chrome-192x192.png","6aefda0ba18f6c272d73b8411b38a3fe"],["images/touch/android-chrome-256x256.png","3b9d0e023f292fdb4b13c929cda3abc1"],["images/touch/android-chrome-36x36.png","dc1a1687f6bbcc77e3a64a66edd46082"],["images/touch/android-chrome-384x384.png","4e6d5c6cb1b43e17c18acc597934e1a4"],["images/touch/android-chrome-48x48.png","9de228b6d0ff1cff5f500cd5cc49ac09"],["images/touch/android-chrome-512x512.png","986e5262773343533d1e2ed46c93aa01"],["images/touch/android-chrome-72x72.png","c4766ec469bd9ab6892e1c27260c2aa1"],["images/touch/android-chrome-96x96.png","dce9ddbfa8ac7afafbcfdc6ca3314939"],["images/touch/apple-touch-icon-114x114-precomposed.png","ecef0a468c5164ee34cbee803f58160d"],["images/touch/apple-touch-icon-114x114.png","9e285e94491bee5b9a9e2313c3999588"],["images/touch/apple-touch-icon-120x120-precomposed.png","e059607cd1189116378493f5104a927f"],["images/touch/apple-touch-icon-120x120.png","1159580e61a7dc296caf3ff54c370192"],["images/touch/apple-touch-icon-144x144-precomposed.png","fc49cc4bbacd231e2a3e7f6d4f5b672e"],["images/touch/apple-touch-icon-144x144.png","d509f285dcab09ce804c8e79d6a438ca"],["images/touch/apple-touch-icon-152x152-precomposed.png","e23741e1e710dd684f991b5f272384e7"],["images/touch/apple-touch-icon-152x152.png","46381973dd64ffb3e790a52f497a8e32"],["images/touch/apple-touch-icon-180x180-precomposed.png","b602c58816966065a6e46114426c3d7b"],["images/touch/apple-touch-icon-180x180.png","dcaf0f5a700ecc99c16dbd85c3e54929"],["images/touch/apple-touch-icon-57x57-precomposed.png","e1be0683f1cbd610eeedc41704b297fc"],["images/touch/apple-touch-icon-57x57.png","de97fb236e521db5d5cf4c80a53c3705"],["images/touch/apple-touch-icon-60x60-precomposed.png","5ac37d772cbc67dd2dbd86a526a3eecf"],["images/touch/apple-touch-icon-60x60.png","e212452d0572451b80a582af992a94b9"],["images/touch/apple-touch-icon-72x72-precomposed.png","19fe736cf73f0a2f86c9f75be6b9fa5b"],["images/touch/apple-touch-icon-72x72.png","0ad4828bb8a77c6f2a9e03cc374b5e62"],["images/touch/apple-touch-icon-76x76-precomposed.png","01e9f84e9fe024d6a634df4b9d76d276"],["images/touch/apple-touch-icon-76x76.png","aaa495ecab163d07af6d31127524d9ef"],["images/touch/apple-touch-icon-precomposed.png","b602c58816966065a6e46114426c3d7b"],["images/touch/apple-touch-icon.png","dcaf0f5a700ecc99c16dbd85c3e54929"],["images/touch/browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["images/touch/favicon-16x16.png","ed35d9b0e906657bd41fe31d4e5acb8d"],["images/touch/favicon-32x32.png","ffc95bd391c77e179d6a75fac307e3a4"],["images/touch/favicon.ico","b6413c62542bb23968704d11b83f653d"],["images/touch/mstile-150x150.png","6bffcb35ee6b12d540a1f652fea7749f"],["images/touch/safari-pinned-tab.svg","fb39fb0570338838bb0d8508adc999b8"],["images/touch/site.webmanifest","1599e49371bb7237daef415b748d9a6a"],["index.html","5881a5d3ec5595ef196bfa05a72577e9"],["manifest.json","de0d4d0121834fee0dbceaf372e3e33d"],["scripts/main.min.js","3477b5a3bd839145a12831b08a86075a"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/2017.css","527534ebe02d8ba71954aedfa9709989"],["styles/2018.css","4a782af621e30bda84d693e21dbfc321"],["styles/src/animation/demo.css","2fa05e240ebdade89767013994705e05"],["styles/src/demos.css","8ca45185b9733124410f7ecbb6eb30b3"],["styles/src/grid/snippets/codepen-grid.css","e156a48f2c570d14277e6addddb22694"],["styles/src/material-design-lite-grid.css","4986597ee5d3b6efb078b21b0633d069"],["styles/src/material-design-lite.css","13fe09affa8cbe05396b294a581df9cf"],["styles/src/menu/snippets/codepen-lower-buttons.css","a08b56b13810de64fe212ec65876688a"],["styles/src/menu/snippets/codepen-top-buttons.css","a798927488f7ae22c3fc21bd06716c55"],["styles/src/palette/demo.css","ce21623319fd3b98a643d7b8699a4473"],["styles/src/shadow/demo.css","d1d028b0c12fcaa6e88797696be1b188"],["styles/src/styleguide.css","e054d2be764d81d0174546347352069a"],["styles/src/template.css","48a3e5c15a8b22c0cab3fcfe54fd4412"],["styles/src/typography/demo.css","3510c3e974681122857bca960bd94442"]];
var cacheName = 'sw-precache-v3-web-starter-kit-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");

