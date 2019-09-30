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
/******/ 		1: 0
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
/******/ 	deferredModules.push([38,0]);
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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bulma/bulma.sass
var bulma = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.slim.js
var jquery_slim = __webpack_require__(0);
var jquery_slim_default = /*#__PURE__*/__webpack_require__.n(jquery_slim);

// EXTERNAL MODULE: ./node_modules/bulma-checkradio/dist/bulma-checkradio.min.css
var bulma_checkradio_min = __webpack_require__(24);

// EXTERNAL MODULE: ./src/assets/css/icons.css
var icons = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(1);

// EXTERNAL MODULE: ./src/assets/global.scss
var global = __webpack_require__(10);

// EXTERNAL MODULE: ./src/pages/index/index.scss
var index = __webpack_require__(26);

// EXTERNAL MODULE: ./src/utils/Settings.js
var Settings = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/Polyfill.js
var Polyfill = __webpack_require__(12);

// CONCATENATED MODULE: ./src/utils/Validate.js
function minLength(value, length) {
  return value.length < length ? 1 : 0;
}

function maxLength(value, length) {
  return value.length > length ? 1 : 0;
}

function validChar(value) {
  return (/^[0-9a-zA-Z_]+$/.test(value) ? 0 : 1
  );
}

function isNonEmpty(value) {
  return value === '' ? 1 : 0;
}

var Validator = {
  minLength: minLength,
  maxLength: maxLength,
  validChar: validChar,
  isNonEmpty: isNonEmpty
};

/* harmony default export */ var Validate = (Validator);
// CONCATENATED MODULE: ./src/pages/index/index.js









// eslint-disable-next-line



var getParameterByName = function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

var index_uiInit = function uiInit() {
  var profileContainer = jquery_slim_default()('#videoProfile');
  var profileLowContainer = jquery_slim_default()('#videoProfileLow');
  var lowResolutionArr = Object.entries(Settings["b" /* RESOLUTION_ARR */]).slice(0, 7);
  Object.entries(Settings["b" /* RESOLUTION_ARR */]).map(function (item) {
    var html = '<option ' + (item[0] === '480p_4' ? 'selected' : '') + ' value="' + item[0] + '">' + item[1][0] + 'x' + item[1][1] + ', ' + item[1][2] + 'fps, ' + item[1][3] + 'kbps</option>';
    return profileContainer.append(html);
  });
  lowResolutionArr.map(function (item) {
    var html = '<option ' + (item[0] === '180p_4' ? 'selected' : '') + ' value="' + item[0] + '">' + item[1][0] + 'x' + item[1][1] + ', ' + item[1][2] + 'fps, ' + item[1][3] + 'kbps</option>';
    return profileLowContainer.append(html);
  });
  var audienceOnly = getParameterByName('audienceOnly') === 'true';
  if (audienceOnly) {
    jquery_slim_default()('#attendeeMode label.audience').siblings().hide();
    jquery_slim_default()('#attendeeMode label.audience input').prop('checked', true);
  }

  // Agora live or agora Live
  if (undefined === 'avc') {
    document.querySelector('#baseModeDropdown').innerHTML = '              \n      <div class="dropdown-trigger">\n        <a id="baseMode" data-value="avc" class="ag-rounded button" aria-haspopup="true" aria-controls="baseModeOptions">\n          <span id="baseModeLabel">Agora Live</span>\n          <span class="icon is-small">\n            <i class="ag-icon icon-arrow-down" aria-hidden="true"></i>\n          </span>\n        </a>\n      </div>\n      <div class="dropdown-menu" id="baseModeOptions" role="menu">\n        <div class="dropdown-content">\n          <div class="dropdown-item" data-value="avc" data-msg="Agora Live">\n            <p>Agora Live</p>\n            <hr>\n            <p>One to one and group calls</p>\n          </div>\n        </div>\n      </div>\n    ';
  } else {
    document.querySelector('#baseModeDropdown').innerHTML = '              \n      <div class="dropdown-trigger">\n        <a id="baseMode" data-value="al" class="ag-rounded button" aria-haspopup="true" aria-controls="baseModeOptions">\n          <span id="baseModeLabel">Agora Live</span>\n          <span class="icon is-small">\n            <i class="ag-icon icon-arrow-down" aria-hidden="true"></i>\n          </span>\n        </a>\n      </div>\n      <div class="dropdown-menu" id="baseModeOptions" role="menu">\n        <div class="dropdown-content">\n          <div class="dropdown-item" data-value="al" data-msg="Agora Live">\n            <p>Agora Live</p>\n            <hr>\n            <p>Enabling real-time interactions between the host and the audience</p>\n          </div>\n        </div>\n      </div>\n    ';
  }
};

var index_validate = function validate(channelName) {
  if (Validate.isNonEmpty(channelName)) {
    return 'Cannot be empty!';
  }
  if (Validate.minLength(channelName, 1)) {
    return 'No shorter than 1!';
  }
  if (Validate.maxLength(channelName, 16)) {
    return 'No longer than 16!';
  }
  if (Validate.validChar(channelName)) {
    return 'Only capital or lower-case letter, number and "_" are permitted!';
  }

  return '';
};

var index_subscribeMouseEvent = function subscribeMouseEvent() {
  // Click Join and go to the meeting room
  jquery_slim_default()('#joinBtn').on('click', function () {
    var validateRst = index_validate(jquery_slim_default()('#channel').val().trim());
    var validateIcon = jquery_slim_default()('.validate-icon');
    validateIcon.empty();
    if (validateRst) {
      var msg = 'Input Error: ' + validateRst;
      jquery_slim_default()('#channel').addClass('is-danger');
      validateIcon.append('<i class="ag-icon icon-wrong"></i>');
      jquery_slim_default()('.validate-msg').html(msg).show();
      return 0;
    }
    jquery_slim_default()('#channel').addClass('is-success');
    validateIcon.append('<i class="ag-icon icon-correct"></i>');

    var postData = {
      baseMode: document.querySelector('#baseMode').dataset.value,
      transcode: jquery_slim_default()('input[name="transcode"]:checked').val(),
      attendeeMode: jquery_slim_default()('input[name="attendee"]:checked').val(),
      videoProfile: jquery_slim_default()('#videoProfile').val(),
      channel: jquery_slim_default()('#channel').val().trim(),
      videoProfileLow: jquery_slim_default()('#videoProfileLow').val()
    };
    Object.entries(postData).map(function (item) {
      return js_cookie["set"](item[0], item[1]);
    });
    window.location.href = 'precall.html';
  });
  // Press Enter to trigger Join
  window.addEventListener('keypress', function (e) {
    e.keyCode === 13 && jquery_slim_default()('#joinBtn').trigger('click');
  });
  // Add input check for room name
  jquery_slim_default()('#channel').on('input', function () {
    jquery_slim_default()('#channel').removeClass('is-danger');
    jquery_slim_default()('#channel').removeClass('is-success');
    jquery_slim_default()('.validate-msg').hide();
    var validateRst = index_validate(jquery_slim_default()('#channel').val().trim());
    var validateIcon = jquery_slim_default()('.validate-icon');
    validateIcon.empty();
    if (validateRst) {
      var msg = 'Input Error: ' + validateRst;
      jquery_slim_default()('#channel').addClass('is-danger');
      validateIcon.append('<i class="ag-icon icon-wrong"></i>');
      jquery_slim_default()('.validate-msg').html(msg).show();
      return 0;
    }
    jquery_slim_default()('#channel').addClass('is-success');
    validateIcon.append('<i class="ag-icon icon-correct"></i>');
  });
  // BaseMode dropdown control
  jquery_slim_default()('#baseMode').click(function (e) {
    e.stopPropagation();
    jquery_slim_default()('.dropdown').removeClass('is-active');
    jquery_slim_default()('#baseModeDropdown').toggleClass('is-active');
  });

  jquery_slim_default()('#baseModeOptions .dropdown-item').click(function (e) {
    e.stopPropagation();
    var _ref = [e.currentTarget.dataset.value, e.currentTarget.dataset.msg],
        val = _ref[0],
        label = _ref[1];

    jquery_slim_default()('#baseMode').data('value', val);
    jquery_slim_default()('#baseModeDropdown').removeClass('is-active');
    jquery_slim_default()('#baseModeLabel').html(label);
  });
  // AdvancedProfile dropdown control
  jquery_slim_default()('#advancedProfile').click(function (e) {
    e.stopPropagation();
    jquery_slim_default()('.dropdown').removeClass('is-active');
    jquery_slim_default()('#advanceProfileDropdown').toggleClass('is-active');
  });
  jquery_slim_default()('#advancedOptions').click(function (e) {
    e.stopPropagation();
  });
  // global click will close dropdown
  jquery_slim_default()(window).click(function (_) {
    jquery_slim_default()('.dropdown').removeClass('is-active');
  });
};

// ----------------start-------------------
// ----------------------------------------

index_uiInit();
index_subscribeMouseEvent();

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });