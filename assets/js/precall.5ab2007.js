console.log("Last modification time: 2019-9-30 18:23:22");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([33,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
  // Object.entries
  if (!Object.entries) Object.entries = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i); // Preallocate the Array
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }return resArray;
  };
})());

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESOLUTION_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHARE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ID_LIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Token; });
// Export const RESOLUTION_ARR = {
// '120p,120p_1': [160, 120, 15, 65],
//   '120p_3': [120, 120, 15, 50],
//   '180p,180p_1': [320, 180, 15, 140],
//   '180p_3': [180, 180, 15, 100],
//   '180p_4': [240, 180, 15, 120],
//   '240p,240p_1': [320, 240, 15, 200],
//   '240p_3': [240, 240, 15, 140],
//   '240p_4': [424, 240, 15, 220],
//   '360p,360p_1': [640, 360, 15, 400],
//   '360p_3': [360, 360, 15, 260],
//   '360p_4': [640, 360, 30, 600],
//   '360p_6': [360, 360, 30, 400],
//   '360p_7': [480, 360, 15, 320],
//   '360p_8': [480, 360, 30, 490],
//   '360p_9': [640, 360, 15, 800],
//   '360p_10': [640, 360, 24, 800],
//   '360p_11': [640, 360, 24, 1000],
//   '480p,480p_1': [640, 480, 15, 500],
//   '480p_2': [640, 480, 30, 1000],
//   '480p_3': [480, 480, 15, 400],
//   '480p_4': [640, 480, 30, 750],
//   '480p_6': [480, 480, 30, 600],
//   '480p_8': [848, 480, 15, 610],
//   '480p_9': [848, 480, 30, 930],
//   '480p_10': [640, 480, 10, 400],
//   '720p,720p_1': [1280, 720, 15, 1130],
//   '720p_2': [1280, 720, 15, 2080],
//   '720p_3': [1280, 720, 30, 1710],
//   '720p_5': [960, 720, 15, 910],
//   '720p_6': [960, 720, 30, 1380],
//   '1080p,1080p_1': [1920, 1080, 15, 2080],
//   '1080p_2': [1920, 1080, 30, 3000],
//   '1080p_3': [1920, 1080, 30, 3150],
//   '1080p_5': [1920, 1080, 60, 4780],
//   '1440p,1440p_1': [2560, 1440, 30, 4850],
//   '1440p_2': [2560, 1440, 60, 7350],
//   '4k,4k_1': [3840, 2160, 30, 8910],
//   '4k_3': [3840, 2160, 60, 13500],
// }
var RESOLUTION_ARR = {
  '120p,120p_1': [160, 120, 15, 65],
  '240p_1': [320, 240, 15, 200],
  '360p_4': [640, 360, 30, 600],
  '480p_4': [640, 480, 30, 750],
  '720p_3': [1280, 720, 30, 1710],
  '1080p_5': [1920, 1080, 60, 4780]
};

var SHARE_ID = 1;
// eslint-disable-next-line
// export const APP_ID_LIVE = "<#YOUR_APP_ID#>";
var APP_ID_LIVE = 'dfd4045e54db43729556957b2513b96b';

// eslint-disable-next-line
var Token = "";

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_switch_dist_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var bulma_switch_dist_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_switch_dist_bulma_switch_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _utils_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_global_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _precall_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var _precall_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_precall_scss__WEBPACK_IMPORTED_MODULE_9__);





// eslint-disable-next-line






var stream = void 0;
var recvStream = void 0;
var client = void 0;
var receiver = void 0;
var key = void 0;
var _testChannel = String(Number.parseInt(new Date().getTime(), 10) + Math.floor(Math.random() * 1000));

// Init ui
var uiInit = function uiInit() {
  return new Promise(function (resolve) {
    // Init info card
    var profile = _utils_Settings__WEBPACK_IMPORTED_MODULE_7__[/* RESOLUTION_ARR */ "b"][js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('videoProfile')];
    var transcodeValue = js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('transcode') || 'h264';
    var transcode = function () {
      switch (transcodeValue) {
        case '':
          return 'VP8';
        default:
        case 'vp8':
          return 'VP8';
        case 'h264':
          return 'H264';
      }
    }();

    var info = {
      videoProfile: profile[0] + 'x' + profile[1] + ' ' + profile[2] + 'fps ' + profile[3] + 'kbps',
      channel: js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('channel') || 'test',
      transcode: transcode,
      attendeeMode: js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('attendeeMode') || 'video',
      baseMode: js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('baseMode') || 'avc'
    };
    // Init key
    // Agora live
    key = _utils_Settings__WEBPACK_IMPORTED_MODULE_7__[/* APP_ID_LIVE */ "a"];

    Object.entries(info).map(function (item) {
      // Find dom and insert info
      return jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + item[0]).html(item[1]);
    });

    // Video-attendee's switch
    if (info.attendeeMode === 'video') {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#enableVideo').prop('checked', true);
    }

    // Init compatibility result
    // eslint-disable-next-line
    if (AgoraRTC.checkSystemRequirements()) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#compatibility').html('AgoraRTC supported.');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#compatibility').html('AgoraRTC not fully supported and some functions may be lost.');
    }

    // Init device options
    if (Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_6__[/* isSafari */ "d"])()) {
      // If safari, disable set device since deviceId changes all the time
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').parent().remove();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').parent().remove();
      resolve();
    } else {
      // eslint-disable-next-line
      AgoraRTC.getDevices(function (devices) {
        var videoHtml = '';
        var audioHtml = '';
        devices.forEach(function (item) {
          if (item.kind === 'audioinput') {
            audioHtml += '<option value=' + item.deviceId + '>' + item.label + '</option>';
          }
          if (item.kind === 'videoinput') {
            videoHtml += '<option value=' + item.deviceId + '>' + item.label + '</option>';
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').html(videoHtml);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').html(audioHtml);
        resolve();
      });
    }
  });
};
var Schedule = {
  DURATION: 10,
  volume: 0,
  volumeBar: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#volume'),
  targetStream: {},
  getVolume: function getVolume(stream) {
    var vol = Math.round(stream.getAudioLevel() * 100);
    if (isNaN(vol)) {
      return 0;
    }
    return vol;
  },

  scheduleVolumeDetect: {},
  scheduleEnd: {},
  start: function start() {
    var that = this;
    if (!this.targetStream) {
      console.error('Please init Schedule with a targetStream!');
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ag-connect-test').prepend('<div id="testDuration"></div>');
    // Init volume detector
    this.scheduleVolumeDetect = setInterval(function () {
      that.volume = that.getVolume(that.targetStream);
      that.volumeBar.val(that.volume);
    }, 100);
    // Init timer for detect
    this.scheduleEnd = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#testDuration').attr('style', 'animation-play-state:paused;background-color:#7ED321');
      clearInterval(that.scheduleVolumeDetect);
      that.targetStream.getStats(function (e) {
        var _ref = [e.videoReceiveBytes, e.audioReceiveBytes, e.videoReceivePackets, e.audioReceivePackets, e.videoReceivePacketsLost, e.audioReceivePacketsLost],
            videoBytes = _ref[0],
            audioBytes = _ref[1],
            videoPackets = _ref[2],
            audioPackets = _ref[3],
            videoPacketsLost = _ref[4],
            audioPacketsLost = _ref[5];

        // Do calculate

        var videoBitrate = (videoBytes / 1000 / that.DURATION).toFixed(2) + 'KB/s';
        var audioBitrate = (audioBytes / 1000 / that.DURATION).toFixed(2) + 'KB/s';
        var vPacketLoss = (videoPacketsLost / videoPackets * 100).toFixed(2) + '%';
        var aPacketLoss = (audioPacketsLost / audioPackets * 100).toFixed(2) + '%';
        var sumPacketLoss = (videoPacketsLost / videoPackets * 100 + audioPacketsLost / audioPackets * 100).toFixed(2);
        // Render result
        var videoCard = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoCard .ag-card-body');
        var audioCard = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioCard .ag-card-body');

        var videoCardHtml = '\n          <div class="ag-test-result">\n            <p>Video Bitrate: ' + videoBitrate + '</p>\n            <p>Packet Loss: ' + vPacketLoss + '</p>\n          </div>\n        ';
        var audioCardHtml = '\n          <div class="ag-test-result">\n            <p>Audio Bitrate: ' + audioBitrate + '</p>\n            <p>Packet Loss: ' + aPacketLoss + '</p>\n          </div>\n        ';
        var qualityHtml = void 0;
        if (sumPacketLoss < 1) {
          qualityHtml = 'Excellent';
        } else if (sumPacketLoss < 5) {
          qualityHtml = 'Good';
        } else if (sumPacketLoss < 10) {
          qualityHtml = 'Poor';
        } else if (sumPacketLoss < 100) {
          qualityHtml = 'Bad';
        } else {
          qualityHtml = 'Get media failed.';
        }

        videoCard.find('.initial').hide();
        videoCard.find('.result').html(videoCardHtml);
        audioCard.find('.initial').hide();
        audioCard.find('.result').html(audioCardHtml);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#testDuration').empty().after('<span style="">' + qualityHtml + '</span>');
      });
      // Update to step 2
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#stepTwo').addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#stepOne').removeClass('active');
    }, this.DURATION * 1000);
  },
  reset: function reset() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#testDuration').remove();
    this.volume = 0;
    this.volumeBar.val(0);
    if (this.scheduleVolumeDetect) {
      clearInterval(this.scheduleVolumeDetect);
    }
    if (this.scheduleEnd) {
      clearTimeout(this.scheduleEnd);
    }
    this.targetStream = null;
  },
  init: function init(stream, duration) {
    this.targetStream = stream;
    this.DURATION = duration;
  }
};

// Init client
var clientInit = function clientInit() {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    client = AgoraRTC.createClient({
      mode: 'live',
      codec: js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('transcode') || 'h264'
    });

    client.init(key, function () {
      client.join(key, _testChannel, undefined, function (uid) {
        // Init stream
        var defaultConfig = {
          streamID: uid,
          audio: true,
          video: true,
          screen: false,
          cameraId: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').val(),
          microphoneId: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').val()
        };
        // eslint-disable-next-line
        stream = AgoraRTC.createStream(defaultConfig);
        stream.setVideoProfile(js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('videoProfile').split(',')[0] || '480p_4');
        stream.init(function () {
          client.publish(stream);
          if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#enableVideo').prop('checked')) {
            stream.disableVideo();
          }
          resolve();
        }, function (err) {
          console.log('getUserMedia failed', err);
          reject(err);
        });
      });
    });
  });
};
// Init receiver
var receiverInit = function receiverInit() {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    receiver = AgoraRTC.createClient({
      mode: 'live',
      codec: js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('transcode') || 'h264'
    });
    receiver.on('stream-added', function (evt) {
      var stream = evt.stream;
      receiver.subscribe(stream, function (err) {
        console.log('Subscribe stream failed', err);
      });
    });
    receiver.on('stream-subscribed', function (evt) {
      if (recvStream) {
        recvStream.stop();
      }
      Schedule.reset();
      recvStream = evt.stream;
      Schedule.init(recvStream, 10);
      recvStream.play('videoItem');
      Schedule.start();
    });
    receiver.on('peer-leave', function (_) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoItem').empty();
    });

    receiver.on('stream-removed', function (_) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoItem').empty();
    });

    receiver.init(key, function () {
      receiver.join(key, _testChannel, undefined, function (uid) {
        resolve(uid);
      }, function (err) {
        reject(err);
      });
    });
  });
};

// Set Device
var setDevice = function setDevice() {
  if (!stream) {
    throw Error('Stream not existed!');
  }
  return new Promise(function (resolve, reject) {
    var id = stream.getId();
    client.unpublish(stream);
    stream.stop();
    stream.close();
    // Reinit stream
    var defaultConfig = {
      streamID: id,
      audio: true,
      video: true,
      screen: false,
      cameraId: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').val(),
      microphoneId: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').val()
    };
    // eslint-disable-next-line
    stream = AgoraRTC.createStream(defaultConfig);
    stream.setVideoProfile(js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('videoProfile').split(',')[0] || '480p_4');
    stream.init(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#enableVideo').prop('checked')) {
        stream.disableVideo();
      }
      client.publish(stream);
      resolve();
    }, function (err) {
      console.log('getUserMedia failed', err);
      reject(err);
    });
  });
};

// Subscribe events
var subscribeEvents = function subscribeEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#quickJoinBtn').on('click', function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["set"]('cameraId', jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').val());
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["set"]('microphoneId', jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').val());
    try {
      client && client.unpublish(stream);
      stream && stream.close();
      client && client.leave(function () {
        console.log('Client succeed to leave.');
      }, function () {
        console.log('Client failed to leave.');
      });
    } finally {
      // Redirect to index
      window.location.href = 'meeting.html';
    }
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#videoDevice').change(function (_) {
    Schedule.reset();
    setDevice();
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#audioDevice').change(function (_) {
    Schedule.reset();
    setDevice();
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#enableVideo').change(function (_) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#enableVideo').prop('checked')) {
      stream.enableVideo();
    } else {
      stream.disableVideo();
    }
  });
};

// ---------------  start ----------------
uiInit().then(function () {
  subscribeEvents();
  clientInit();
  receiverInit();
});

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMobileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFirefox; });
var isSafari = function isSafari() {
  return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  );
};

var isMobileSize = function isMobileSize() {
  if (window.innerWidth <= 800 && window.innerHeight <= 830) {
    return true;
  }
  return false;
};

var isChrome = function isChrome() {
  return (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
};

var isFirefox = function isFirefox() {
  // eslint-disable-next-line
  return typeof InstallTrigger !== 'undefined';
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });