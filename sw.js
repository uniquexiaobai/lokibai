importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.routing.registerRoute(
	new RegExp('/(index.html)?'),
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	new RegExp('https://bing.lokibai.com'),
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	new RegExp('https?://cn.bing.com'),
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	new RegExp('https?://uniquexiaobai.oss-cn-hangzhou.aliyuncs.com'),
	workbox.strategies.cacheFirst({
		plugins: [
	      new workbox.cacheableResponse.Plugin({
	        statuses: [0, 200]
	      })
	    ]
	})
);

workbox.routing.registerRoute(
	new RegExp('https?://lib.baomitu.com'),
	workbox.strategies.cacheFirst({
		plugins: [
	      new workbox.cacheableResponse.Plugin({
	        statuses: [0, 200]
	      })
	    ]
	})
);
