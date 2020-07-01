/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/an-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/an-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/correct-is-regexp-logic.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/correct-is-regexp-logic.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/export.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/export.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.6.5@core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/_core-js@3.6.5@core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/fails.js":
/*!****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/fails.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/_core-js@3.6.5@core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/global.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.43.0@webpack/buildin/global.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/has.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/has.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js@3.6.5@core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/is-regexp.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/is-regexp.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.6.5@core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.6.5@core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/not-a-regexp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/not-a-regexp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.6.5@core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.6.5@core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/_core-js@3.6.5@core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.6.5@core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.6.5@core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/path.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/path.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/redefine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/redefine.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.6.5@core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.6.5@core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/set-global.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/set-global.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.5@core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.6.5@core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/shared.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/shared.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-length.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-length.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/uid.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/uid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.5@core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.6.5@core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js@3.6.5@core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.6.5@core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/_core-js@3.6.5@core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.5@core-js/modules/es.string.starts-with.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.5@core-js/modules/es.string.starts-with.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.5@core-js/internals/export.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.6.5@core-js/internals/object-get-own-property-descriptor.js\").f;\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.5@core-js/internals/to-length.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/_core-js@3.6.5@core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.5@core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/_core-js@3.6.5@core-js/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.6.5@core-js/internals/is-pure.js\");\n\nvar nativeStartsWith = ''.startsWith;\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.startsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.5@core-js/modules/es.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./src/base.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./src/base.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n    color: red\\n}\\nbody p {\\n        color: blue;\\n    }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/base.css?./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.43.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/base.css":
/*!**********************!*\
  !*** ./src/base.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../node_modules/_postcss-loader@3.0.0@postcss-loader/src!./base.css */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./src/base.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/base.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ \"./node_modules/_core-js@3.6.5@core-js/modules/es.string.starts-with.js\");\n/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ \"./src/math.js\");\n/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.css */ \"./src/base.css\");\n/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconsole.info(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__[\"cube\"])(3));\nvar person = {};\nconsole.info(\"\".concat(person === null || person === void 0 ? void 0 : person.name));\n\nif ('name'.startsWith('na')) {\n  console.info('ok');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\nfunction cube(x) {\n  return x * x * x;\n}\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ })

/******/ });