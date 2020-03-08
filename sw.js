/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","d31b052335b304fd4949dddbcc27e856"],["/2018/12/16/LeetCode/leetcode2/index.html","dd8f4aa2f9c5e09490fe2a1895da7027"],["/2018/12/16/LeetCode/leetcode3/index.html","13916ed83cd17c8bd3034ac6c0eec35d"],["/2018/12/16/LeetCode/leetcode4/index.html","1a1563fb6f779dc2d05756f2231bc7a1"],["/2018/12/16/LeetCode/leetcode5/index.html","63fee6e35cf0b6f84834a7cfe6e8fbc1"],["/2018/12/16/LeetCode/leetcode6/index.html","3df8d92e0ab8052e7a206466afd1d147"],["/2018/12/16/hello-world/index.html","3dda94cd56fb3c1263cc4a83a61f30c1"],["/2019/01/16/DataStructure/dataStructure1/index.html","587bb3d14dbfe631ed0c8806ab31ba88"],["/2019/01/17/DataStructure/dataStructure2/index.html","ef510b766d5f79f0dbb9c274063ea677"],["/2019/01/18/DataStructure/dataStructure3/index.html","5fc4070104ed226c6fda57b9491d3437"],["/2019/01/19/DataStructure/dataStructure4/index.html","5d7ec40b040054e84fab6aa357957537"],["/2019/01/20/DataStructure/dataStructure5/index.html","7f3e41188df2691a7d7fe559c92e36d1"],["/2019/01/22/DataStructure/dataStructure6/index.html","34f8c0bc1f0c00699509acf6bb282062"],["/2019/01/24/DataStructure/dataStructure7/index.html","621377c26e0c0677b95f24f00b4c3c2a"],["/2019/01/24/lanqiao/basic/index.html","e448fff625a94cd433ca832f7292b40f"],["/2019/01/26/lanqiao/basic2/index.html","32ce2879266fbebdf8f690068251da53"],["/2019/01/26/lanqiao/basic3/index.html","ec6017db3397f2a1904d0bc7bb406c46"],["/2019/01/27/lanqiao/basic4/index.html","9c6f5f140131fb45ad1d75d9131d3595"],["/2019/02/13/lanqiao/basic5/index.html","8cf1fb5af4f39d38745e33379cc04b08"],["/2019/02/14/lanqiao/basic6/index.html","4394459da9b1e0a066b95fa09d099f2d"],["/2019/02/14/lanqiao/basic7/index.html","ac92e76a990c47270d8638b96401b353"],["/2019/02/15/lanqiao/basic8/index.html","d4efcd234d6ffd76cd959c83fcd913f9"],["/2019/02/15/lanqiao/回形取数/index.html","d8db081661cea3e31ea5076a3bf8cdc0"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","743c0ff3600eece0edd5d5e3c6c75cef"],["/2019/02/16/lanqiao/芯片测试/index.html","cb3c520b789546e5a61f78e3da925970"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","0b06ea39873b0b909cc6667c819c2b9f"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","1c24352cc050fe2b4803f7b8a73a3970"],["/2019/02/18/lanqiao/Sine之舞/index.html","50036efaf5765874f7613256a42db9a2"],["/2019/02/20/lanqiao/数的读法/index.html","de289ce0c590ecfe41d7a8fb861c4cf9"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","06c21902336e5f9fcb76bcd4db77ede1"],["/2019/02/27/DataStructure/快速排序/index.html","16b46078c41752d11045c7bb0162ac7b"],["/2019/02/27/lanqiao/完美的代价/index.html","939634806ca0c0d6cadb7e014a3c259d"],["/2019/03/13/lanqiao/数字排列/index.html","10fc933a609c33bee16b2c68056a8494"],["/2019/03/14/lanqiao/数独排列/index.html","424250c9bbe974b822dbe2fa85cf5567"],["/2019/03/15/lanqiao/凑算式/index.html","500b8b038edf636cf2a8ca78050dd12a"],["/2019/03/16/lanqiao/方格填数/index.html","49add49a7249bbb33d41bddac47a9cc5"],["/2019/03/18/lanqiao/剪邮票/index.html","f26917d55cef9fb3562e9d8506f37988"],["/2019/03/29/lanqiao/审美课 /index.html","48e12dd24ff633f08118455f73433ea6"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","706b941853629e270b813dcf6ee908e2"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","67810950e10d58bb36aade125c0bce35"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","a4452ca8d39a1d296394ef08fee372ad"],["/2019/04/08/lanqiao/素因子去重/index.html","dace114f671d8059e1fa304ce6f2551b"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","1ab19fbaf65766594c65e4ba2454e233"],["/about/index.html","6df9fccef079232d94bfeae30f48359c"],["/archives/2018/12/index.html","5f00e411dfd81c6f527e8f159320ae40"],["/archives/2018/index.html","5db8af482f7e523d7792540818f1e04d"],["/archives/2019/01/index.html","d24c2b7c6b35d6c6fe1ca2221f9fdc1a"],["/archives/2019/01/page/2/index.html","65ca3bb69c79d842996043a4d99e7979"],["/archives/2019/02/index.html","c52bcb9cc5348c5168eeaffd63b074c5"],["/archives/2019/02/page/2/index.html","04545b8af8ff68f179dc33cab462c135"],["/archives/2019/03/index.html","efb54d4831492b34ade3ae0297444823"],["/archives/2019/04/index.html","b23df212d4c817f0fe0b2cfbbd92f365"],["/archives/2019/index.html","d4c223048a5116dfb8e94d3d1ffa3632"],["/archives/2019/page/2/index.html","cfd9972ef8f8ecec5c451cf11d24ab70"],["/archives/2019/page/3/index.html","88ef10b992fdf34ca9fe90a1f4ab732b"],["/archives/2019/page/4/index.html","a9c243f30eb0f04d95a087ecea874a64"],["/archives/index.html","fc4ec1cdb495848fcc30f019c500be24"],["/archives/page/2/index.html","5b4e8ac0a8d989d2b9a3cdb8be5aec0a"],["/archives/page/3/index.html","7cd0e8b1cc4393a5f0f012d5c6353c30"],["/archives/page/4/index.html","66d41c6d0513360d9bc15342fb6df74c"],["/archives/page/5/index.html","e43a685439e3e5879e90824234eb6389"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","e4519054f71adad05f129ef207882020"],["/categories/index.html","8f345426cb0d6b78c13d8d09466194ec"],["/categories/数据结构/index.html","dc333942bd7422d18a9323a5716d1846"],["/categories/算法/index.html","addff0d1ac15cd9e3a17b7acce2c7979"],["/categories/算法/page/2/index.html","b75750be190b9af368b96c03a2e38053"],["/categories/蓝桥杯/index.html","e9186db51a92b770530aaa7276b5e3af"],["/categories/蓝桥杯试题/index.html","bf6b24c959c6f516eab6e3fb0fc77c3b"],["/categories/蓝桥杯试题/page/2/index.html","2b58b1b9447abdd3d5cc0956d5e02d30"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","54c392e4a38b7e28b5b2bbab6e43beb4"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","0b179f014ae3907f996611908edfce94"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","4b52f52fa9813b70dea9b055ca42f17f"],["/messageboard/index.html","0314f79c3b063582b7b4dc0b28537465"],["/music/index.html","fc30e55a4c56146ca8dc12783fbd398a"],["/page/2/index.html","13410f6da0504f49ad6c5c253c27abcc"],["/page/3/index.html","c34916e74274395c5e9d9715b38d51cf"],["/page/4/index.html","e1b267e30bb1353482e71613d10a6a71"],["/page/5/index.html","2905bad1793db7b47801d72299f43305"],["/sw-register.js","64e9911454e7980983a5a67829da7595"],["/tags/2N皇后/index.html","ab059dbe45b5775eaa422b5897e11934"],["/tags/Hexo/index.html","ba89ecef178fb80e0fca027edc713bed"],["/tags/N皇后/index.html","b3e7aaec4914fa17b571f5e9da4edd7d"],["/tags/bat脚本/index.html","ec14def2db0601881fdada930c585ef3"],["/tags/index.html","cbd14b94cca7d024df19d54a3b6299f8"],["/tags/leetcode/index.html","e0759c6afef0fcee1dc8ac221117996b"],["/tags/二进制表示/index.html","25211276dfe9d6dd647d6896d6e415fd"],["/tags/全排列/index.html","6b152bd9eaf3649a864f1b8d37795ad0"],["/tags/冒泡排序/index.html","5be7d64a5cedb0c21df5089dd5fd17c3"],["/tags/图/index.html","2dde5feea1d5ef4c334f9e466d07cacc"],["/tags/字符串处理/index.html","bb42ec7f4da03715ec27707f2e87107f"],["/tags/快速排序/index.html","2b9a6c1ab04fe869ca24fe5bbed0f68a"],["/tags/搜索/index.html","07cfdd9480878ee174f432146bbfd788"],["/tags/数据结构/index.html","820a431b02153ef748cb050db5b4ef58"],["/tags/最小步数/index.html","b4fd97490f8fd7ca62db9bea06589297"],["/tags/深度优先搜索/index.html","a1cff2a483ca233406631d361b6d5b31"],["/tags/算法/index.html","c9986fab9bb50a28b46ed31f1a5f8bcf"],["/tags/算法/page/2/index.html","20ebd9711dcd2dc4c52a6ed3c7cd9a9f"],["/tags/算法/page/3/index.html","4c745d3880229d81ce6691485a16f5c6"],["/tags/算法/page/4/index.html","fb2bffbac51f550a7b0e15efffa3ae02"],["/tags/算法/page/5/index.html","7fee0396f94d40375755b94d155445fb"],["/tags/素因子/index.html","6bbfa17d37a6addb4c66946d738347d9"],["/tags/素数筛/index.html","5a0690d430a9a35816867a3894181a20"],["/tags/蓝桥杯试题/index.html","85aa83f479bfe32add32fed0742a3b89"],["/tags/蓝桥杯试题/page/2/index.html","49a3f9081f48cda728e7f82f6320bf27"],["/tags/连通图/index.html","f92f3d93e0fd784535949faf34ea6001"],["/tags/阶乘取数/index.html","61dba984447f6e045539ca1a67de4f96"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
