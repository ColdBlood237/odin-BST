/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge_sort */ \"./src/merge_sort.js\");\n/* harmony import */ var _pretty_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pretty_print */ \"./src/pretty_print.js\");\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert */ \"./src/insert.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet testArray = [1, 7, 7, 23, 4, 23, 8, 9, 3, 5, 67, 67, 6345, 324];\r\ntestArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(testArray);\r\ntestArray = [...new Set(testArray)];\r\nconsole.log(testArray);\r\n\r\nlet testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"](testArray);\r\ntestTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);\r\n(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testTree.root);\r\n\r\n(0,_insert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(testTree.root, 70000);\r\n\r\n(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testTree.root);\r\n\n\n//# sourceURL=webpack://odin-bst/./src/index.js?");

/***/ }),

/***/ "./src/insert.js":
/*!***********************!*\
  !*** ./src/insert.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\r\n\r\nfunction insert(root, data) {\r\n  root = insertRec(root, data);\r\n}\r\n\r\nfunction insertRec(root, data) {\r\n  if (root == null) {\r\n    root = new _node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n    return root;\r\n  }\r\n\r\n  if (data < root.data) {\r\n    root.left = insertRec(root.left, data);\r\n  } else if (data > root.data) {\r\n    root.right = insertRec(root.right, data);\r\n  }\r\n\r\n  return root;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insert);\r\n\n\n//# sourceURL=webpack://odin-bst/./src/insert.js?");

/***/ }),

/***/ "./src/merge_sort.js":
/*!***************************!*\
  !*** ./src/merge_sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction merge_sort(array) {\r\n  if (array.length < 2) {\r\n    return array;\r\n  }\r\n\r\n  let left_half = array.slice(0, array.length / 2);\r\n  let right_half = array.slice(array.length / 2);\r\n  left_half = merge_sort(left_half);\r\n  right_half = merge_sort(right_half);\r\n\r\n  return merge(left_half, right_half);\r\n}\r\n\r\n// merge when left part and right part are both sorted already\r\nfunction merge(left_part, right_part) {\r\n  let merged_list = [];\r\n  let i = 0;\r\n  let j = 0;\r\n  while (i < left_part.length && j < right_part.length) {\r\n    if (left_part[i] < right_part[j]) {\r\n      merged_list.push(left_part[i]);\r\n      i++;\r\n    } else {\r\n      merged_list.push(right_part[j]);\r\n      j++;\r\n    }\r\n  }\r\n  for (; i < left_part.length; i++) {\r\n    merged_list.push(left_part[i]);\r\n  }\r\n  for (; j < right_part.length; j++) {\r\n    merged_list.push(right_part[j]);\r\n  }\r\n\r\n  return merged_list;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge_sort);\r\n\n\n//# sourceURL=webpack://odin-bst/./src/merge_sort.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Node {\r\n  constructor(data) {\r\n    this.data = data;\r\n    this.left = null;\r\n    this.right = null;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);\r\n\n\n//# sourceURL=webpack://odin-bst/./src/node.js?");

/***/ }),

/***/ "./src/pretty_print.js":
/*!*****************************!*\
  !*** ./src/pretty_print.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction prettyPrint(node, prefix = \"\", isLeft = true) {\r\n  if (node === null) {\r\n    return;\r\n  }\r\n  if (node.right !== null) {\r\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\r\n  }\r\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\r\n  if (node.left !== null) {\r\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prettyPrint);\r\n\n\n//# sourceURL=webpack://odin-bst/./src/pretty_print.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTree\": () => (/* binding */ buildTree),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\r\n\r\nclass Tree {\r\n  constructor(array) {\r\n    this.array = array;\r\n    this.root = null;\r\n  }\r\n}\r\n\r\nfunction buildTree(dataArray, start, end) {\r\n  if (start > end) {\r\n    return null;\r\n  }\r\n\r\n  let mid = parseInt((start + end) / 2);\r\n  let node = new _node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dataArray[mid]);\r\n\r\n  node.left = buildTree(dataArray, start, mid - 1);\r\n  node.right = buildTree(dataArray, mid + 1, end);\r\n\r\n  return node;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);\r\n\r\n\n\n//# sourceURL=webpack://odin-bst/./src/tree.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;