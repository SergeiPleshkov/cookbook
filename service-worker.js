"use strict";var precacheConfig=[["/cookbook/index.html","cb1ba4b1409041b1c459e5030552a38c"],["/cookbook/static/css/main.f45e9782.css","4b3872444ac1878bfb8db18a83349856"],["/cookbook/static/js/main.04acaee3.js","a1dd87838e418962afa3e4b8c3fef19a"],["/cookbook/static/media/add-picture-icon.f3d887af.png","f3d887af9fbe6a572609d63260231e56"],["/cookbook/static/media/ananas.7fc81ad2.svg","7fc81ad209fa286d7fceece193ee0040"],["/cookbook/static/media/app-cover-image.66a57898.png","66a57898cff5e51df9a5288444461582"],["/cookbook/static/media/app-icon.10dda5d1.svg","10dda5d19b8e21aaf030ca76096cc6b6"],["/cookbook/static/media/apple.97d7e975.svg","97d7e975433e05a0e0daa9b926a0e002"],["/cookbook/static/media/back-btn.cb019a98.png","cb019a983f227514e11af1ea4d7aa706"],["/cookbook/static/media/baked.d84b4092.svg","d84b4092955cce776b54db4465a95a60"],["/cookbook/static/media/burger.6b678d08.svg","6b678d08e7f8e0ec407dad746edb5415"],["/cookbook/static/media/cake.19512369.svg","19512369e43c6cc9232068631e331190"],["/cookbook/static/media/chicken.31587a9d.svg","31587a9d60c5b97fb9421102607b4561"],["/cookbook/static/media/confirm-btn.4ec6baa7.png","4ec6baa76e85cd6e6b1cad67b8dcbd2f"],["/cookbook/static/media/egg.48f9e949.svg","48f9e949654f94c9e1bc1a4e3ed41e1a"],["/cookbook/static/media/fish.f35421c5.svg","f35421c52962f1af1051950b1460fe18"],["/cookbook/static/media/grapes.01dc8a1b.svg","01dc8a1b6e7b588caff041e4eb87f857"],["/cookbook/static/media/grey-cancel.4417e06f.png","4417e06f18c0951a6dc4a99e94a4c6e9"],["/cookbook/static/media/icecream.e2a5c11e.svg","e2a5c11e43bfda00868451da0f6cb811"],["/cookbook/static/media/lemon.8f66f211.svg","8f66f21199eec5a6c4cff497bfcc3924"],["/cookbook/static/media/meat.b64469ea.svg","b64469eab24837df9e1240cbdaca6965"],["/cookbook/static/media/menu-cover-image.57d78910.png","57d7891060697dc0e91f6495f8b4d0e4"],["/cookbook/static/media/menu-icon.68e77cb8.svg","68e77cb83be4e314bde2c3cfe2d6f191"],["/cookbook/static/media/noodles.f0134603.svg","f0134603ca5cc10f6ce21163435a856b"],["/cookbook/static/media/pear.c0ccf529.svg","c0ccf5294bfd340af4dab5354059064b"],["/cookbook/static/media/share-btn.a173bf32.png","a173bf323f50b9e4378d708cc00be69e"],["/cookbook/static/media/watermelon.8c69743d.svg","8c69743d21541d64046d8b7e449cb2a6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var o="/cookbook/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(o,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});