console.log("Last modification time: 2019-9-30 18:17:06");
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
/******/ 		2: 0
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
/******/ 	deferredModules.push([28,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var ButtonControl = function () {
  var handler = function handler(param, callback) {
    if (param instanceof Array) {
      param.map(function (item) {
        return callback(item);
      });
    } else {
      callback(param);
    }
  };
  var hide = function hide(ids) {
    handler(ids, function (id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).hide();
    });
  };
  var show = function show(ids) {
    handler(ids, function (id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).show();
    });
  };
  var toggle = function toggle(ids) {
    handler(ids, function (id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).toggle();
    });
  };
  var enable = function enable(ids) {
    handler(ids, function (id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).removeClass('disabled');
    });
  };
  var disable = function disable(ids) {
    handler(ids, function (id) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).addClass('disabled');
    });
  };

  return {
    hide: hide,
    show: show,
    toggle: toggle,
    enable: enable,
    disable: disable
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (ButtonControl);

/***/ }),
/* 4 */,
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/utils/Render/calcSize.js
/* harmony default export */ var calcSize = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      minRatio = _ref.minRatio,
      maxRatio = _ref.maxRatio,
      count = _ref.count;

  var maxArea = void 0;
  var itemWidth = void 0;
  var itemHeight = void 0;
  var resultWidth = void 0;
  var resultHeight = void 0;
  // Let resultRows, resultCols
  for (var i = 1; i <= count; i++) {
    var rows = i;
    var cols = Math.ceil(count / i);

    itemWidth = Math.floor((width - 5) / cols);
    itemHeight = Math.floor((height - 5) / rows);

    var radio = itemHeight / itemWidth;
    // If radio > max or < min
    if (radio > maxRatio) {
      radio = maxRatio;
      itemHeight = radio * itemWidth;
    } else if (radio < minRatio) {
      radio = minRatio;
      itemWidth = itemHeight / radio;
    }

    var area = itemWidth * itemHeight * count;

    // If this width and height takes up the most space then we're going with that
    if (maxArea === undefined || area > maxArea) {
      maxArea = area;
      resultHeight = itemHeight;
      resultWidth = itemWidth;
      // ResultCols = cols
      // resultRows = rows
    }
  }

  return {
    height: resultHeight,
    width: resultWidth
  };
});
// EXTERNAL MODULE: ./src/utils/Render/render.css
var render = __webpack_require__(31);

// CONCATENATED MODULE: ./src/utils/Render/index.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




/* harmony default export */ var Render = __webpack_exports__["a"] = ({
  init: function init(elementId, minRatio, maxRatio) {
    this.MAX_RATIO = maxRatio;
    this.MIN_RATIO = minRatio;
    this.canvas = document.querySelector('#' + elementId);
  },
  _checkRatio: function _checkRatio(width, height) {
    var ratio = height / width;
    if (ratio > this.MAX_RATIO || ratio < this.MIN_RATIO) {
      return false;
    }
    return true;
  },
  customRender: function customRender(streamList, mode, mainId) {
    // Reinit canvas style first
    this.canvas.classList.remove('container__flex');
    this.canvas.classList.add('container__grid');

    // Get no
    var no = streamList.length;
    mainId = mainId || streamList[streamList.length - 1] && streamList[streamList.length - 1].getId();

    // We should consider no, isMobileSize, currentMode
    if (no > 4 && mode === 1 || no > 8) {
      mode = 0;
      console.log('Automatically switch to tile mode...');
      this.rendererFactory(streamList, mode, mainId);
    } else {
      this.rendererFactory(streamList, mode, mainId);
    }
    // Method stream.player.resize has been deprecated
    // for (let stream of streamList) {
    //   stream.player && stream.player.resize();
    // }
  },
  rendererFactory: function rendererFactory(streamList, mode, mainId) {
    if (mode === 0) {
      this.tileRenderer(streamList);
    } else if (mode === 1) {
      this.pipRenderer(streamList, mainId);
    } else if (mode === 2) {
      this.sharingRenderer(streamList, mainId);
    } else {
      throw Error('Wrong mode for renderer');
    }
  },
  updateVideoItem: function updateVideoItem(stream, style) {
    var fit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var id = stream.getId();
    var dom = document.querySelector('#video-item-' + id);
    if (!dom) {
      dom = document.createElement('section');
      var box = document.createElement('div');
      dom.setAttribute('id', 'video-item-' + id);
      dom.setAttribute('class', 'video-item');
      box.setAttribute('class', 'video-item-box');
      dom.appendChild(box);
      this.canvas.appendChild(dom);
      stream.play('video-item-' + id);
    }
    if (fit) {
      dom.classList.add('window__fit');
    } else {
      dom.classList.remove('window__fit');
    }
    dom.setAttribute('style', style);
  },
  enterFullScreen: function enterFullScreen() {
    this.canvas.classList.add('fullscreen');
  },
  exitFullScreen: function exitFullScreen() {
    this.canvas.classList.remove('fullscreen');
  },


  /**
   * @description Tile mode renderer. Recommended for 1-N people.
   */
  tileRenderer: function tileRenderer(streamList) {
    var _calcSize = calcSize({
      width: this.canvas.clientWidth,
      height: this.canvas.clientHeight,
      minRatio: this.MIN_RATIO,
      maxRatio: this.MAX_RATIO,
      count: streamList.length
    }),
        width = _calcSize.width,
        height = _calcSize.height;
    // Use flex box container


    this.canvas.classList.remove('container__grid');
    this.canvas.classList.add('container__flex');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = streamList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var stream = _step.value;

        this.updateVideoItem(stream, 'width: ' + width + 'px; height: ' + height + 'px;');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },


  /**
   * @description PIP mode renderer. Recommended for 1-4 people.
   */
  pipRenderer: function pipRenderer(streamList, mainId) {
    var no = streamList.length;
    if (no > 4) {
      throw Error('PIP mode only suitable for less than 4 stream');
    }

    // Check ratio before using pip ratio
    if (!this._checkRatio(this.canvas.clientWidth * 4 / 24, this.canvas.clientHeight * 3 / 12) || !this._checkRatio(this.canvas.clientWidth * 12 / 24, this.canvas.clientHeight * 12 / 12)) {
      return this.tileRenderer(streamList);
    }

    // Now you can render in pip mode
    for (var index = 0, count = 0; index < no; index++) {
      var stream = streamList[index];
      if (stream.getId() === mainId) {
        // Main window
        this.updateVideoItem(stream, 'grid-area: span 12/span 24/13/25');
      } else {
        // Sub window
        this.updateVideoItem(stream, 'grid-area: span 3/span 4/' + (4 + 3 * count) + '/25;\n                    z-index:1;width:calc(100% - 20px);height:calc(100% - 20px)');
        count++;
      }
    }
  },


  /**
   * @description Screen sharing mode renderer. Recommended for 1-7 people + 1 sharing stream.
   */
  sharingRenderer: function sharingRenderer(streamList, mainId) {
    var no = streamList.length;
    if (no > 8) {
      throw Error('Screen Sharing Mode only suitable for less than 8 stream');
    }

    // Check ratio before using screen sharing ratio unless there is only one stream
    if (!this._checkRatio(this.canvas.clientWidth * 4 / 24, this.canvas.clientHeight * 4 / 12) && streamList.length !== 1) {
      // Hide other streams
      var mainStreamIndex = streamList.findIndex(function (element) {
        return element.getId() === mainId;
      });
      if (mainStreamIndex === -1) {
        throw Error('Cannot find stream by given mainId!');
      }
      // Only render main stream(sharing stream)
      for (var i = 0; i < no; i++) {
        if (i !== mainStreamIndex) {
          this.updateVideoItem(streamList[i], 'display: none');
        }
      }
      return this.sharingRenderer([streamList[mainStreamIndex]], mainId);
    }

    // Copy a temp streamList
    var tempStreamList = [].concat(_toConsumableArray(streamList));
    // Now you can use screen sharing mode
    if (no === 8) {
      // When there are 7 people with 1 sharing stream, hide audio stream or local stream
      // try to find first audio stream and splice it, if not splice local stream
      var shouldRemoveStreamIndex = tempStreamList.findIndex(function (element) {
        return element.hasAudio() && !element.hasVideo();
      });
      if (shouldRemoveStreamIndex === -1) {
        shouldRemoveStreamIndex = 7;
      }
      var shouldRemoveStream = tempStreamList[shouldRemoveStreamIndex];
      this.updateVideoItem(shouldRemoveStream, 'display: none');
      tempStreamList.splice(shouldRemoveStreamIndex, 1);
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tempStreamList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var stream = _step2.value;

        if (stream.getId() === mainId) {
          // When there were less than 5 people
          // sharing stream will take more place
          if (no === 1) {
            this.updateVideoItem(stream, 'grid-area: span 12/span 24/13/25;', true);
          } else if (no < 5) {
            this.updateVideoItem(stream, 'grid-area: span 12/span 20/13/25;', true);
          } else {
            this.updateVideoItem(stream, 'grid-area: span 12/span 16/13/21;', true);
          }
        } else {
          // Normal stream
          this.updateVideoItem(stream, 'grid-area: span 4/span 4');
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return log; });
var log = function log(prefix, color, info) {
  console.log("%c " + prefix + ": " + info, "color: " + color);
};

var logger = {
  init: function init(prefix, color) {
    return function (info) {
      return log(prefix, color, info);
    };
  }
};



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */,
/* 12 */
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Notification-related classes are defined by bulma.css temporarily

/**
 * add notification container to body
 */

var notificationInit = function notificationInit() {
  var container = '<div class="notification-container" \n                    style="z-index: 12;position: absolute;\n                    width: 38.2%;max-width: 450px; \n                    min-width: 300px;left: 0;\n                    bottom: 0;"></div>';
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(container);
};

/**
 * Return either primary/link/info/success/warning/danger kind of notify
 */
var Notify = function () {
  // Singleton for notification container
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.notification-container');
  if (!container.length) {
    notificationInit();
    container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.notification-container');
  }

  var notifyFactory = function notifyFactory(type, msg, secs) {
    var id = new Date().getTime();
    var notification = '<div id="notify-' + id + '" class="notification is-' + type + '">\n                                <button class="delete"></button>\n                                ' + msg + '\n                            </div>';
    container.append(notification);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notify-' + id + ' .delete').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notify-' + id).remove();
    });
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notify-' + id).remove();
    }, secs);
  };

  return {
    primary: function primary(msg, secs) {
      notifyFactory('primary', msg, secs);
    },
    link: function link(msg, secs) {
      notifyFactory('link', msg, secs);
    },
    info: function info(msg, secs) {
      notifyFactory('info', msg, secs);
    },
    success: function success(msg, secs) {
      notifyFactory('success', msg, secs);
    },
    warning: function warning(msg, secs) {
      notifyFactory('warning', msg, secs);
    },
    danger: function danger(msg, secs) {
      notifyFactory('danger', msg, secs);
    }
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (Notify);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_icons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_global_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _meeting_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _meeting_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_meeting_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _utils_Notify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _utils_Render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var _utils_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7);
/* harmony import */ var _utils_Polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);














// eslint-disable-next-line


// If display a window to show video info
var DUAL_STREAM_DEBUG = false;
var options = {};
var client = {};
var localStream = {};
var streamList = [];
var shareClient = null;
var shareStream = null;
var mainId = void 0;
var mainStream = void 0;

var globalLog = _utils_Logger__WEBPACK_IMPORTED_MODULE_12__[/* logger */ "b"].init('global', 'blue');
var shareLog = _utils_Logger__WEBPACK_IMPORTED_MODULE_12__[/* logger */ "b"].init('share', 'yellow');
var localLog = _utils_Logger__WEBPACK_IMPORTED_MODULE_12__[/* logger */ "b"].init('local', 'green');

var optionsInit = function optionsInit() {
  var options = {
    videoProfile: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('videoProfile').split(',')[0] || '480p_4',
    videoProfileLow: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('videoProfileLow'),
    cameraId: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('cameraId'),
    microphoneId: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('microphoneId'),
    channel: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('channel') || 'test',
    transcode: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('transcode') || 'h264',
    attendeeMode: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('attendeeMode') || 'video',
    baseMode: js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('baseMode') || 'avc',
    displayMode: 1, // 0 Tile, 1 PIP, 2 screen share
    uid: undefined, // In default it is dynamically generated
    resolution: undefined
  };

  var tempProfile = _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* RESOLUTION_ARR */ "b"][js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"]('videoProfile')];
  options.resolution = tempProfile[0] / tempProfile[1] || 4 / 3;

  // Agora live
  options.key = _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* APP_ID_LIVE */ "a"];
  options.token = _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* Token */ "d"];

  return options;
};

var uiInit = function uiInit(options) {
  _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].init('ag-canvas', 9 / 16, 8 / 5);
  // Mobile page should remove title and footer
  if (Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isMobileSize */ "c"])()) {
    _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].enterFullScreen();
  }
  // Only firefox and chrome support screen sharing
  if (!Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isFirefox */ "b"])() && !Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isChrome */ "a"])()) {
    _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable('.shareScreenBtn');
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#room-name').html(options.channel);
  switch (options.attendeeMode) {
    case 'audio-only':
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].hide(['.videoControlBtn', '.shareScreenBtn']);
      break;
    case 'audience':
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].hide(['.videoControlBtn', '.audioControlBtn', '.shareScreenBtn']);
      break;
    default:
    case 'video':
      break;
  }
};

var clientInit = function clientInit(client, options) {
  return new Promise(function (resolve, reject) {
    client.init(options.key, function () {
      globalLog('AgoraRTC client initialized');
      var lowStreamParam = _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* RESOLUTION_ARR */ "b"][options.videoProfileLow];
      client.join(options.token, options.channel, options.uid, function (uid) {
        Object(_utils_Logger__WEBPACK_IMPORTED_MODULE_12__[/* log */ "a"])(uid, 'brown', 'User ' + uid + ' join channel successfully');
        Object(_utils_Logger__WEBPACK_IMPORTED_MODULE_12__[/* log */ "a"])(uid, 'brown', new Date().toLocaleTimeString());
        client.setLowStreamParameter({
          width: lowStreamParam[0],
          height: lowStreamParam[1],
          framerate: lowStreamParam[2],
          bitrate: lowStreamParam[3]
        });
        // Create localstream
        resolve(uid);
      }, function (err) {
        reject(err);
      });
    });
  });
};

/**
 *
 * @param {*} uid
 * @param {*} options global option
 * @param {*} config stream config
 */
var streamInit = function streamInit(uid, options, config) {
  var defaultConfig = {
    streamID: uid,
    audio: true,
    video: true,
    screen: false
  };

  switch (options.attendeeMode) {
    case 'audio-only':
      defaultConfig.video = false;
      break;
    case 'audience':
      defaultConfig.video = false;
      defaultConfig.audio = false;
      break;
    default:
    case 'video':
      break;
  }
  // eslint-disable-next-line
  var stream = AgoraRTC.createStream(Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(defaultConfig, config));
  stream.setVideoProfile(options.videoProfile);
  return stream;
};

var shareEnd = function shareEnd() {
  try {
    shareClient && shareClient.unpublish(shareStream);
    shareStream && shareStream.close();
    shareClient && shareClient.leave(function () {
      shareLog('Share client succeed to leave.');
    }, function () {
      shareLog('Share client failed to leave.');
    });
  } finally {
    shareClient = null;
    shareStream = null;
  }
};

var shareStart = function shareStart() {
  _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable('.shareScreenBtn');
  // eslint-disable-next-line
  shareClient = AgoraRTC.createClient({
    codec: options.transcode,
    mode: 'live'
  });
  var shareOptions = Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(options, {
    uid: _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"]
  });
  clientInit(shareClient, shareOptions).then(function (uid) {
    var config = {
      screen: true,
      video: false,
      audio: false,
      extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg',
      mediaSource: 'screen'
    };
    shareStream = streamInit(uid, shareOptions, config);
    shareStream.init(function () {
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.shareScreenBtn');
      shareStream.on('stopScreenSharing', function () {
        shareEnd();
        shareLog('Stop Screen Sharing at' + new Date());
      });
      shareClient.publish(shareStream, function (err) {
        shareLog('Publish share stream error: ' + err);
        shareLog('getUserMedia failed', err);
      });
    }, function (err) {
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.shareScreenBtn');
      shareLog('getUserMedia failed', err);
      shareEnd();
      if (Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isChrome */ "a"])()) {
        // If (!chrome.app.isInstalled) {
        var msg = 'Please install chrome extension before using sharing screen. \n            <hr />\n            <a id="addExtensionBtn" class="button is-link" onclick="chrome.webstore.install(\'https://chrome.google.com/webstore/detail/minllpmhdgpndnkomcoccfekfegnlikg\', installSuccess, installError)">Add chrome extension</a>\n          ';
        _utils_Notify__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].danger(msg, 5000);
        // }
      }
    });
  });
};

window.installSuccess = function () {
  globalLog.apply(undefined, arguments);
};

window.installError = function () {
  globalLog.apply(undefined, arguments);
  _utils_Notify__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].danger('Failed to install the extension, please check the network and console.', 3000);
};

var removeStream = function removeStream(id) {
  streamList.map(function (item, index) {
    if (item.getId() === id) {
      streamList[index].close();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#video-item-' + id).remove();
      streamList.splice(index, 1);
      return 1;
    }
    return 0;
  });
  if (streamList.length <= 4 && options.displayMode !== 2) {
    _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.displayModeBtn');
  }
  _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].customRender(streamList, options.displayMode, mainId);
};

var addStream = function addStream(stream) {
  var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var id = stream.getId();
  // Check for redundant
  var redundant = streamList.some(function (item) {
    return item.getId() === id;
  });
  if (redundant) {
    return;
  }
  // Do push for localStream and unshift for other streams
  push ? streamList.push(stream) : streamList.unshift(stream);
  if (streamList.length > 4) {
    options.displayMode = options.displayMode === 1 ? 0 : options.displayMode;
    _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable(['.displayModeBtn', '.disableRemoteBtn']);
  }
  _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].customRender(streamList, options.displayMode, mainId);
};

var getStreamById = function getStreamById(id) {
  return streamList.filter(function (item) {
    return item.getId() === id;
  })[0];
};

var enableDualStream = function enableDualStream() {
  client.enableDualStream(function () {
    localLog('Enable dual stream success!');
  }, function (e) {
    localLog(e);
  });
};

var setHighStream = function setHighStream(prev, next) {
  if (prev === next) {
    return;
  }
  var prevStream = void 0;
  var nextStream = void 0;
  // Get stream by id
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = streamList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var stream = _step.value;

      var id = stream.getId();
      if (id === prev) {
        prevStream = stream;
      } else if (id === next) {
        nextStream = stream;
      } else {
        // Do nothing
      }
    }
    // Set prev stream to low
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  prevStream && client.setRemoteVideoStreamType(prevStream, 1);
  // Set next stream to high
  nextStream && client.setRemoteVideoStreamType(nextStream, 0);
};
/**
 * Add callback for client event to control streams
 * @param {*} client
 * @param {*} streamList
 */
var subscribeStreamEvents = function subscribeStreamEvents() {
  client.on('stream-added', function (evt) {
    var stream = evt.stream;
    var id = stream.getId();
    localLog('New stream added: ' + id);
    localLog(new Date().toLocaleTimeString());
    localLog('Subscribe ', stream);
    if (id === _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"]) {
      options.displayMode = 2;
      mainId = id;
      mainStream = stream;
      if (!shareClient) {
        _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable('.shareScreenBtn');
      }
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable(['.displayModeBtn', '.disableRemoteBtn']);
    }
    if (id !== mainId) {
      if (options.displayMode === 2) {
        client.setRemoteVideoStreamType(stream, 1);
      } else {
        mainStream && client.setRemoteVideoStreamType(mainStream, 1);
        mainStream = stream;
        mainId = id;
      }
    }
    client.subscribe(stream, function (err) {
      localLog('Subscribe stream failed', err);
    });
  });

  client.on('peer-leave', function (evt) {
    var id = evt.uid;
    localLog('Peer has left: ' + id);
    localLog(new Date().toLocaleTimeString());
    if (id === _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"]) {
      options.displayMode = 0;
      if (options.attendeeMode === 'video') {
        _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.shareScreenBtn');
      }
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable(['.displayModeBtn', '.disableRemoteBtn']);
      shareEnd();
    }
    if (id === mainId) {
      var next = options.displayMode === 2 ? _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"] : localStream.getId();
      setHighStream(mainId, next);
      mainId = next;
      mainStream = getStreamById(mainId);
    }
    removeStream(evt.uid);
  });

  client.on('stream-subscribed', function (evt) {
    var stream = evt.stream;
    localLog('Got stream-subscribed event');
    localLog(new Date().toLocaleTimeString());
    localLog('Subscribe remote stream successfully: ' + stream.getId());
    addStream(stream);
  });

  client.on('stream-removed', function (evt) {
    var stream = evt.stream;
    var id = stream.getId();
    localLog('Stream removed: ' + id);
    localLog(new Date().toLocaleTimeString());
    if (id === _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"]) {
      options.displayMode = 0;
      if (options.attendeeMode === 'video') {
        _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.shareScreenBtn');
      }
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable(['.displayModeBtn', '.disableRemoteBtn']);
      shareEnd();
    }
    if (id === mainId) {
      var next = options.displayMode === 2 ? _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"] : localStream.getId();
      setHighStream(mainId, next);
      mainId = next;
      mainStream = getStreamById(mainId);
    }
    removeStream(stream.getId());
  });
};

var subscribeMouseEvents = function subscribeMouseEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.displayModeBtn').on('click', function (e) {
    if (e.currentTarget.classList.contains('disabled') || streamList.length <= 1) {
      return;
    }
    // 1 refer to pip mode
    if (options.displayMode === 1) {
      options.displayMode = 0;
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].disable('.disableRemoteBtn');
    } else if (options.displayMode === 0) {
      options.displayMode = 1;
      _utils_ButtonControl__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].enable('.disableRemoteBtn');
    } else {
      // Do nothing when in screen share mode
    }
    _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].customRender(streamList, options.displayMode, mainId);
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.exitBtn').on('click', function () {
    try {
      shareClient && shareEnd();
      client && client.unpublish(localStream);
      localStream && localStream.close();
      client && client.leave(function () {
        localLog('Client succeed to leave.');
      }, function () {
        localLog('Client failed to leave.');
      });
    } finally {
      // Redirect to index
      window.location.href = 'index.html';
    }
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.videoControlBtn').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.videoControlBtn').toggleClass('off');
    localStream.isVideoOn() ? localStream.disableVideo() : localStream.enableVideo();
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.audioControlBtn').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.audioControlBtn').toggleClass('off');
    localStream.isAudioOn() ? localStream.disableAudio() : localStream.enableAudio();
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.shareScreenBtn').on('click', function (e) {
    if (e.currentTarget.classList.contains('disabled')) {
      return;
    }
    if (shareClient) {
      shareEnd();
    } else {
      shareStart();
    }
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.disableRemoteBtn').on('click', function (e) {
    if (e.currentTarget.classList.contains('disabled') || streamList.length <= 1) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.disableRemoteBtn').toggleClass('off');
    var list = void 0;
    var id = localStream.getId();
    list = Array.from(document.querySelectorAll('.video-item:not(#video-item-' + id + ')'));
    list.map(function (item) {
      if (item.style.display === 'none') {
        item.style.display = 'block';
        return 1;
      }
      item.style.display = 'none';
      return 0;
    });
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).resize(function (_) {
    if (Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isMobileSize */ "c"])()) {
      _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].enterFullScreen();
    } else {
      _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].exitFullScreen();
    }
    _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].customRender(streamList, options.displayMode, mainId);
  });

  // Dbl click to switch high/low stream
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ag-container').dblclick(function (e) {
    var dom = e.target;
    while (!dom.classList.contains('video-item')) {
      dom = dom.parentNode;
      if (dom.classList.contains('ag-main')) {
        return;
      }
    }
    var id = parseInt(dom.id.split('-')[2], 10);
    if (id !== mainId && id !== localStream.getId()) {
      var next = options.displayMode === 2 ? _utils_Settings__WEBPACK_IMPORTED_MODULE_11__[/* SHARE_ID */ "c"] : id;
      // Force to swtich
      setHighStream(mainId, next);
      mainId = next;
      mainStream = getStreamById(mainId);
    }
    _utils_Render__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].customRender(streamList, options.displayMode, mainId);
  });

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).mousemove(function (_) {
    if (global._toolbarToggle) {
      clearTimeout(global._toolbarToggle);
    }
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ag-btn-group').addClass('active');
    global._toolbarToggle = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ag-btn-group').removeClass('active');
    }, 2500);
  });
};

var infoDetectSchedule = function infoDetectSchedule() {
  var no = streamList.length;

  var _loop = function _loop(i) {
    var item = streamList[i];
    var id = item.getId();
    var box = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#video-item-' + id + ' .video-item-box');
    var width = void 0;
    var height = void 0;
    var frameRate = void 0;
    var HighOrLow = void 0;
    // Whether high or low stream
    if (id === mainId) {
      HighOrLow = 'High';
    } else {
      HighOrLow = 'Low';
    }
    if (i === no - 1) {
      HighOrLow = 'local';
    }
    item.getStats(function (e) {
      if (i === no - 1) {
        width = e.videoSendResolutionWidth;
        height = e.videoSendResolutionHeight;
        frameRate = e.videoSendFrameRate;
      } else {
        width = e.videoReceivedResolutionWidth;
        height = e.videoReceivedResolutionHeight;
        frameRate = e.videoReceiveFrameRate;
      }

      var str = '\n        <p>uid: ' + id + '</p>\n        <p>' + width + '*' + height + ' ' + frameRate + 'fps</p>\n        <p>' + HighOrLow + '</p>\n      ';
      box.html(str);
    });
  };

  for (var i = 0; i < no; i++) {
    _loop(i);
  }
};

// ------------- start --------------
// ----------------------------------
options = optionsInit();
uiInit(options);
// eslint-disable-next-line
client = AgoraRTC.createClient({
  codec: options.transcode,
  mode: 'live'
});
subscribeMouseEvents();
subscribeStreamEvents();
clientInit(client, options).then(function (uid) {
  // Use selected device
  var config = Object(_utils_BrowserCheck__WEBPACK_IMPORTED_MODULE_8__[/* isSafari */ "d"])() ? {} : {
    cameraId: options.cameraId,
    microphoneId: options.microphoneId
  };
  localStream = streamInit(uid, options, config);
  // Enable dual stream
  if (options.attendeeMode !== 'audience') {
    // MainId default to be localStream's ID
    mainId = uid;
    mainStream = localStream;
  }
  enableDualStream();
  localStream.init(function () {
    if (options.attendeeMode !== 'audience') {
      addStream(localStream, true);
      client.publish(localStream, function (err) {
        localLog('Publish local stream error: ' + err);
      });
    }
  }, function (err) {
    localLog('getUserMedia failed', err);
  });
});

if (DUAL_STREAM_DEBUG) {
  setInterval(infoDetectSchedule, 1000);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);