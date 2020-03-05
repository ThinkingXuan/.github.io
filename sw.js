/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","07e1cc5b4099b755fc1f34b15ead709d"],["/2018/12/16/LeetCode/leetcode2/index.html","a936bee0318dd53806176ea6449e53e9"],["/2018/12/16/LeetCode/leetcode3/index.html","4af06396b7512c7131404315bb791956"],["/2018/12/16/LeetCode/leetcode4/index.html","db1ad6518af5a40bba1d2647d5d3e457"],["/2018/12/16/LeetCode/leetcode5/index.html","a7d790463f1291392b86e9ce58032097"],["/2018/12/16/LeetCode/leetcode6/index.html","29071b35f247b55637034b4d5264da01"],["/2018/12/16/hello-world/index.html","aed570fce01292d4151f4fe6b9fe6028"],["/2019/01/16/DataStructure/dataStructure1/index.html","5d03dc3a24c31a7b829774da9d9f24eb"],["/2019/01/17/DataStructure/dataStructure2/index.html","60319a43b975a9578352127a4c063088"],["/2019/01/18/DataStructure/dataStructure3/index.html","e00dad6198651bf30bf55dbf8f40e684"],["/2019/01/19/DataStructure/dataStructure4/index.html","00912b3a380999e284b71c7e3b9bda47"],["/2019/01/20/DataStructure/dataStructure5/index.html","2cc70f7650c90809c67e323ffbf3d2e7"],["/2019/01/22/DataStructure/dataStructure6/index.html","7485180fd28c76bb27f35cdaa11e9e8b"],["/2019/01/24/DataStructure/dataStructure7/index.html","614c93acde529e6a552e6957273b3429"],["/2019/01/24/lanqiao/basic/index.html","37761f92db5be61f9da0a414d11434d9"],["/2019/01/26/lanqiao/basic2/index.html","cc49ee85c57a16bd2632a25243616777"],["/2019/01/26/lanqiao/basic3/index.html","b8e1b9cb061dede40daac7e6195d3ca4"],["/2019/01/27/lanqiao/basic4/index.html","d03377aeafd888fcdce3f8b4470732e4"],["/2019/02/13/lanqiao/basic5/index.html","4d6591c5563ec2144853a1f7f6462ab1"],["/2019/02/14/lanqiao/basic6/index.html","4a8706c54dc5c2d2410547cb63ff06d7"],["/2019/02/14/lanqiao/basic7/index.html","f377dbcf00a2e2decc109abbe2f26b90"],["/2019/02/15/lanqiao/basic8/index.html","1eee2131463a52910d07e78327c2ff1a"],["/2019/02/15/lanqiao/回形取数/index.html","df491107036efe6a35d2c3f2c84e09af"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","850dac86d38afd20d6a0f5e419ca0291"],["/2019/02/16/lanqiao/芯片测试/index.html","3d6bf7d515adb8a39a29fcdc1b76335c"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","1d7e9817003bcdb2ef2865c0c675b6df"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","af2225c84b1ef3e739c61467db995890"],["/2019/02/18/lanqiao/Sine之舞/index.html","28dff34f6b796fcdf80ce2d3c85fe3ca"],["/2019/02/20/lanqiao/数的读法/index.html","a5d5a296e72b8f7124f72e2a8ff45561"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","ead07da4c44ecbc7275da1edb820f619"],["/2019/02/27/DataStructure/快速排序/index.html","8f7000f2f53bc8ab9c45e9c2734edbe9"],["/2019/02/27/lanqiao/完美的代价/index.html","2afe9c4c442f1c254c446b31ec7f41b3"],["/2019/03/13/lanqiao/数字排列/index.html","c2738f8f5725cecd7762d8575e61439d"],["/2019/03/14/lanqiao/数独排列/index.html","88fe7efb3ce48543ea6babfbcbaa3507"],["/2019/03/15/lanqiao/凑算式/index.html","c0523fbba165cd58e5329fad1b29dcbc"],["/2019/03/16/lanqiao/方格填数/index.html","90b303998439a4732c00df36d47d21aa"],["/2019/03/18/lanqiao/剪邮票/index.html","73811ac8b45df8b3b4e44a13f19f41f7"],["/2019/03/29/lanqiao/审美课 /index.html","354c8c4b73eba40bd5922d639ce543e6"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","1f643f99a9aedca5ad616fe2c96880fb"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","c5177af51421fcc50a915186b8c24b58"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","8eb0c45d254b03aec9859440c29c5bf4"],["/2019/04/08/lanqiao/素因子去重/index.html","3f0cd0eeed40c26d72664b969fba77fd"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","d0bf073b2fb9348844d9d66062495419"],["/about/index.html","07a77fe6da0cfdb8c8b11232020b85d6"],["/archives/2018/12/index.html","9e22579d5808521e101324cbf2028c52"],["/archives/2018/index.html","e20a48044b9d71cbbb917ccc4fe65f96"],["/archives/2019/01/index.html","59eae32f5861d8499b4829a0ebe741a8"],["/archives/2019/01/page/2/index.html","40ff4efb69c7e0155ffe01a6688cbd36"],["/archives/2019/02/index.html","5fd5a96086c530bbcdb4a6d4b4900a40"],["/archives/2019/02/page/2/index.html","b0d554f2d4a049900123d24006138fc6"],["/archives/2019/03/index.html","c78c2b5daa55ffba9c81df00bd0e45fc"],["/archives/2019/04/index.html","b62e87981abb186cfeec8b52276b8bdc"],["/archives/2019/index.html","769411de40a7d8107a4b4a1d2be20d76"],["/archives/2019/page/2/index.html","6ea5a7bab3baf893a296c288d40ec406"],["/archives/2019/page/3/index.html","06a1c81821cc9188950b0ba1a4b605bd"],["/archives/2019/page/4/index.html","b1ee8ba1a513796a9864b49cdd4ccfa7"],["/archives/index.html","1fe3df607b4034434f9ef7bd20d0ee03"],["/archives/page/2/index.html","38d2f2ca31ee296cb62281b1981e1e3c"],["/archives/page/3/index.html","356b688184ffad88283bd29f9508353e"],["/archives/page/4/index.html","16156d0f007164ef7bb7260eb09a54cf"],["/archives/page/5/index.html","fa9dba7dae2c6d2ffb1778b79c132748"],["/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/categories/Hexo/index.html","c61c41f40c283cec413c998ed9d98a71"],["/categories/index.html","53d3557aaff27c92d1fed0f3d8fcc28a"],["/categories/数据结构/index.html","de29ac44957a24e60d736d9097361be5"],["/categories/算法/index.html","26de6734a4bc0e37362991f2c182d9d5"],["/categories/算法/page/2/index.html","8ec267ba229adf89f1b5b305f05294d9"],["/categories/蓝桥杯/index.html","cc72346648fffc19afc88a47716137f1"],["/categories/蓝桥杯试题/index.html","1eed55178ed2010b2c3b94e269165d09"],["/categories/蓝桥杯试题/page/2/index.html","581f19058e2c90e85acb3e02751d5f39"],["/css/index.css","e9dd933551ca0a6d936e328a1ced6ef4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","9e5987a9968f764acf0f214e231b3e6b"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","67367e4bb68d72e59514ab91b80504dc"],["/messageboard/index.html","4893d31701799166cb2b974ce280f477"],["/music/index.html","b1c06ca9b5eea4b2a67f316cdb93e2d7"],["/page/2/index.html","03dea0e892a6a2944254ed61453ab697"],["/page/3/index.html","3c61aed0e63f248c36f4146110e19608"],["/page/4/index.html","2e70eefddd64e2ea693c823614875936"],["/page/5/index.html","6ff90304e24796c03a6e0ab77295a9e1"],["/sw-register.js","2ccb66adc51fa05c8c67ec4b9c89ed5d"],["/tags/2N皇后/index.html","6b16ff6847f110b7c6e8c97c9a79ed90"],["/tags/Hexo/index.html","3ecb4dcf76dcc49c8f995e5adcc6f593"],["/tags/N皇后/index.html","aba6eb2ad115f852a5a4fe29fbd30998"],["/tags/bat脚本/index.html","f08b3ed520be4816f216a7f4e98d564e"],["/tags/index.html","b02fbfdd7a42fb7a8cb54f6ac2199216"],["/tags/leetcode/index.html","e711f880a083c76f58e49e9e639bde72"],["/tags/二进制表示/index.html","91f87c42a513c0cf5398cacf750a279c"],["/tags/全排列/index.html","ebe60acabee144adc4363666c48aaf62"],["/tags/冒泡排序/index.html","cd403a21483f59432e8fd6ab86dbb791"],["/tags/图/index.html","4b298d43c2bd0cef6ed66352a43a4fb1"],["/tags/字符串处理/index.html","f433fe06762e714f7c1359b4d6910ab7"],["/tags/快速排序/index.html","dda7b79a358643a9ef61022432a8029f"],["/tags/搜索/index.html","67b05801f00b4a44cad667289f5357c9"],["/tags/数据结构/index.html","098f9b4ddcd561f9ef339a9f4f7016c2"],["/tags/最小步数/index.html","324be35675d458fc3c7240fb72078ec5"],["/tags/深度优先搜索/index.html","246f124102485e4a16d5ccccfa8c2374"],["/tags/算法/index.html","1c7fb68410a5ad9fc06949377bc87ce9"],["/tags/算法/page/2/index.html","d8f141a51276bc6d9e9bb44bef8d3660"],["/tags/算法/page/3/index.html","2f1992e444f0afd160fd76f081879baa"],["/tags/算法/page/4/index.html","bbbce7b9475cdaae518ecd7351f8af2b"],["/tags/算法/page/5/index.html","8b3fdd68253904c4d278584b6d2bb361"],["/tags/素因子/index.html","0c29995636c4e305817e9edf6f6bde80"],["/tags/素数筛/index.html","0facfb4b79433373e128ba2785eff953"],["/tags/蓝桥杯试题/index.html","09c3170f865daa108ebcef758b6b9e9b"],["/tags/蓝桥杯试题/page/2/index.html","659d411a6b171f7ad91662bea3b9604d"],["/tags/连通图/index.html","6ff417b18bc1260ddd50170442f19d61"],["/tags/阶乘取数/index.html","2dc391961e6d8aa735b976bfa48ed66f"]];
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
