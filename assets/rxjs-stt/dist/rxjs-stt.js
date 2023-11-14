(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("rxjs/operators"));
	else if(typeof define === 'function' && define.amd)
		define("rxjs-stt", ["rxjs", "rxjs/operators"], factory);
	else if(typeof exports === 'object')
		exports["rxjs-stt"] = factory(require("rxjs"), require("rxjs/operators"));
	else
		root["rxjs-stt"] = factory(root["rxjs"], root["rxjs"]["operators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gapi.ts":
/*!*********************!*\
  !*** ./src/gapi.ts ***!
  \*********************/
/*! exports provided: SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpeechRecognition\", function() { return _SpeechRecognition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpeechGrammarList\", function() { return _SpeechGrammarList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpeechRecognitionEvent\", function() { return _SpeechRecognitionEvent; });\n// Global API\nvar _SpeechRecognition = window.SpeechRecognition || window['webkitSpeechRecognition'];\nvar _SpeechGrammarList = window.SpeechGrammarList || window['webkitSpeechGrammarList'];\nvar _SpeechRecognitionEvent = window.SpeechRecognitionEvent || window['webkitSpeechRecognitionEvent'];\n\n\n\n//# sourceURL=webpack://rxjs-stt/./src/gapi.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: listen, SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listen */ \"./src/listen.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listen\", function() { return _listen__WEBPACK_IMPORTED_MODULE_0__[\"listen\"]; });\n\n/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gapi */ \"./src/gapi.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SpeechRecognition\", function() { return _gapi__WEBPACK_IMPORTED_MODULE_1__[\"SpeechRecognition\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SpeechGrammarList\", function() { return _gapi__WEBPACK_IMPORTED_MODULE_1__[\"SpeechGrammarList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SpeechRecognitionEvent\", function() { return _gapi__WEBPACK_IMPORTED_MODULE_1__[\"SpeechRecognitionEvent\"]; });\n\n\n\n\n\n//# sourceURL=webpack://rxjs-stt/./src/index.ts?");

/***/ }),

/***/ "./src/listen.ts":
/*!***********************!*\
  !*** ./src/listen.ts ***!
  \***********************/
/*! exports provided: listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listen\", function() { return listen; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"rxjs\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gapi */ \"./src/gapi.ts\");\n\n\n\n;\nvar optionsKeys = ['grammars', 'continuous', 'lang', 'interimResults', 'maxAlternatives', 'serviceURI'];\nfunction listen(value) {\n    if (value === void 0) { value = {}; }\n    var recognition$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"](function (observer) {\n        var recognition;\n        if (value instanceof _gapi__WEBPACK_IMPORTED_MODULE_2__[\"SpeechRecognition\"]) {\n            recognition = value;\n        }\n        else {\n            recognition = new _gapi__WEBPACK_IMPORTED_MODULE_2__[\"SpeechRecognition\"]();\n            optionsKeys.forEach(function (key) {\n                if (key in value) {\n                    recognition[key] = value[key];\n                }\n            });\n        }\n        // error -- as errors on Observable\n        var error$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"mergeMap\"])(function (event) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(event); }));\n        // listen to results\n        var nomatch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'nomatch');\n        var result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'result');\n        // audio, sound and speech recognition marks\n        var audiostart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'audiostart');\n        var audioend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'audioend');\n        var soundstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'soundstart');\n        var soundend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'soundend');\n        var speechstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'speechstart');\n        var speechend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'speechend');\n        // end -- completes Observable\n        var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(recognition, 'end');\n        // start listening to events\n        var subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(audiostart$, audioend$, soundstart$, soundend$, speechstart$, speechend$, nomatch$, result$, error$)\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"takeUntil\"])(\n        // delay fix for FF:\n        // it seem to fire 'end' event BEFORE the 'result'\n        // (tested on: 78.0.2 (64-bit) MacOS, w/ recognise.enabled + force_enabled)\n        end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1))))\n            .subscribe(observer);\n        recognition.start();\n        // NOTE: not sure if to use abort() or stop() here\n        // TODO: triage more\n        subscription.add(function () { return recognition.abort(); });\n        return subscription;\n    });\n    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"timer\"])(4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"mergeMapTo\"])(recognition$));\n    // TODO: consider using share() for result since there would always be only\n    // one running instance at a given time\n}\n\n\n//# sourceURL=webpack://rxjs-stt/./src/listen.ts?");

/***/ }),

/***/ "rxjs":
/*!************************************************************************************!*\
  !*** external {"root":["rxjs"],"commonjs":"rxjs","commonjs2":"rxjs","amd":"rxjs"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;\n\n//# sourceURL=webpack://rxjs-stt/external_%7B%22root%22:%5B%22rxjs%22%5D,%22commonjs%22:%22rxjs%22,%22commonjs2%22:%22rxjs%22,%22amd%22:%22rxjs%22%7D?");

/***/ }),

/***/ "rxjs/operators":
/*!******************************************************************************************************************************!*\
  !*** external {"root":["rxjs","operators"],"commonjs":"rxjs/operators","commonjs2":"rxjs/operators","amd":"rxjs/operators"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;\n\n//# sourceURL=webpack://rxjs-stt/external_%7B%22root%22:%5B%22rxjs%22,%22operators%22%5D,%22commonjs%22:%22rxjs/operators%22,%22commonjs2%22:%22rxjs/operators%22,%22amd%22:%22rxjs/operators%22%7D?");

/***/ })

/******/ });
});