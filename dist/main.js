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

/***/ "./src/depth_first.js":
/*!****************************!*\
  !*** ./src/depth_first.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "call_inorder": () => (/* binding */ call_inorder),
/* harmony export */   "call_postorder": () => (/* binding */ call_postorder),
/* harmony export */   "call_preorder": () => (/* binding */ call_preorder)
/* harmony export */ });
function call_inorder(root, fn) {
  let inorderArray = [];
  inorder(root, fn);

  function inorder(root, fn) {
    if (root != null) {
      inorder(root.left);
      inorderArray.push(root.data);
      if (fn) {
        fn(root.data);
      }
      inorder(root.right);
    }
  }

  if (!fn) {
    return inorderArray;
  }
}

function call_preorder(root, fn) {
  let preorderArray = [];
  preorder(root, fn);

  function preorder(root, fn) {
    if (root != null) {
      preorderArray.push(root.data);
      if (fn) {
        fn(root.data);
      }
      preorder(root.left);
      preorder(root.right);
    }
  }
  if (!fn) {
    return preorderArray;
  }
}

function call_postorder(root, fn) {
  let postorderArray = [];
  postorder(root, fn);

  function postorder(root, fn) {
    if (root != null) {
      postorder(root.left);
      postorder(root.right);
      postorderArray.push(root.data);
      if (fn) {
        fn(root.data);
      }
    }
  }
  if (!fn) {
    return postorderArray;
  }
}



/***/ }),

/***/ "./src/find.js":
/*!*********************!*\
  !*** ./src/find.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function find(root, data) {
  if (root == null || root.data == data) {
    return root;
  }

  if (data < root.data) {
    return find(root.left, data);
  }

  return find(root.right, data);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);


/***/ }),

/***/ "./src/height.js":
/*!***********************!*\
  !*** ./src/height.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function call_height(node) {
  let counter = 0;
  height(node);

  function height(node) {
    if (node == null) {
      return;
    }

    counter++;
    if (node.left != null) {
      height(node.left, node);
    } else if (node.right != null) {
      height(node.right, node);
    }
  }

  return counter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (call_height);


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

/***/ "./src/level_order.js":
/*!****************************!*\
  !*** ./src/level_order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function levelOrder(root, fn) {
  if (root == null) return;

  const levelArray = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let current = queue.shift();
    levelArray.push(current);
    if (fn) {
      fn(current);
    }
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }

  if (!fn) {
    return levelArray;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (levelOrder);


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
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find */ "./src/find.js");
/* harmony import */ var _level_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level_order */ "./src/level_order.js");
/* harmony import */ var _depth_first__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./depth_first */ "./src/depth_first.js");
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./height */ "./src/height.js");











let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 3, 5, 67, 67, 6345, 324];
testArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](testArray);
testTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);

console.log((0,_height__WEBPACK_IMPORTED_MODULE_8__["default"])(testTree.root));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNZO0FBQ0c7QUFDWDtBQUNLO0FBQ0Y7QUFDUDtBQUNhO0FBQ3FDO0FBQ3pDO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLHVEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QixnQkFBZ0IsZ0RBQVM7QUFDekIseURBQVc7QUFDWDtBQUNBLFlBQVksbURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZGVwdGhfZmlyc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZmluZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaW5zZXJ0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2xldmVsX29yZGVyLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL21lcmdlX3NvcnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9wcmV0dHlfcHJpbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlbGV0ZUtleShyb290LCBkYXRhKSB7XHJcbiAgcm9vdCA9IGRlbGV0ZVJlYyhyb290LCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUmVjKHJvb3QsIGRhdGEpIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSByZXR1cm4gcm9vdDtcclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHJvb3QubGVmdCA9IGRlbGV0ZVJlYyhyb290LmxlZnQsIGRhdGEpO1xyXG4gIGVsc2UgaWYgKGRhdGEgPiByb290LmRhdGEpIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwgZGF0YSk7XHJcbiAgZWxzZSB7XHJcbiAgICBpZiAocm9vdC5sZWZ0ID09IG51bGwpIHJldHVybiByb290LnJpZ2h0O1xyXG4gICAgZWxzZSBpZiAocm9vdC5yaWdodCA9PSBudWxsKSByZXR1cm4gcm9vdC5sZWZ0O1xyXG5cclxuICAgIHJvb3QuZGF0YSA9IG1pblZhbHVlKHJvb3QucmlnaHQpO1xyXG4gICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCByb290LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pblZhbHVlKHJvb3QpIHtcclxuICBsZXQgbWludiA9IHJvb3QuZGF0YTtcclxuICB3aGlsZSAocm9vdC5sZWZ0ICE9IG51bGwpIHtcclxuICAgIG1pbnYgPSByb290LmxlZnQuZGF0YTtcclxuICAgIHJvb3QgPSByb290LmxlZnQ7XHJcbiAgfVxyXG4gIHJldHVybiBtaW52O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVLZXk7XHJcbiIsImZ1bmN0aW9uIGNhbGxfaW5vcmRlcihyb290LCBmbikge1xyXG4gIGxldCBpbm9yZGVyQXJyYXkgPSBbXTtcclxuICBpbm9yZGVyKHJvb3QsIGZuKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5vcmRlcihyb290LCBmbikge1xyXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xyXG4gICAgICBpbm9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGlub3JkZXJBcnJheS5wdXNoKHJvb3QuZGF0YSk7XHJcbiAgICAgIGlmIChmbikge1xyXG4gICAgICAgIGZuKHJvb3QuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5vcmRlcihyb290LnJpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBpbm9yZGVyQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxsX3ByZW9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgbGV0IHByZW9yZGVyQXJyYXkgPSBbXTtcclxuICBwcmVvcmRlcihyb290LCBmbik7XHJcblxyXG4gIGZ1bmN0aW9uIHByZW9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XHJcbiAgICAgIHByZW9yZGVyQXJyYXkucHVzaChyb290LmRhdGEpO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBmbihyb290LmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHByZW9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIHByZW9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm4gcHJlb3JkZXJBcnJheTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxfcG9zdG9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgbGV0IHBvc3RvcmRlckFycmF5ID0gW107XHJcbiAgcG9zdG9yZGVyKHJvb3QsIGZuKTtcclxuXHJcbiAgZnVuY3Rpb24gcG9zdG9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XHJcbiAgICAgIHBvc3RvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBwb3N0b3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHBvc3RvcmRlckFycmF5LnB1c2gocm9vdC5kYXRhKTtcclxuICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgZm4ocm9vdC5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm4gcG9zdG9yZGVyQXJyYXk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IGNhbGxfaW5vcmRlciwgY2FsbF9wcmVvcmRlciwgY2FsbF9wb3N0b3JkZXIgfTtcclxuIiwiZnVuY3Rpb24gZmluZChyb290LCBkYXRhKSB7XHJcbiAgaWYgKHJvb3QgPT0gbnVsbCB8fCByb290LmRhdGEgPT0gZGF0YSkge1xyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkge1xyXG4gICAgcmV0dXJuIGZpbmQocm9vdC5sZWZ0LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaW5kKHJvb3QucmlnaHQsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaW5kO1xyXG4iLCJmdW5jdGlvbiBjYWxsX2hlaWdodChub2RlKSB7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIGhlaWdodChub2RlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50ZXIrKztcclxuICAgIGlmIChub2RlLmxlZnQgIT0gbnVsbCkge1xyXG4gICAgICBoZWlnaHQobm9kZS5sZWZ0LCBub2RlKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgIGhlaWdodChub2RlLnJpZ2h0LCBub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxsX2hlaWdodDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxuZnVuY3Rpb24gaW5zZXJ0KHJvb3QsIGRhdGEpIHtcclxuICByb290ID0gaW5zZXJ0UmVjKHJvb3QsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwpIHtcclxuICAgIHJvb3QgPSBuZXcgTm9kZShkYXRhKTtcclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHtcclxuICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGRhdGEpO1xyXG4gIH0gZWxzZSBpZiAoZGF0YSA+IHJvb3QuZGF0YSkge1xyXG4gICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnNlcnQ7XHJcbiIsImZ1bmN0aW9uIGxldmVsT3JkZXIocm9vdCwgZm4pIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGxldmVsQXJyYXkgPSBbXTtcclxuICBjb25zdCBxdWV1ZSA9IFtdO1xyXG4gIHF1ZXVlLnB1c2gocm9vdCk7XHJcblxyXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcclxuICAgIGxldCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKTtcclxuICAgIGxldmVsQXJyYXkucHVzaChjdXJyZW50KTtcclxuICAgIGlmIChmbikge1xyXG4gICAgICBmbihjdXJyZW50KTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50LmxlZnQgIT0gbnVsbCkgcXVldWUucHVzaChjdXJyZW50LmxlZnQpO1xyXG4gICAgaWYgKGN1cnJlbnQucmlnaHQgIT0gbnVsbCkgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcclxuICB9XHJcblxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBsZXZlbEFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGV2ZWxPcmRlcjtcclxuIiwiZnVuY3Rpb24gbWVyZ2Vfc29ydChhcnJheSkge1xyXG4gIGlmIChhcnJheS5sZW5ndGggPCAyKSB7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBsZXQgbGVmdF9oYWxmID0gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgbGV0IHJpZ2h0X2hhbGYgPSBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLyAyKTtcclxuICBsZWZ0X2hhbGYgPSBtZXJnZV9zb3J0KGxlZnRfaGFsZik7XHJcbiAgcmlnaHRfaGFsZiA9IG1lcmdlX3NvcnQocmlnaHRfaGFsZik7XHJcblxyXG4gIHJldHVybiBtZXJnZShsZWZ0X2hhbGYsIHJpZ2h0X2hhbGYpO1xyXG59XHJcblxyXG4vLyBtZXJnZSB3aGVuIGxlZnQgcGFydCBhbmQgcmlnaHQgcGFydCBhcmUgYm90aCBzb3J0ZWQgYWxyZWFkeVxyXG5mdW5jdGlvbiBtZXJnZShsZWZ0X3BhcnQsIHJpZ2h0X3BhcnQpIHtcclxuICBsZXQgbWVyZ2VkX2xpc3QgPSBbXTtcclxuICBsZXQgaSA9IDA7XHJcbiAgbGV0IGogPSAwO1xyXG4gIHdoaWxlIChpIDwgbGVmdF9wYXJ0Lmxlbmd0aCAmJiBqIDwgcmlnaHRfcGFydC5sZW5ndGgpIHtcclxuICAgIGlmIChsZWZ0X3BhcnRbaV0gPCByaWdodF9wYXJ0W2pdKSB7XHJcbiAgICAgIG1lcmdlZF9saXN0LnB1c2gobGVmdF9wYXJ0W2ldKTtcclxuICAgICAgaSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVyZ2VkX2xpc3QucHVzaChyaWdodF9wYXJ0W2pdKTtcclxuICAgICAgaisrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKDsgaSA8IGxlZnRfcGFydC5sZW5ndGg7IGkrKykge1xyXG4gICAgbWVyZ2VkX2xpc3QucHVzaChsZWZ0X3BhcnRbaV0pO1xyXG4gIH1cclxuICBmb3IgKDsgaiA8IHJpZ2h0X3BhcnQubGVuZ3RoOyBqKyspIHtcclxuICAgIG1lcmdlZF9saXN0LnB1c2gocmlnaHRfcGFydFtqXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2VkX2xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlX3NvcnQ7XHJcbiIsImNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xyXG4iLCJmdW5jdGlvbiBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XHJcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmV0dHlQcmludDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxuY2xhc3MgVHJlZSB7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFRyZWUoZGF0YUFycmF5LCBzdGFydCwgZW5kKSB7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XHJcbiAgbGV0IG5vZGUgPSBuZXcgTm9kZShkYXRhQXJyYXlbbWlkXSk7XHJcblxyXG4gIG5vZGUubGVmdCA9IGJ1aWxkVHJlZShkYXRhQXJyYXksIHN0YXJ0LCBtaWQgLSAxKTtcclxuICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGRhdGFBcnJheSwgbWlkICsgMSwgZW5kKTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XHJcbmV4cG9ydCB7IGJ1aWxkVHJlZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUcmVlIGZyb20gXCIuL3RyZWVcIjtcclxuaW1wb3J0IG1lcmdlX3NvcnQgZnJvbSBcIi4vbWVyZ2Vfc29ydFwiO1xyXG5pbXBvcnQgcHJldHR5UHJpbnQgZnJvbSBcIi4vcHJldHR5X3ByaW50XCI7XHJcbmltcG9ydCBpbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XHJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcclxuaW1wb3J0IGRlbGV0ZUtleSBmcm9tIFwiLi9kZWxldGVcIjtcclxuaW1wb3J0IGZpbmQgZnJvbSBcIi4vZmluZFwiO1xyXG5pbXBvcnQgbGV2ZWxPcmRlciBmcm9tIFwiLi9sZXZlbF9vcmRlclwiO1xyXG5pbXBvcnQgeyBjYWxsX2lub3JkZXIsIGNhbGxfcG9zdG9yZGVyLCBjYWxsX3ByZW9yZGVyIH0gZnJvbSBcIi4vZGVwdGhfZmlyc3RcIjtcclxuaW1wb3J0IGNhbGxfaGVpZ2h0IGZyb20gXCIuL2hlaWdodFwiO1xyXG5cclxubGV0IHRlc3RBcnJheSA9IFsxLCA3LCA3LCAyMywgNCwgMjMsIDgsIDksIDMsIDUsIDY3LCA2NywgNjM0NSwgMzI0XTtcclxudGVzdEFycmF5ID0gbWVyZ2Vfc29ydCh0ZXN0QXJyYXkpO1xyXG50ZXN0QXJyYXkgPSBbLi4ubmV3IFNldCh0ZXN0QXJyYXkpXTtcclxuY29uc29sZS5sb2codGVzdEFycmF5KTtcclxuXHJcbmxldCB0ZXN0VHJlZSA9IG5ldyBUcmVlKHRlc3RBcnJheSk7XHJcbnRlc3RUcmVlLnJvb3QgPSBidWlsZFRyZWUodGVzdEFycmF5LCAwLCB0ZXN0QXJyYXkubGVuZ3RoIC0gMSk7XHJcbnByZXR0eVByaW50KHRlc3RUcmVlLnJvb3QpO1xyXG5cclxuY29uc29sZS5sb2coY2FsbF9oZWlnaHQodGVzdFRyZWUucm9vdCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=