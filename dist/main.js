/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteKey(root, data) {
  root = deleteRec(root, data);
}

function deleteRec(root, data) {
  if (root == null) return root;

  if (data < root.data) root.left = deleteRec(root.left, data);
  else if (data > root.data) root.right = deleteRec(root.right, data);
  else {
    if (root.left == null) return root.right;
    else if (root.right == null) return root.left;

    root.data = minValue(root.right);
    root.right = deleteRec(root.right, root.data);
  }

  return root;
}

function minValue(root) {
  let minv = root.data;
  while (root.left != null) {
    minv = root.left.data;
    root = root.left;
  }
  return minv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteKey);


/***/ }),

/***/ "./src/insert.js":
/*!***********************!*\
  !*** ./src/insert.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


function insert(root, data) {
  root = insertRec(root, data);
}

function insertRec(root, data) {
  if (root == null) {
    root = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](data);
    return root;
  }

  if (data < root.data) {
    root.left = insertRec(root.left, data);
  } else if (data > root.data) {
    root.right = insertRec(root.right, data);
  }

  return root;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insert);


/***/ }),

/***/ "./src/merge_sort.js":
/*!***************************!*\
  !*** ./src/merge_sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function merge_sort(array) {
  if (array.length < 2) {
    return array;
  }

  let left_half = array.slice(0, array.length / 2);
  let right_half = array.slice(array.length / 2);
  left_half = merge_sort(left_half);
  right_half = merge_sort(right_half);

  return merge(left_half, right_half);
}

// merge when left part and right part are both sorted already
function merge(left_part, right_part) {
  let merged_list = [];
  let i = 0;
  let j = 0;
  while (i < left_part.length && j < right_part.length) {
    if (left_part[i] < right_part[j]) {
      merged_list.push(left_part[i]);
      i++;
    } else {
      merged_list.push(right_part[j]);
      j++;
    }
  }
  for (; i < left_part.length; i++) {
    merged_list.push(left_part[i]);
  }
  for (; j < right_part.length; j++) {
    merged_list.push(right_part[j]);
  }

  return merged_list;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge_sort);


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


/***/ }),

/***/ "./src/pretty_print.js":
/*!*****************************!*\
  !*** ./src/pretty_print.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prettyPrint);


/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTree": () => (/* binding */ buildTree),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }
}

function buildTree(dataArray, start, end) {
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);
  let node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](dataArray[mid]);

  node.left = buildTree(dataArray, start, mid - 1);
  node.right = buildTree(dataArray, mid + 1, end);

  return node;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");
/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge_sort */ "./src/merge_sort.js");
/* harmony import */ var _pretty_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pretty_print */ "./src/pretty_print.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert */ "./src/insert.js");
/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete */ "./src/delete.js");







let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 3, 5, 67, 67, 6345, 324];
testArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](testArray);
testTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);

(0,_delete__WEBPACK_IMPORTED_MODULE_4__["default"])(testTree.root, 9);

(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBLFNBQVMsdUJBQXVCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNScEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7QUFDQzs7Ozs7OztVQ3hCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDWTtBQUNHO0FBQ1g7QUFDSztBQUNGO0FBQ2pDO0FBQ0E7QUFDQSxZQUFZLHVEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QixnQkFBZ0IsZ0RBQVM7QUFDekIseURBQVc7QUFDWDtBQUNBLG1EQUFTO0FBQ1Q7QUFDQSx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9pbnNlcnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvbWVyZ2Vfc29ydC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL3ByZXR0eV9wcmludC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGVsZXRlS2V5KHJvb3QsIGRhdGEpIHtcclxuICByb290ID0gZGVsZXRlUmVjKHJvb3QsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVSZWMocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybiByb290O1xyXG5cclxuICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkgcm9vdC5sZWZ0ID0gZGVsZXRlUmVjKHJvb3QubGVmdCwgZGF0YSk7XHJcbiAgZWxzZSBpZiAoZGF0YSA+IHJvb3QuZGF0YSkgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCBkYXRhKTtcclxuICBlbHNlIHtcclxuICAgIGlmIChyb290LmxlZnQgPT0gbnVsbCkgcmV0dXJuIHJvb3QucmlnaHQ7XHJcbiAgICBlbHNlIGlmIChyb290LnJpZ2h0ID09IG51bGwpIHJldHVybiByb290LmxlZnQ7XHJcblxyXG4gICAgcm9vdC5kYXRhID0gbWluVmFsdWUocm9vdC5yaWdodCk7XHJcbiAgICByb290LnJpZ2h0ID0gZGVsZXRlUmVjKHJvb3QucmlnaHQsIHJvb3QuZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWluVmFsdWUocm9vdCkge1xyXG4gIGxldCBtaW52ID0gcm9vdC5kYXRhO1xyXG4gIHdoaWxlIChyb290LmxlZnQgIT0gbnVsbCkge1xyXG4gICAgbWludiA9IHJvb3QubGVmdC5kYXRhO1xyXG4gICAgcm9vdCA9IHJvb3QubGVmdDtcclxuICB9XHJcbiAgcmV0dXJuIG1pbnY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUtleTtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxuZnVuY3Rpb24gaW5zZXJ0KHJvb3QsIGRhdGEpIHtcclxuICByb290ID0gaW5zZXJ0UmVjKHJvb3QsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwpIHtcclxuICAgIHJvb3QgPSBuZXcgTm9kZShkYXRhKTtcclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHtcclxuICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGRhdGEpO1xyXG4gIH0gZWxzZSBpZiAoZGF0YSA+IHJvb3QuZGF0YSkge1xyXG4gICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnNlcnQ7XHJcbiIsImZ1bmN0aW9uIG1lcmdlX3NvcnQoYXJyYXkpIHtcclxuICBpZiAoYXJyYXkubGVuZ3RoIDwgMikge1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgbGV0IGxlZnRfaGFsZiA9IGFycmF5LnNsaWNlKDAsIGFycmF5Lmxlbmd0aCAvIDIpO1xyXG4gIGxldCByaWdodF9oYWxmID0gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgbGVmdF9oYWxmID0gbWVyZ2Vfc29ydChsZWZ0X2hhbGYpO1xyXG4gIHJpZ2h0X2hhbGYgPSBtZXJnZV9zb3J0KHJpZ2h0X2hhbGYpO1xyXG5cclxuICByZXR1cm4gbWVyZ2UobGVmdF9oYWxmLCByaWdodF9oYWxmKTtcclxufVxyXG5cclxuLy8gbWVyZ2Ugd2hlbiBsZWZ0IHBhcnQgYW5kIHJpZ2h0IHBhcnQgYXJlIGJvdGggc29ydGVkIGFscmVhZHlcclxuZnVuY3Rpb24gbWVyZ2UobGVmdF9wYXJ0LCByaWdodF9wYXJ0KSB7XHJcbiAgbGV0IG1lcmdlZF9saXN0ID0gW107XHJcbiAgbGV0IGkgPSAwO1xyXG4gIGxldCBqID0gMDtcclxuICB3aGlsZSAoaSA8IGxlZnRfcGFydC5sZW5ndGggJiYgaiA8IHJpZ2h0X3BhcnQubGVuZ3RoKSB7XHJcbiAgICBpZiAobGVmdF9wYXJ0W2ldIDwgcmlnaHRfcGFydFtqXSkge1xyXG4gICAgICBtZXJnZWRfbGlzdC5wdXNoKGxlZnRfcGFydFtpXSk7XHJcbiAgICAgIGkrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lcmdlZF9saXN0LnB1c2gocmlnaHRfcGFydFtqXSk7XHJcbiAgICAgIGorKztcclxuICAgIH1cclxuICB9XHJcbiAgZm9yICg7IGkgPCBsZWZ0X3BhcnQubGVuZ3RoOyBpKyspIHtcclxuICAgIG1lcmdlZF9saXN0LnB1c2gobGVmdF9wYXJ0W2ldKTtcclxuICB9XHJcbiAgZm9yICg7IGogPCByaWdodF9wYXJ0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICBtZXJnZWRfbGlzdC5wdXNoKHJpZ2h0X3BhcnRbal0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lcmdlZF9saXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZV9zb3J0O1xyXG4iLCJjbGFzcyBOb2RlIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcclxuIiwiZnVuY3Rpb24gcHJldHR5UHJpbnQobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xyXG4gIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xyXG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJldHR5UHJpbnQ7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcclxuXHJcbmNsYXNzIFRyZWUge1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XHJcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRUcmVlKGRhdGFBcnJheSwgc3RhcnQsIGVuZCkge1xyXG4gIGlmIChzdGFydCA+IGVuZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xyXG4gIGxldCBub2RlID0gbmV3IE5vZGUoZGF0YUFycmF5W21pZF0pO1xyXG5cclxuICBub2RlLmxlZnQgPSBidWlsZFRyZWUoZGF0YUFycmF5LCBzdGFydCwgbWlkIC0gMSk7XHJcbiAgbm9kZS5yaWdodCA9IGJ1aWxkVHJlZShkYXRhQXJyYXksIG1pZCArIDEsIGVuZCk7XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmVlO1xyXG5leHBvcnQgeyBidWlsZFRyZWUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVHJlZSBmcm9tIFwiLi90cmVlXCI7XHJcbmltcG9ydCBtZXJnZV9zb3J0IGZyb20gXCIuL21lcmdlX3NvcnRcIjtcclxuaW1wb3J0IHByZXR0eVByaW50IGZyb20gXCIuL3ByZXR0eV9wcmludFwiO1xyXG5pbXBvcnQgaW5zZXJ0IGZyb20gXCIuL2luc2VydFwiO1xyXG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tIFwiLi90cmVlXCI7XHJcbmltcG9ydCBkZWxldGVLZXkgZnJvbSBcIi4vZGVsZXRlXCI7XHJcblxyXG5sZXQgdGVzdEFycmF5ID0gWzEsIDcsIDcsIDIzLCA0LCAyMywgOCwgOSwgMywgNSwgNjcsIDY3LCA2MzQ1LCAzMjRdO1xyXG50ZXN0QXJyYXkgPSBtZXJnZV9zb3J0KHRlc3RBcnJheSk7XHJcbnRlc3RBcnJheSA9IFsuLi5uZXcgU2V0KHRlc3RBcnJheSldO1xyXG5jb25zb2xlLmxvZyh0ZXN0QXJyYXkpO1xyXG5cclxubGV0IHRlc3RUcmVlID0gbmV3IFRyZWUodGVzdEFycmF5KTtcclxudGVzdFRyZWUucm9vdCA9IGJ1aWxkVHJlZSh0ZXN0QXJyYXksIDAsIHRlc3RBcnJheS5sZW5ndGggLSAxKTtcclxucHJldHR5UHJpbnQodGVzdFRyZWUucm9vdCk7XHJcblxyXG5kZWxldGVLZXkodGVzdFRyZWUucm9vdCwgOSk7XHJcblxyXG5wcmV0dHlQcmludCh0ZXN0VHJlZS5yb290KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9