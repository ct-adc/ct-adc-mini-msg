(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-mini-msg"] = factory();
	else
		root["ct-adc-mini-msg"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(1);

var MiniMsg = function MiniMsg(ops) {
    var defaults = {
        content: '',
        type: 'info',
        container: document.body,
        duration: 1,
        top: 16
    };

    $.extend(this, defaults, ops);
    this.init();
};

MiniMsg.prototype = {
    constructor: MiniMsg,
    classForType: {
        success: 'mini-msg-success',
        warning: 'mini-msg-warning',
        error: 'mini-msg-error',
        info: 'mini-msg-info'
    },
    iconForType: {
        success: 'glyphicon-ok-sign',
        warning: 'glyphicon-exclamation-sign',
        error: 'glyphicon-remove-circle',
        info: 'glyphicon-info-sign'
    },

    setBoxStyle: function setBoxStyle(showOrHide) {
        var style = {};
        var miniMsgHeight = void 0;

        if (showOrHide === 'show') {
            style.top = this.top + 'px';
        } else {
            miniMsgHeight = this.msgBox.find('.mini-msg-notice').outerHeight();
            style.top = 0 - miniMsgHeight - this.top;
        }
        this.msgBox.css(style);
    },
    init: function init() {
        var html = '<div class="mini-msg">\n             <div class="mini-msg-notice">\n            <div class="mini-msg-notice-content ' + this.classForType[this.type] + '">\n            <i class="glyphicon ' + this.iconForType[this.type] + '"></i>\n            ' + this.content + '\n            </div>\n            </div>\n            </div>';
        var $miniMsg = $(html);
        var styleForContainer = void 0;

        $(this.container).append($miniMsg);

        if (this.container !== document.body) {
            styleForContainer = {
                'position': 'relative',
                'overflow-x': 'hidden'
            };
        } else {
            styleForContainer = {
                'overflow-x': 'hidden'
            };
        }
        $(this.container).css(styleForContainer);
        this.msgBox = $miniMsg;
        this.setBoxStyle('hide');
    },
    show: function show() {
        this.setBoxStyle('show');
    },
    hide: function hide() {
        this.setBoxStyle('hide');
    },
    destroy: function destroy() {
        if (typeof this.timer !== 'undefined') {
            clearTimeout(this.timer);
        }
        this.msgBox.remove();
    },

    animation: function animation(callback) {
        var that = this;

        that.timer = setTimeout(function () {
            that.show();
            that.timer = setTimeout(function () {
                that.hide();
                that.timer = setTimeout(function () {
                    if (typeof callback === 'function') {
                        callback();
                    }
                    that.destroy();
                }, 300);
            }, 300 + 1000 * that.duration);
        }, 300);
        return this;
    }
};

MiniMsg.install = function (Vue) {
    Vue.prototype.$minimsg = function (options, callback) {
        return new MiniMsg(options).animation(function () {
            if (typeof callback === 'function') {
                callback();
            }
        });
    };
};
exports.default = MiniMsg;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mini-msg {\n    border-radius: 5px;\n    -webkit-transition: top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    font-size: 12px;\n    position: fixed;\n    z-index: 9999;\n    width: 100%;\n    top: -9999px;\n    left: 0;\n    height: auto;\n    background-color: #ccc;\n    color:#fff;\n}\n\n.mini-msg-notice {\n    width: auto;\n    vertical-align: middle;\n    position: absolute;\n    left: 50%;\n}\n\n.mini-msg-notice-content {\n    position: relative;\n    right: 50%;\n    padding: 8px 16px 8px 32px;\n    border-radius: 6px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n    background: #fff;\n    display: block;\n}\n\n.mini-msg-notice-content .glyphicon {\n    margin-right: 8px;\n    font-size: 14px;\n    position: absolute;\n    top: 50%;\n    left: 14px;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n\n.mini-msg-success {\n    background-color:#5cb85c;\n}\n\n.mini-msg-warning {\n    background-color:#f0ad4e;\n}\n\n.mini-msg-error {\n    background-color:#d9534f;\n}\n\n.mini-msg-info {\n    background-color:#5bc0de;\n}\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })
/******/ ]);
});