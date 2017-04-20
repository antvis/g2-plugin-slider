/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"examples/viewAndForceFit","2":"examples/index","3":"examples/changData"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Slider = __webpack_require__(5);
	var G2 = __webpack_require__(3);
	if (G2 && G2.Plugin) {
	  var Plugin = G2.Plugin;
	  Plugin.slider = Slider;
	} else {
	  console.err('Please load the G2 script first!');
	}
	module.exports = Slider;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
		{
			"time": "2015-11-19",
			"start": 8.18,
			"max": 8.33,
			"min": 7.98,
			"end": 8.32,
			"volumn": 1810,
			"money": 14723.56
		},
		{
			"time": "2015-11-18",
			"start": 8.37,
			"max": 8.6,
			"min": 8.03,
			"end": 8.09,
			"volumn": 2790.37,
			"money": 23309.19
		},
		{
			"time": "2015-11-17",
			"start": 8.7,
			"max": 8.78,
			"min": 8.32,
			"end": 8.37,
			"volumn": 3729.04,
			"money": 31709.71
		},
		{
			"time": "2015-11-16",
			"start": 8.18,
			"max": 8.69,
			"min": 8.05,
			"end": 8.62,
			"volumn": 3095.44,
			"money": 26100.69
		},
		{
			"time": "2015-11-13",
			"start": 8.01,
			"max": 8.75,
			"min": 7.97,
			"end": 8.41,
			"volumn": 5815.58,
			"money": 48562.37
		},
		{
			"time": "2015-11-12",
			"start": 7.76,
			"max": 8.18,
			"min": 7.61,
			"end": 8.15,
			"volumn": 4742.6,
			"money": 37565.36
		},
		{
			"time": "2015-11-11",
			"start": 7.55,
			"max": 7.81,
			"min": 7.49,
			"end": 7.8,
			"volumn": 3133.82,
			"money": 24065.42
		},
		{
			"time": "2015-11-10",
			"start": 7.5,
			"max": 7.68,
			"min": 7.44,
			"end": 7.57,
			"volumn": 2670.35,
			"money": 20210.58
		},
		{
			"time": "2015-11-09",
			"start": 7.65,
			"max": 7.66,
			"min": 7.3,
			"end": 7.58,
			"volumn": 2841.79,
			"money": 21344.36
		},
		{
			"time": "2015-11-06",
			"start": 7.52,
			"max": 7.71,
			"min": 7.48,
			"end": 7.64,
			"volumn": 2725.44,
			"money": 20721.51
		},
		{
			"time": "2015-11-05",
			"start": 7.48,
			"max": 7.57,
			"min": 7.29,
			"end": 7.48,
			"volumn": 3520.85,
			"money": 26140.83
		},
		{
			"time": "2015-11-04",
			"start": 7.01,
			"max": 7.5,
			"min": 7.01,
			"end": 7.46,
			"volumn": 3591.47,
			"money": 26285.52
		},
		{
			"time": "2015-11-03",
			"start": 7.1,
			"max": 7.17,
			"min": 6.82,
			"end": 7,
			"volumn": 2029.21,
			"money": 14202.33
		},
		{
			"time": "2015-11-02",
			"start": 7.09,
			"max": 7.44,
			"min": 6.93,
			"end": 7.17,
			"volumn": 3191.31,
			"money": 23205.11
		},
		{
			"time": "2015-10-30",
			"start": 6.98,
			"max": 7.27,
			"min": 6.84,
			"end": 7.18,
			"volumn": 3522.61,
			"money": 25083.44
		},
		{
			"time": "2015-10-29",
			"start": 6.94,
			"max": 7.2,
			"min": 6.8,
			"end": 7.05,
			"volumn": 2752.27,
			"money": 19328.44
		},
		{
			"time": "2015-10-28",
			"start": 7.01,
			"max": 7.14,
			"min": 6.8,
			"end": 6.85,
			"volumn": 2311.11,
			"money": 16137.32
		},
		{
			"time": "2015-10-27",
			"start": 6.91,
			"max": 7.31,
			"min": 6.48,
			"end": 7.18,
			"volumn": 3172.9,
			"money": 21827.3
		},
		{
			"time": "2015-10-26",
			"start": 6.9,
			"max": 7.08,
			"min": 6.87,
			"end": 6.95,
			"volumn": 2769.31,
			"money": 19337.44
		},
		{
			"time": "2015-10-23",
			"start": 6.71,
			"max": 6.85,
			"min": 6.58,
			"end": 6.79,
			"volumn": 2483.18,
			"money": 16714.31
		},
		{
			"time": "2015-10-22",
			"start": 6.38,
			"max": 6.67,
			"min": 6.34,
			"end": 6.65,
			"volumn": 2225.88,
			"money": 14465.56
		},
		{
			"time": "2015-10-21",
			"start": 7.08,
			"max": 7.1,
			"min": 6.41,
			"end": 6.41,
			"volumn": 2891.47,
			"money": 19585.98
		},
		{
			"time": "2015-10-20",
			"start": 6.88,
			"max": 7.19,
			"min": 6.85,
			"end": 7.12,
			"volumn": 2389.62,
			"money": 16813.58
		},
		{
			"time": "2015-10-19",
			"start": 7.1,
			"max": 7.14,
			"min": 6.8,
			"end": 6.94,
			"volumn": 2786.61,
			"money": 19474.72
		},
		{
			"time": "2015-10-16",
			"start": 6.92,
			"max": 7.38,
			"min": 6.73,
			"end": 7.15,
			"volumn": 3289.27,
			"money": 22963.97
		},
		{
			"time": "2015-10-15",
			"start": 6.63,
			"max": 6.9,
			"min": 6.6,
			"end": 6.89,
			"volumn": 2440.37,
			"money": 16575.84
		},
		{
			"time": "2015-10-14",
			"start": 6.7,
			"max": 6.99,
			"min": 6.61,
			"end": 6.66,
			"volumn": 2496.38,
			"money": 16858.28
		},
		{
			"time": "2015-10-13",
			"start": 6.55,
			"max": 6.81,
			"min": 6.55,
			"end": 6.75,
			"volumn": 2299.83,
			"money": 15338.24
		},
		{
			"time": "2015-10-12",
			"start": 6.29,
			"max": 6.89,
			"min": 6.29,
			"end": 6.69,
			"volumn": 3147.58,
			"money": 20738.35
		},
		{
			"time": "2015-10-09",
			"start": 6.1,
			"max": 6.44,
			"min": 6.08,
			"end": 6.34,
			"volumn": 2664.04,
			"money": 16811.14
		},
		{
			"time": "2015-10-08",
			"start": 6.11,
			"max": 6.28,
			"min": 6,
			"end": 6.12,
			"volumn": 2197.23,
			"money": 13440.92
		},
		{
			"time": "2015-09-30",
			"start": 5.93,
			"max": 6.12,
			"min": 5.81,
			"end": 5.83,
			"volumn": 1459.64,
			"money": 8659.52
		},
		{
			"time": "2015-09-29",
			"start": 5.96,
			"max": 5.98,
			"min": 5.73,
			"end": 5.83,
			"volumn": 1047.42,
			"money": 6132.72
		},
		{
			"time": "2015-09-28",
			"start": 5.86,
			"max": 6.13,
			"min": 5.85,
			"end": 6.07,
			"volumn": 952.45,
			"money": 5717.33
		},
		{
			"time": "2015-09-25",
			"start": 6.23,
			"max": 6.28,
			"min": 5.85,
			"end": 5.96,
			"volumn": 1395.27,
			"money": 8465.95
		},
		{
			"time": "2015-09-24",
			"start": 6.16,
			"max": 6.32,
			"min": 6.1,
			"end": 6.27,
			"volumn": 1434.38,
			"money": 8920.88
		},
		{
			"time": "2015-09-23",
			"start": 6.18,
			"max": 6.32,
			"min": 6.02,
			"end": 6.12,
			"volumn": 1558.54,
			"money": 9631.38
		},
		{
			"time": "2015-09-22",
			"start": 6.35,
			"max": 6.4,
			"min": 6.15,
			"end": 6.25,
			"volumn": 1893.83,
			"money": 11901.51
		},
		{
			"time": "2015-09-21",
			"start": 5.83,
			"max": 6.32,
			"min": 5.83,
			"end": 6.31,
			"volumn": 1748.35,
			"money": 10807.66
		},
		{
			"time": "2015-09-18",
			"start": 6,
			"max": 6.1,
			"min": 5.81,
			"end": 6.02,
			"volumn": 1507.09,
			"money": 8999.44
		},
		{
			"time": "2015-09-17",
			"start": 6.1,
			"max": 6.34,
			"min": 5.8,
			"end": 5.83,
			"volumn": 2135.64,
			"money": 13039.56
		},
		{
			"time": "2015-09-16",
			"start": 5.58,
			"max": 6.07,
			"min": 5.4,
			"end": 6.07,
			"volumn": 1758.57,
			"money": 10132.25
		},
		{
			"time": "2015-09-15",
			"start": 5.81,
			"max": 6.09,
			"min": 5.52,
			"end": 5.52,
			"volumn": 1617.12,
			"money": 9248.69
		},
		{
			"time": "2015-09-14",
			"start": 6.98,
			"max": 7.06,
			"min": 6.13,
			"end": 6.13,
			"volumn": 1982.9,
			"money": 12989.01
		},
		{
			"time": "2015-09-11",
			"start": 6.87,
			"max": 7.01,
			"min": 6.68,
			"end": 6.81,
			"volumn": 1371.77,
			"money": 9370.49
		},
		{
			"time": "2015-09-10",
			"start": 6.7,
			"max": 7.17,
			"min": 6.65,
			"end": 6.86,
			"volumn": 2181.33,
			"money": 15169.4
		},
		{
			"time": "2015-09-09",
			"start": 6.76,
			"max": 7.03,
			"min": 6.65,
			"end": 6.93,
			"volumn": 2105.28,
			"money": 14426.76
		},
		{
			"time": "2015-09-08",
			"start": 6.26,
			"max": 6.7,
			"min": 6.01,
			"end": 6.64,
			"volumn": 1506.53,
			"money": 9556.54
		},
		{
			"time": "2015-09-07",
			"start": 6.19,
			"max": 6.45,
			"min": 6.09,
			"end": 6.2,
			"volumn": 1605.85,
			"money": 10091.26
		},
		{
			"time": "2015-09-02",
			"start": 6.2,
			"max": 6.84,
			"min": 5.98,
			"end": 5.99,
			"volumn": 1934.95,
			"money": 12225.68
		},
		{
			"time": "2015-09-01",
			"start": 7.22,
			"max": 7.28,
			"min": 6.64,
			"end": 6.64,
			"volumn": 2645.87,
			"money": 18017.91
		},
		{
			"time": "2015-08-31",
			"start": 7.83,
			"max": 8,
			"min": 7.35,
			"end": 7.38,
			"volumn": 2984.03,
			"money": 23031.24
		},
		{
			"time": "2015-08-28",
			"start": 7.3,
			"max": 7.77,
			"min": 7.1,
			"end": 7.77,
			"volumn": 3092.6,
			"money": 23121.49
		},
		{
			"time": "2015-08-27",
			"start": 6.75,
			"max": 7.1,
			"min": 6.43,
			"end": 7.06,
			"volumn": 2903.76,
			"money": 19848.87
		},
		{
			"time": "2015-08-26",
			"start": 7.13,
			"max": 7.43,
			"min": 6.42,
			"end": 6.58,
			"volumn": 4212.04,
			"money": 29069.25
		},
		{
			"time": "2015-08-25",
			"start": 7.13,
			"max": 7.29,
			"min": 7.13,
			"end": 7.13,
			"volumn": 1838.59,
			"money": 13140.8
		},
		{
			"time": "2015-08-24",
			"start": 8.4,
			"max": 8.4,
			"min": 7.92,
			"end": 7.92,
			"volumn": 1766.39,
			"money": 14168.86
		},
		{
			"time": "2015-08-21",
			"start": 9,
			"max": 9.61,
			"min": 8.53,
			"end": 8.8,
			"volumn": 3388.27,
			"money": 30952.11
		},
		{
			"time": "2015-08-20",
			"start": 10.02,
			"max": 10.24,
			"min": 9.32,
			"end": 9.33,
			"volumn": 3902.17,
			"money": 38391.68
		},
		{
			"time": "2015-08-19",
			"start": 9.3,
			"max": 10.59,
			"min": 9.01,
			"end": 10.35,
			"volumn": 5568.96,
			"money": 53928.79
		},
		{
			"time": "2015-08-18",
			"start": 11.18,
			"max": 11.5,
			"min": 10,
			"end": 10,
			"volumn": 7332.7,
			"money": 78439.61
		},
		{
			"time": "2015-08-17",
			"start": 10.2,
			"max": 11.11,
			"min": 9.9,
			"end": 11.11,
			"volumn": 8121.86,
			"money": 86298.92
		},
		{
			"time": "2015-08-14",
			"start": 9.58,
			"max": 10.37,
			"min": 9.37,
			"end": 10.1,
			"volumn": 6001.61,
			"money": 58425.11
		},
		{
			"time": "2015-08-13",
			"start": 9.14,
			"max": 9.5,
			"min": 8.91,
			"end": 9.49,
			"volumn": 3854.19,
			"money": 35696.27
		},
		{
			"time": "2015-08-12",
			"start": 9.09,
			"max": 9.68,
			"min": 8.98,
			"end": 9.29,
			"volumn": 4238.57,
			"money": 39909.3
		},
		{
			"time": "2015-08-11",
			"start": 9.23,
			"max": 9.47,
			"min": 9,
			"end": 9.15,
			"volumn": 4294.85,
			"money": 39674.71
		},
		{
			"time": "2015-08-10",
			"start": 8.9,
			"max": 9.38,
			"min": 8.76,
			"end": 9.2,
			"volumn": 4013.11,
			"money": 36287.89
		},
		{
			"time": "2015-08-07",
			"start": 8.36,
			"max": 8.8,
			"min": 8.31,
			"end": 8.7,
			"volumn": 3092.66,
			"money": 26336.76
		},
		{
			"time": "2015-08-06",
			"start": 8.03,
			"max": 8.42,
			"min": 7.95,
			"end": 8.25,
			"volumn": 2072.21,
			"money": 17060.11
		},
		{
			"time": "2015-08-05",
			"start": 8.5,
			"max": 8.69,
			"min": 8.08,
			"end": 8.28,
			"volumn": 3533.94,
			"money": 29796.96
		},
		{
			"time": "2015-08-04",
			"start": 7.65,
			"max": 8.39,
			"min": 7.65,
			"end": 8.39,
			"volumn": 3067.22,
			"money": 24773.88
		},
		{
			"time": "2015-08-03",
			"start": 8.15,
			"max": 8.4,
			"min": 7.6,
			"end": 7.63,
			"volumn": 3098.33,
			"money": 24382.99
		},
		{
			"time": "2015-07-31",
			"start": 8.7,
			"max": 9.01,
			"min": 8.25,
			"end": 8.44,
			"volumn": 3500.61,
			"money": 30289.83
		},
		{
			"time": "2015-07-30",
			"start": 8.92,
			"max": 9.65,
			"min": 8.7,
			"end": 8.97,
			"volumn": 6022.8,
			"money": 55624.85
		},
		{
			"time": "2015-07-29",
			"start": 8.35,
			"max": 8.91,
			"min": 7.78,
			"end": 8.88,
			"volumn": 4177.18,
			"money": 34893.2
		},
		{
			"time": "2015-07-28",
			"start": 8,
			"max": 9,
			"min": 7.92,
			"end": 8.1,
			"volumn": 5114.55,
			"money": 42095.99
		},
		{
			"time": "2015-07-27",
			"start": 9.4,
			"max": 9.99,
			"min": 8.8,
			"end": 8.8,
			"volumn": 6001.51,
			"money": 56962.25
		},
		{
			"time": "2015-07-24",
			"start": 9.27,
			"max": 10.28,
			"min": 9.11,
			"end": 9.78,
			"volumn": 8446.76,
			"money": 81991.19
		},
		{
			"time": "2015-07-23",
			"start": 9,
			"max": 9.78,
			"min": 8.74,
			"end": 9.46,
			"volumn": 8496.1,
			"money": 77551.01
		},
		{
			"time": "2015-07-22",
			"start": 8.08,
			"max": 8.97,
			"min": 8.05,
			"end": 8.97,
			"volumn": 8676.75,
			"money": 75751.1
		},
		{
			"time": "2015-07-21",
			"start": 7.8,
			"max": 8.33,
			"min": 7.65,
			"end": 8.15,
			"volumn": 4631.15,
			"money": 37450.78
		},
		{
			"time": "2015-07-20",
			"start": 7.72,
			"max": 8.27,
			"min": 7.63,
			"end": 8.05,
			"volumn": 6428.2,
			"money": 51127.98
		},
		{
			"time": "2015-07-17",
			"start": 6.94,
			"max": 7.73,
			"min": 6.94,
			"end": 7.73,
			"volumn": 4835.44,
			"money": 36666.58
		},
		{
			"time": "2015-07-16",
			"start": 6.53,
			"max": 7.48,
			"min": 6.42,
			"end": 7.03,
			"volumn": 3605.77,
			"money": 25031.15
		},
		{
			"time": "2015-07-15",
			"start": 7.57,
			"max": 7.83,
			"min": 7.13,
			"end": 7.13,
			"volumn": 2729.59,
			"money": 20041.75
		},
		{
			"time": "2015-07-14",
			"start": 8.2,
			"max": 8.7,
			"min": 7.66,
			"end": 7.92,
			"volumn": 7073.81,
			"money": 58131.16
		},
		{
			"time": "2015-07-13",
			"start": 7.5,
			"max": 8.1,
			"min": 7.5,
			"end": 8.1,
			"volumn": 4573.92,
			"money": 36083.69
		},
		{
			"time": "2015-07-10",
			"start": 6.9,
			"max": 7.36,
			"min": 6.88,
			"end": 7.36,
			"volumn": 4183.37,
			"money": 30411.19
		},
		{
			"time": "2015-07-09",
			"start": 5.47,
			"max": 6.69,
			"min": 5.47,
			"end": 6.69,
			"volumn": 6661.78,
			"money": 40398.96
		},
		{
			"time": "2015-07-08",
			"start": 6.08,
			"max": 6.08,
			"min": 6.08,
			"end": 6.08,
			"volumn": 158.16,
			"money": 961.61
		},
		{
			"time": "2015-07-07",
			"start": 6.77,
			"max": 6.88,
			"min": 6.75,
			"end": 6.75,
			"volumn": 383.45,
			"money": 2590.85
		},
		{
			"time": "2015-07-06",
			"start": 9.1,
			"max": 9.1,
			"min": 7.5,
			"end": 7.5,
			"volumn": 2968.98,
			"money": 24002.6
		},
		{
			"time": "2015-07-03",
			"start": 8.38,
			"max": 8.87,
			"min": 8.33,
			"end": 8.33,
			"volumn": 2641.73,
			"money": 22223.44
		},
		{
			"time": "2015-07-02",
			"start": 10.38,
			"max": 10.38,
			"min": 9.26,
			"end": 9.26,
			"volumn": 2611.06,
			"money": 24620.81
		},
		{
			"time": "2015-07-01",
			"start": 11.31,
			"max": 11.61,
			"min": 10.29,
			"end": 10.29,
			"volumn": 3401.45,
			"money": 37212.87
		},
		{
			"time": "2015-06-30",
			"start": 10.08,
			"max": 11.52,
			"min": 10.01,
			"end": 11.43,
			"volumn": 4205.99,
			"money": 45381.06
		},
		{
			"time": "2015-06-29",
			"start": 12.96,
			"max": 12.96,
			"min": 11.12,
			"end": 11.12,
			"volumn": 3745.68,
			"money": 44252.47
		},
		{
			"time": "2015-06-26",
			"start": 13.15,
			"max": 13.41,
			"min": 12.36,
			"end": 12.36,
			"volumn": 3675.91,
			"money": 46759.29
		},
		{
			"time": "2015-06-25",
			"start": 13.71,
			"max": 14.46,
			"min": 13.3,
			"end": 13.73,
			"volumn": 4907.6,
			"money": 68290.5
		},
		{
			"time": "2015-06-24",
			"start": 13.35,
			"max": 13.85,
			"min": 12.9,
			"end": 13.71,
			"volumn": 3656.8,
			"money": 49219.92
		},
		{
			"time": "2015-06-23",
			"start": 13.26,
			"max": 13.64,
			"min": 12.26,
			"end": 13.2,
			"volumn": 3566.35,
			"money": 45904.78
		},
		{
			"time": "2015-06-19",
			"start": 14.45,
			"max": 14.97,
			"min": 13.62,
			"end": 13.62,
			"volumn": 3621.43,
			"money": 51108.31
		},
		{
			"time": "2015-06-18",
			"start": 14.5,
			"max": 16,
			"min": 14.3,
			"end": 15.13,
			"volumn": 5046.59,
			"money": 77208.53
		},
		{
			"time": "2015-06-17",
			"start": 14.46,
			"max": 15,
			"min": 14,
			"end": 14.6,
			"volumn": 3483.7,
			"money": 50495.84
		},
		{
			"time": "2015-06-16",
			"start": 14,
			"max": 15.1,
			"min": 13.42,
			"end": 14.8,
			"volumn": 4844.74,
			"money": 68953.77
		},
		{
			"time": "2015-06-15",
			"start": 14.5,
			"max": 15.09,
			"min": 14.1,
			"end": 14.39,
			"volumn": 4008.2,
			"money": 58703.24
		},
		{
			"time": "2015-06-12",
			"start": 14.07,
			"max": 14.97,
			"min": 14,
			"end": 14.37,
			"volumn": 5399.47,
			"money": 78592.45
		},
		{
			"time": "2015-06-11",
			"start": 13.4,
			"max": 14.5,
			"min": 13.19,
			"end": 14.13,
			"volumn": 5472.93,
			"money": 76037.31
		},
		{
			"time": "2015-06-10",
			"start": 12.95,
			"max": 13.47,
			"min": 12.71,
			"end": 13.37,
			"volumn": 4087.74,
			"money": 53951.64
		},
		{
			"time": "2015-06-09",
			"start": 13.46,
			"max": 13.46,
			"min": 12.85,
			"end": 13.12,
			"volumn": 4371.67,
			"money": 57352.21
		},
		{
			"time": "2015-06-08",
			"start": 12.88,
			"max": 13.69,
			"min": 12.59,
			"end": 13.61,
			"volumn": 7406.58,
			"money": 98236.3
		},
		{
			"time": "2015-06-05",
			"start": 12.38,
			"max": 12.94,
			"min": 12.24,
			"end": 12.77,
			"volumn": 5386.66,
			"money": 68208.51
		},
		{
			"time": "2015-06-04",
			"start": 12.55,
			"max": 12.81,
			"min": 11.29,
			"end": 12.31,
			"volumn": 3905.22,
			"money": 47415.64
		},
		{
			"time": "2015-06-03",
			"start": 13,
			"max": 13.15,
			"min": 12.2,
			"end": 12.54,
			"volumn": 4559.61,
			"money": 57928.58
		},
		{
			"time": "2015-06-02",
			"start": 11.84,
			"max": 12.77,
			"min": 11.48,
			"end": 12.73,
			"volumn": 4405.17,
			"money": 52747.92
		},
		{
			"time": "2015-06-01",
			"start": 11.29,
			"max": 11.8,
			"min": 11,
			"end": 11.74,
			"volumn": 3308.94,
			"money": 38060.2
		},
		{
			"time": "2015-05-29",
			"start": 11.3,
			"max": 11.65,
			"min": 10.31,
			"end": 11.11,
			"volumn": 3434.12,
			"money": 38143.88
		},
		{
			"time": "2015-05-28",
			"start": 12.79,
			"max": 12.99,
			"min": 11.39,
			"end": 11.4,
			"volumn": 4979.63,
			"money": 61398.36
		},
		{
			"time": "2015-05-27",
			"start": 12.89,
			"max": 13.18,
			"min": 12.5,
			"end": 12.66,
			"volumn": 4886.86,
			"money": 62349.63
		},
		{
			"time": "2015-05-26",
			"start": 12.4,
			"max": 13.08,
			"min": 11.96,
			"end": 12.92,
			"volumn": 5838.51,
			"money": 73409.96
		},
		{
			"time": "2015-05-25",
			"start": 11.7,
			"max": 12.87,
			"min": 11.61,
			"end": 12.3,
			"volumn": 6405.2,
			"money": 78937.32
		},
		{
			"time": "2015-05-22",
			"start": 11.39,
			"max": 11.89,
			"min": 11.18,
			"end": 11.71,
			"volumn": 5519.87,
			"money": 63515.93
		},
		{
			"time": "2015-05-21",
			"start": 11.27,
			"max": 11.35,
			"min": 11.05,
			"end": 11.33,
			"volumn": 4132.8,
			"money": 46318.65
		},
		{
			"time": "2015-05-20",
			"start": 11.23,
			"max": 11.48,
			"min": 10.81,
			"end": 11.32,
			"volumn": 6859.76,
			"money": 76273.65
		},
		{
			"time": "2015-05-19",
			"start": 11.5,
			"max": 11.78,
			"min": 11,
			"end": 11.33,
			"volumn": 6864.05,
			"money": 77731.34
		},
		{
			"time": "2015-05-18",
			"start": 11.68,
			"max": 12.25,
			"min": 11.45,
			"end": 12.15,
			"volumn": 4236.5,
			"money": 50728.6
		},
		{
			"time": "2015-05-15",
			"start": 11.19,
			"max": 12.28,
			"min": 10.8,
			"end": 11.69,
			"volumn": 5515.66,
			"money": 64496.32
		},
		{
			"time": "2015-05-14",
			"start": 10.18,
			"max": 11.19,
			"min": 10.11,
			"end": 11.19,
			"volumn": 4181.77,
			"money": 45399.19
		},
		{
			"time": "2015-05-13",
			"start": 10.2,
			"max": 10.32,
			"min": 10,
			"end": 10.17,
			"volumn": 2247.39,
			"money": 22781.23
		},
		{
			"time": "2015-05-12",
			"start": 10.3,
			"max": 10.36,
			"min": 10.01,
			"end": 10.28,
			"volumn": 2010.65,
			"money": 20480.63
		},
		{
			"time": "2015-05-11",
			"start": 9.98,
			"max": 10.36,
			"min": 9.89,
			"end": 10.3,
			"volumn": 2101.26,
			"money": 21367.53
		},
		{
			"time": "2015-05-08",
			"start": 9.82,
			"max": 10.08,
			"min": 9.65,
			"end": 9.94,
			"volumn": 1609.43,
			"money": 15845.56
		},
		{
			"time": "2015-05-07",
			"start": 9.62,
			"max": 9.84,
			"min": 9.45,
			"end": 9.6,
			"volumn": 1270.86,
			"money": 12241.17
		},
		{
			"time": "2015-05-06",
			"start": 10.18,
			"max": 10.25,
			"min": 9.6,
			"end": 9.66,
			"volumn": 1754.7,
			"money": 17347.05
		},
		{
			"time": "2015-05-05",
			"start": 10.68,
			"max": 10.68,
			"min": 10,
			"end": 10.02,
			"volumn": 1903.5,
			"money": 19598.64
		},
		{
			"time": "2015-05-04",
			"start": 10.61,
			"max": 10.84,
			"min": 10.55,
			"end": 10.72,
			"volumn": 1554.93,
			"money": 16624.43
		},
		{
			"time": "2015-04-30",
			"start": 10.4,
			"max": 11.05,
			"min": 10.4,
			"end": 10.63,
			"volumn": 2169.06,
			"money": 23333.06
		},
		{
			"time": "2015-04-29",
			"start": 10.31,
			"max": 10.64,
			"min": 10.25,
			"end": 10.4,
			"volumn": 1614.77,
			"money": 16910.96
		},
		{
			"time": "2015-04-28",
			"start": 11.07,
			"max": 11.25,
			"min": 10.46,
			"end": 10.49,
			"volumn": 2552.21,
			"money": 27515.88
		},
		{
			"time": "2015-04-27",
			"start": 10.6,
			"max": 11.67,
			"min": 10.6,
			"end": 11.06,
			"volumn": 4216.46,
			"money": 47534.53
		},
		{
			"time": "2015-04-24",
			"start": 10.5,
			"max": 10.85,
			"min": 10.25,
			"end": 10.61,
			"volumn": 2326.42,
			"money": 24599.63
		},
		{
			"time": "2015-04-23",
			"start": 10.26,
			"max": 10.93,
			"min": 10.11,
			"end": 10.7,
			"volumn": 3767.77,
			"money": 39643.72
		},
		{
			"time": "2015-04-22",
			"start": 10.22,
			"max": 10.42,
			"min": 10.08,
			"end": 10.23,
			"volumn": 2868.77,
			"money": 29316.49
		},
		{
			"time": "2015-04-21",
			"start": 9.56,
			"max": 10.2,
			"min": 9.4,
			"end": 10.19,
			"volumn": 3493.61,
			"money": 34865.01
		},
		{
			"time": "2015-04-20",
			"start": 9.71,
			"max": 9.99,
			"min": 9.42,
			"end": 9.6,
			"volumn": 2462.09,
			"money": 23769.5
		},
		{
			"time": "2015-04-17",
			"start": 9.79,
			"max": 10.09,
			"min": 9.16,
			"end": 9.82,
			"volumn": 4473.33,
			"money": 43367.29
		},
		{
			"time": "2015-04-16",
			"start": 9.36,
			"max": 10.04,
			"min": 8.9,
			"end": 9.66,
			"volumn": 2851.79,
			"money": 27210.03
		},
		{
			"time": "2015-04-15",
			"start": 10.03,
			"max": 10.28,
			"min": 9.37,
			"end": 9.43,
			"volumn": 3138.11,
			"money": 30713.13
		},
		{
			"time": "2015-04-14",
			"start": 10.33,
			"max": 10.33,
			"min": 9.98,
			"end": 10.03,
			"volumn": 2951.59,
			"money": 29803.4
		},
		{
			"time": "2015-04-13",
			"start": 10.3,
			"max": 10.63,
			"min": 10.2,
			"end": 10.33,
			"volumn": 3196.99,
			"money": 33351.76
		},
		{
			"time": "2015-04-10",
			"start": 10.25,
			"max": 10.5,
			"min": 10,
			"end": 10.28,
			"volumn": 2565.64,
			"money": 26337.81
		},
		{
			"time": "2015-04-09",
			"start": 9.78,
			"max": 10.48,
			"min": 9.58,
			"end": 10.22,
			"volumn": 4316.86,
			"money": 43647.33
		},
		{
			"time": "2015-04-08",
			"start": 9.46,
			"max": 9.86,
			"min": 9.02,
			"end": 9.78,
			"volumn": 3683.43,
			"money": 34664.66
		},
		{
			"time": "2015-04-07",
			"start": 9.53,
			"max": 9.87,
			"min": 9.38,
			"end": 9.44,
			"volumn": 3874.06,
			"money": 37076.79
		},
		{
			"time": "2015-04-03",
			"start": 8.6,
			"max": 9.48,
			"min": 8.4,
			"end": 9.48,
			"volumn": 3760.78,
			"money": 34361.28
		},
		{
			"time": "2015-04-02",
			"start": 8.45,
			"max": 8.74,
			"min": 8.18,
			"end": 8.62,
			"volumn": 3076.83,
			"money": 26112.98
		},
		{
			"time": "2015-04-01",
			"start": 8.16,
			"max": 8.61,
			"min": 8.06,
			"end": 8.45,
			"volumn": 2396.89,
			"money": 20000.88
		},
		{
			"time": "2015-03-31",
			"start": 8.18,
			"max": 8.5,
			"min": 8.13,
			"end": 8.16,
			"volumn": 1938,
			"money": 15989.33
		},
		{
			"time": "2015-03-30",
			"start": 8.2,
			"max": 8.53,
			"min": 8.11,
			"end": 8.26,
			"volumn": 2820.79,
			"money": 23532.99
		},
		{
			"time": "2015-03-27",
			"start": 8.4,
			"max": 8.4,
			"min": 8.01,
			"end": 8.28,
			"volumn": 4634.57,
			"money": 38032.68
		},
		{
			"time": "2015-03-26",
			"start": 7.39,
			"max": 8.12,
			"min": 7.32,
			"end": 8.12,
			"volumn": 4209.29,
			"money": 33643.03
		},
		{
			"time": "2015-03-25",
			"start": 7.36,
			"max": 7.6,
			"min": 7.2,
			"end": 7.38,
			"volumn": 1845.49,
			"money": 13550.21
		},
		{
			"time": "2015-03-24",
			"start": 7.62,
			"max": 7.62,
			"min": 7.2,
			"end": 7.35,
			"volumn": 2264.5,
			"money": 16699.5
		},
		{
			"time": "2015-03-23",
			"start": 7.54,
			"max": 7.68,
			"min": 7.46,
			"end": 7.59,
			"volumn": 1834.28,
			"money": 13855.41
		},
		{
			"time": "2015-03-20",
			"start": 7.33,
			"max": 7.65,
			"min": 7.25,
			"end": 7.55,
			"volumn": 2470.71,
			"money": 18588.13
		},
		{
			"time": "2015-03-19",
			"start": 7.38,
			"max": 7.66,
			"min": 7.26,
			"end": 7.37,
			"volumn": 2450.54,
			"money": 18247.82
		},
		{
			"time": "2015-03-18",
			"start": 7.12,
			"max": 7.46,
			"min": 7.1,
			"end": 7.37,
			"volumn": 2854.4,
			"money": 20828.88
		},
		{
			"time": "2015-03-17",
			"start": 6.95,
			"max": 7.13,
			"min": 6.87,
			"end": 7.09,
			"volumn": 2457.13,
			"money": 17162.55
		},
		{
			"time": "2015-03-16",
			"start": 6.8,
			"max": 7.06,
			"min": 6.79,
			"end": 6.95,
			"volumn": 1858.78,
			"money": 12924.21
		},
		{
			"time": "2015-03-13",
			"start": 6.85,
			"max": 6.93,
			"min": 6.69,
			"end": 6.79,
			"volumn": 1167.06,
			"money": 7909.64
		},
		{
			"time": "2015-03-12",
			"start": 6.84,
			"max": 7.06,
			"min": 6.71,
			"end": 6.85,
			"volumn": 2152.85,
			"money": 14835.41
		},
		{
			"time": "2015-03-11",
			"start": 6.98,
			"max": 7.04,
			"min": 6.77,
			"end": 6.84,
			"volumn": 1445.77,
			"money": 9886.53
		},
		{
			"time": "2015-03-10",
			"start": 6.73,
			"max": 6.99,
			"min": 6.7,
			"end": 6.97,
			"volumn": 1999.93,
			"money": 13770.37
		},
		{
			"time": "2015-03-09",
			"start": 6.59,
			"max": 6.88,
			"min": 6.4,
			"end": 6.72,
			"volumn": 2243.1,
			"money": 14951.1
		},
		{
			"time": "2015-03-06",
			"start": 6.47,
			"max": 6.6,
			"min": 6.35,
			"end": 6.5,
			"volumn": 1270.49,
			"money": 8229.96
		},
		{
			"time": "2015-03-05",
			"start": 6.43,
			"max": 6.54,
			"min": 6.34,
			"end": 6.47,
			"volumn": 1363.09,
			"money": 8789.45
		},
		{
			"time": "2015-03-04",
			"start": 6.35,
			"max": 6.45,
			"min": 6.32,
			"end": 6.41,
			"volumn": 1295.42,
			"money": 8265.63
		},
		{
			"time": "2015-03-03",
			"start": 6.16,
			"max": 6.47,
			"min": 6.07,
			"end": 6.42,
			"volumn": 2266.82,
			"money": 14214.79
		},
		{
			"time": "2015-03-02",
			"start": 6.22,
			"max": 6.25,
			"min": 6.07,
			"end": 6.17,
			"volumn": 1277.88,
			"money": 7850.34
		},
		{
			"time": "2015-02-27",
			"start": 6.16,
			"max": 6.33,
			"min": 6.15,
			"end": 6.19,
			"volumn": 908.98,
			"money": 5663.74
		},
		{
			"time": "2015-02-26",
			"start": 6.12,
			"max": 6.18,
			"min": 6.1,
			"end": 6.16,
			"volumn": 703.72,
			"money": 4328.56
		},
		{
			"time": "2015-02-25",
			"start": 6.09,
			"max": 6.18,
			"min": 6.03,
			"end": 6.12,
			"volumn": 766.56,
			"money": 4678.73
		},
		{
			"time": "2015-02-17",
			"start": 6.11,
			"max": 6.15,
			"min": 6.06,
			"end": 6.08,
			"volumn": 766.73,
			"money": 4677.31
		},
		{
			"time": "2015-02-16",
			"start": 6.03,
			"max": 6.14,
			"min": 6.01,
			"end": 6.11,
			"volumn": 814.71,
			"money": 4948.33
		},
		{
			"time": "2015-02-13",
			"start": 5.98,
			"max": 6.34,
			"min": 5.93,
			"end": 6.08,
			"volumn": 1992.56,
			"money": 12135.01
		},
		{
			"time": "2015-02-12",
			"start": 5.72,
			"max": 6.1,
			"min": 5.66,
			"end": 6.01,
			"volumn": 2572.38,
			"money": 15312.73
		},
		{
			"time": "2015-02-11",
			"start": 5.69,
			"max": 5.77,
			"min": 5.67,
			"end": 5.72,
			"volumn": 602.66,
			"money": 3443.99
		},
		{
			"time": "2015-02-10",
			"start": 5.46,
			"max": 5.75,
			"min": 5.43,
			"end": 5.73,
			"volumn": 1298.63,
			"money": 7307.42
		},
		{
			"time": "2015-02-09",
			"start": 5.59,
			"max": 5.59,
			"min": 5.47,
			"end": 5.48,
			"volumn": 435.98,
			"money": 2410.09
		},
		{
			"time": "2015-02-06",
			"start": 5.5,
			"max": 5.62,
			"min": 5.48,
			"end": 5.61,
			"volumn": 630.6,
			"money": 3490.13
		},
		{
			"time": "2015-02-05",
			"start": 5.58,
			"max": 5.59,
			"min": 5.47,
			"end": 5.48,
			"volumn": 636.7,
			"money": 3521.89
		},
		{
			"time": "2015-02-04",
			"start": 5.63,
			"max": 5.67,
			"min": 5.52,
			"end": 5.52,
			"volumn": 635.38,
			"money": 3548.96
		},
		{
			"time": "2015-02-03",
			"start": 5.63,
			"max": 5.67,
			"min": 5.56,
			"end": 5.65,
			"volumn": 434.34,
			"money": 2439.08
		},
		{
			"time": "2015-02-02",
			"start": 5.55,
			"max": 5.65,
			"min": 5.51,
			"end": 5.61,
			"volumn": 338.71,
			"money": 1896.01
		},
		{
			"time": "2015-01-30",
			"start": 5.78,
			"max": 5.85,
			"min": 5.6,
			"end": 5.65,
			"volumn": 574.74,
			"money": 3270.25
		},
		{
			"time": "2015-01-29",
			"start": 5.8,
			"max": 5.87,
			"min": 5.74,
			"end": 5.78,
			"volumn": 605.55,
			"money": 3516.14
		},
		{
			"time": "2015-01-28",
			"start": 5.89,
			"max": 5.95,
			"min": 5.82,
			"end": 5.85,
			"volumn": 653.47,
			"money": 3846.52
		},
		{
			"time": "2015-01-27",
			"start": 5.72,
			"max": 5.94,
			"min": 5.7,
			"end": 5.89,
			"volumn": 1398.84,
			"money": 8194.18
		},
		{
			"time": "2015-01-26",
			"start": 5.65,
			"max": 5.73,
			"min": 5.58,
			"end": 5.72,
			"volumn": 930.19,
			"money": 5247.01
		},
		{
			"time": "2015-01-23",
			"start": 5.68,
			"max": 5.72,
			"min": 5.6,
			"end": 5.62,
			"volumn": 758.13,
			"money": 4284.8
		},
		{
			"time": "2015-01-22",
			"start": 5.49,
			"max": 5.78,
			"min": 5.41,
			"end": 5.71,
			"volumn": 1139.94,
			"money": 6386.11
		},
		{
			"time": "2015-01-21",
			"start": 5.36,
			"max": 5.58,
			"min": 5.33,
			"end": 5.55,
			"volumn": 701.11,
			"money": 3840.84
		},
		{
			"time": "2015-01-20",
			"start": 5.23,
			"max": 5.35,
			"min": 5.22,
			"end": 5.33,
			"volumn": 817.97,
			"money": 4326.47
		},
		{
			"time": "2015-01-19",
			"start": 5.6,
			"max": 5.67,
			"min": 5.12,
			"end": 5.16,
			"volumn": 1248.82,
			"money": 6669.96
		},
		{
			"time": "2015-01-16",
			"start": 5.67,
			"max": 5.73,
			"min": 5.66,
			"end": 5.69,
			"volumn": 399.54,
			"money": 2274.94
		},
		{
			"time": "2015-01-15",
			"start": 5.6,
			"max": 5.67,
			"min": 5.57,
			"end": 5.67,
			"volumn": 361.28,
			"money": 2031.66
		},
		{
			"time": "2015-01-14",
			"start": 5.62,
			"max": 5.69,
			"min": 5.61,
			"end": 5.62,
			"volumn": 321.27,
			"money": 1812.93
		},
		{
			"time": "2015-01-13",
			"start": 5.64,
			"max": 5.71,
			"min": 5.58,
			"end": 5.65,
			"volumn": 375.35,
			"money": 2120.87
		},
		{
			"time": "2015-01-12",
			"start": 5.79,
			"max": 5.79,
			"min": 5.58,
			"end": 5.6,
			"volumn": 516.19,
			"money": 2921.05
		},
		{
			"time": "2015-01-09",
			"start": 5.95,
			"max": 5.97,
			"min": 5.8,
			"end": 5.82,
			"volumn": 701.39,
			"money": 4123.5
		},
		{
			"time": "2015-01-08",
			"start": 5.95,
			"max": 6.06,
			"min": 5.91,
			"end": 5.97,
			"volumn": 676.75,
			"money": 4056.12
		},
		{
			"time": "2015-01-07",
			"start": 6,
			"max": 6.04,
			"min": 5.92,
			"end": 5.96,
			"volumn": 546.93,
			"money": 3267.16
		},
		{
			"time": "2015-01-06",
			"start": 5.89,
			"max": 6.09,
			"min": 5.84,
			"end": 6.07,
			"volumn": 1169.3,
			"money": 6980.48
		},
		{
			"time": "2015-01-05",
			"start": 5.89,
			"max": 6,
			"min": 5.75,
			"end": 5.94,
			"volumn": 806.1,
			"money": 4751.15
		}
	];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window.G2;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview
	 * @ignore
	 */
	
	'use strict';
	
	var G2 = __webpack_require__(3);
	var Util = G2.Util;
	var Canvas = G2.Canvas;
	var Group = Canvas.Group;
	
	var Range = function Range(cfg) {
	  Range.superclass.constructor.call(this, cfg);
	};
	
	Range.CFG = {
	  /**
	   * 范围
	   * @type {Array}
	   */
	  range: null,
	  /**
	   * 中滑块属性
	   * @type {ATTRS}
	   */
	  middleAttr: null,
	  /**
	   * 背景
	   * @type {G-Element}
	   */
	  backgroundElement: null,
	  /**
	   * 下滑块
	   * @type {G-Element}
	   */
	  minHandleElement: null,
	  /**
	   * 上滑块
	   * @type {G-Element}
	   */
	  maxHandleElement: null,
	  /**
	   * 中块
	   * @type {G-Element}
	   */
	  middleHandleElement: null,
	  /**
	   * 当前的激活的元素
	   * @type {G-Element}
	   */
	  currentTarget: null,
	  /**
	   * 布局方式： horizontal，vertical
	   * @type {String}
	   */
	  layout: 'vertical',
	  /**
	   * 宽
	   * @type {Number}
	   */
	  width: null,
	  /**
	   * 高
	   * @type {Number}
	   */
	  height: null,
	  /**
	   * 当前的PageX
	   * @type {Number}
	   */
	  pageX: null,
	  /**
	   * 当前的PageY
	   * @type {Number}
	   */
	  pageY: null,
	  /**
	   * 是否参与动画
	   * @type {Boolean}
	   */
	  animate: false,
	  /**
	   * 可操作性，false 则不滑动
	   * @type {Boolean}
	   */
	  operable: true
	};
	
	Util.extend(Range, Group);
	
	Util.augment(Range, {
	  _beforeRenderUI: function _beforeRenderUI() {
	    var layout = this.get('layout');
	    var backgroundElement = this.get('backgroundElement');
	    var minHandleElement = this.get('minHandleElement');
	    var maxHandleElement = this.get('maxHandleElement');
	    var middleHandleElement = this.addShape('rect', {
	      attrs: this.get('middleAttr')
	    });
	    var trigerCursor = layout === 'vertical' ? 'ns-resize' : 'ew-resize';
	    this.add([backgroundElement, minHandleElement, maxHandleElement]);
	    this.set('middleHandleElement', middleHandleElement);
	    backgroundElement.set('zIndex', 0);
	    middleHandleElement.set('zIndex', 1);
	    minHandleElement.set('zIndex', 2);
	    maxHandleElement.set('zIndex', 2);
	    if (this.get('operable')) {
	      middleHandleElement.set('cursor', 'move');
	      Util.each(minHandleElement.get('children'), function (child) {
	        child.set('cursor', trigerCursor);
	      });
	      Util.each(maxHandleElement.get('children'), function (child) {
	        child.set('cursor', trigerCursor);
	      });
	      // minHandleElement.set('cursor', trigerCursor);
	      // maxHandleElement.set('cursor', trigerCursor);
	    }
	    this.sort();
	  },
	  _renderUI: function _renderUI() {
	    var layout = this.get('layout');
	    if (layout === 'horizontal') {
	      this._renderHorizontal();
	    } else {
	      this._renderVertical();
	    }
	  },
	  _transform: function _transform(layout) {
	    var range = this.get('range');
	    var minRatio = range[0] / 100;
	    var maxRatio = range[1] / 100;
	    var width = this.get('width');
	    var height = this.get('height');
	    var minHandleElement = this.get('minHandleElement');
	    var maxHandleElement = this.get('maxHandleElement');
	    var middleHandleElement = this.get('middleHandleElement');
	
	    minHandleElement.initTransform();
	    maxHandleElement.initTransform();
	
	    if (layout === 'horizontal') {
	      middleHandleElement.attr({
	        x: width * minRatio,
	        y: 0,
	        width: (maxRatio - minRatio) * width,
	        height: height
	      });
	      minHandleElement.translate(minRatio * width, 0);
	      maxHandleElement.translate(maxRatio * width, 0);
	    } else {
	      middleHandleElement.attr({
	        x: 0,
	        y: height * (1 - maxRatio),
	        width: width,
	        height: (maxRatio - minRatio) * height
	      });
	      minHandleElement.translate(width / 2, (1 - minRatio) * height);
	      maxHandleElement.translate(width / 2, (1 - maxRatio) * height);
	    }
	  },
	  _renderHorizontal: function _renderHorizontal() {
	    this._transform('horizontal');
	  },
	  _renderVertical: function _renderVertical() {
	    this._transform('vertical');
	  },
	  _bindUI: function _bindUI() {
	    if (this.get('operable')) {
	      this.on('mousedown', Util.wrapBehavior(this, '_onMouseDown'));
	      this.on('mousemove', Util.wrapBehavior(this, '_onMouseMove'));
	      this.on('mouseleave', Util.wrapBehavior(this, '_onMouseLeave'));
	    }
	  },
	  // 判断是否是该元素
	  _isElement: function _isElement(target, name) {
	    var element = this.get(name);
	    if (target === element) {
	      return true;
	    }
	    if (element.isGroup) {
	      var elementChildren = element.get('children');
	      return elementChildren.indexOf(target) > -1;
	    }
	    return false;
	  },
	  _getRange: function _getRange(diff, range) {
	    var rst = diff + range;
	    rst = rst > 100 ? 100 : rst;
	    rst = rst < 0 ? 0 : rst;
	    return rst;
	  },
	  /**
	   * 更新状态
	   * @param {String} dim x || y
	   * @param {Object} ev DOM 原生事件
	   */
	  _updateStatus: function _updateStatus(dim, ev) {
	    var totalLength = dim === 'x' ? this.get('width') : this.get('height');
	    var ucDim = Util.ucfirst(dim);
	    var range = this.get('range');
	    var page = this.get('page' + ucDim);
	    var currentTarget = this.get('currentTarget');
	    var rangeStash = this.get('rangeStash');
	    var layout = this.get('layout');
	    var sign = layout === 'vertical' ? -1 : 1;
	    var currentPage = ev['page' + ucDim];
	    var diffPage = currentPage - page;
	    var diffRange = diffPage / totalLength * 100 * sign;
	    var diffStashRange;
	
	    if (range[1] <= range[0]) {
	      if (this._isElement(currentTarget, 'minHandleElement') || this._isElement(currentTarget, 'maxHandleElement')) {
	        range[0] = this._getRange(diffRange, range[0]);
	        range[1] = this._getRange(diffRange, range[0]);
	      }
	    } else {
	      if (this._isElement(currentTarget, 'minHandleElement')) {
	        range[0] = this._getRange(diffRange, range[0]);
	      }
	      if (this._isElement(currentTarget, 'maxHandleElement')) {
	        range[1] = this._getRange(diffRange, range[1]);
	      }
	    }
	
	    if (this._isElement(currentTarget, 'middleHandleElement')) {
	      diffStashRange = rangeStash[1] - rangeStash[0];
	      range[0] = this._getRange(diffRange, range[0]);
	      range[1] = range[0] + diffStashRange;
	      if (range[1] > 100) {
	        range[1] = 100;
	        range[0] = range[1] - diffStashRange;
	      }
	    }
	
	    this.fire('rangeChange', {
	      range: range
	    });
	
	    this.set('page' + ucDim, currentPage);
	    this._renderUI();
	    this.get('canvas').draw(); // need delete
	    return;
	  },
	  _onMouseLeave: function _onMouseLeave() {
	    var containerDOM = this.get('canvas').get('containerDOM');
	    containerDOM.style.cursor = 'default';
	  },
	  _onMouseMove: function _onMouseMove(ev) {
	    var cursor = ev.currentTarget.get('cursor', true);
	    var containerDOM = this.get('canvas').get('containerDOM');
	    if (containerDOM) {
	      if (cursor) {
	        containerDOM.style.cursor = cursor;
	      } else {
	        containerDOM.style.cursor = 'default';
	      }
	    }
	  },
	  _onMouseDown: function _onMouseDown(ev) {
	    var currentTarget = ev.currentTarget;
	    var originEvent = ev.event;
	    var range = this.get('range');
	    originEvent.stopPropagation();
	    originEvent.preventDefault();
	    this.set('pageX', originEvent.pageX);
	    this.set('pageY', originEvent.pageY);
	    this.set('currentTarget', currentTarget);
	    this.set('rangeStash', [range[0], range[1]]);
	    this._bindCanvasEvents();
	  },
	  _bindCanvasEvents: function _bindCanvasEvents() {
	    this.onMouseMoveListener = Util.addEventListener(document, 'mousemove', Util.wrapBehavior(this, '_onCanvasMouseMove'));
	    this.onMouseUpListener = Util.addEventListener(document, 'mouseup', Util.wrapBehavior(this, '_onCanvasMouseUp'));
	  },
	  _onCanvasMouseMove: function _onCanvasMouseMove(ev) {
	    var layout = this.get('layout');
	    if (layout === 'horizontal') {
	      this._updateStatus('x', ev);
	    } else {
	      this._updateStatus('y', ev);
	    }
	  },
	  _onCanvasMouseUp: function _onCanvasMouseUp() {
	    this._removeDocumentEvents();
	  },
	  _removeDocumentEvents: function _removeDocumentEvents() {
	    this.onMouseMoveListener.remove();
	    this.onMouseUpListener.remove();
	  }
	});
	
	module.exports = Range;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview G2's plugin for datazoom.
	 * @author sima.zhang1990@gmail.com
	 */
	
	'use strict';
	
	var G2 = __webpack_require__(3);
	var Util = G2.Util;
	var Base = G2.Base;
	var DataFrame = G2.Frame;
	var Canvas = G2.Canvas;
	var Range = __webpack_require__(4);
	var OFFSET = 5;
	
	var Slider = function Slider(cfg) {
	  Slider.superclass.constructor.call(this, cfg);
	  this._init();
	};
	
	Slider.ATTRS = {
	  charts: null,
	  height: null,
	  width: null,
	  start: null,
	  end: null,
	  domId: null,
	  xDim: null,
	  yDim: null,
	  /**
	   * 中间滑块
	   * @type {ATTRS}
	   */
	  middleAttr: {
	    fill: '#D5DAE3',
	    fillOpacity: 0.2
	  },
	  backgroundAttr: {
	    stroke: '#E2E2E2',
	    fill: '#F3F3F3',
	    opacity: 0.2,
	    lineWidth: 1
	  },
	  range: [0, 100],
	  layout: 'horizontal',
	  textAttr: {
	    fill: '#333'
	  },
	  handleIcon: 'https://t.alipayobjects.com/images/rmsweb/T1YohhXd4bXXXXXXXX.png'
	};
	
	Util.extend(Slider, Base);
	
	Util.augment(Slider, {
	  _init: function _init() {
	    this.set('container', document.getElementById(this.get('domId')));
	    this.set('firstRender', 'true');
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var forceFit = chart.get('parent') ? chart.get('parent').get('forceFit') : chart.get('forceFit');
	    if (forceFit) {
	      window.addEventListener('resize', Util.wrapBehavior(this, '_initForceFitEvent'));
	    }
	  },
	  _initForceFitEvent: function _initForceFitEvent() {
	    var timer = setTimeout(Util.wrapBehavior(this, 'forceFit'), 200);
	    clearTimeout(this.get('resizeTimer'));
	    this.set('resizeTimer', timer);
	  },
	  forceFit: function forceFit() {
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var width = chart.get('parent') ? chart.get('parent').get('width') : chart.get('width');
	    var height = this.get('height');
	    if (width !== this.get('width')) {
	      var canvas = this.get('canvas');
	      var filters = chart.get('options').filters;
	      var xDim = this.get('xDim');
	      this.set('start', filters[xDim][0]);
	      this.set('end', filters[xDim][1]);
	      this.set('width', width);
	      canvas.changeSize(width, height);
	      this.set('changeSize', true);
	      this.repaint();
	    }
	  },
	  _initCanvas: function _initCanvas() {
	    var width = this.get('width');
	    var height = this.get('height');
	    var canvas = new Canvas({
	      width: width,
	      height: height,
	      containerDOM: this.get('container'),
	      capture: false
	    });
	    canvas.set('fontFamily', G2.Global.fontFamily);
	    // style canvas
	    var node = canvas.get('el');
	    node.style.position = 'absolute';
	    node.style.top = 0;
	    node.style.left = 0;
	    node.style.zIndex = 3;
	    this.set('canvas', canvas);
	  },
	  _initBackground: function _initBackground(linkChart) {
	    var data = linkChart.get('data');
	    if (!(data instanceof DataFrame)) {
	      data = new DataFrame(data);
	    }
	    var options = linkChart.get('options');
	
	    var xDim = this.get('xDim');
	    var yDim = this.get('yDim');
	    var xScale;
	    if (this.get('changeSize')) {
	      xScale = this.get('xScale');
	    } else {
	      var scaleAssist = linkChart.get('scaleAssist');
	      scaleAssist.defs = Util.mix({}, true, scaleAssist.defs, options.scales);
	      xScale = scaleAssist.createScale(xDim, data);
	    }
	
	    if (yDim) {
	      // 如果声明了 yDim, 则创建滑块背景图
	      var bgChart = new G2.Chart({
	        id: this.get('domId'),
	        width: this.get('plotWidth'),
	        height: this.get('height'),
	        plotCfg: {
	          margin: 0
	        }
	      });
	      bgChart.source(data);
	      bgChart.col(xDim, {
	        range: [0, 1],
	        nice: false
	      });
	      bgChart.axis(false);
	      bgChart.tooltip(false);
	      bgChart.legend(false);
	      bgChart.area().position(xDim + '*' + yDim).color('#CED1D4');
	      bgChart.line().position(xDim + '*' + yDim).color('#CED1D4');
	      bgChart.render();
	      // 自动对齐
	      var canvas = bgChart.get('canvas');
	      var container = canvas.get('el').parentNode;
	      container.style.marginLeft = this.get('marginLeft') + 'px';
	      this.set('bgChart', bgChart);
	    }
	    this.set('xScale', xScale);
	  },
	  _initRange: function _initRange() {
	    var start = this.get('start');
	    var end = this.get('end');
	    var xScale = this.get('xScale');
	    var min = start ? xScale.scale(start) : 0.3;
	    var max = end ? xScale.scale(end) : 0.7;
	    var range = [min * 100, max * 100];
	    this.set('range', range);
	    return range;
	  },
	  _getHandleValue: function _getHandleValue(type) {
	    var value;
	    var range = this.get('range');
	    var min = range[0] / 100;
	    var max = range[1] / 100;
	    var xScale = this.get('xScale');
	    if (type === 'min') {
	      value = this.get('start') ? this.get('start') : xScale.invert(min);
	    } else {
	      value = this.get('end') ? this.get('end') : xScale.invert(max);
	    }
	    return value;
	  },
	  _initHorizontalHandle: function _initHorizontalHandle(type) {
	    var canvas = this.get('canvas');
	    var handle = canvas.addGroup();
	    var height = this.get('height');
	    var xScale = this.get('xScale');
	    var handleValue = xScale.getText(this._getHandleValue(type));
	
	    handle.addShape('Image', {
	      attrs: {
	        x: -height / 2,
	        y: 0,
	        width: height,
	        height: height,
	        img: this.get('handleIcon')
	      }
	    });
	    var text = handle.addShape('Text', {
	      attrs: Util.mix({
	        x: type === 'min' ? -(height / 2 + OFFSET) : height / 2 + OFFSET,
	        y: height / 2,
	        textAlign: type === 'min' ? 'end' : 'start',
	        textBaseline: 'middle',
	        text: handleValue
	      }, this.get('textAttr'))
	    });
	
	    this.set(type + 'TextElement', text);
	    return handle;
	  },
	  _initSliderBackground: function _initSliderBackground() {
	    var canvas = this.get('canvas');
	    var backgroundElement = canvas.addGroup();
	    backgroundElement.initTransform();
	    backgroundElement.translate(0, 0);
	    backgroundElement.addShape('Rect', {
	      attrs: Util.mix({
	        x: 0,
	        y: 0,
	        width: this.get('plotWidth'),
	        height: this.get('height')
	      }, this.get('backgroundAttr'))
	    });
	    return backgroundElement;
	  },
	  _initSlider: function _initSlider() {
	    var canvas = this.get('canvas');
	    var range = this._initRange();
	    var minHandleElement = this._initHorizontalHandle('min');
	    var maxHandleElement = this._initHorizontalHandle('max');
	    var backgroundElement = this._initSliderBackground();
	
	    var rangeElement = canvas.addGroup(Range, {
	      minHandleElement: minHandleElement,
	      maxHandleElement: maxHandleElement,
	      backgroundElement: backgroundElement,
	      middleAttr: this.get('middleAttr'),
	      range: range,
	      layout: this.get('layout'),
	      width: this.get('plotWidth'),
	      height: this.get('height')
	    });
	    rangeElement.translate(this.get('marginLeft'), 0);
	    this.set('rangeElement', rangeElement);
	  },
	  _bindEvent: function _bindEvent() {
	    var self = this;
	    var rangeElement = self.get('rangeElement');
	    var xDim = self.get('xDim');
	    var xScale = self.get('xScale');
	
	    rangeElement.on('rangeChange', function (ev) {
	      var range = ev.range;
	      var minRatio = range[0] / 100;
	      var maxRatio = range[1] / 100;
	      var min = xScale.invert(minRatio);
	      var max = xScale.invert(maxRatio);
	      var minText = xScale.getText(min);
	      var maxText = xScale.getText(max);
	      self._updateElement(minText, maxText);
	      self._updateLinkCharts(xDim, [min, max]);
	    });
	  },
	  _updateElement: function _updateElement(min, max) {
	    var minTextElement = this.get('minTextElement');
	    var maxTextElement = this.get('maxTextElement');
	    minTextElement.attr(Util.mix({}, minTextElement.__attrs, {
	      text: min
	    }));
	    maxTextElement.attr(Util.mix({}, maxTextElement.__attrs, {
	      text: max
	    }));
	
	    if (this.get('bgChart')) {
	      // 将背景图表转换为背景图
	      var bgChart = this.get('bgChart');
	      var canvas = bgChart.get('canvas').get('el');
	      var img = canvas.toDataURL('image/png');
	      var container = this.get('container');
	      container.style.width = this.get('width') + 'px';
	      container.style.height = this.get('height') + 'px';
	      container.style.backgroundImage = 'url(' + img + ')';
	      container.style.backgroundRepeat = 'no-repeat';
	      container.style.backgroundPositionX = this.get('marginLeft') + 'px';
	      container.style.backgroundSize = 'contain';
	      bgChart.destroy();
	      this.set('bgChart', null);
	    }
	    this.set('firstRender', false);
	  },
	  _updateLinkCharts: function _updateLinkCharts(dim, range) {
	    var self = this;
	    var linkCharts = Util.isArray(self.get('charts')) ? self.get('charts') : [self.get('charts')];
	    if (linkCharts[0].get('parent')) {
	      Util.each(linkCharts, function (chart) {
	        chart.filter(dim, range);
	      });
	      var parentChart = linkCharts[0].get('parent');
	      if (self.get('firstRender')) {
	        parentChart.render();
	      } else {
	        parentChart.repaint();
	      }
	    } else {
	      Util.each(linkCharts, function (chart) {
	        chart.filter(dim, range);
	        if (self.get('firstRender')) {
	          chart.render();
	        } else {
	          chart.repaint();
	        }
	      });
	    }
	  },
	  render: function render() {
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var plotRange;
	    var width;
	    if (chart.get('parent')) {
	      plotRange = chart.get('parent').get('plotRange');
	      width = chart.get('parent').get('width');
	    } else {
	      plotRange = chart.get('plotRange');
	      width = chart.get('width');
	    }
	
	    this.set('plotWidth', plotRange.tr.x - plotRange.tl.x);
	    this.set('marginLeft', plotRange.tl.x);
	    this.set('width', width);
	
	    if (!this.get('canvas')) {
	      this._initCanvas();
	    }
	    this._initBackground(chart);
	    this._initSlider();
	    this._bindEvent();
	
	    var xDim = this.get('xDim');
	    var min = this._getHandleValue('min');
	    var max = this._getHandleValue('max');
	    if (!this.get('changeSize')) {
	      this._updateLinkCharts(xDim, [min, max]);
	    }
	    this.get('canvas').draw();
	  },
	  destroy: function destroy() {
	    var rangeElement = this.get('rangeElement');
	    rangeElement.off('rangeChange');
	    this.get('bgChart') && this.get('bgChart').destroy();
	    this.get('canvas').destroy();
	    var container = this.get('container');
	    while (container.hasChildNodes()) {
	      container.removeChild(container.firstChild);
	    }
	    Slider.superclass.destroy.call(this);
	    window.removeEventListener('resize', Util.getWrapBehavior(this, '_initForceFitEvent'));
	  },
	  clear: function clear() {
	    var container = this.get('container');
	    container.style.backgroundImage = '';
	    this.get('canvas').clear();
	    this.get('bgChart') && this.get('bgChart').destroy();
	    this.set('bgChart', null);
	  },
	  repaint: function repaint() {
	    this.set('firstRender', false);
	    this.clear();
	    this.render();
	  }
	});
	
	module.exports = Slider;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmYmYwZTNiNDFiNTlhZTJmMjgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvY2FuZGxlU3RpY2tzLmpzb24iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LkcyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVyIiwicmVxdWlyZSIsIkcyIiwiUGx1Z2luIiwic2xpZGVyIiwiY29uc29sZSIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiLCJVdGlsIiwiQ2FudmFzIiwiR3JvdXAiLCJSYW5nZSIsImNmZyIsInN1cGVyY2xhc3MiLCJjb25zdHJ1Y3RvciIsImNhbGwiLCJDRkciLCJyYW5nZSIsIm1pZGRsZUF0dHIiLCJiYWNrZ3JvdW5kRWxlbWVudCIsIm1pbkhhbmRsZUVsZW1lbnQiLCJtYXhIYW5kbGVFbGVtZW50IiwibWlkZGxlSGFuZGxlRWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJsYXlvdXQiLCJ3aWR0aCIsImhlaWdodCIsInBhZ2VYIiwicGFnZVkiLCJhbmltYXRlIiwib3BlcmFibGUiLCJleHRlbmQiLCJhdWdtZW50IiwiX2JlZm9yZVJlbmRlclVJIiwiZ2V0IiwiYWRkU2hhcGUiLCJhdHRycyIsInRyaWdlckN1cnNvciIsImFkZCIsInNldCIsImVhY2giLCJjaGlsZCIsInNvcnQiLCJfcmVuZGVyVUkiLCJfcmVuZGVySG9yaXpvbnRhbCIsIl9yZW5kZXJWZXJ0aWNhbCIsIl90cmFuc2Zvcm0iLCJtaW5SYXRpbyIsIm1heFJhdGlvIiwiaW5pdFRyYW5zZm9ybSIsImF0dHIiLCJ4IiwieSIsInRyYW5zbGF0ZSIsIl9iaW5kVUkiLCJvbiIsIndyYXBCZWhhdmlvciIsIl9pc0VsZW1lbnQiLCJ0YXJnZXQiLCJuYW1lIiwiZWxlbWVudCIsImlzR3JvdXAiLCJlbGVtZW50Q2hpbGRyZW4iLCJpbmRleE9mIiwiX2dldFJhbmdlIiwiZGlmZiIsInJzdCIsIl91cGRhdGVTdGF0dXMiLCJkaW0iLCJldiIsInRvdGFsTGVuZ3RoIiwidWNEaW0iLCJ1Y2ZpcnN0IiwicGFnZSIsInJhbmdlU3Rhc2giLCJzaWduIiwiY3VycmVudFBhZ2UiLCJkaWZmUGFnZSIsImRpZmZSYW5nZSIsImRpZmZTdGFzaFJhbmdlIiwiZmlyZSIsImRyYXciLCJfb25Nb3VzZUxlYXZlIiwiY29udGFpbmVyRE9NIiwic3R5bGUiLCJjdXJzb3IiLCJfb25Nb3VzZU1vdmUiLCJfb25Nb3VzZURvd24iLCJvcmlnaW5FdmVudCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJfYmluZENhbnZhc0V2ZW50cyIsIm9uTW91c2VNb3ZlTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJvbk1vdXNlVXBMaXN0ZW5lciIsIl9vbkNhbnZhc01vdXNlTW92ZSIsIl9vbkNhbnZhc01vdXNlVXAiLCJfcmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJyZW1vdmUiLCJCYXNlIiwiRGF0YUZyYW1lIiwiRnJhbWUiLCJPRkZTRVQiLCJfaW5pdCIsIkFUVFJTIiwiY2hhcnRzIiwic3RhcnQiLCJlbmQiLCJkb21JZCIsInhEaW0iLCJ5RGltIiwiZmlsbCIsImZpbGxPcGFjaXR5IiwiYmFja2dyb3VuZEF0dHIiLCJzdHJva2UiLCJvcGFjaXR5IiwibGluZVdpZHRoIiwidGV4dEF0dHIiLCJoYW5kbGVJY29uIiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rQ2hhcnRzIiwiY2hhcnQiLCJpc0FycmF5IiwiZm9yY2VGaXQiLCJ3aW5kb3ciLCJfaW5pdEZvcmNlRml0RXZlbnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjYW52YXMiLCJmaWx0ZXJzIiwiY2hhbmdlU2l6ZSIsInJlcGFpbnQiLCJfaW5pdENhbnZhcyIsImNhcHR1cmUiLCJHbG9iYWwiLCJmb250RmFtaWx5Iiwibm9kZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInpJbmRleCIsIl9pbml0QmFja2dyb3VuZCIsImxpbmtDaGFydCIsImRhdGEiLCJvcHRpb25zIiwieFNjYWxlIiwic2NhbGVBc3Npc3QiLCJkZWZzIiwibWl4Iiwic2NhbGVzIiwiY3JlYXRlU2NhbGUiLCJiZ0NoYXJ0IiwiQ2hhcnQiLCJpZCIsInBsb3RDZmciLCJtYXJnaW4iLCJzb3VyY2UiLCJjb2wiLCJuaWNlIiwiYXhpcyIsInRvb2x0aXAiLCJsZWdlbmQiLCJhcmVhIiwiY29sb3IiLCJsaW5lIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyZW50Tm9kZSIsIm1hcmdpbkxlZnQiLCJfaW5pdFJhbmdlIiwibWluIiwic2NhbGUiLCJtYXgiLCJfZ2V0SGFuZGxlVmFsdWUiLCJ0eXBlIiwidmFsdWUiLCJpbnZlcnQiLCJfaW5pdEhvcml6b250YWxIYW5kbGUiLCJoYW5kbGUiLCJhZGRHcm91cCIsImhhbmRsZVZhbHVlIiwiZ2V0VGV4dCIsImltZyIsInRleHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJfaW5pdFNsaWRlckJhY2tncm91bmQiLCJfaW5pdFNsaWRlciIsInJhbmdlRWxlbWVudCIsIl9iaW5kRXZlbnQiLCJzZWxmIiwibWluVGV4dCIsIm1heFRleHQiLCJfdXBkYXRlRWxlbWVudCIsIl91cGRhdGVMaW5rQ2hhcnRzIiwibWluVGV4dEVsZW1lbnQiLCJtYXhUZXh0RWxlbWVudCIsIl9fYXR0cnMiLCJ0b0RhdGFVUkwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsImJhY2tncm91bmRTaXplIiwiZGVzdHJveSIsImZpbHRlciIsInBhcmVudENoYXJ0IiwicGxvdFJhbmdlIiwidHIiLCJ0bCIsIm9mZiIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0V3JhcEJlaGF2aW9yIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBZ0UsNkVBQTZFO0FBQzdJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN6RkE7O0FBRUEsS0FBSUEsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7QUFDQSxLQUFJQyxLQUFLLG1CQUFBRCxDQUFRLENBQVIsQ0FBVDtBQUNBLEtBQUlDLE1BQU1BLEdBQUdDLE1BQWIsRUFBcUI7QUFDbkIsT0FBSUEsU0FBU0QsR0FBR0MsTUFBaEI7QUFDQUEsVUFBT0MsTUFBUCxHQUFnQkosTUFBaEI7QUFDRCxFQUhELE1BR087QUFDTEssV0FBUUMsR0FBUixDQUFZLGtDQUFaO0FBQ0Q7QUFDREMsUUFBT0MsT0FBUCxHQUFpQlIsTUFBakIsQzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFD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VUFBS21MLEtBQUw7QUFDQSxVQUFLbEQsTUFBTDtBQUNEO0FBblRrQixFQUFyQjs7QUFzVEFsSyxRQUFPQyxPQUFQLEdBQWlCUixNQUFqQixDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdGlmKG1vcmVNb2R1bGVzWzBdKSB7XG4gXHRcdFx0aW5zdGFsbGVkTW9kdWxlc1swXSA9IDA7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgKHtcIjFcIjpcImV4YW1wbGVzL3ZpZXdBbmRGb3JjZUZpdFwiLFwiMlwiOlwiZXhhbXBsZXMvaW5kZXhcIixcIjNcIjpcImV4YW1wbGVzL2NoYW5nRGF0YVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA5ZmJmMGUzYjQxYjU5YWUyZjI4XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTbGlkZXIgPSByZXF1aXJlKCcuL3NyYy9zbGlkZXInKTtcbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5pZiAoRzIgJiYgRzIuUGx1Z2luKSB7XG4gIHZhciBQbHVnaW4gPSBHMi5QbHVnaW47XG4gIFBsdWdpbi5zbGlkZXIgPSBTbGlkZXI7XG59IGVsc2Uge1xuICBjb25zb2xlLmVycignUGxlYXNlIGxvYWQgdGhlIEcyIHNjcmlwdCBmaXJzdCEnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gW1xuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xOVwiLFxuXHRcdFwic3RhcnRcIjogOC4xOCxcblx0XHRcIm1heFwiOiA4LjMzLFxuXHRcdFwibWluXCI6IDcuOTgsXG5cdFx0XCJlbmRcIjogOC4zMixcblx0XHRcInZvbHVtblwiOiAxODEwLFxuXHRcdFwibW9uZXlcIjogMTQ3MjMuNTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMThcIixcblx0XHRcInN0YXJ0XCI6IDguMzcsXG5cdFx0XCJtYXhcIjogOC42LFxuXHRcdFwibWluXCI6IDguMDMsXG5cdFx0XCJlbmRcIjogOC4wOSxcblx0XHRcInZvbHVtblwiOiAyNzkwLjM3LFxuXHRcdFwibW9uZXlcIjogMjMzMDkuMTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTdcIixcblx0XHRcInN0YXJ0XCI6IDguNyxcblx0XHRcIm1heFwiOiA4Ljc4LFxuXHRcdFwibWluXCI6IDguMzIsXG5cdFx0XCJlbmRcIjogOC4zNyxcblx0XHRcInZvbHVtblwiOiAzNzI5LjA0LFxuXHRcdFwibW9uZXlcIjogMzE3MDkuNzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTZcIixcblx0XHRcInN0YXJ0XCI6IDguMTgsXG5cdFx0XCJtYXhcIjogOC42OSxcblx0XHRcIm1pblwiOiA4LjA1LFxuXHRcdFwiZW5kXCI6IDguNjIsXG5cdFx0XCJ2b2x1bW5cIjogMzA5NS40NCxcblx0XHRcIm1vbmV5XCI6IDI2MTAwLjY5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTEzXCIsXG5cdFx0XCJzdGFydFwiOiA4LjAxLFxuXHRcdFwibWF4XCI6IDguNzUsXG5cdFx0XCJtaW5cIjogNy45Nyxcblx0XHRcImVuZFwiOiA4LjQxLFxuXHRcdFwidm9sdW1uXCI6IDU4MTUuNTgsXG5cdFx0XCJtb25leVwiOiA0ODU2Mi4zN1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xMlwiLFxuXHRcdFwic3RhcnRcIjogNy43Nixcblx0XHRcIm1heFwiOiA4LjE4LFxuXHRcdFwibWluXCI6IDcuNjEsXG5cdFx0XCJlbmRcIjogOC4xNSxcblx0XHRcInZvbHVtblwiOiA0NzQyLjYsXG5cdFx0XCJtb25leVwiOiAzNzU2NS4zNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xMVwiLFxuXHRcdFwic3RhcnRcIjogNy41NSxcblx0XHRcIm1heFwiOiA3LjgxLFxuXHRcdFwibWluXCI6IDcuNDksXG5cdFx0XCJlbmRcIjogNy44LFxuXHRcdFwidm9sdW1uXCI6IDMxMzMuODIsXG5cdFx0XCJtb25leVwiOiAyNDA2NS40MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xMFwiLFxuXHRcdFwic3RhcnRcIjogNy41LFxuXHRcdFwibWF4XCI6IDcuNjgsXG5cdFx0XCJtaW5cIjogNy40NCxcblx0XHRcImVuZFwiOiA3LjU3LFxuXHRcdFwidm9sdW1uXCI6IDI2NzAuMzUsXG5cdFx0XCJtb25leVwiOiAyMDIxMC41OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wOVwiLFxuXHRcdFwic3RhcnRcIjogNy42NSxcblx0XHRcIm1heFwiOiA3LjY2LFxuXHRcdFwibWluXCI6IDcuMyxcblx0XHRcImVuZFwiOiA3LjU4LFxuXHRcdFwidm9sdW1uXCI6IDI4NDEuNzksXG5cdFx0XCJtb25leVwiOiAyMTM0NC4zNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wNlwiLFxuXHRcdFwic3RhcnRcIjogNy41Mixcblx0XHRcIm1heFwiOiA3LjcxLFxuXHRcdFwibWluXCI6IDcuNDgsXG5cdFx0XCJlbmRcIjogNy42NCxcblx0XHRcInZvbHVtblwiOiAyNzI1LjQ0LFxuXHRcdFwibW9uZXlcIjogMjA3MjEuNTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDVcIixcblx0XHRcInN0YXJ0XCI6IDcuNDgsXG5cdFx0XCJtYXhcIjogNy41Nyxcblx0XHRcIm1pblwiOiA3LjI5LFxuXHRcdFwiZW5kXCI6IDcuNDgsXG5cdFx0XCJ2b2x1bW5cIjogMzUyMC44NSxcblx0XHRcIm1vbmV5XCI6IDI2MTQwLjgzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTA0XCIsXG5cdFx0XCJzdGFydFwiOiA3LjAxLFxuXHRcdFwibWF4XCI6IDcuNSxcblx0XHRcIm1pblwiOiA3LjAxLFxuXHRcdFwiZW5kXCI6IDcuNDYsXG5cdFx0XCJ2b2x1bW5cIjogMzU5MS40Nyxcblx0XHRcIm1vbmV5XCI6IDI2Mjg1LjUyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTAzXCIsXG5cdFx0XCJzdGFydFwiOiA3LjEsXG5cdFx0XCJtYXhcIjogNy4xNyxcblx0XHRcIm1pblwiOiA2LjgyLFxuXHRcdFwiZW5kXCI6IDcsXG5cdFx0XCJ2b2x1bW5cIjogMjAyOS4yMSxcblx0XHRcIm1vbmV5XCI6IDE0MjAyLjMzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTAyXCIsXG5cdFx0XCJzdGFydFwiOiA3LjA5LFxuXHRcdFwibWF4XCI6IDcuNDQsXG5cdFx0XCJtaW5cIjogNi45Myxcblx0XHRcImVuZFwiOiA3LjE3LFxuXHRcdFwidm9sdW1uXCI6IDMxOTEuMzEsXG5cdFx0XCJtb25leVwiOiAyMzIwNS4xMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0zMFwiLFxuXHRcdFwic3RhcnRcIjogNi45OCxcblx0XHRcIm1heFwiOiA3LjI3LFxuXHRcdFwibWluXCI6IDYuODQsXG5cdFx0XCJlbmRcIjogNy4xOCxcblx0XHRcInZvbHVtblwiOiAzNTIyLjYxLFxuXHRcdFwibW9uZXlcIjogMjUwODMuNDRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjlcIixcblx0XHRcInN0YXJ0XCI6IDYuOTQsXG5cdFx0XCJtYXhcIjogNy4yLFxuXHRcdFwibWluXCI6IDYuOCxcblx0XHRcImVuZFwiOiA3LjA1LFxuXHRcdFwidm9sdW1uXCI6IDI3NTIuMjcsXG5cdFx0XCJtb25leVwiOiAxOTMyOC40NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yOFwiLFxuXHRcdFwic3RhcnRcIjogNy4wMSxcblx0XHRcIm1heFwiOiA3LjE0LFxuXHRcdFwibWluXCI6IDYuOCxcblx0XHRcImVuZFwiOiA2Ljg1LFxuXHRcdFwidm9sdW1uXCI6IDIzMTEuMTEsXG5cdFx0XCJtb25leVwiOiAxNjEzNy4zMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yN1wiLFxuXHRcdFwic3RhcnRcIjogNi45MSxcblx0XHRcIm1heFwiOiA3LjMxLFxuXHRcdFwibWluXCI6IDYuNDgsXG5cdFx0XCJlbmRcIjogNy4xOCxcblx0XHRcInZvbHVtblwiOiAzMTcyLjksXG5cdFx0XCJtb25leVwiOiAyMTgyNy4zXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTI2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjksXG5cdFx0XCJtYXhcIjogNy4wOCxcblx0XHRcIm1pblwiOiA2Ljg3LFxuXHRcdFwiZW5kXCI6IDYuOTUsXG5cdFx0XCJ2b2x1bW5cIjogMjc2OS4zMSxcblx0XHRcIm1vbmV5XCI6IDE5MzM3LjQ0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTIzXCIsXG5cdFx0XCJzdGFydFwiOiA2LjcxLFxuXHRcdFwibWF4XCI6IDYuODUsXG5cdFx0XCJtaW5cIjogNi41OCxcblx0XHRcImVuZFwiOiA2Ljc5LFxuXHRcdFwidm9sdW1uXCI6IDI0ODMuMTgsXG5cdFx0XCJtb25leVwiOiAxNjcxNC4zMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yMlwiLFxuXHRcdFwic3RhcnRcIjogNi4zOCxcblx0XHRcIm1heFwiOiA2LjY3LFxuXHRcdFwibWluXCI6IDYuMzQsXG5cdFx0XCJlbmRcIjogNi42NSxcblx0XHRcInZvbHVtblwiOiAyMjI1Ljg4LFxuXHRcdFwibW9uZXlcIjogMTQ0NjUuNTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjFcIixcblx0XHRcInN0YXJ0XCI6IDcuMDgsXG5cdFx0XCJtYXhcIjogNy4xLFxuXHRcdFwibWluXCI6IDYuNDEsXG5cdFx0XCJlbmRcIjogNi40MSxcblx0XHRcInZvbHVtblwiOiAyODkxLjQ3LFxuXHRcdFwibW9uZXlcIjogMTk1ODUuOThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjBcIixcblx0XHRcInN0YXJ0XCI6IDYuODgsXG5cdFx0XCJtYXhcIjogNy4xOSxcblx0XHRcIm1pblwiOiA2Ljg1LFxuXHRcdFwiZW5kXCI6IDcuMTIsXG5cdFx0XCJ2b2x1bW5cIjogMjM4OS42Mixcblx0XHRcIm1vbmV5XCI6IDE2ODEzLjU4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTE5XCIsXG5cdFx0XCJzdGFydFwiOiA3LjEsXG5cdFx0XCJtYXhcIjogNy4xNCxcblx0XHRcIm1pblwiOiA2LjgsXG5cdFx0XCJlbmRcIjogNi45NCxcblx0XHRcInZvbHVtblwiOiAyNzg2LjYxLFxuXHRcdFwibW9uZXlcIjogMTk0NzQuNzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTZcIixcblx0XHRcInN0YXJ0XCI6IDYuOTIsXG5cdFx0XCJtYXhcIjogNy4zOCxcblx0XHRcIm1pblwiOiA2LjczLFxuXHRcdFwiZW5kXCI6IDcuMTUsXG5cdFx0XCJ2b2x1bW5cIjogMzI4OS4yNyxcblx0XHRcIm1vbmV5XCI6IDIyOTYzLjk3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTE1XCIsXG5cdFx0XCJzdGFydFwiOiA2LjYzLFxuXHRcdFwibWF4XCI6IDYuOSxcblx0XHRcIm1pblwiOiA2LjYsXG5cdFx0XCJlbmRcIjogNi44OSxcblx0XHRcInZvbHVtblwiOiAyNDQwLjM3LFxuXHRcdFwibW9uZXlcIjogMTY1NzUuODRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTRcIixcblx0XHRcInN0YXJ0XCI6IDYuNyxcblx0XHRcIm1heFwiOiA2Ljk5LFxuXHRcdFwibWluXCI6IDYuNjEsXG5cdFx0XCJlbmRcIjogNi42Nixcblx0XHRcInZvbHVtblwiOiAyNDk2LjM4LFxuXHRcdFwibW9uZXlcIjogMTY4NTguMjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTNcIixcblx0XHRcInN0YXJ0XCI6IDYuNTUsXG5cdFx0XCJtYXhcIjogNi44MSxcblx0XHRcIm1pblwiOiA2LjU1LFxuXHRcdFwiZW5kXCI6IDYuNzUsXG5cdFx0XCJ2b2x1bW5cIjogMjI5OS44Myxcblx0XHRcIm1vbmV5XCI6IDE1MzM4LjI0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTEyXCIsXG5cdFx0XCJzdGFydFwiOiA2LjI5LFxuXHRcdFwibWF4XCI6IDYuODksXG5cdFx0XCJtaW5cIjogNi4yOSxcblx0XHRcImVuZFwiOiA2LjY5LFxuXHRcdFwidm9sdW1uXCI6IDMxNDcuNTgsXG5cdFx0XCJtb25leVwiOiAyMDczOC4zNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0wOVwiLFxuXHRcdFwic3RhcnRcIjogNi4xLFxuXHRcdFwibWF4XCI6IDYuNDQsXG5cdFx0XCJtaW5cIjogNi4wOCxcblx0XHRcImVuZFwiOiA2LjM0LFxuXHRcdFwidm9sdW1uXCI6IDI2NjQuMDQsXG5cdFx0XCJtb25leVwiOiAxNjgxMS4xNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0wOFwiLFxuXHRcdFwic3RhcnRcIjogNi4xMSxcblx0XHRcIm1heFwiOiA2LjI4LFxuXHRcdFwibWluXCI6IDYsXG5cdFx0XCJlbmRcIjogNi4xMixcblx0XHRcInZvbHVtblwiOiAyMTk3LjIzLFxuXHRcdFwibW9uZXlcIjogMTM0NDAuOTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMzBcIixcblx0XHRcInN0YXJ0XCI6IDUuOTMsXG5cdFx0XCJtYXhcIjogNi4xMixcblx0XHRcIm1pblwiOiA1LjgxLFxuXHRcdFwiZW5kXCI6IDUuODMsXG5cdFx0XCJ2b2x1bW5cIjogMTQ1OS42NCxcblx0XHRcIm1vbmV5XCI6IDg2NTkuNTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjlcIixcblx0XHRcInN0YXJ0XCI6IDUuOTYsXG5cdFx0XCJtYXhcIjogNS45OCxcblx0XHRcIm1pblwiOiA1LjczLFxuXHRcdFwiZW5kXCI6IDUuODMsXG5cdFx0XCJ2b2x1bW5cIjogMTA0Ny40Mixcblx0XHRcIm1vbmV5XCI6IDYxMzIuNzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjhcIixcblx0XHRcInN0YXJ0XCI6IDUuODYsXG5cdFx0XCJtYXhcIjogNi4xMyxcblx0XHRcIm1pblwiOiA1Ljg1LFxuXHRcdFwiZW5kXCI6IDYuMDcsXG5cdFx0XCJ2b2x1bW5cIjogOTUyLjQ1LFxuXHRcdFwibW9uZXlcIjogNTcxNy4zM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yNVwiLFxuXHRcdFwic3RhcnRcIjogNi4yMyxcblx0XHRcIm1heFwiOiA2LjI4LFxuXHRcdFwibWluXCI6IDUuODUsXG5cdFx0XCJlbmRcIjogNS45Nixcblx0XHRcInZvbHVtblwiOiAxMzk1LjI3LFxuXHRcdFwibW9uZXlcIjogODQ2NS45NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yNFwiLFxuXHRcdFwic3RhcnRcIjogNi4xNixcblx0XHRcIm1heFwiOiA2LjMyLFxuXHRcdFwibWluXCI6IDYuMSxcblx0XHRcImVuZFwiOiA2LjI3LFxuXHRcdFwidm9sdW1uXCI6IDE0MzQuMzgsXG5cdFx0XCJtb25leVwiOiA4OTIwLjg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTIzXCIsXG5cdFx0XCJzdGFydFwiOiA2LjE4LFxuXHRcdFwibWF4XCI6IDYuMzIsXG5cdFx0XCJtaW5cIjogNi4wMixcblx0XHRcImVuZFwiOiA2LjEyLFxuXHRcdFwidm9sdW1uXCI6IDE1NTguNTQsXG5cdFx0XCJtb25leVwiOiA5NjMxLjM4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTIyXCIsXG5cdFx0XCJzdGFydFwiOiA2LjM1LFxuXHRcdFwibWF4XCI6IDYuNCxcblx0XHRcIm1pblwiOiA2LjE1LFxuXHRcdFwiZW5kXCI6IDYuMjUsXG5cdFx0XCJ2b2x1bW5cIjogMTg5My44Myxcblx0XHRcIm1vbmV5XCI6IDExOTAxLjUxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTIxXCIsXG5cdFx0XCJzdGFydFwiOiA1LjgzLFxuXHRcdFwibWF4XCI6IDYuMzIsXG5cdFx0XCJtaW5cIjogNS44Myxcblx0XHRcImVuZFwiOiA2LjMxLFxuXHRcdFwidm9sdW1uXCI6IDE3NDguMzUsXG5cdFx0XCJtb25leVwiOiAxMDgwNy42NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xOFwiLFxuXHRcdFwic3RhcnRcIjogNixcblx0XHRcIm1heFwiOiA2LjEsXG5cdFx0XCJtaW5cIjogNS44MSxcblx0XHRcImVuZFwiOiA2LjAyLFxuXHRcdFwidm9sdW1uXCI6IDE1MDcuMDksXG5cdFx0XCJtb25leVwiOiA4OTk5LjQ0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTE3XCIsXG5cdFx0XCJzdGFydFwiOiA2LjEsXG5cdFx0XCJtYXhcIjogNi4zNCxcblx0XHRcIm1pblwiOiA1LjgsXG5cdFx0XCJlbmRcIjogNS44Myxcblx0XHRcInZvbHVtblwiOiAyMTM1LjY0LFxuXHRcdFwibW9uZXlcIjogMTMwMzkuNTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTZcIixcblx0XHRcInN0YXJ0XCI6IDUuNTgsXG5cdFx0XCJtYXhcIjogNi4wNyxcblx0XHRcIm1pblwiOiA1LjQsXG5cdFx0XCJlbmRcIjogNi4wNyxcblx0XHRcInZvbHVtblwiOiAxNzU4LjU3LFxuXHRcdFwibW9uZXlcIjogMTAxMzIuMjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTVcIixcblx0XHRcInN0YXJ0XCI6IDUuODEsXG5cdFx0XCJtYXhcIjogNi4wOSxcblx0XHRcIm1pblwiOiA1LjUyLFxuXHRcdFwiZW5kXCI6IDUuNTIsXG5cdFx0XCJ2b2x1bW5cIjogMTYxNy4xMixcblx0XHRcIm1vbmV5XCI6IDkyNDguNjlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTRcIixcblx0XHRcInN0YXJ0XCI6IDYuOTgsXG5cdFx0XCJtYXhcIjogNy4wNixcblx0XHRcIm1pblwiOiA2LjEzLFxuXHRcdFwiZW5kXCI6IDYuMTMsXG5cdFx0XCJ2b2x1bW5cIjogMTk4Mi45LFxuXHRcdFwibW9uZXlcIjogMTI5ODkuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTFcIixcblx0XHRcInN0YXJ0XCI6IDYuODcsXG5cdFx0XCJtYXhcIjogNy4wMSxcblx0XHRcIm1pblwiOiA2LjY4LFxuXHRcdFwiZW5kXCI6IDYuODEsXG5cdFx0XCJ2b2x1bW5cIjogMTM3MS43Nyxcblx0XHRcIm1vbmV5XCI6IDkzNzAuNDlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTBcIixcblx0XHRcInN0YXJ0XCI6IDYuNyxcblx0XHRcIm1heFwiOiA3LjE3LFxuXHRcdFwibWluXCI6IDYuNjUsXG5cdFx0XCJlbmRcIjogNi44Nixcblx0XHRcInZvbHVtblwiOiAyMTgxLjMzLFxuXHRcdFwibW9uZXlcIjogMTUxNjkuNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0wOVwiLFxuXHRcdFwic3RhcnRcIjogNi43Nixcblx0XHRcIm1heFwiOiA3LjAzLFxuXHRcdFwibWluXCI6IDYuNjUsXG5cdFx0XCJlbmRcIjogNi45Myxcblx0XHRcInZvbHVtblwiOiAyMTA1LjI4LFxuXHRcdFwibW9uZXlcIjogMTQ0MjYuNzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMDhcIixcblx0XHRcInN0YXJ0XCI6IDYuMjYsXG5cdFx0XCJtYXhcIjogNi43LFxuXHRcdFwibWluXCI6IDYuMDEsXG5cdFx0XCJlbmRcIjogNi42NCxcblx0XHRcInZvbHVtblwiOiAxNTA2LjUzLFxuXHRcdFwibW9uZXlcIjogOTU1Ni41NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0wN1wiLFxuXHRcdFwic3RhcnRcIjogNi4xOSxcblx0XHRcIm1heFwiOiA2LjQ1LFxuXHRcdFwibWluXCI6IDYuMDksXG5cdFx0XCJlbmRcIjogNi4yLFxuXHRcdFwidm9sdW1uXCI6IDE2MDUuODUsXG5cdFx0XCJtb25leVwiOiAxMDA5MS4yNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0wMlwiLFxuXHRcdFwic3RhcnRcIjogNi4yLFxuXHRcdFwibWF4XCI6IDYuODQsXG5cdFx0XCJtaW5cIjogNS45OCxcblx0XHRcImVuZFwiOiA1Ljk5LFxuXHRcdFwidm9sdW1uXCI6IDE5MzQuOTUsXG5cdFx0XCJtb25leVwiOiAxMjIyNS42OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0wMVwiLFxuXHRcdFwic3RhcnRcIjogNy4yMixcblx0XHRcIm1heFwiOiA3LjI4LFxuXHRcdFwibWluXCI6IDYuNjQsXG5cdFx0XCJlbmRcIjogNi42NCxcblx0XHRcInZvbHVtblwiOiAyNjQ1Ljg3LFxuXHRcdFwibW9uZXlcIjogMTgwMTcuOTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMzFcIixcblx0XHRcInN0YXJ0XCI6IDcuODMsXG5cdFx0XCJtYXhcIjogOCxcblx0XHRcIm1pblwiOiA3LjM1LFxuXHRcdFwiZW5kXCI6IDcuMzgsXG5cdFx0XCJ2b2x1bW5cIjogMjk4NC4wMyxcblx0XHRcIm1vbmV5XCI6IDIzMDMxLjI0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTI4XCIsXG5cdFx0XCJzdGFydFwiOiA3LjMsXG5cdFx0XCJtYXhcIjogNy43Nyxcblx0XHRcIm1pblwiOiA3LjEsXG5cdFx0XCJlbmRcIjogNy43Nyxcblx0XHRcInZvbHVtblwiOiAzMDkyLjYsXG5cdFx0XCJtb25leVwiOiAyMzEyMS40OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yN1wiLFxuXHRcdFwic3RhcnRcIjogNi43NSxcblx0XHRcIm1heFwiOiA3LjEsXG5cdFx0XCJtaW5cIjogNi40Myxcblx0XHRcImVuZFwiOiA3LjA2LFxuXHRcdFwidm9sdW1uXCI6IDI5MDMuNzYsXG5cdFx0XCJtb25leVwiOiAxOTg0OC44N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yNlwiLFxuXHRcdFwic3RhcnRcIjogNy4xMyxcblx0XHRcIm1heFwiOiA3LjQzLFxuXHRcdFwibWluXCI6IDYuNDIsXG5cdFx0XCJlbmRcIjogNi41OCxcblx0XHRcInZvbHVtblwiOiA0MjEyLjA0LFxuXHRcdFwibW9uZXlcIjogMjkwNjkuMjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjVcIixcblx0XHRcInN0YXJ0XCI6IDcuMTMsXG5cdFx0XCJtYXhcIjogNy4yOSxcblx0XHRcIm1pblwiOiA3LjEzLFxuXHRcdFwiZW5kXCI6IDcuMTMsXG5cdFx0XCJ2b2x1bW5cIjogMTgzOC41OSxcblx0XHRcIm1vbmV5XCI6IDEzMTQwLjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjRcIixcblx0XHRcInN0YXJ0XCI6IDguNCxcblx0XHRcIm1heFwiOiA4LjQsXG5cdFx0XCJtaW5cIjogNy45Mixcblx0XHRcImVuZFwiOiA3LjkyLFxuXHRcdFwidm9sdW1uXCI6IDE3NjYuMzksXG5cdFx0XCJtb25leVwiOiAxNDE2OC44NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yMVwiLFxuXHRcdFwic3RhcnRcIjogOSxcblx0XHRcIm1heFwiOiA5LjYxLFxuXHRcdFwibWluXCI6IDguNTMsXG5cdFx0XCJlbmRcIjogOC44LFxuXHRcdFwidm9sdW1uXCI6IDMzODguMjcsXG5cdFx0XCJtb25leVwiOiAzMDk1Mi4xMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yMFwiLFxuXHRcdFwic3RhcnRcIjogMTAuMDIsXG5cdFx0XCJtYXhcIjogMTAuMjQsXG5cdFx0XCJtaW5cIjogOS4zMixcblx0XHRcImVuZFwiOiA5LjMzLFxuXHRcdFwidm9sdW1uXCI6IDM5MDIuMTcsXG5cdFx0XCJtb25leVwiOiAzODM5MS42OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xOVwiLFxuXHRcdFwic3RhcnRcIjogOS4zLFxuXHRcdFwibWF4XCI6IDEwLjU5LFxuXHRcdFwibWluXCI6IDkuMDEsXG5cdFx0XCJlbmRcIjogMTAuMzUsXG5cdFx0XCJ2b2x1bW5cIjogNTU2OC45Nixcblx0XHRcIm1vbmV5XCI6IDUzOTI4Ljc5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTE4XCIsXG5cdFx0XCJzdGFydFwiOiAxMS4xOCxcblx0XHRcIm1heFwiOiAxMS41LFxuXHRcdFwibWluXCI6IDEwLFxuXHRcdFwiZW5kXCI6IDEwLFxuXHRcdFwidm9sdW1uXCI6IDczMzIuNyxcblx0XHRcIm1vbmV5XCI6IDc4NDM5LjYxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTE3XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4yLFxuXHRcdFwibWF4XCI6IDExLjExLFxuXHRcdFwibWluXCI6IDkuOSxcblx0XHRcImVuZFwiOiAxMS4xMSxcblx0XHRcInZvbHVtblwiOiA4MTIxLjg2LFxuXHRcdFwibW9uZXlcIjogODYyOTguOTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTRcIixcblx0XHRcInN0YXJ0XCI6IDkuNTgsXG5cdFx0XCJtYXhcIjogMTAuMzcsXG5cdFx0XCJtaW5cIjogOS4zNyxcblx0XHRcImVuZFwiOiAxMC4xLFxuXHRcdFwidm9sdW1uXCI6IDYwMDEuNjEsXG5cdFx0XCJtb25leVwiOiA1ODQyNS4xMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xM1wiLFxuXHRcdFwic3RhcnRcIjogOS4xNCxcblx0XHRcIm1heFwiOiA5LjUsXG5cdFx0XCJtaW5cIjogOC45MSxcblx0XHRcImVuZFwiOiA5LjQ5LFxuXHRcdFwidm9sdW1uXCI6IDM4NTQuMTksXG5cdFx0XCJtb25leVwiOiAzNTY5Ni4yN1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xMlwiLFxuXHRcdFwic3RhcnRcIjogOS4wOSxcblx0XHRcIm1heFwiOiA5LjY4LFxuXHRcdFwibWluXCI6IDguOTgsXG5cdFx0XCJlbmRcIjogOS4yOSxcblx0XHRcInZvbHVtblwiOiA0MjM4LjU3LFxuXHRcdFwibW9uZXlcIjogMzk5MDkuM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xMVwiLFxuXHRcdFwic3RhcnRcIjogOS4yMyxcblx0XHRcIm1heFwiOiA5LjQ3LFxuXHRcdFwibWluXCI6IDksXG5cdFx0XCJlbmRcIjogOS4xNSxcblx0XHRcInZvbHVtblwiOiA0Mjk0Ljg1LFxuXHRcdFwibW9uZXlcIjogMzk2NzQuNzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTBcIixcblx0XHRcInN0YXJ0XCI6IDguOSxcblx0XHRcIm1heFwiOiA5LjM4LFxuXHRcdFwibWluXCI6IDguNzYsXG5cdFx0XCJlbmRcIjogOS4yLFxuXHRcdFwidm9sdW1uXCI6IDQwMTMuMTEsXG5cdFx0XCJtb25leVwiOiAzNjI4Ny44OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0wN1wiLFxuXHRcdFwic3RhcnRcIjogOC4zNixcblx0XHRcIm1heFwiOiA4LjgsXG5cdFx0XCJtaW5cIjogOC4zMSxcblx0XHRcImVuZFwiOiA4LjcsXG5cdFx0XCJ2b2x1bW5cIjogMzA5Mi42Nixcblx0XHRcIm1vbmV5XCI6IDI2MzM2Ljc2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTA2XCIsXG5cdFx0XCJzdGFydFwiOiA4LjAzLFxuXHRcdFwibWF4XCI6IDguNDIsXG5cdFx0XCJtaW5cIjogNy45NSxcblx0XHRcImVuZFwiOiA4LjI1LFxuXHRcdFwidm9sdW1uXCI6IDIwNzIuMjEsXG5cdFx0XCJtb25leVwiOiAxNzA2MC4xMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0wNVwiLFxuXHRcdFwic3RhcnRcIjogOC41LFxuXHRcdFwibWF4XCI6IDguNjksXG5cdFx0XCJtaW5cIjogOC4wOCxcblx0XHRcImVuZFwiOiA4LjI4LFxuXHRcdFwidm9sdW1uXCI6IDM1MzMuOTQsXG5cdFx0XCJtb25leVwiOiAyOTc5Ni45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0wNFwiLFxuXHRcdFwic3RhcnRcIjogNy42NSxcblx0XHRcIm1heFwiOiA4LjM5LFxuXHRcdFwibWluXCI6IDcuNjUsXG5cdFx0XCJlbmRcIjogOC4zOSxcblx0XHRcInZvbHVtblwiOiAzMDY3LjIyLFxuXHRcdFwibW9uZXlcIjogMjQ3NzMuODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMDNcIixcblx0XHRcInN0YXJ0XCI6IDguMTUsXG5cdFx0XCJtYXhcIjogOC40LFxuXHRcdFwibWluXCI6IDcuNixcblx0XHRcImVuZFwiOiA3LjYzLFxuXHRcdFwidm9sdW1uXCI6IDMwOTguMzMsXG5cdFx0XCJtb25leVwiOiAyNDM4Mi45OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0zMVwiLFxuXHRcdFwic3RhcnRcIjogOC43LFxuXHRcdFwibWF4XCI6IDkuMDEsXG5cdFx0XCJtaW5cIjogOC4yNSxcblx0XHRcImVuZFwiOiA4LjQ0LFxuXHRcdFwidm9sdW1uXCI6IDM1MDAuNjEsXG5cdFx0XCJtb25leVwiOiAzMDI4OS44M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0zMFwiLFxuXHRcdFwic3RhcnRcIjogOC45Mixcblx0XHRcIm1heFwiOiA5LjY1LFxuXHRcdFwibWluXCI6IDguNyxcblx0XHRcImVuZFwiOiA4Ljk3LFxuXHRcdFwidm9sdW1uXCI6IDYwMjIuOCxcblx0XHRcIm1vbmV5XCI6IDU1NjI0Ljg1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTI5XCIsXG5cdFx0XCJzdGFydFwiOiA4LjM1LFxuXHRcdFwibWF4XCI6IDguOTEsXG5cdFx0XCJtaW5cIjogNy43OCxcblx0XHRcImVuZFwiOiA4Ljg4LFxuXHRcdFwidm9sdW1uXCI6IDQxNzcuMTgsXG5cdFx0XCJtb25leVwiOiAzNDg5My4yXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTI4XCIsXG5cdFx0XCJzdGFydFwiOiA4LFxuXHRcdFwibWF4XCI6IDksXG5cdFx0XCJtaW5cIjogNy45Mixcblx0XHRcImVuZFwiOiA4LjEsXG5cdFx0XCJ2b2x1bW5cIjogNTExNC41NSxcblx0XHRcIm1vbmV5XCI6IDQyMDk1Ljk5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTI3XCIsXG5cdFx0XCJzdGFydFwiOiA5LjQsXG5cdFx0XCJtYXhcIjogOS45OSxcblx0XHRcIm1pblwiOiA4LjgsXG5cdFx0XCJlbmRcIjogOC44LFxuXHRcdFwidm9sdW1uXCI6IDYwMDEuNTEsXG5cdFx0XCJtb25leVwiOiA1Njk2Mi4yNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yNFwiLFxuXHRcdFwic3RhcnRcIjogOS4yNyxcblx0XHRcIm1heFwiOiAxMC4yOCxcblx0XHRcIm1pblwiOiA5LjExLFxuXHRcdFwiZW5kXCI6IDkuNzgsXG5cdFx0XCJ2b2x1bW5cIjogODQ0Ni43Nixcblx0XHRcIm1vbmV5XCI6IDgxOTkxLjE5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTIzXCIsXG5cdFx0XCJzdGFydFwiOiA5LFxuXHRcdFwibWF4XCI6IDkuNzgsXG5cdFx0XCJtaW5cIjogOC43NCxcblx0XHRcImVuZFwiOiA5LjQ2LFxuXHRcdFwidm9sdW1uXCI6IDg0OTYuMSxcblx0XHRcIm1vbmV5XCI6IDc3NTUxLjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTIyXCIsXG5cdFx0XCJzdGFydFwiOiA4LjA4LFxuXHRcdFwibWF4XCI6IDguOTcsXG5cdFx0XCJtaW5cIjogOC4wNSxcblx0XHRcImVuZFwiOiA4Ljk3LFxuXHRcdFwidm9sdW1uXCI6IDg2NzYuNzUsXG5cdFx0XCJtb25leVwiOiA3NTc1MS4xXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTIxXCIsXG5cdFx0XCJzdGFydFwiOiA3LjgsXG5cdFx0XCJtYXhcIjogOC4zMyxcblx0XHRcIm1pblwiOiA3LjY1LFxuXHRcdFwiZW5kXCI6IDguMTUsXG5cdFx0XCJ2b2x1bW5cIjogNDYzMS4xNSxcblx0XHRcIm1vbmV5XCI6IDM3NDUwLjc4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTIwXCIsXG5cdFx0XCJzdGFydFwiOiA3LjcyLFxuXHRcdFwibWF4XCI6IDguMjcsXG5cdFx0XCJtaW5cIjogNy42Myxcblx0XHRcImVuZFwiOiA4LjA1LFxuXHRcdFwidm9sdW1uXCI6IDY0MjguMixcblx0XHRcIm1vbmV5XCI6IDUxMTI3Ljk4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTE3XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk0LFxuXHRcdFwibWF4XCI6IDcuNzMsXG5cdFx0XCJtaW5cIjogNi45NCxcblx0XHRcImVuZFwiOiA3LjczLFxuXHRcdFwidm9sdW1uXCI6IDQ4MzUuNDQsXG5cdFx0XCJtb25leVwiOiAzNjY2Ni41OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xNlwiLFxuXHRcdFwic3RhcnRcIjogNi41Myxcblx0XHRcIm1heFwiOiA3LjQ4LFxuXHRcdFwibWluXCI6IDYuNDIsXG5cdFx0XCJlbmRcIjogNy4wMyxcblx0XHRcInZvbHVtblwiOiAzNjA1Ljc3LFxuXHRcdFwibW9uZXlcIjogMjUwMzEuMTVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTVcIixcblx0XHRcInN0YXJ0XCI6IDcuNTcsXG5cdFx0XCJtYXhcIjogNy44Myxcblx0XHRcIm1pblwiOiA3LjEzLFxuXHRcdFwiZW5kXCI6IDcuMTMsXG5cdFx0XCJ2b2x1bW5cIjogMjcyOS41OSxcblx0XHRcIm1vbmV5XCI6IDIwMDQxLjc1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTE0XCIsXG5cdFx0XCJzdGFydFwiOiA4LjIsXG5cdFx0XCJtYXhcIjogOC43LFxuXHRcdFwibWluXCI6IDcuNjYsXG5cdFx0XCJlbmRcIjogNy45Mixcblx0XHRcInZvbHVtblwiOiA3MDczLjgxLFxuXHRcdFwibW9uZXlcIjogNTgxMzEuMTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTNcIixcblx0XHRcInN0YXJ0XCI6IDcuNSxcblx0XHRcIm1heFwiOiA4LjEsXG5cdFx0XCJtaW5cIjogNy41LFxuXHRcdFwiZW5kXCI6IDguMSxcblx0XHRcInZvbHVtblwiOiA0NTczLjkyLFxuXHRcdFwibW9uZXlcIjogMzYwODMuNjlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTBcIixcblx0XHRcInN0YXJ0XCI6IDYuOSxcblx0XHRcIm1heFwiOiA3LjM2LFxuXHRcdFwibWluXCI6IDYuODgsXG5cdFx0XCJlbmRcIjogNy4zNixcblx0XHRcInZvbHVtblwiOiA0MTgzLjM3LFxuXHRcdFwibW9uZXlcIjogMzA0MTEuMTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDlcIixcblx0XHRcInN0YXJ0XCI6IDUuNDcsXG5cdFx0XCJtYXhcIjogNi42OSxcblx0XHRcIm1pblwiOiA1LjQ3LFxuXHRcdFwiZW5kXCI6IDYuNjksXG5cdFx0XCJ2b2x1bW5cIjogNjY2MS43OCxcblx0XHRcIm1vbmV5XCI6IDQwMzk4Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTA4XCIsXG5cdFx0XCJzdGFydFwiOiA2LjA4LFxuXHRcdFwibWF4XCI6IDYuMDgsXG5cdFx0XCJtaW5cIjogNi4wOCxcblx0XHRcImVuZFwiOiA2LjA4LFxuXHRcdFwidm9sdW1uXCI6IDE1OC4xNixcblx0XHRcIm1vbmV5XCI6IDk2MS42MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wN1wiLFxuXHRcdFwic3RhcnRcIjogNi43Nyxcblx0XHRcIm1heFwiOiA2Ljg4LFxuXHRcdFwibWluXCI6IDYuNzUsXG5cdFx0XCJlbmRcIjogNi43NSxcblx0XHRcInZvbHVtblwiOiAzODMuNDUsXG5cdFx0XCJtb25leVwiOiAyNTkwLjg1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTA2XCIsXG5cdFx0XCJzdGFydFwiOiA5LjEsXG5cdFx0XCJtYXhcIjogOS4xLFxuXHRcdFwibWluXCI6IDcuNSxcblx0XHRcImVuZFwiOiA3LjUsXG5cdFx0XCJ2b2x1bW5cIjogMjk2OC45OCxcblx0XHRcIm1vbmV5XCI6IDI0MDAyLjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDNcIixcblx0XHRcInN0YXJ0XCI6IDguMzgsXG5cdFx0XCJtYXhcIjogOC44Nyxcblx0XHRcIm1pblwiOiA4LjMzLFxuXHRcdFwiZW5kXCI6IDguMzMsXG5cdFx0XCJ2b2x1bW5cIjogMjY0MS43Myxcblx0XHRcIm1vbmV5XCI6IDIyMjIzLjQ0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTAyXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4zOCxcblx0XHRcIm1heFwiOiAxMC4zOCxcblx0XHRcIm1pblwiOiA5LjI2LFxuXHRcdFwiZW5kXCI6IDkuMjYsXG5cdFx0XCJ2b2x1bW5cIjogMjYxMS4wNixcblx0XHRcIm1vbmV5XCI6IDI0NjIwLjgxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTAxXCIsXG5cdFx0XCJzdGFydFwiOiAxMS4zMSxcblx0XHRcIm1heFwiOiAxMS42MSxcblx0XHRcIm1pblwiOiAxMC4yOSxcblx0XHRcImVuZFwiOiAxMC4yOSxcblx0XHRcInZvbHVtblwiOiAzNDAxLjQ1LFxuXHRcdFwibW9uZXlcIjogMzcyMTIuODdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMzBcIixcblx0XHRcInN0YXJ0XCI6IDEwLjA4LFxuXHRcdFwibWF4XCI6IDExLjUyLFxuXHRcdFwibWluXCI6IDEwLjAxLFxuXHRcdFwiZW5kXCI6IDExLjQzLFxuXHRcdFwidm9sdW1uXCI6IDQyMDUuOTksXG5cdFx0XCJtb25leVwiOiA0NTM4MS4wNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0yOVwiLFxuXHRcdFwic3RhcnRcIjogMTIuOTYsXG5cdFx0XCJtYXhcIjogMTIuOTYsXG5cdFx0XCJtaW5cIjogMTEuMTIsXG5cdFx0XCJlbmRcIjogMTEuMTIsXG5cdFx0XCJ2b2x1bW5cIjogMzc0NS42OCxcblx0XHRcIm1vbmV5XCI6IDQ0MjUyLjQ3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTI2XCIsXG5cdFx0XCJzdGFydFwiOiAxMy4xNSxcblx0XHRcIm1heFwiOiAxMy40MSxcblx0XHRcIm1pblwiOiAxMi4zNixcblx0XHRcImVuZFwiOiAxMi4zNixcblx0XHRcInZvbHVtblwiOiAzNjc1LjkxLFxuXHRcdFwibW9uZXlcIjogNDY3NTkuMjlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMjVcIixcblx0XHRcInN0YXJ0XCI6IDEzLjcxLFxuXHRcdFwibWF4XCI6IDE0LjQ2LFxuXHRcdFwibWluXCI6IDEzLjMsXG5cdFx0XCJlbmRcIjogMTMuNzMsXG5cdFx0XCJ2b2x1bW5cIjogNDkwNy42LFxuXHRcdFwibW9uZXlcIjogNjgyOTAuNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0yNFwiLFxuXHRcdFwic3RhcnRcIjogMTMuMzUsXG5cdFx0XCJtYXhcIjogMTMuODUsXG5cdFx0XCJtaW5cIjogMTIuOSxcblx0XHRcImVuZFwiOiAxMy43MSxcblx0XHRcInZvbHVtblwiOiAzNjU2LjgsXG5cdFx0XCJtb25leVwiOiA0OTIxOS45MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0yM1wiLFxuXHRcdFwic3RhcnRcIjogMTMuMjYsXG5cdFx0XCJtYXhcIjogMTMuNjQsXG5cdFx0XCJtaW5cIjogMTIuMjYsXG5cdFx0XCJlbmRcIjogMTMuMixcblx0XHRcInZvbHVtblwiOiAzNTY2LjM1LFxuXHRcdFwibW9uZXlcIjogNDU5MDQuNzhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTlcIixcblx0XHRcInN0YXJ0XCI6IDE0LjQ1LFxuXHRcdFwibWF4XCI6IDE0Ljk3LFxuXHRcdFwibWluXCI6IDEzLjYyLFxuXHRcdFwiZW5kXCI6IDEzLjYyLFxuXHRcdFwidm9sdW1uXCI6IDM2MjEuNDMsXG5cdFx0XCJtb25leVwiOiA1MTEwOC4zMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xOFwiLFxuXHRcdFwic3RhcnRcIjogMTQuNSxcblx0XHRcIm1heFwiOiAxNixcblx0XHRcIm1pblwiOiAxNC4zLFxuXHRcdFwiZW5kXCI6IDE1LjEzLFxuXHRcdFwidm9sdW1uXCI6IDUwNDYuNTksXG5cdFx0XCJtb25leVwiOiA3NzIwOC41M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xN1wiLFxuXHRcdFwic3RhcnRcIjogMTQuNDYsXG5cdFx0XCJtYXhcIjogMTUsXG5cdFx0XCJtaW5cIjogMTQsXG5cdFx0XCJlbmRcIjogMTQuNixcblx0XHRcInZvbHVtblwiOiAzNDgzLjcsXG5cdFx0XCJtb25leVwiOiA1MDQ5NS44NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xNlwiLFxuXHRcdFwic3RhcnRcIjogMTQsXG5cdFx0XCJtYXhcIjogMTUuMSxcblx0XHRcIm1pblwiOiAxMy40Mixcblx0XHRcImVuZFwiOiAxNC44LFxuXHRcdFwidm9sdW1uXCI6IDQ4NDQuNzQsXG5cdFx0XCJtb25leVwiOiA2ODk1My43N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xNVwiLFxuXHRcdFwic3RhcnRcIjogMTQuNSxcblx0XHRcIm1heFwiOiAxNS4wOSxcblx0XHRcIm1pblwiOiAxNC4xLFxuXHRcdFwiZW5kXCI6IDE0LjM5LFxuXHRcdFwidm9sdW1uXCI6IDQwMDguMixcblx0XHRcIm1vbmV5XCI6IDU4NzAzLjI0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTEyXCIsXG5cdFx0XCJzdGFydFwiOiAxNC4wNyxcblx0XHRcIm1heFwiOiAxNC45Nyxcblx0XHRcIm1pblwiOiAxNCxcblx0XHRcImVuZFwiOiAxNC4zNyxcblx0XHRcInZvbHVtblwiOiA1Mzk5LjQ3LFxuXHRcdFwibW9uZXlcIjogNzg1OTIuNDVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTFcIixcblx0XHRcInN0YXJ0XCI6IDEzLjQsXG5cdFx0XCJtYXhcIjogMTQuNSxcblx0XHRcIm1pblwiOiAxMy4xOSxcblx0XHRcImVuZFwiOiAxNC4xMyxcblx0XHRcInZvbHVtblwiOiA1NDcyLjkzLFxuXHRcdFwibW9uZXlcIjogNzYwMzcuMzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTBcIixcblx0XHRcInN0YXJ0XCI6IDEyLjk1LFxuXHRcdFwibWF4XCI6IDEzLjQ3LFxuXHRcdFwibWluXCI6IDEyLjcxLFxuXHRcdFwiZW5kXCI6IDEzLjM3LFxuXHRcdFwidm9sdW1uXCI6IDQwODcuNzQsXG5cdFx0XCJtb25leVwiOiA1Mzk1MS42NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wOVwiLFxuXHRcdFwic3RhcnRcIjogMTMuNDYsXG5cdFx0XCJtYXhcIjogMTMuNDYsXG5cdFx0XCJtaW5cIjogMTIuODUsXG5cdFx0XCJlbmRcIjogMTMuMTIsXG5cdFx0XCJ2b2x1bW5cIjogNDM3MS42Nyxcblx0XHRcIm1vbmV5XCI6IDU3MzUyLjIxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTA4XCIsXG5cdFx0XCJzdGFydFwiOiAxMi44OCxcblx0XHRcIm1heFwiOiAxMy42OSxcblx0XHRcIm1pblwiOiAxMi41OSxcblx0XHRcImVuZFwiOiAxMy42MSxcblx0XHRcInZvbHVtblwiOiA3NDA2LjU4LFxuXHRcdFwibW9uZXlcIjogOTgyMzYuM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wNVwiLFxuXHRcdFwic3RhcnRcIjogMTIuMzgsXG5cdFx0XCJtYXhcIjogMTIuOTQsXG5cdFx0XCJtaW5cIjogMTIuMjQsXG5cdFx0XCJlbmRcIjogMTIuNzcsXG5cdFx0XCJ2b2x1bW5cIjogNTM4Ni42Nixcblx0XHRcIm1vbmV5XCI6IDY4MjA4LjUxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTA0XCIsXG5cdFx0XCJzdGFydFwiOiAxMi41NSxcblx0XHRcIm1heFwiOiAxMi44MSxcblx0XHRcIm1pblwiOiAxMS4yOSxcblx0XHRcImVuZFwiOiAxMi4zMSxcblx0XHRcInZvbHVtblwiOiAzOTA1LjIyLFxuXHRcdFwibW9uZXlcIjogNDc0MTUuNjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDNcIixcblx0XHRcInN0YXJ0XCI6IDEzLFxuXHRcdFwibWF4XCI6IDEzLjE1LFxuXHRcdFwibWluXCI6IDEyLjIsXG5cdFx0XCJlbmRcIjogMTIuNTQsXG5cdFx0XCJ2b2x1bW5cIjogNDU1OS42MSxcblx0XHRcIm1vbmV5XCI6IDU3OTI4LjU4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTAyXCIsXG5cdFx0XCJzdGFydFwiOiAxMS44NCxcblx0XHRcIm1heFwiOiAxMi43Nyxcblx0XHRcIm1pblwiOiAxMS40OCxcblx0XHRcImVuZFwiOiAxMi43Myxcblx0XHRcInZvbHVtblwiOiA0NDA1LjE3LFxuXHRcdFwibW9uZXlcIjogNTI3NDcuOTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDFcIixcblx0XHRcInN0YXJ0XCI6IDExLjI5LFxuXHRcdFwibWF4XCI6IDExLjgsXG5cdFx0XCJtaW5cIjogMTEsXG5cdFx0XCJlbmRcIjogMTEuNzQsXG5cdFx0XCJ2b2x1bW5cIjogMzMwOC45NCxcblx0XHRcIm1vbmV5XCI6IDM4MDYwLjJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjlcIixcblx0XHRcInN0YXJ0XCI6IDExLjMsXG5cdFx0XCJtYXhcIjogMTEuNjUsXG5cdFx0XCJtaW5cIjogMTAuMzEsXG5cdFx0XCJlbmRcIjogMTEuMTEsXG5cdFx0XCJ2b2x1bW5cIjogMzQzNC4xMixcblx0XHRcIm1vbmV5XCI6IDM4MTQzLjg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTI4XCIsXG5cdFx0XCJzdGFydFwiOiAxMi43OSxcblx0XHRcIm1heFwiOiAxMi45OSxcblx0XHRcIm1pblwiOiAxMS4zOSxcblx0XHRcImVuZFwiOiAxMS40LFxuXHRcdFwidm9sdW1uXCI6IDQ5NzkuNjMsXG5cdFx0XCJtb25leVwiOiA2MTM5OC4zNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yN1wiLFxuXHRcdFwic3RhcnRcIjogMTIuODksXG5cdFx0XCJtYXhcIjogMTMuMTgsXG5cdFx0XCJtaW5cIjogMTIuNSxcblx0XHRcImVuZFwiOiAxMi42Nixcblx0XHRcInZvbHVtblwiOiA0ODg2Ljg2LFxuXHRcdFwibW9uZXlcIjogNjIzNDkuNjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjZcIixcblx0XHRcInN0YXJ0XCI6IDEyLjQsXG5cdFx0XCJtYXhcIjogMTMuMDgsXG5cdFx0XCJtaW5cIjogMTEuOTYsXG5cdFx0XCJlbmRcIjogMTIuOTIsXG5cdFx0XCJ2b2x1bW5cIjogNTgzOC41MSxcblx0XHRcIm1vbmV5XCI6IDczNDA5Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTI1XCIsXG5cdFx0XCJzdGFydFwiOiAxMS43LFxuXHRcdFwibWF4XCI6IDEyLjg3LFxuXHRcdFwibWluXCI6IDExLjYxLFxuXHRcdFwiZW5kXCI6IDEyLjMsXG5cdFx0XCJ2b2x1bW5cIjogNjQwNS4yLFxuXHRcdFwibW9uZXlcIjogNzg5MzcuMzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjJcIixcblx0XHRcInN0YXJ0XCI6IDExLjM5LFxuXHRcdFwibWF4XCI6IDExLjg5LFxuXHRcdFwibWluXCI6IDExLjE4LFxuXHRcdFwiZW5kXCI6IDExLjcxLFxuXHRcdFwidm9sdW1uXCI6IDU1MTkuODcsXG5cdFx0XCJtb25leVwiOiA2MzUxNS45M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yMVwiLFxuXHRcdFwic3RhcnRcIjogMTEuMjcsXG5cdFx0XCJtYXhcIjogMTEuMzUsXG5cdFx0XCJtaW5cIjogMTEuMDUsXG5cdFx0XCJlbmRcIjogMTEuMzMsXG5cdFx0XCJ2b2x1bW5cIjogNDEzMi44LFxuXHRcdFwibW9uZXlcIjogNDYzMTguNjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjBcIixcblx0XHRcInN0YXJ0XCI6IDExLjIzLFxuXHRcdFwibWF4XCI6IDExLjQ4LFxuXHRcdFwibWluXCI6IDEwLjgxLFxuXHRcdFwiZW5kXCI6IDExLjMyLFxuXHRcdFwidm9sdW1uXCI6IDY4NTkuNzYsXG5cdFx0XCJtb25leVwiOiA3NjI3My42NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xOVwiLFxuXHRcdFwic3RhcnRcIjogMTEuNSxcblx0XHRcIm1heFwiOiAxMS43OCxcblx0XHRcIm1pblwiOiAxMSxcblx0XHRcImVuZFwiOiAxMS4zMyxcblx0XHRcInZvbHVtblwiOiA2ODY0LjA1LFxuXHRcdFwibW9uZXlcIjogNzc3MzEuMzRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMThcIixcblx0XHRcInN0YXJ0XCI6IDExLjY4LFxuXHRcdFwibWF4XCI6IDEyLjI1LFxuXHRcdFwibWluXCI6IDExLjQ1LFxuXHRcdFwiZW5kXCI6IDEyLjE1LFxuXHRcdFwidm9sdW1uXCI6IDQyMzYuNSxcblx0XHRcIm1vbmV5XCI6IDUwNzI4LjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTVcIixcblx0XHRcInN0YXJ0XCI6IDExLjE5LFxuXHRcdFwibWF4XCI6IDEyLjI4LFxuXHRcdFwibWluXCI6IDEwLjgsXG5cdFx0XCJlbmRcIjogMTEuNjksXG5cdFx0XCJ2b2x1bW5cIjogNTUxNS42Nixcblx0XHRcIm1vbmV5XCI6IDY0NDk2LjMyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTE0XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4xOCxcblx0XHRcIm1heFwiOiAxMS4xOSxcblx0XHRcIm1pblwiOiAxMC4xMSxcblx0XHRcImVuZFwiOiAxMS4xOSxcblx0XHRcInZvbHVtblwiOiA0MTgxLjc3LFxuXHRcdFwibW9uZXlcIjogNDUzOTkuMTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTNcIixcblx0XHRcInN0YXJ0XCI6IDEwLjIsXG5cdFx0XCJtYXhcIjogMTAuMzIsXG5cdFx0XCJtaW5cIjogMTAsXG5cdFx0XCJlbmRcIjogMTAuMTcsXG5cdFx0XCJ2b2x1bW5cIjogMjI0Ny4zOSxcblx0XHRcIm1vbmV5XCI6IDIyNzgxLjIzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTEyXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4zLFxuXHRcdFwibWF4XCI6IDEwLjM2LFxuXHRcdFwibWluXCI6IDEwLjAxLFxuXHRcdFwiZW5kXCI6IDEwLjI4LFxuXHRcdFwidm9sdW1uXCI6IDIwMTAuNjUsXG5cdFx0XCJtb25leVwiOiAyMDQ4MC42M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xMVwiLFxuXHRcdFwic3RhcnRcIjogOS45OCxcblx0XHRcIm1heFwiOiAxMC4zNixcblx0XHRcIm1pblwiOiA5Ljg5LFxuXHRcdFwiZW5kXCI6IDEwLjMsXG5cdFx0XCJ2b2x1bW5cIjogMjEwMS4yNixcblx0XHRcIm1vbmV5XCI6IDIxMzY3LjUzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTA4XCIsXG5cdFx0XCJzdGFydFwiOiA5LjgyLFxuXHRcdFwibWF4XCI6IDEwLjA4LFxuXHRcdFwibWluXCI6IDkuNjUsXG5cdFx0XCJlbmRcIjogOS45NCxcblx0XHRcInZvbHVtblwiOiAxNjA5LjQzLFxuXHRcdFwibW9uZXlcIjogMTU4NDUuNTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMDdcIixcblx0XHRcInN0YXJ0XCI6IDkuNjIsXG5cdFx0XCJtYXhcIjogOS44NCxcblx0XHRcIm1pblwiOiA5LjQ1LFxuXHRcdFwiZW5kXCI6IDkuNixcblx0XHRcInZvbHVtblwiOiAxMjcwLjg2LFxuXHRcdFwibW9uZXlcIjogMTIyNDEuMTdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMDZcIixcblx0XHRcInN0YXJ0XCI6IDEwLjE4LFxuXHRcdFwibWF4XCI6IDEwLjI1LFxuXHRcdFwibWluXCI6IDkuNixcblx0XHRcImVuZFwiOiA5LjY2LFxuXHRcdFwidm9sdW1uXCI6IDE3NTQuNyxcblx0XHRcIm1vbmV5XCI6IDE3MzQ3LjA1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTA1XCIsXG5cdFx0XCJzdGFydFwiOiAxMC42OCxcblx0XHRcIm1heFwiOiAxMC42OCxcblx0XHRcIm1pblwiOiAxMCxcblx0XHRcImVuZFwiOiAxMC4wMixcblx0XHRcInZvbHVtblwiOiAxOTAzLjUsXG5cdFx0XCJtb25leVwiOiAxOTU5OC42NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0wNFwiLFxuXHRcdFwic3RhcnRcIjogMTAuNjEsXG5cdFx0XCJtYXhcIjogMTAuODQsXG5cdFx0XCJtaW5cIjogMTAuNTUsXG5cdFx0XCJlbmRcIjogMTAuNzIsXG5cdFx0XCJ2b2x1bW5cIjogMTU1NC45Myxcblx0XHRcIm1vbmV5XCI6IDE2NjI0LjQzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTMwXCIsXG5cdFx0XCJzdGFydFwiOiAxMC40LFxuXHRcdFwibWF4XCI6IDExLjA1LFxuXHRcdFwibWluXCI6IDEwLjQsXG5cdFx0XCJlbmRcIjogMTAuNjMsXG5cdFx0XCJ2b2x1bW5cIjogMjE2OS4wNixcblx0XHRcIm1vbmV5XCI6IDIzMzMzLjA2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTI5XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4zMSxcblx0XHRcIm1heFwiOiAxMC42NCxcblx0XHRcIm1pblwiOiAxMC4yNSxcblx0XHRcImVuZFwiOiAxMC40LFxuXHRcdFwidm9sdW1uXCI6IDE2MTQuNzcsXG5cdFx0XCJtb25leVwiOiAxNjkxMC45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yOFwiLFxuXHRcdFwic3RhcnRcIjogMTEuMDcsXG5cdFx0XCJtYXhcIjogMTEuMjUsXG5cdFx0XCJtaW5cIjogMTAuNDYsXG5cdFx0XCJlbmRcIjogMTAuNDksXG5cdFx0XCJ2b2x1bW5cIjogMjU1Mi4yMSxcblx0XHRcIm1vbmV5XCI6IDI3NTE1Ljg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTI3XCIsXG5cdFx0XCJzdGFydFwiOiAxMC42LFxuXHRcdFwibWF4XCI6IDExLjY3LFxuXHRcdFwibWluXCI6IDEwLjYsXG5cdFx0XCJlbmRcIjogMTEuMDYsXG5cdFx0XCJ2b2x1bW5cIjogNDIxNi40Nixcblx0XHRcIm1vbmV5XCI6IDQ3NTM0LjUzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTI0XCIsXG5cdFx0XCJzdGFydFwiOiAxMC41LFxuXHRcdFwibWF4XCI6IDEwLjg1LFxuXHRcdFwibWluXCI6IDEwLjI1LFxuXHRcdFwiZW5kXCI6IDEwLjYxLFxuXHRcdFwidm9sdW1uXCI6IDIzMjYuNDIsXG5cdFx0XCJtb25leVwiOiAyNDU5OS42M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yM1wiLFxuXHRcdFwic3RhcnRcIjogMTAuMjYsXG5cdFx0XCJtYXhcIjogMTAuOTMsXG5cdFx0XCJtaW5cIjogMTAuMTEsXG5cdFx0XCJlbmRcIjogMTAuNyxcblx0XHRcInZvbHVtblwiOiAzNzY3Ljc3LFxuXHRcdFwibW9uZXlcIjogMzk2NDMuNzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjJcIixcblx0XHRcInN0YXJ0XCI6IDEwLjIyLFxuXHRcdFwibWF4XCI6IDEwLjQyLFxuXHRcdFwibWluXCI6IDEwLjA4LFxuXHRcdFwiZW5kXCI6IDEwLjIzLFxuXHRcdFwidm9sdW1uXCI6IDI4NjguNzcsXG5cdFx0XCJtb25leVwiOiAyOTMxNi40OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yMVwiLFxuXHRcdFwic3RhcnRcIjogOS41Nixcblx0XHRcIm1heFwiOiAxMC4yLFxuXHRcdFwibWluXCI6IDkuNCxcblx0XHRcImVuZFwiOiAxMC4xOSxcblx0XHRcInZvbHVtblwiOiAzNDkzLjYxLFxuXHRcdFwibW9uZXlcIjogMzQ4NjUuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjBcIixcblx0XHRcInN0YXJ0XCI6IDkuNzEsXG5cdFx0XCJtYXhcIjogOS45OSxcblx0XHRcIm1pblwiOiA5LjQyLFxuXHRcdFwiZW5kXCI6IDkuNixcblx0XHRcInZvbHVtblwiOiAyNDYyLjA5LFxuXHRcdFwibW9uZXlcIjogMjM3NjkuNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xN1wiLFxuXHRcdFwic3RhcnRcIjogOS43OSxcblx0XHRcIm1heFwiOiAxMC4wOSxcblx0XHRcIm1pblwiOiA5LjE2LFxuXHRcdFwiZW5kXCI6IDkuODIsXG5cdFx0XCJ2b2x1bW5cIjogNDQ3My4zMyxcblx0XHRcIm1vbmV5XCI6IDQzMzY3LjI5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTE2XCIsXG5cdFx0XCJzdGFydFwiOiA5LjM2LFxuXHRcdFwibWF4XCI6IDEwLjA0LFxuXHRcdFwibWluXCI6IDguOSxcblx0XHRcImVuZFwiOiA5LjY2LFxuXHRcdFwidm9sdW1uXCI6IDI4NTEuNzksXG5cdFx0XCJtb25leVwiOiAyNzIxMC4wM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xNVwiLFxuXHRcdFwic3RhcnRcIjogMTAuMDMsXG5cdFx0XCJtYXhcIjogMTAuMjgsXG5cdFx0XCJtaW5cIjogOS4zNyxcblx0XHRcImVuZFwiOiA5LjQzLFxuXHRcdFwidm9sdW1uXCI6IDMxMzguMTEsXG5cdFx0XCJtb25leVwiOiAzMDcxMy4xM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xNFwiLFxuXHRcdFwic3RhcnRcIjogMTAuMzMsXG5cdFx0XCJtYXhcIjogMTAuMzMsXG5cdFx0XCJtaW5cIjogOS45OCxcblx0XHRcImVuZFwiOiAxMC4wMyxcblx0XHRcInZvbHVtblwiOiAyOTUxLjU5LFxuXHRcdFwibW9uZXlcIjogMjk4MDMuNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xM1wiLFxuXHRcdFwic3RhcnRcIjogMTAuMyxcblx0XHRcIm1heFwiOiAxMC42Myxcblx0XHRcIm1pblwiOiAxMC4yLFxuXHRcdFwiZW5kXCI6IDEwLjMzLFxuXHRcdFwidm9sdW1uXCI6IDMxOTYuOTksXG5cdFx0XCJtb25leVwiOiAzMzM1MS43NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xMFwiLFxuXHRcdFwic3RhcnRcIjogMTAuMjUsXG5cdFx0XCJtYXhcIjogMTAuNSxcblx0XHRcIm1pblwiOiAxMCxcblx0XHRcImVuZFwiOiAxMC4yOCxcblx0XHRcInZvbHVtblwiOiAyNTY1LjY0LFxuXHRcdFwibW9uZXlcIjogMjYzMzcuODFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDlcIixcblx0XHRcInN0YXJ0XCI6IDkuNzgsXG5cdFx0XCJtYXhcIjogMTAuNDgsXG5cdFx0XCJtaW5cIjogOS41OCxcblx0XHRcImVuZFwiOiAxMC4yMixcblx0XHRcInZvbHVtblwiOiA0MzE2Ljg2LFxuXHRcdFwibW9uZXlcIjogNDM2NDcuMzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDhcIixcblx0XHRcInN0YXJ0XCI6IDkuNDYsXG5cdFx0XCJtYXhcIjogOS44Nixcblx0XHRcIm1pblwiOiA5LjAyLFxuXHRcdFwiZW5kXCI6IDkuNzgsXG5cdFx0XCJ2b2x1bW5cIjogMzY4My40Myxcblx0XHRcIm1vbmV5XCI6IDM0NjY0LjY2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTA3XCIsXG5cdFx0XCJzdGFydFwiOiA5LjUzLFxuXHRcdFwibWF4XCI6IDkuODcsXG5cdFx0XCJtaW5cIjogOS4zOCxcblx0XHRcImVuZFwiOiA5LjQ0LFxuXHRcdFwidm9sdW1uXCI6IDM4NzQuMDYsXG5cdFx0XCJtb25leVwiOiAzNzA3Ni43OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wM1wiLFxuXHRcdFwic3RhcnRcIjogOC42LFxuXHRcdFwibWF4XCI6IDkuNDgsXG5cdFx0XCJtaW5cIjogOC40LFxuXHRcdFwiZW5kXCI6IDkuNDgsXG5cdFx0XCJ2b2x1bW5cIjogMzc2MC43OCxcblx0XHRcIm1vbmV5XCI6IDM0MzYxLjI4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTAyXCIsXG5cdFx0XCJzdGFydFwiOiA4LjQ1LFxuXHRcdFwibWF4XCI6IDguNzQsXG5cdFx0XCJtaW5cIjogOC4xOCxcblx0XHRcImVuZFwiOiA4LjYyLFxuXHRcdFwidm9sdW1uXCI6IDMwNzYuODMsXG5cdFx0XCJtb25leVwiOiAyNjExMi45OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wMVwiLFxuXHRcdFwic3RhcnRcIjogOC4xNixcblx0XHRcIm1heFwiOiA4LjYxLFxuXHRcdFwibWluXCI6IDguMDYsXG5cdFx0XCJlbmRcIjogOC40NSxcblx0XHRcInZvbHVtblwiOiAyMzk2Ljg5LFxuXHRcdFwibW9uZXlcIjogMjAwMDAuODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMzFcIixcblx0XHRcInN0YXJ0XCI6IDguMTgsXG5cdFx0XCJtYXhcIjogOC41LFxuXHRcdFwibWluXCI6IDguMTMsXG5cdFx0XCJlbmRcIjogOC4xNixcblx0XHRcInZvbHVtblwiOiAxOTM4LFxuXHRcdFwibW9uZXlcIjogMTU5ODkuMzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMzBcIixcblx0XHRcInN0YXJ0XCI6IDguMixcblx0XHRcIm1heFwiOiA4LjUzLFxuXHRcdFwibWluXCI6IDguMTEsXG5cdFx0XCJlbmRcIjogOC4yNixcblx0XHRcInZvbHVtblwiOiAyODIwLjc5LFxuXHRcdFwibW9uZXlcIjogMjM1MzIuOTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjdcIixcblx0XHRcInN0YXJ0XCI6IDguNCxcblx0XHRcIm1heFwiOiA4LjQsXG5cdFx0XCJtaW5cIjogOC4wMSxcblx0XHRcImVuZFwiOiA4LjI4LFxuXHRcdFwidm9sdW1uXCI6IDQ2MzQuNTcsXG5cdFx0XCJtb25leVwiOiAzODAzMi42OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yNlwiLFxuXHRcdFwic3RhcnRcIjogNy4zOSxcblx0XHRcIm1heFwiOiA4LjEyLFxuXHRcdFwibWluXCI6IDcuMzIsXG5cdFx0XCJlbmRcIjogOC4xMixcblx0XHRcInZvbHVtblwiOiA0MjA5LjI5LFxuXHRcdFwibW9uZXlcIjogMzM2NDMuMDNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjVcIixcblx0XHRcInN0YXJ0XCI6IDcuMzYsXG5cdFx0XCJtYXhcIjogNy42LFxuXHRcdFwibWluXCI6IDcuMixcblx0XHRcImVuZFwiOiA3LjM4LFxuXHRcdFwidm9sdW1uXCI6IDE4NDUuNDksXG5cdFx0XCJtb25leVwiOiAxMzU1MC4yMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yNFwiLFxuXHRcdFwic3RhcnRcIjogNy42Mixcblx0XHRcIm1heFwiOiA3LjYyLFxuXHRcdFwibWluXCI6IDcuMixcblx0XHRcImVuZFwiOiA3LjM1LFxuXHRcdFwidm9sdW1uXCI6IDIyNjQuNSxcblx0XHRcIm1vbmV5XCI6IDE2Njk5LjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjNcIixcblx0XHRcInN0YXJ0XCI6IDcuNTQsXG5cdFx0XCJtYXhcIjogNy42OCxcblx0XHRcIm1pblwiOiA3LjQ2LFxuXHRcdFwiZW5kXCI6IDcuNTksXG5cdFx0XCJ2b2x1bW5cIjogMTgzNC4yOCxcblx0XHRcIm1vbmV5XCI6IDEzODU1LjQxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTIwXCIsXG5cdFx0XCJzdGFydFwiOiA3LjMzLFxuXHRcdFwibWF4XCI6IDcuNjUsXG5cdFx0XCJtaW5cIjogNy4yNSxcblx0XHRcImVuZFwiOiA3LjU1LFxuXHRcdFwidm9sdW1uXCI6IDI0NzAuNzEsXG5cdFx0XCJtb25leVwiOiAxODU4OC4xM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xOVwiLFxuXHRcdFwic3RhcnRcIjogNy4zOCxcblx0XHRcIm1heFwiOiA3LjY2LFxuXHRcdFwibWluXCI6IDcuMjYsXG5cdFx0XCJlbmRcIjogNy4zNyxcblx0XHRcInZvbHVtblwiOiAyNDUwLjU0LFxuXHRcdFwibW9uZXlcIjogMTgyNDcuODJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMThcIixcblx0XHRcInN0YXJ0XCI6IDcuMTIsXG5cdFx0XCJtYXhcIjogNy40Nixcblx0XHRcIm1pblwiOiA3LjEsXG5cdFx0XCJlbmRcIjogNy4zNyxcblx0XHRcInZvbHVtblwiOiAyODU0LjQsXG5cdFx0XCJtb25leVwiOiAyMDgyOC44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xN1wiLFxuXHRcdFwic3RhcnRcIjogNi45NSxcblx0XHRcIm1heFwiOiA3LjEzLFxuXHRcdFwibWluXCI6IDYuODcsXG5cdFx0XCJlbmRcIjogNy4wOSxcblx0XHRcInZvbHVtblwiOiAyNDU3LjEzLFxuXHRcdFwibW9uZXlcIjogMTcxNjIuNTVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTZcIixcblx0XHRcInN0YXJ0XCI6IDYuOCxcblx0XHRcIm1heFwiOiA3LjA2LFxuXHRcdFwibWluXCI6IDYuNzksXG5cdFx0XCJlbmRcIjogNi45NSxcblx0XHRcInZvbHVtblwiOiAxODU4Ljc4LFxuXHRcdFwibW9uZXlcIjogMTI5MjQuMjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTNcIixcblx0XHRcInN0YXJ0XCI6IDYuODUsXG5cdFx0XCJtYXhcIjogNi45Myxcblx0XHRcIm1pblwiOiA2LjY5LFxuXHRcdFwiZW5kXCI6IDYuNzksXG5cdFx0XCJ2b2x1bW5cIjogMTE2Ny4wNixcblx0XHRcIm1vbmV5XCI6IDc5MDkuNjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTJcIixcblx0XHRcInN0YXJ0XCI6IDYuODQsXG5cdFx0XCJtYXhcIjogNy4wNixcblx0XHRcIm1pblwiOiA2LjcxLFxuXHRcdFwiZW5kXCI6IDYuODUsXG5cdFx0XCJ2b2x1bW5cIjogMjE1Mi44NSxcblx0XHRcIm1vbmV5XCI6IDE0ODM1LjQxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTExXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk4LFxuXHRcdFwibWF4XCI6IDcuMDQsXG5cdFx0XCJtaW5cIjogNi43Nyxcblx0XHRcImVuZFwiOiA2Ljg0LFxuXHRcdFwidm9sdW1uXCI6IDE0NDUuNzcsXG5cdFx0XCJtb25leVwiOiA5ODg2LjUzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTEwXCIsXG5cdFx0XCJzdGFydFwiOiA2LjczLFxuXHRcdFwibWF4XCI6IDYuOTksXG5cdFx0XCJtaW5cIjogNi43LFxuXHRcdFwiZW5kXCI6IDYuOTcsXG5cdFx0XCJ2b2x1bW5cIjogMTk5OS45Myxcblx0XHRcIm1vbmV5XCI6IDEzNzcwLjM3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTA5XCIsXG5cdFx0XCJzdGFydFwiOiA2LjU5LFxuXHRcdFwibWF4XCI6IDYuODgsXG5cdFx0XCJtaW5cIjogNi40LFxuXHRcdFwiZW5kXCI6IDYuNzIsXG5cdFx0XCJ2b2x1bW5cIjogMjI0My4xLFxuXHRcdFwibW9uZXlcIjogMTQ5NTEuMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wNlwiLFxuXHRcdFwic3RhcnRcIjogNi40Nyxcblx0XHRcIm1heFwiOiA2LjYsXG5cdFx0XCJtaW5cIjogNi4zNSxcblx0XHRcImVuZFwiOiA2LjUsXG5cdFx0XCJ2b2x1bW5cIjogMTI3MC40OSxcblx0XHRcIm1vbmV5XCI6IDgyMjkuOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDVcIixcblx0XHRcInN0YXJ0XCI6IDYuNDMsXG5cdFx0XCJtYXhcIjogNi41NCxcblx0XHRcIm1pblwiOiA2LjM0LFxuXHRcdFwiZW5kXCI6IDYuNDcsXG5cdFx0XCJ2b2x1bW5cIjogMTM2My4wOSxcblx0XHRcIm1vbmV5XCI6IDg3ODkuNDVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDRcIixcblx0XHRcInN0YXJ0XCI6IDYuMzUsXG5cdFx0XCJtYXhcIjogNi40NSxcblx0XHRcIm1pblwiOiA2LjMyLFxuXHRcdFwiZW5kXCI6IDYuNDEsXG5cdFx0XCJ2b2x1bW5cIjogMTI5NS40Mixcblx0XHRcIm1vbmV5XCI6IDgyNjUuNjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDNcIixcblx0XHRcInN0YXJ0XCI6IDYuMTYsXG5cdFx0XCJtYXhcIjogNi40Nyxcblx0XHRcIm1pblwiOiA2LjA3LFxuXHRcdFwiZW5kXCI6IDYuNDIsXG5cdFx0XCJ2b2x1bW5cIjogMjI2Ni44Mixcblx0XHRcIm1vbmV5XCI6IDE0MjE0Ljc5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTAyXCIsXG5cdFx0XCJzdGFydFwiOiA2LjIyLFxuXHRcdFwibWF4XCI6IDYuMjUsXG5cdFx0XCJtaW5cIjogNi4wNyxcblx0XHRcImVuZFwiOiA2LjE3LFxuXHRcdFwidm9sdW1uXCI6IDEyNzcuODgsXG5cdFx0XCJtb25leVwiOiA3ODUwLjM0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTI3XCIsXG5cdFx0XCJzdGFydFwiOiA2LjE2LFxuXHRcdFwibWF4XCI6IDYuMzMsXG5cdFx0XCJtaW5cIjogNi4xNSxcblx0XHRcImVuZFwiOiA2LjE5LFxuXHRcdFwidm9sdW1uXCI6IDkwOC45OCxcblx0XHRcIm1vbmV5XCI6IDU2NjMuNzRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMjZcIixcblx0XHRcInN0YXJ0XCI6IDYuMTIsXG5cdFx0XCJtYXhcIjogNi4xOCxcblx0XHRcIm1pblwiOiA2LjEsXG5cdFx0XCJlbmRcIjogNi4xNixcblx0XHRcInZvbHVtblwiOiA3MDMuNzIsXG5cdFx0XCJtb25leVwiOiA0MzI4LjU2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTI1XCIsXG5cdFx0XCJzdGFydFwiOiA2LjA5LFxuXHRcdFwibWF4XCI6IDYuMTgsXG5cdFx0XCJtaW5cIjogNi4wMyxcblx0XHRcImVuZFwiOiA2LjEyLFxuXHRcdFwidm9sdW1uXCI6IDc2Ni41Nixcblx0XHRcIm1vbmV5XCI6IDQ2NzguNzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTdcIixcblx0XHRcInN0YXJ0XCI6IDYuMTEsXG5cdFx0XCJtYXhcIjogNi4xNSxcblx0XHRcIm1pblwiOiA2LjA2LFxuXHRcdFwiZW5kXCI6IDYuMDgsXG5cdFx0XCJ2b2x1bW5cIjogNzY2LjczLFxuXHRcdFwibW9uZXlcIjogNDY3Ny4zMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xNlwiLFxuXHRcdFwic3RhcnRcIjogNi4wMyxcblx0XHRcIm1heFwiOiA2LjE0LFxuXHRcdFwibWluXCI6IDYuMDEsXG5cdFx0XCJlbmRcIjogNi4xMSxcblx0XHRcInZvbHVtblwiOiA4MTQuNzEsXG5cdFx0XCJtb25leVwiOiA0OTQ4LjMzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTEzXCIsXG5cdFx0XCJzdGFydFwiOiA1Ljk4LFxuXHRcdFwibWF4XCI6IDYuMzQsXG5cdFx0XCJtaW5cIjogNS45Myxcblx0XHRcImVuZFwiOiA2LjA4LFxuXHRcdFwidm9sdW1uXCI6IDE5OTIuNTYsXG5cdFx0XCJtb25leVwiOiAxMjEzNS4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xMlwiLFxuXHRcdFwic3RhcnRcIjogNS43Mixcblx0XHRcIm1heFwiOiA2LjEsXG5cdFx0XCJtaW5cIjogNS42Nixcblx0XHRcImVuZFwiOiA2LjAxLFxuXHRcdFwidm9sdW1uXCI6IDI1NzIuMzgsXG5cdFx0XCJtb25leVwiOiAxNTMxMi43M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xMVwiLFxuXHRcdFwic3RhcnRcIjogNS42OSxcblx0XHRcIm1heFwiOiA1Ljc3LFxuXHRcdFwibWluXCI6IDUuNjcsXG5cdFx0XCJlbmRcIjogNS43Mixcblx0XHRcInZvbHVtblwiOiA2MDIuNjYsXG5cdFx0XCJtb25leVwiOiAzNDQzLjk5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTEwXCIsXG5cdFx0XCJzdGFydFwiOiA1LjQ2LFxuXHRcdFwibWF4XCI6IDUuNzUsXG5cdFx0XCJtaW5cIjogNS40Myxcblx0XHRcImVuZFwiOiA1LjczLFxuXHRcdFwidm9sdW1uXCI6IDEyOTguNjMsXG5cdFx0XCJtb25leVwiOiA3MzA3LjQyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTA5XCIsXG5cdFx0XCJzdGFydFwiOiA1LjU5LFxuXHRcdFwibWF4XCI6IDUuNTksXG5cdFx0XCJtaW5cIjogNS40Nyxcblx0XHRcImVuZFwiOiA1LjQ4LFxuXHRcdFwidm9sdW1uXCI6IDQzNS45OCxcblx0XHRcIm1vbmV5XCI6IDI0MTAuMDlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDZcIixcblx0XHRcInN0YXJ0XCI6IDUuNSxcblx0XHRcIm1heFwiOiA1LjYyLFxuXHRcdFwibWluXCI6IDUuNDgsXG5cdFx0XCJlbmRcIjogNS42MSxcblx0XHRcInZvbHVtblwiOiA2MzAuNixcblx0XHRcIm1vbmV5XCI6IDM0OTAuMTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDVcIixcblx0XHRcInN0YXJ0XCI6IDUuNTgsXG5cdFx0XCJtYXhcIjogNS41OSxcblx0XHRcIm1pblwiOiA1LjQ3LFxuXHRcdFwiZW5kXCI6IDUuNDgsXG5cdFx0XCJ2b2x1bW5cIjogNjM2LjcsXG5cdFx0XCJtb25leVwiOiAzNTIxLjg5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTA0XCIsXG5cdFx0XCJzdGFydFwiOiA1LjYzLFxuXHRcdFwibWF4XCI6IDUuNjcsXG5cdFx0XCJtaW5cIjogNS41Mixcblx0XHRcImVuZFwiOiA1LjUyLFxuXHRcdFwidm9sdW1uXCI6IDYzNS4zOCxcblx0XHRcIm1vbmV5XCI6IDM1NDguOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDNcIixcblx0XHRcInN0YXJ0XCI6IDUuNjMsXG5cdFx0XCJtYXhcIjogNS42Nyxcblx0XHRcIm1pblwiOiA1LjU2LFxuXHRcdFwiZW5kXCI6IDUuNjUsXG5cdFx0XCJ2b2x1bW5cIjogNDM0LjM0LFxuXHRcdFwibW9uZXlcIjogMjQzOS4wOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wMlwiLFxuXHRcdFwic3RhcnRcIjogNS41NSxcblx0XHRcIm1heFwiOiA1LjY1LFxuXHRcdFwibWluXCI6IDUuNTEsXG5cdFx0XCJlbmRcIjogNS42MSxcblx0XHRcInZvbHVtblwiOiAzMzguNzEsXG5cdFx0XCJtb25leVwiOiAxODk2LjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTMwXCIsXG5cdFx0XCJzdGFydFwiOiA1Ljc4LFxuXHRcdFwibWF4XCI6IDUuODUsXG5cdFx0XCJtaW5cIjogNS42LFxuXHRcdFwiZW5kXCI6IDUuNjUsXG5cdFx0XCJ2b2x1bW5cIjogNTc0Ljc0LFxuXHRcdFwibW9uZXlcIjogMzI3MC4yNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yOVwiLFxuXHRcdFwic3RhcnRcIjogNS44LFxuXHRcdFwibWF4XCI6IDUuODcsXG5cdFx0XCJtaW5cIjogNS43NCxcblx0XHRcImVuZFwiOiA1Ljc4LFxuXHRcdFwidm9sdW1uXCI6IDYwNS41NSxcblx0XHRcIm1vbmV5XCI6IDM1MTYuMTRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjhcIixcblx0XHRcInN0YXJ0XCI6IDUuODksXG5cdFx0XCJtYXhcIjogNS45NSxcblx0XHRcIm1pblwiOiA1LjgyLFxuXHRcdFwiZW5kXCI6IDUuODUsXG5cdFx0XCJ2b2x1bW5cIjogNjUzLjQ3LFxuXHRcdFwibW9uZXlcIjogMzg0Ni41MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yN1wiLFxuXHRcdFwic3RhcnRcIjogNS43Mixcblx0XHRcIm1heFwiOiA1Ljk0LFxuXHRcdFwibWluXCI6IDUuNyxcblx0XHRcImVuZFwiOiA1Ljg5LFxuXHRcdFwidm9sdW1uXCI6IDEzOTguODQsXG5cdFx0XCJtb25leVwiOiA4MTk0LjE4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTI2XCIsXG5cdFx0XCJzdGFydFwiOiA1LjY1LFxuXHRcdFwibWF4XCI6IDUuNzMsXG5cdFx0XCJtaW5cIjogNS41OCxcblx0XHRcImVuZFwiOiA1LjcyLFxuXHRcdFwidm9sdW1uXCI6IDkzMC4xOSxcblx0XHRcIm1vbmV5XCI6IDUyNDcuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjNcIixcblx0XHRcInN0YXJ0XCI6IDUuNjgsXG5cdFx0XCJtYXhcIjogNS43Mixcblx0XHRcIm1pblwiOiA1LjYsXG5cdFx0XCJlbmRcIjogNS42Mixcblx0XHRcInZvbHVtblwiOiA3NTguMTMsXG5cdFx0XCJtb25leVwiOiA0Mjg0Ljhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjJcIixcblx0XHRcInN0YXJ0XCI6IDUuNDksXG5cdFx0XCJtYXhcIjogNS43OCxcblx0XHRcIm1pblwiOiA1LjQxLFxuXHRcdFwiZW5kXCI6IDUuNzEsXG5cdFx0XCJ2b2x1bW5cIjogMTEzOS45NCxcblx0XHRcIm1vbmV5XCI6IDYzODYuMTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjFcIixcblx0XHRcInN0YXJ0XCI6IDUuMzYsXG5cdFx0XCJtYXhcIjogNS41OCxcblx0XHRcIm1pblwiOiA1LjMzLFxuXHRcdFwiZW5kXCI6IDUuNTUsXG5cdFx0XCJ2b2x1bW5cIjogNzAxLjExLFxuXHRcdFwibW9uZXlcIjogMzg0MC44NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yMFwiLFxuXHRcdFwic3RhcnRcIjogNS4yMyxcblx0XHRcIm1heFwiOiA1LjM1LFxuXHRcdFwibWluXCI6IDUuMjIsXG5cdFx0XCJlbmRcIjogNS4zMyxcblx0XHRcInZvbHVtblwiOiA4MTcuOTcsXG5cdFx0XCJtb25leVwiOiA0MzI2LjQ3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTE5XCIsXG5cdFx0XCJzdGFydFwiOiA1LjYsXG5cdFx0XCJtYXhcIjogNS42Nyxcblx0XHRcIm1pblwiOiA1LjEyLFxuXHRcdFwiZW5kXCI6IDUuMTYsXG5cdFx0XCJ2b2x1bW5cIjogMTI0OC44Mixcblx0XHRcIm1vbmV5XCI6IDY2NjkuOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTZcIixcblx0XHRcInN0YXJ0XCI6IDUuNjcsXG5cdFx0XCJtYXhcIjogNS43Myxcblx0XHRcIm1pblwiOiA1LjY2LFxuXHRcdFwiZW5kXCI6IDUuNjksXG5cdFx0XCJ2b2x1bW5cIjogMzk5LjU0LFxuXHRcdFwibW9uZXlcIjogMjI3NC45NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xNVwiLFxuXHRcdFwic3RhcnRcIjogNS42LFxuXHRcdFwibWF4XCI6IDUuNjcsXG5cdFx0XCJtaW5cIjogNS41Nyxcblx0XHRcImVuZFwiOiA1LjY3LFxuXHRcdFwidm9sdW1uXCI6IDM2MS4yOCxcblx0XHRcIm1vbmV5XCI6IDIwMzEuNjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTRcIixcblx0XHRcInN0YXJ0XCI6IDUuNjIsXG5cdFx0XCJtYXhcIjogNS42OSxcblx0XHRcIm1pblwiOiA1LjYxLFxuXHRcdFwiZW5kXCI6IDUuNjIsXG5cdFx0XCJ2b2x1bW5cIjogMzIxLjI3LFxuXHRcdFwibW9uZXlcIjogMTgxMi45M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xM1wiLFxuXHRcdFwic3RhcnRcIjogNS42NCxcblx0XHRcIm1heFwiOiA1LjcxLFxuXHRcdFwibWluXCI6IDUuNTgsXG5cdFx0XCJlbmRcIjogNS42NSxcblx0XHRcInZvbHVtblwiOiAzNzUuMzUsXG5cdFx0XCJtb25leVwiOiAyMTIwLjg3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTEyXCIsXG5cdFx0XCJzdGFydFwiOiA1Ljc5LFxuXHRcdFwibWF4XCI6IDUuNzksXG5cdFx0XCJtaW5cIjogNS41OCxcblx0XHRcImVuZFwiOiA1LjYsXG5cdFx0XCJ2b2x1bW5cIjogNTE2LjE5LFxuXHRcdFwibW9uZXlcIjogMjkyMS4wNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0wOVwiLFxuXHRcdFwic3RhcnRcIjogNS45NSxcblx0XHRcIm1heFwiOiA1Ljk3LFxuXHRcdFwibWluXCI6IDUuOCxcblx0XHRcImVuZFwiOiA1LjgyLFxuXHRcdFwidm9sdW1uXCI6IDcwMS4zOSxcblx0XHRcIm1vbmV5XCI6IDQxMjMuNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0wOFwiLFxuXHRcdFwic3RhcnRcIjogNS45NSxcblx0XHRcIm1heFwiOiA2LjA2LFxuXHRcdFwibWluXCI6IDUuOTEsXG5cdFx0XCJlbmRcIjogNS45Nyxcblx0XHRcInZvbHVtblwiOiA2NzYuNzUsXG5cdFx0XCJtb25leVwiOiA0MDU2LjEyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTA3XCIsXG5cdFx0XCJzdGFydFwiOiA2LFxuXHRcdFwibWF4XCI6IDYuMDQsXG5cdFx0XCJtaW5cIjogNS45Mixcblx0XHRcImVuZFwiOiA1Ljk2LFxuXHRcdFwidm9sdW1uXCI6IDU0Ni45Myxcblx0XHRcIm1vbmV5XCI6IDMyNjcuMTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMDZcIixcblx0XHRcInN0YXJ0XCI6IDUuODksXG5cdFx0XCJtYXhcIjogNi4wOSxcblx0XHRcIm1pblwiOiA1Ljg0LFxuXHRcdFwiZW5kXCI6IDYuMDcsXG5cdFx0XCJ2b2x1bW5cIjogMTE2OS4zLFxuXHRcdFwibW9uZXlcIjogNjk4MC40OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0wNVwiLFxuXHRcdFwic3RhcnRcIjogNS44OSxcblx0XHRcIm1heFwiOiA2LFxuXHRcdFwibWluXCI6IDUuNzUsXG5cdFx0XCJlbmRcIjogNS45NCxcblx0XHRcInZvbHVtblwiOiA4MDYuMSxcblx0XHRcIm1vbmV5XCI6IDQ3NTEuMTVcblx0fVxuXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZXhhbXBsZXMvY2FuZGxlU3RpY2tzLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5HMjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LkcyXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEBpZ25vcmVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG52YXIgVXRpbCA9IEcyLlV0aWw7XG52YXIgQ2FudmFzID0gRzIuQ2FudmFzO1xudmFyIEdyb3VwID0gQ2FudmFzLkdyb3VwO1xuXG52YXIgUmFuZ2UgPSBmdW5jdGlvbihjZmcpIHtcbiAgUmFuZ2Uuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGNmZyk7XG59O1xuXG5SYW5nZS5DRkcgPSB7XG4gIC8qKlxuICAgKiDojIPlm7RcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgcmFuZ2U6IG51bGwsXG4gIC8qKlxuICAgKiDkuK3mu5HlnZflsZ7mgKdcbiAgICogQHR5cGUge0FUVFJTfVxuICAgKi9cbiAgbWlkZGxlQXR0cjogbnVsbCxcbiAgLyoqXG4gICAqIOiDjOaZr1xuICAgKiBAdHlwZSB7Ry1FbGVtZW50fVxuICAgKi9cbiAgYmFja2dyb3VuZEVsZW1lbnQ6IG51bGwsXG4gIC8qKlxuICAgKiDkuIvmu5HlnZdcbiAgICogQHR5cGUge0ctRWxlbWVudH1cbiAgICovXG4gIG1pbkhhbmRsZUVsZW1lbnQ6IG51bGwsXG4gIC8qKlxuICAgKiDkuIrmu5HlnZdcbiAgICogQHR5cGUge0ctRWxlbWVudH1cbiAgICovXG4gIG1heEhhbmRsZUVsZW1lbnQ6IG51bGwsXG4gIC8qKlxuICAgKiDkuK3lnZdcbiAgICogQHR5cGUge0ctRWxlbWVudH1cbiAgICovXG4gIG1pZGRsZUhhbmRsZUVsZW1lbnQ6IG51bGwsXG4gIC8qKlxuICAgKiDlvZPliY3nmoTmv4DmtLvnmoTlhYPntKBcbiAgICogQHR5cGUge0ctRWxlbWVudH1cbiAgICovXG4gIGN1cnJlbnRUYXJnZXQ6IG51bGwsXG4gIC8qKlxuICAgKiDluIPlsYDmlrnlvI/vvJogaG9yaXpvbnRhbO+8jHZlcnRpY2FsXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gIC8qKlxuICAgKiDlrr1cbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHdpZHRoOiBudWxsLFxuICAvKipcbiAgICog6auYXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBoZWlnaHQ6IG51bGwsXG4gIC8qKlxuICAgKiDlvZPliY3nmoRQYWdlWFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcGFnZVg6IG51bGwsXG4gIC8qKlxuICAgKiDlvZPliY3nmoRQYWdlWVxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcGFnZVk6IG51bGwsXG4gIC8qKlxuICAgKiDmmK/lkKblj4LkuI7liqjnlLtcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBhbmltYXRlOiBmYWxzZSxcbiAgLyoqXG4gICAqIOWPr+aTjeS9nOaAp++8jGZhbHNlIOWImeS4jea7keWKqFxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIG9wZXJhYmxlOiB0cnVlXG59O1xuXG5VdGlsLmV4dGVuZChSYW5nZSwgR3JvdXApO1xuXG5VdGlsLmF1Z21lbnQoUmFuZ2UsIHtcbiAgX2JlZm9yZVJlbmRlclVJOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5nZXQoJ2xheW91dCcpO1xuICAgIHZhciBiYWNrZ3JvdW5kRWxlbWVudCA9IHRoaXMuZ2V0KCdiYWNrZ3JvdW5kRWxlbWVudCcpO1xuICAgIHZhciBtaW5IYW5kbGVFbGVtZW50ID0gdGhpcy5nZXQoJ21pbkhhbmRsZUVsZW1lbnQnKTtcbiAgICB2YXIgbWF4SGFuZGxlRWxlbWVudCA9IHRoaXMuZ2V0KCdtYXhIYW5kbGVFbGVtZW50Jyk7XG4gICAgdmFyIG1pZGRsZUhhbmRsZUVsZW1lbnQgPSB0aGlzLmFkZFNoYXBlKCdyZWN0Jywge1xuICAgICAgYXR0cnM6IHRoaXMuZ2V0KCdtaWRkbGVBdHRyJylcbiAgICB9KTtcbiAgICB2YXIgdHJpZ2VyQ3Vyc29yID0gbGF5b3V0ID09PSAndmVydGljYWwnID8gJ25zLXJlc2l6ZScgOiAnZXctcmVzaXplJztcbiAgICB0aGlzLmFkZChbYmFja2dyb3VuZEVsZW1lbnQsIG1pbkhhbmRsZUVsZW1lbnQsIG1heEhhbmRsZUVsZW1lbnRdKTtcbiAgICB0aGlzLnNldCgnbWlkZGxlSGFuZGxlRWxlbWVudCcsIG1pZGRsZUhhbmRsZUVsZW1lbnQpO1xuICAgIGJhY2tncm91bmRFbGVtZW50LnNldCgnekluZGV4JywgMCk7XG4gICAgbWlkZGxlSGFuZGxlRWxlbWVudC5zZXQoJ3pJbmRleCcsIDEpO1xuICAgIG1pbkhhbmRsZUVsZW1lbnQuc2V0KCd6SW5kZXgnLCAyKTtcbiAgICBtYXhIYW5kbGVFbGVtZW50LnNldCgnekluZGV4JywgMik7XG4gICAgaWYgKHRoaXMuZ2V0KCdvcGVyYWJsZScpKSB7XG4gICAgICBtaWRkbGVIYW5kbGVFbGVtZW50LnNldCgnY3Vyc29yJywgJ21vdmUnKTtcbiAgICAgIFV0aWwuZWFjaChtaW5IYW5kbGVFbGVtZW50LmdldCgnY2hpbGRyZW4nKSwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc2V0KCdjdXJzb3InLCB0cmlnZXJDdXJzb3IpO1xuICAgICAgfSk7XG4gICAgICBVdGlsLmVhY2gobWF4SGFuZGxlRWxlbWVudC5nZXQoJ2NoaWxkcmVuJyksIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnNldCgnY3Vyc29yJywgdHJpZ2VyQ3Vyc29yKTtcbiAgICAgIH0pO1xuICAgICAgLy8gbWluSGFuZGxlRWxlbWVudC5zZXQoJ2N1cnNvcicsIHRyaWdlckN1cnNvcik7XG4gICAgICAvLyBtYXhIYW5kbGVFbGVtZW50LnNldCgnY3Vyc29yJywgdHJpZ2VyQ3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0KCk7XG4gIH0sXG4gIF9yZW5kZXJVSTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuZ2V0KCdsYXlvdXQnKTtcbiAgICBpZiAobGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuX3JlbmRlckhvcml6b250YWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyVmVydGljYWwoKTtcbiAgICB9XG4gIH0sXG4gIF90cmFuc2Zvcm06IGZ1bmN0aW9uKGxheW91dCkge1xuICAgIHZhciByYW5nZSA9IHRoaXMuZ2V0KCdyYW5nZScpO1xuICAgIHZhciBtaW5SYXRpbyA9IHJhbmdlWzBdIC8gMTAwO1xuICAgIHZhciBtYXhSYXRpbyA9IHJhbmdlWzFdIC8gMTAwO1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0KCd3aWR0aCcpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIG1pbkhhbmRsZUVsZW1lbnQgPSB0aGlzLmdldCgnbWluSGFuZGxlRWxlbWVudCcpO1xuICAgIHZhciBtYXhIYW5kbGVFbGVtZW50ID0gdGhpcy5nZXQoJ21heEhhbmRsZUVsZW1lbnQnKTtcbiAgICB2YXIgbWlkZGxlSGFuZGxlRWxlbWVudCA9IHRoaXMuZ2V0KCdtaWRkbGVIYW5kbGVFbGVtZW50Jyk7XG5cbiAgICBtaW5IYW5kbGVFbGVtZW50LmluaXRUcmFuc2Zvcm0oKTtcbiAgICBtYXhIYW5kbGVFbGVtZW50LmluaXRUcmFuc2Zvcm0oKTtcblxuICAgIGlmIChsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgbWlkZGxlSGFuZGxlRWxlbWVudC5hdHRyKHtcbiAgICAgICAgeDogd2lkdGggKiBtaW5SYXRpbyxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IChtYXhSYXRpbyAtIG1pblJhdGlvKSAqIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG4gICAgICBtaW5IYW5kbGVFbGVtZW50LnRyYW5zbGF0ZShtaW5SYXRpbyAqIHdpZHRoLCAwKTtcbiAgICAgIG1heEhhbmRsZUVsZW1lbnQudHJhbnNsYXRlKG1heFJhdGlvICogd2lkdGgsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaWRkbGVIYW5kbGVFbGVtZW50LmF0dHIoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiBoZWlnaHQgKiAoMSAtIG1heFJhdGlvKSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IChtYXhSYXRpbyAtIG1pblJhdGlvKSAqIGhlaWdodFxuICAgICAgfSk7XG4gICAgICBtaW5IYW5kbGVFbGVtZW50LnRyYW5zbGF0ZSh3aWR0aCAvIDIsICgxIC0gbWluUmF0aW8pICogaGVpZ2h0KTtcbiAgICAgIG1heEhhbmRsZUVsZW1lbnQudHJhbnNsYXRlKHdpZHRoIC8gMiwgKDEgLSBtYXhSYXRpbykgKiBoZWlnaHQpO1xuICAgIH1cbiAgfSxcbiAgX3JlbmRlckhvcml6b250YWw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybSgnaG9yaXpvbnRhbCcpO1xuICB9LFxuICBfcmVuZGVyVmVydGljYWw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybSgndmVydGljYWwnKTtcbiAgfSxcbiAgX2JpbmRVSTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ2V0KCdvcGVyYWJsZScpKSB7XG4gICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX29uTW91c2VEb3duJykpO1xuICAgICAgdGhpcy5vbignbW91c2Vtb3ZlJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19vbk1vdXNlTW92ZScpKTtcbiAgICAgIHRoaXMub24oJ21vdXNlbGVhdmUnLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX29uTW91c2VMZWF2ZScpKTtcbiAgICB9XG4gIH0sXG4gIC8vIOWIpOaWreaYr+WQpuaYr+ivpeWFg+e0oFxuICBfaXNFbGVtZW50OiBmdW5jdGlvbih0YXJnZXQsIG5hbWUpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0KG5hbWUpO1xuICAgIGlmICh0YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5pc0dyb3VwKSB7XG4gICAgICB2YXIgZWxlbWVudENoaWxkcmVuID0gZWxlbWVudC5nZXQoJ2NoaWxkcmVuJyk7XG4gICAgICByZXR1cm4gZWxlbWVudENoaWxkcmVuLmluZGV4T2YodGFyZ2V0KSA+IC0xO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIF9nZXRSYW5nZTogZnVuY3Rpb24oZGlmZiwgcmFuZ2UpIHtcbiAgICB2YXIgcnN0ID0gZGlmZiArIHJhbmdlO1xuICAgIHJzdCA9IHJzdCA+IDEwMCA/IDEwMCA6IHJzdDtcbiAgICByc3QgPSByc3QgPCAwID8gMCA6IHJzdDtcbiAgICByZXR1cm4gcnN0O1xuICB9LFxuICAvKipcbiAgICog5pu05paw54q25oCBXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkaW0geCB8fCB5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldiBET00g5Y6f55Sf5LqL5Lu2XG4gICAqL1xuICBfdXBkYXRlU3RhdHVzOiBmdW5jdGlvbihkaW0sIGV2KSB7XG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gZGltID09PSAneCcgPyB0aGlzLmdldCgnd2lkdGgnKSA6IHRoaXMuZ2V0KCdoZWlnaHQnKTtcbiAgICB2YXIgdWNEaW0gPSBVdGlsLnVjZmlyc3QoZGltKTtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLmdldCgncmFuZ2UnKTtcbiAgICB2YXIgcGFnZSA9IHRoaXMuZ2V0KCdwYWdlJyArIHVjRGltKTtcbiAgICB2YXIgY3VycmVudFRhcmdldCA9IHRoaXMuZ2V0KCdjdXJyZW50VGFyZ2V0Jyk7XG4gICAgdmFyIHJhbmdlU3Rhc2ggPSB0aGlzLmdldCgncmFuZ2VTdGFzaCcpO1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLmdldCgnbGF5b3V0Jyk7XG4gICAgdmFyIHNpZ24gPSBsYXlvdXQgPT09ICd2ZXJ0aWNhbCcgPyAtMSA6IDE7XG4gICAgdmFyIGN1cnJlbnRQYWdlID0gZXZbJ3BhZ2UnICsgdWNEaW1dO1xuICAgIHZhciBkaWZmUGFnZSA9IGN1cnJlbnRQYWdlIC0gcGFnZTtcbiAgICB2YXIgZGlmZlJhbmdlID0gKGRpZmZQYWdlIC8gdG90YWxMZW5ndGgpICogMTAwICogc2lnbjtcbiAgICB2YXIgZGlmZlN0YXNoUmFuZ2U7XG5cbiAgICBpZiAocmFuZ2VbMV0gPD0gcmFuZ2VbMF0pIHtcbiAgICAgIGlmICh0aGlzLl9pc0VsZW1lbnQoY3VycmVudFRhcmdldCwgJ21pbkhhbmRsZUVsZW1lbnQnKSB8fCB0aGlzLl9pc0VsZW1lbnQoY3VycmVudFRhcmdldCwgJ21heEhhbmRsZUVsZW1lbnQnKSkge1xuICAgICAgICByYW5nZVswXSA9IHRoaXMuX2dldFJhbmdlKGRpZmZSYW5nZSwgcmFuZ2VbMF0pO1xuICAgICAgICByYW5nZVsxXSA9IHRoaXMuX2dldFJhbmdlKGRpZmZSYW5nZSwgcmFuZ2VbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5faXNFbGVtZW50KGN1cnJlbnRUYXJnZXQsICdtaW5IYW5kbGVFbGVtZW50JykpIHtcbiAgICAgICAgcmFuZ2VbMF0gPSB0aGlzLl9nZXRSYW5nZShkaWZmUmFuZ2UsIHJhbmdlWzBdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0VsZW1lbnQoY3VycmVudFRhcmdldCwgJ21heEhhbmRsZUVsZW1lbnQnKSkge1xuICAgICAgICByYW5nZVsxXSA9IHRoaXMuX2dldFJhbmdlKGRpZmZSYW5nZSwgcmFuZ2VbMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0VsZW1lbnQoY3VycmVudFRhcmdldCwgJ21pZGRsZUhhbmRsZUVsZW1lbnQnKSkge1xuICAgICAgZGlmZlN0YXNoUmFuZ2UgPSAocmFuZ2VTdGFzaFsxXSAtIHJhbmdlU3Rhc2hbMF0pO1xuICAgICAgcmFuZ2VbMF0gPSB0aGlzLl9nZXRSYW5nZShkaWZmUmFuZ2UsIHJhbmdlWzBdKTtcbiAgICAgIHJhbmdlWzFdID0gcmFuZ2VbMF0gKyBkaWZmU3Rhc2hSYW5nZTtcbiAgICAgIGlmIChyYW5nZVsxXSA+IDEwMCkge1xuICAgICAgICByYW5nZVsxXSA9IDEwMDtcbiAgICAgICAgcmFuZ2VbMF0gPSByYW5nZVsxXSAtIGRpZmZTdGFzaFJhbmdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyZSgncmFuZ2VDaGFuZ2UnLCB7XG4gICAgICByYW5nZTogcmFuZ2VcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0KCdwYWdlJyArIHVjRGltLCBjdXJyZW50UGFnZSk7XG4gICAgdGhpcy5fcmVuZGVyVUkoKTtcbiAgICB0aGlzLmdldCgnY2FudmFzJykuZHJhdygpOyAvLyBuZWVkIGRlbGV0ZVxuICAgIHJldHVybjtcbiAgfSxcbiAgX29uTW91c2VMZWF2ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRhaW5lckRPTSA9IHRoaXMuZ2V0KCdjYW52YXMnKS5nZXQoJ2NvbnRhaW5lckRPTScpO1xuICAgIGNvbnRhaW5lckRPTS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gIH0sXG4gIF9vbk1vdXNlTW92ZTogZnVuY3Rpb24oZXYpIHtcbiAgICB2YXIgY3Vyc29yID0gZXYuY3VycmVudFRhcmdldC5nZXQoJ2N1cnNvcicsIHRydWUpO1xuICAgIHZhciBjb250YWluZXJET00gPSB0aGlzLmdldCgnY2FudmFzJykuZ2V0KCdjb250YWluZXJET00nKTtcbiAgICBpZiAoY29udGFpbmVyRE9NKSB7XG4gICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgIGNvbnRhaW5lckRPTS5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXJET00uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX29uTW91c2VEb3duOiBmdW5jdGlvbihldikge1xuICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldDtcbiAgICB2YXIgb3JpZ2luRXZlbnQgPSBldi5ldmVudDtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLmdldCgncmFuZ2UnKTtcbiAgICBvcmlnaW5FdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvcmlnaW5FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0KCdwYWdlWCcsIG9yaWdpbkV2ZW50LnBhZ2VYKTtcbiAgICB0aGlzLnNldCgncGFnZVknLCBvcmlnaW5FdmVudC5wYWdlWSk7XG4gICAgdGhpcy5zZXQoJ2N1cnJlbnRUYXJnZXQnLCBjdXJyZW50VGFyZ2V0KTtcbiAgICB0aGlzLnNldCgncmFuZ2VTdGFzaCcsIFtyYW5nZVswXSwgcmFuZ2VbMV1dKTtcbiAgICB0aGlzLl9iaW5kQ2FudmFzRXZlbnRzKCk7XG4gIH0sXG4gIF9iaW5kQ2FudmFzRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIgPSBVdGlsLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX29uQ2FudmFzTW91c2VNb3ZlJykpO1xuICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIgPSBVdGlsLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZXVwJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19vbkNhbnZhc01vdXNlVXAnKSk7XG4gIH0sXG4gIF9vbkNhbnZhc01vdXNlTW92ZTogZnVuY3Rpb24oZXYpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5nZXQoJ2xheW91dCcpO1xuICAgIGlmIChsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCd4JywgZXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGF0dXMoJ3knLCBldik7XG4gICAgfVxuICB9LFxuICBfb25DYW52YXNNb3VzZVVwOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICB9LFxuICBfcmVtb3ZlRG9jdW1lbnRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5nZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JhbmdlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEcyJ3MgcGx1Z2luIGZvciBkYXRhem9vbS5cbiAqIEBhdXRob3Igc2ltYS56aGFuZzE5OTBAZ21haWwuY29tXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIFV0aWwgPSBHMi5VdGlsO1xudmFyIEJhc2UgPSBHMi5CYXNlO1xudmFyIERhdGFGcmFtZSA9IEcyLkZyYW1lO1xudmFyIENhbnZhcyA9IEcyLkNhbnZhcztcbnZhciBSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2UnKTtcbnZhciBPRkZTRVQgPSA1O1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24oY2ZnKSB7XG4gIFNsaWRlci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgY2ZnKTtcbiAgdGhpcy5faW5pdCgpO1xufTtcblxuU2xpZGVyLkFUVFJTID0ge1xuICBjaGFydHM6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHN0YXJ0OiBudWxsLFxuICBlbmQ6IG51bGwsXG4gIGRvbUlkOiBudWxsLFxuICB4RGltOiBudWxsLFxuICB5RGltOiBudWxsLFxuICAvKipcbiAgICog5Lit6Ze05ruR5Z2XXG4gICAqIEB0eXBlIHtBVFRSU31cbiAgICovXG4gIG1pZGRsZUF0dHI6IHtcbiAgICBmaWxsOiAnI0Q1REFFMycsXG4gICAgZmlsbE9wYWNpdHk6IDAuMlxuICB9LFxuICBiYWNrZ3JvdW5kQXR0cjoge1xuICAgIHN0cm9rZTogJyNFMkUyRTInLFxuICAgIGZpbGw6ICcjRjNGM0YzJyxcbiAgICBvcGFjaXR5OiAwLjIsXG4gICAgbGluZVdpZHRoOiAxXG4gIH0sXG4gIHJhbmdlOiBbMCwgMTAwXSxcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gIHRleHRBdHRyOiB7XG4gICAgZmlsbDogJyMzMzMnXG4gIH0sXG4gIGhhbmRsZUljb246ICdodHRwczovL3QuYWxpcGF5b2JqZWN0cy5jb20vaW1hZ2VzL3Jtc3dlYi9UMVlvaGhYZDRiWFhYWFhYWFgucG5nJ1xufTtcblxuVXRpbC5leHRlbmQoU2xpZGVyLCBCYXNlKTtcblxuVXRpbC5hdWdtZW50KFNsaWRlciwge1xuICBfaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXQoJ2NvbnRhaW5lcicsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0KCdkb21JZCcpKSk7XG4gICAgdGhpcy5zZXQoJ2ZpcnN0UmVuZGVyJywgJ3RydWUnKTtcbiAgICB2YXIgbGlua0NoYXJ0cyA9IHRoaXMuZ2V0KCdjaGFydHMnKTtcbiAgICB2YXIgY2hhcnQgPSBVdGlsLmlzQXJyYXkobGlua0NoYXJ0cykgPyBsaW5rQ2hhcnRzWzBdIDogbGlua0NoYXJ0cztcbiAgICB2YXIgZm9yY2VGaXQgPSBjaGFydC5nZXQoJ3BhcmVudCcpID8gY2hhcnQuZ2V0KCdwYXJlbnQnKS5nZXQoJ2ZvcmNlRml0JykgOiBjaGFydC5nZXQoJ2ZvcmNlRml0Jyk7XG4gICAgaWYgKGZvcmNlRml0KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19pbml0Rm9yY2VGaXRFdmVudCcpKTtcbiAgICB9XG4gIH0sXG4gIF9pbml0Rm9yY2VGaXRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnZm9yY2VGaXQnKSwgMjAwKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5nZXQoJ3Jlc2l6ZVRpbWVyJykpO1xuICAgIHRoaXMuc2V0KCdyZXNpemVUaW1lcicsIHRpbWVyKTtcbiAgfSxcbiAgZm9yY2VGaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5rQ2hhcnRzID0gdGhpcy5nZXQoJ2NoYXJ0cycpO1xuICAgIHZhciBjaGFydCA9IFV0aWwuaXNBcnJheShsaW5rQ2hhcnRzKSA/IGxpbmtDaGFydHNbMF0gOiBsaW5rQ2hhcnRzO1xuICAgIHZhciB3aWR0aCA9IGNoYXJ0LmdldCgncGFyZW50JykgPyBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgnd2lkdGgnKSA6IGNoYXJ0LmdldCgnd2lkdGgnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIGlmICh3aWR0aCAhPT0gdGhpcy5nZXQoJ3dpZHRoJykpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgICB2YXIgZmlsdGVycyA9IGNoYXJ0LmdldCgnb3B0aW9ucycpLmZpbHRlcnM7XG4gICAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgICB0aGlzLnNldCgnc3RhcnQnLCBmaWx0ZXJzW3hEaW1dWzBdKTtcbiAgICAgIHRoaXMuc2V0KCdlbmQnLCBmaWx0ZXJzW3hEaW1dWzFdKTtcbiAgICAgIHRoaXMuc2V0KCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgIGNhbnZhcy5jaGFuZ2VTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5zZXQoJ2NoYW5nZVNpemUnLCB0cnVlKTtcbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgIH1cbiAgfSxcbiAgX2luaXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0KCd3aWR0aCcpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBjb250YWluZXJET006IHRoaXMuZ2V0KCdjb250YWluZXInKSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSk7XG4gICAgY2FudmFzLnNldCgnZm9udEZhbWlseScsIEcyLkdsb2JhbC5mb250RmFtaWx5KTtcbiAgICAvLyBzdHlsZSBjYW52YXNcbiAgICB2YXIgbm9kZSA9IGNhbnZhcy5nZXQoJ2VsJyk7XG4gICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbm9kZS5zdHlsZS50b3AgPSAwO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9IDA7XG4gICAgbm9kZS5zdHlsZS56SW5kZXggPSAzO1xuICAgIHRoaXMuc2V0KCdjYW52YXMnLCBjYW52YXMpO1xuICB9LFxuICBfaW5pdEJhY2tncm91bmQ6IGZ1bmN0aW9uKGxpbmtDaGFydCkge1xuICAgIHZhciBkYXRhID0gbGlua0NoYXJ0LmdldCgnZGF0YScpO1xuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBEYXRhRnJhbWUpKSB7XG4gICAgICBkYXRhID0gbmV3IERhdGFGcmFtZShkYXRhKTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSBsaW5rQ2hhcnQuZ2V0KCdvcHRpb25zJyk7XG5cbiAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgdmFyIHlEaW0gPSB0aGlzLmdldCgneURpbScpO1xuICAgIHZhciB4U2NhbGU7XG4gICAgaWYgKHRoaXMuZ2V0KCdjaGFuZ2VTaXplJykpIHtcbiAgICAgIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjYWxlQXNzaXN0ID0gbGlua0NoYXJ0LmdldCgnc2NhbGVBc3Npc3QnKTtcbiAgICAgIHNjYWxlQXNzaXN0LmRlZnMgPSBVdGlsLm1peCh7fSwgdHJ1ZSwgc2NhbGVBc3Npc3QuZGVmcywgb3B0aW9ucy5zY2FsZXMpO1xuICAgICAgeFNjYWxlID0gc2NhbGVBc3Npc3QuY3JlYXRlU2NhbGUoeERpbSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHlEaW0pIHsgLy8g5aaC5p6c5aOw5piO5LqGIHlEaW0sIOWImeWIm+W7uua7keWdl+iDjOaZr+WbvlxuICAgICAgdmFyIGJnQ2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgICBpZDogdGhpcy5nZXQoJ2RvbUlkJyksXG4gICAgICAgIHdpZHRoOiB0aGlzLmdldCgncGxvdFdpZHRoJyksXG4gICAgICAgIGhlaWdodDogdGhpcy5nZXQoJ2hlaWdodCcpLFxuICAgICAgICBwbG90Q2ZnOiB7XG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmdDaGFydC5zb3VyY2UoZGF0YSk7XG4gICAgICBiZ0NoYXJ0LmNvbCh4RGltLCB7XG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJnQ2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgICAgYmdDaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgICAgYmdDaGFydC5hcmVhKCkucG9zaXRpb24oeERpbSArICcqJyArIHlEaW0pLmNvbG9yKCcjQ0VEMUQ0Jyk7XG4gICAgICBiZ0NoYXJ0LmxpbmUoKS5wb3NpdGlvbih4RGltICsgJyonICsgeURpbSkuY29sb3IoJyNDRUQxRDQnKTtcbiAgICAgIGJnQ2hhcnQucmVuZGVyKCk7XG4gICAgICAvLyDoh6rliqjlr7npvZBcbiAgICAgIHZhciBjYW52YXMgPSBiZ0NoYXJ0LmdldCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGFpbmVyID0gY2FudmFzLmdldCgnZWwnKS5wYXJlbnROb2RlO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmdldCgnbWFyZ2luTGVmdCcpICsgJ3B4JztcbiAgICAgIHRoaXMuc2V0KCdiZ0NoYXJ0JywgYmdDaGFydCk7XG4gICAgfVxuICAgIHRoaXMuc2V0KCd4U2NhbGUnLCB4U2NhbGUpO1xuICB9LFxuICBfaW5pdFJhbmdlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmdldCgnc3RhcnQnKTtcbiAgICB2YXIgZW5kID0gdGhpcy5nZXQoJ2VuZCcpO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgdmFyIG1pbiA9IHN0YXJ0ID8geFNjYWxlLnNjYWxlKHN0YXJ0KSA6IDAuMztcbiAgICB2YXIgbWF4ID0gZW5kID8geFNjYWxlLnNjYWxlKGVuZCkgOiAwLjc7XG4gICAgdmFyIHJhbmdlID0gW21pbiAqIDEwMCwgbWF4ICogMTAwXTtcbiAgICB0aGlzLnNldCgncmFuZ2UnLCByYW5nZSk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9LFxuICBfZ2V0SGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5nZXQoJ3JhbmdlJyk7XG4gICAgdmFyIG1pbiA9IHJhbmdlWzBdIC8gMTAwO1xuICAgIHZhciBtYXggPSByYW5nZVsxXSAvIDEwMDtcbiAgICB2YXIgeFNjYWxlID0gdGhpcy5nZXQoJ3hTY2FsZScpO1xuICAgIGlmICh0eXBlID09PSAnbWluJykge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldCgnc3RhcnQnKSA/IHRoaXMuZ2V0KCdzdGFydCcpIDogeFNjYWxlLmludmVydChtaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0KCdlbmQnKSA/IHRoaXMuZ2V0KCdlbmQnKSA6IHhTY2FsZS5pbnZlcnQobWF4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBfaW5pdEhvcml6b250YWxIYW5kbGU6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5nZXQoJ2NhbnZhcycpO1xuICAgIHZhciBoYW5kbGUgPSBjYW52YXMuYWRkR3JvdXAoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgdmFyIGhhbmRsZVZhbHVlID0geFNjYWxlLmdldFRleHQodGhpcy5fZ2V0SGFuZGxlVmFsdWUodHlwZSkpO1xuXG4gICAgaGFuZGxlLmFkZFNoYXBlKCdJbWFnZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IC1oZWlnaHQgLyAyLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgaW1nOiB0aGlzLmdldCgnaGFuZGxlSWNvbicpXG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRleHQgPSBoYW5kbGUuYWRkU2hhcGUoJ1RleHQnLCB7XG4gICAgICBhdHRyczogVXRpbC5taXgoe1xuICAgICAgICB4OiAodHlwZSA9PT0gJ21pbicpID8gLShoZWlnaHQgLyAyICsgT0ZGU0VUKSA6IGhlaWdodCAvIDIgKyBPRkZTRVQsXG4gICAgICAgIHk6IGhlaWdodCAvIDIsXG4gICAgICAgIHRleHRBbGlnbjogKHR5cGUgPT09ICdtaW4nKSA/ICdlbmQnIDogJ3N0YXJ0JyxcbiAgICAgICAgdGV4dEJhc2VsaW5lOiAnbWlkZGxlJyxcbiAgICAgICAgdGV4dDogaGFuZGxlVmFsdWVcbiAgICAgIH0sIHRoaXMuZ2V0KCd0ZXh0QXR0cicpKVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXQodHlwZSArICdUZXh0RWxlbWVudCcsIHRleHQpO1xuICAgIHJldHVybiBoYW5kbGU7XG4gIH0sXG4gIF9pbml0U2xpZGVyQmFja2dyb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZ2V0KCdjYW52YXMnKTtcbiAgICB2YXIgYmFja2dyb3VuZEVsZW1lbnQgPSBjYW52YXMuYWRkR3JvdXAoKTtcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC5pbml0VHJhbnNmb3JtKCk7XG4gICAgYmFja2dyb3VuZEVsZW1lbnQudHJhbnNsYXRlKDAsIDApO1xuICAgIGJhY2tncm91bmRFbGVtZW50LmFkZFNoYXBlKCdSZWN0Jywge1xuICAgICAgYXR0cnM6IFV0aWwubWl4KHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IHRoaXMuZ2V0KCdwbG90V2lkdGgnKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdldCgnaGVpZ2h0JylcbiAgICAgIH0sIHRoaXMuZ2V0KCdiYWNrZ3JvdW5kQXR0cicpKVxuICAgIH0pO1xuICAgIHJldHVybiBiYWNrZ3JvdW5kRWxlbWVudDtcbiAgfSxcbiAgX2luaXRTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5faW5pdFJhbmdlKCk7XG4gICAgdmFyIG1pbkhhbmRsZUVsZW1lbnQgPSB0aGlzLl9pbml0SG9yaXpvbnRhbEhhbmRsZSgnbWluJyk7XG4gICAgdmFyIG1heEhhbmRsZUVsZW1lbnQgPSB0aGlzLl9pbml0SG9yaXpvbnRhbEhhbmRsZSgnbWF4Jyk7XG4gICAgdmFyIGJhY2tncm91bmRFbGVtZW50ID0gdGhpcy5faW5pdFNsaWRlckJhY2tncm91bmQoKTtcblxuICAgIHZhciByYW5nZUVsZW1lbnQgPSBjYW52YXMuYWRkR3JvdXAoUmFuZ2UsIHtcbiAgICAgIG1pbkhhbmRsZUVsZW1lbnQ6IG1pbkhhbmRsZUVsZW1lbnQsXG4gICAgICBtYXhIYW5kbGVFbGVtZW50OiBtYXhIYW5kbGVFbGVtZW50LFxuICAgICAgYmFja2dyb3VuZEVsZW1lbnQ6IGJhY2tncm91bmRFbGVtZW50LFxuICAgICAgbWlkZGxlQXR0cjogdGhpcy5nZXQoJ21pZGRsZUF0dHInKSxcbiAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgIGxheW91dDogdGhpcy5nZXQoJ2xheW91dCcpLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0KCdwbG90V2lkdGgnKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXQoJ2hlaWdodCcpXG4gICAgfSk7XG4gICAgcmFuZ2VFbGVtZW50LnRyYW5zbGF0ZSh0aGlzLmdldCgnbWFyZ2luTGVmdCcpLCAwKTtcbiAgICB0aGlzLnNldCgncmFuZ2VFbGVtZW50JywgcmFuZ2VFbGVtZW50KTtcbiAgfSxcbiAgX2JpbmRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByYW5nZUVsZW1lbnQgPSBzZWxmLmdldCgncmFuZ2VFbGVtZW50Jyk7XG4gICAgdmFyIHhEaW0gPSBzZWxmLmdldCgneERpbScpO1xuICAgIHZhciB4U2NhbGUgPSBzZWxmLmdldCgneFNjYWxlJyk7XG5cbiAgICByYW5nZUVsZW1lbnQub24oJ3JhbmdlQ2hhbmdlJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgIHZhciByYW5nZSA9IGV2LnJhbmdlO1xuICAgICAgdmFyIG1pblJhdGlvID0gcmFuZ2VbMF0gLyAxMDA7XG4gICAgICB2YXIgbWF4UmF0aW8gPSByYW5nZVsxXSAvIDEwMDtcbiAgICAgIHZhciBtaW4gPSB4U2NhbGUuaW52ZXJ0KG1pblJhdGlvKTtcbiAgICAgIHZhciBtYXggPSB4U2NhbGUuaW52ZXJ0KG1heFJhdGlvKTtcbiAgICAgIHZhciBtaW5UZXh0ID0geFNjYWxlLmdldFRleHQobWluKTtcbiAgICAgIHZhciBtYXhUZXh0ID0geFNjYWxlLmdldFRleHQobWF4KTtcbiAgICAgIHNlbGYuX3VwZGF0ZUVsZW1lbnQobWluVGV4dCwgbWF4VGV4dCk7XG4gICAgICBzZWxmLl91cGRhdGVMaW5rQ2hhcnRzKHhEaW0sIFttaW4sIG1heF0pO1xuICAgIH0pO1xuICB9LFxuICBfdXBkYXRlRWxlbWVudDogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICB2YXIgbWluVGV4dEVsZW1lbnQgPSB0aGlzLmdldCgnbWluVGV4dEVsZW1lbnQnKTtcbiAgICB2YXIgbWF4VGV4dEVsZW1lbnQgPSB0aGlzLmdldCgnbWF4VGV4dEVsZW1lbnQnKTtcbiAgICBtaW5UZXh0RWxlbWVudC5hdHRyKFV0aWwubWl4KHt9LCBtaW5UZXh0RWxlbWVudC5fX2F0dHJzLCB7XG4gICAgICB0ZXh0OiBtaW5cbiAgICB9KSk7XG4gICAgbWF4VGV4dEVsZW1lbnQuYXR0cihVdGlsLm1peCh7fSwgbWF4VGV4dEVsZW1lbnQuX19hdHRycywge1xuICAgICAgdGV4dDogbWF4XG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuZ2V0KCdiZ0NoYXJ0JykpIHsgLy8g5bCG6IOM5pmv5Zu+6KGo6L2s5o2i5Li66IOM5pmv5Zu+XG4gICAgICB2YXIgYmdDaGFydCA9IHRoaXMuZ2V0KCdiZ0NoYXJ0Jyk7XG4gICAgICB2YXIgY2FudmFzID0gYmdDaGFydC5nZXQoJ2NhbnZhcycpLmdldCgnZWwnKTtcbiAgICAgIHZhciBpbWcgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLmdldCgnd2lkdGgnKSArICdweCc7XG4gICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcgKyAnKSc7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSB0aGlzLmdldCgnbWFyZ2luTGVmdCcpICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgIGJnQ2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5zZXQoJ2JnQ2hhcnQnLCBudWxsKTtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ2ZpcnN0UmVuZGVyJywgZmFsc2UpO1xuICB9LFxuICBfdXBkYXRlTGlua0NoYXJ0czogZnVuY3Rpb24oZGltLCByYW5nZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbGlua0NoYXJ0cyA9IFV0aWwuaXNBcnJheShzZWxmLmdldCgnY2hhcnRzJykpID8gc2VsZi5nZXQoJ2NoYXJ0cycpIDogW3NlbGYuZ2V0KCdjaGFydHMnKV07XG4gICAgaWYgKGxpbmtDaGFydHNbMF0uZ2V0KCdwYXJlbnQnKSkge1xuICAgICAgVXRpbC5lYWNoKGxpbmtDaGFydHMsIGZ1bmN0aW9uKGNoYXJ0KSB7XG4gICAgICAgIGNoYXJ0LmZpbHRlcihkaW0sIHJhbmdlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhcmVudENoYXJ0ID0gbGlua0NoYXJ0c1swXS5nZXQoJ3BhcmVudCcpO1xuICAgICAgaWYgKHNlbGYuZ2V0KCdmaXJzdFJlbmRlcicpKSB7XG4gICAgICAgIHBhcmVudENoYXJ0LnJlbmRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Q2hhcnQucmVwYWludCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlsLmVhY2gobGlua0NoYXJ0cywgZnVuY3Rpb24oY2hhcnQpIHtcbiAgICAgICAgY2hhcnQuZmlsdGVyKGRpbSwgcmFuZ2UpO1xuICAgICAgICBpZiAoc2VsZi5nZXQoJ2ZpcnN0UmVuZGVyJykpIHtcbiAgICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGFydC5yZXBhaW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlua0NoYXJ0cyA9IHRoaXMuZ2V0KCdjaGFydHMnKTtcbiAgICB2YXIgY2hhcnQgPSBVdGlsLmlzQXJyYXkobGlua0NoYXJ0cykgPyBsaW5rQ2hhcnRzWzBdIDogbGlua0NoYXJ0cztcbiAgICB2YXIgcGxvdFJhbmdlO1xuICAgIHZhciB3aWR0aDtcbiAgICBpZiAoY2hhcnQuZ2V0KCdwYXJlbnQnKSkge1xuICAgICAgcGxvdFJhbmdlID0gY2hhcnQuZ2V0KCdwYXJlbnQnKS5nZXQoJ3Bsb3RSYW5nZScpO1xuICAgICAgd2lkdGggPSBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgnd2lkdGgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxvdFJhbmdlID0gY2hhcnQuZ2V0KCdwbG90UmFuZ2UnKTtcbiAgICAgIHdpZHRoID0gY2hhcnQuZ2V0KCd3aWR0aCcpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KCdwbG90V2lkdGgnLCBwbG90UmFuZ2UudHIueCAtIHBsb3RSYW5nZS50bC54KTtcbiAgICB0aGlzLnNldCgnbWFyZ2luTGVmdCcsIHBsb3RSYW5nZS50bC54KTtcbiAgICB0aGlzLnNldCgnd2lkdGgnLCB3aWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuZ2V0KCdjYW52YXMnKSkge1xuICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgIH1cbiAgICB0aGlzLl9pbml0QmFja2dyb3VuZChjaGFydCk7XG4gICAgdGhpcy5faW5pdFNsaWRlcigpO1xuICAgIHRoaXMuX2JpbmRFdmVudCgpO1xuXG4gICAgdmFyIHhEaW0gPSB0aGlzLmdldCgneERpbScpO1xuICAgIHZhciBtaW4gPSB0aGlzLl9nZXRIYW5kbGVWYWx1ZSgnbWluJyk7XG4gICAgdmFyIG1heCA9IHRoaXMuX2dldEhhbmRsZVZhbHVlKCdtYXgnKTtcbiAgICBpZiAoIXRoaXMuZ2V0KCdjaGFuZ2VTaXplJykpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUxpbmtDaGFydHMoeERpbSwgW21pbiwgbWF4XSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kcmF3KCk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5nZUVsZW1lbnQgPSB0aGlzLmdldCgncmFuZ2VFbGVtZW50Jyk7XG4gICAgcmFuZ2VFbGVtZW50Lm9mZigncmFuZ2VDaGFuZ2UnKTtcbiAgICB0aGlzLmdldCgnYmdDaGFydCcpICYmIHRoaXMuZ2V0KCdiZ0NoYXJ0JykuZGVzdHJveSgpO1xuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kZXN0cm95KCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgU2xpZGVyLnN1cGVyY2xhc3MuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBVdGlsLmdldFdyYXBCZWhhdmlvcih0aGlzLCAnX2luaXRGb3JjZUZpdEV2ZW50JykpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmNsZWFyKCk7XG4gICAgdGhpcy5nZXQoJ2JnQ2hhcnQnKSAmJiB0aGlzLmdldCgnYmdDaGFydCcpLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNldCgnYmdDaGFydCcsIG51bGwpO1xuICB9LFxuICByZXBhaW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldCgnZmlyc3RSZW5kZXInLCBmYWxzZSk7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NsaWRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=