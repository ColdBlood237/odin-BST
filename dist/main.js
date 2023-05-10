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

/***/ "./src/depth.js":
/*!**********************!*\
  !*** ./src/depth.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./height */ "./src/height.js");


function call_depth(root, node) {
  let tree_height = (0,_height__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
  let node_height = (0,_height__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  let node_depth = tree_height - node_height;

  return node_depth;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (call_depth);


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
  if (node == null) {
    return 0;
  }

  let left_height = call_height(node.left) + 1;
  let right_height = call_height(node.right) + 1;

  return Math.max(left_height, right_height);
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

/***/ "./src/isBalanced.js":
/*!***************************!*\
  !*** ./src/isBalanced.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./height */ "./src/height.js");


function isBalanced(root) {
  if (root == null) {
    return true;
  }

  let left_height = (0,_height__WEBPACK_IMPORTED_MODULE_0__["default"])(root.left);
  let right_height = (0,_height__WEBPACK_IMPORTED_MODULE_0__["default"])(root.right);
  let difference = Math.abs(left_height - right_height);

  let is_balanced = true;

  if (difference > 1) {
    is_balanced = false;
  }

  is_balanced = is_balanced && isBalanced(root.left);
  is_balanced = is_balanced && isBalanced(root.right);

  return is_balanced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBalanced);


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
/* harmony import */ var _depth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./depth */ "./src/depth.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _isBalanced__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isBalanced */ "./src/isBalanced.js");














let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 5, 67, 67, 6345, 324];
testArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](testArray);
testTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);
// deleteKey(testTree.root, 1);
// deleteKey(testTree.root, 7);
//deleteKey(testTree.root, 5);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);

console.log((0,_height__WEBPACK_IMPORTED_MODULE_8__["default"])(testTree.root), "tree's height");
console.log((0,_depth__WEBPACK_IMPORTED_MODULE_9__["default"])(testTree.root, testTree.root.left));
console.log((0,_isBalanced__WEBPACK_IMPORTED_MODULE_11__["default"])(testTree.root));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaEU7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7QUFDQzs7Ozs7OztVQ3hCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ1k7QUFDRztBQUNYO0FBQ0s7QUFDRjtBQUNQO0FBQ2E7QUFDcUM7QUFDekM7QUFDRjtBQUNQO0FBQ1k7QUFDdEM7QUFDQTtBQUNBLFlBQVksdURBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCLGdCQUFnQixnREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5REFBVztBQUNYO0FBQ0EsWUFBWSxtREFBVztBQUN2QixZQUFZLGtEQUFVO0FBQ3RCLFlBQVksd0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZGVwdGguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZGVwdGhfZmlyc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZmluZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaW5zZXJ0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2lzQmFsYW5jZWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvbGV2ZWxfb3JkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvbWVyZ2Vfc29ydC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL3ByZXR0eV9wcmludC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGVsZXRlS2V5KHJvb3QsIGRhdGEpIHtcclxuICByb290ID0gZGVsZXRlUmVjKHJvb3QsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVSZWMocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybiByb290O1xyXG5cclxuICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkgcm9vdC5sZWZ0ID0gZGVsZXRlUmVjKHJvb3QubGVmdCwgZGF0YSk7XHJcbiAgZWxzZSBpZiAoZGF0YSA+IHJvb3QuZGF0YSkgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCBkYXRhKTtcclxuICBlbHNlIHtcclxuICAgIGlmIChyb290LmxlZnQgPT0gbnVsbCkgcmV0dXJuIHJvb3QucmlnaHQ7XHJcbiAgICBlbHNlIGlmIChyb290LnJpZ2h0ID09IG51bGwpIHJldHVybiByb290LmxlZnQ7XHJcblxyXG4gICAgcm9vdC5kYXRhID0gbWluVmFsdWUocm9vdC5yaWdodCk7XHJcbiAgICByb290LnJpZ2h0ID0gZGVsZXRlUmVjKHJvb3QucmlnaHQsIHJvb3QuZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWluVmFsdWUocm9vdCkge1xyXG4gIGxldCBtaW52ID0gcm9vdC5kYXRhO1xyXG4gIHdoaWxlIChyb290LmxlZnQgIT0gbnVsbCkge1xyXG4gICAgbWludiA9IHJvb3QubGVmdC5kYXRhO1xyXG4gICAgcm9vdCA9IHJvb3QubGVmdDtcclxuICB9XHJcbiAgcmV0dXJuIG1pbnY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUtleTtcclxuIiwiaW1wb3J0IGNhbGxfaGVpZ2h0IGZyb20gXCIuL2hlaWdodFwiO1xyXG5cclxuZnVuY3Rpb24gY2FsbF9kZXB0aChyb290LCBub2RlKSB7XHJcbiAgbGV0IHRyZWVfaGVpZ2h0ID0gY2FsbF9oZWlnaHQocm9vdCk7XHJcbiAgbGV0IG5vZGVfaGVpZ2h0ID0gY2FsbF9oZWlnaHQobm9kZSk7XHJcbiAgbGV0IG5vZGVfZGVwdGggPSB0cmVlX2hlaWdodCAtIG5vZGVfaGVpZ2h0O1xyXG5cclxuICByZXR1cm4gbm9kZV9kZXB0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsbF9kZXB0aDtcclxuIiwiZnVuY3Rpb24gY2FsbF9pbm9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgbGV0IGlub3JkZXJBcnJheSA9IFtdO1xyXG4gIGlub3JkZXIocm9vdCwgZm4pO1xyXG5cclxuICBmdW5jdGlvbiBpbm9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XHJcbiAgICAgIGlub3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgaW5vcmRlckFycmF5LnB1c2gocm9vdC5kYXRhKTtcclxuICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgZm4ocm9vdC5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpbm9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFmbikge1xyXG4gICAgcmV0dXJuIGlub3JkZXJBcnJheTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxfcHJlb3JkZXIocm9vdCwgZm4pIHtcclxuICBsZXQgcHJlb3JkZXJBcnJheSA9IFtdO1xyXG4gIHByZW9yZGVyKHJvb3QsIGZuKTtcclxuXHJcbiAgZnVuY3Rpb24gcHJlb3JkZXIocm9vdCwgZm4pIHtcclxuICAgIGlmIChyb290ICE9IG51bGwpIHtcclxuICAgICAgcHJlb3JkZXJBcnJheS5wdXNoKHJvb3QuZGF0YSk7XHJcbiAgICAgIGlmIChmbikge1xyXG4gICAgICAgIGZuKHJvb3QuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgcHJlb3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgcHJlb3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBwcmVvcmRlckFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbF9wb3N0b3JkZXIocm9vdCwgZm4pIHtcclxuICBsZXQgcG9zdG9yZGVyQXJyYXkgPSBbXTtcclxuICBwb3N0b3JkZXIocm9vdCwgZm4pO1xyXG5cclxuICBmdW5jdGlvbiBwb3N0b3JkZXIocm9vdCwgZm4pIHtcclxuICAgIGlmIChyb290ICE9IG51bGwpIHtcclxuICAgICAgcG9zdG9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIHBvc3RvcmRlcihyb290LnJpZ2h0KTtcclxuICAgICAgcG9zdG9yZGVyQXJyYXkucHVzaChyb290LmRhdGEpO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBmbihyb290LmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBwb3N0b3JkZXJBcnJheTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgY2FsbF9pbm9yZGVyLCBjYWxsX3ByZW9yZGVyLCBjYWxsX3Bvc3RvcmRlciB9O1xyXG4iLCJmdW5jdGlvbiBmaW5kKHJvb3QsIGRhdGEpIHtcclxuICBpZiAocm9vdCA9PSBudWxsIHx8IHJvb3QuZGF0YSA9PSBkYXRhKSB7XHJcbiAgICByZXR1cm4gcm9vdDtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhIDwgcm9vdC5kYXRhKSB7XHJcbiAgICByZXR1cm4gZmluZChyb290LmxlZnQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmQocm9vdC5yaWdodCwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbmQ7XHJcbiIsImZ1bmN0aW9uIGNhbGxfaGVpZ2h0KG5vZGUpIHtcclxuICBpZiAobm9kZSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIGxldCBsZWZ0X2hlaWdodCA9IGNhbGxfaGVpZ2h0KG5vZGUubGVmdCkgKyAxO1xyXG4gIGxldCByaWdodF9oZWlnaHQgPSBjYWxsX2hlaWdodChub2RlLnJpZ2h0KSArIDE7XHJcblxyXG4gIHJldHVybiBNYXRoLm1heChsZWZ0X2hlaWdodCwgcmlnaHRfaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsbF9oZWlnaHQ7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcclxuXHJcbmZ1bmN0aW9uIGluc2VydChyb290LCBkYXRhKSB7XHJcbiAgcm9vdCA9IGluc2VydFJlYyhyb290LCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0UmVjKHJvb3QsIGRhdGEpIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICByb290ID0gbmV3IE5vZGUoZGF0YSk7XHJcbiAgICByZXR1cm4gcm9vdDtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhIDwgcm9vdC5kYXRhKSB7XHJcbiAgICByb290LmxlZnQgPSBpbnNlcnRSZWMocm9vdC5sZWZ0LCBkYXRhKTtcclxuICB9IGVsc2UgaWYgKGRhdGEgPiByb290LmRhdGEpIHtcclxuICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0O1xyXG4iLCJpbXBvcnQgY2FsbF9oZWlnaHQgZnJvbSBcIi4vaGVpZ2h0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0JhbGFuY2VkKHJvb3QpIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxldCBsZWZ0X2hlaWdodCA9IGNhbGxfaGVpZ2h0KHJvb3QubGVmdCk7XHJcbiAgbGV0IHJpZ2h0X2hlaWdodCA9IGNhbGxfaGVpZ2h0KHJvb3QucmlnaHQpO1xyXG4gIGxldCBkaWZmZXJlbmNlID0gTWF0aC5hYnMobGVmdF9oZWlnaHQgLSByaWdodF9oZWlnaHQpO1xyXG5cclxuICBsZXQgaXNfYmFsYW5jZWQgPSB0cnVlO1xyXG5cclxuICBpZiAoZGlmZmVyZW5jZSA+IDEpIHtcclxuICAgIGlzX2JhbGFuY2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc19iYWxhbmNlZCA9IGlzX2JhbGFuY2VkICYmIGlzQmFsYW5jZWQocm9vdC5sZWZ0KTtcclxuICBpc19iYWxhbmNlZCA9IGlzX2JhbGFuY2VkICYmIGlzQmFsYW5jZWQocm9vdC5yaWdodCk7XHJcblxyXG4gIHJldHVybiBpc19iYWxhbmNlZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNCYWxhbmNlZDtcclxuIiwiZnVuY3Rpb24gbGV2ZWxPcmRlcihyb290LCBmbikge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgY29uc3QgbGV2ZWxBcnJheSA9IFtdO1xyXG4gIGNvbnN0IHF1ZXVlID0gW107XHJcbiAgcXVldWUucHVzaChyb290KTtcclxuXHJcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgbGV2ZWxBcnJheS5wdXNoKGN1cnJlbnQpO1xyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIGZuKGN1cnJlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnQubGVmdCAhPSBudWxsKSBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCk7XHJcbiAgICBpZiAoY3VycmVudC5yaWdodCAhPSBudWxsKSBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmbikge1xyXG4gICAgcmV0dXJuIGxldmVsQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZXZlbE9yZGVyO1xyXG4iLCJmdW5jdGlvbiBtZXJnZV9zb3J0KGFycmF5KSB7XHJcbiAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHtcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGxldCBsZWZ0X2hhbGYgPSBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLyAyKTtcclxuICBsZXQgcmlnaHRfaGFsZiA9IGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAvIDIpO1xyXG4gIGxlZnRfaGFsZiA9IG1lcmdlX3NvcnQobGVmdF9oYWxmKTtcclxuICByaWdodF9oYWxmID0gbWVyZ2Vfc29ydChyaWdodF9oYWxmKTtcclxuXHJcbiAgcmV0dXJuIG1lcmdlKGxlZnRfaGFsZiwgcmlnaHRfaGFsZik7XHJcbn1cclxuXHJcbi8vIG1lcmdlIHdoZW4gbGVmdCBwYXJ0IGFuZCByaWdodCBwYXJ0IGFyZSBib3RoIHNvcnRlZCBhbHJlYWR5XHJcbmZ1bmN0aW9uIG1lcmdlKGxlZnRfcGFydCwgcmlnaHRfcGFydCkge1xyXG4gIGxldCBtZXJnZWRfbGlzdCA9IFtdO1xyXG4gIGxldCBpID0gMDtcclxuICBsZXQgaiA9IDA7XHJcbiAgd2hpbGUgKGkgPCBsZWZ0X3BhcnQubGVuZ3RoICYmIGogPCByaWdodF9wYXJ0Lmxlbmd0aCkge1xyXG4gICAgaWYgKGxlZnRfcGFydFtpXSA8IHJpZ2h0X3BhcnRbal0pIHtcclxuICAgICAgbWVyZ2VkX2xpc3QucHVzaChsZWZ0X3BhcnRbaV0pO1xyXG4gICAgICBpKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXJnZWRfbGlzdC5wdXNoKHJpZ2h0X3BhcnRbal0pO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoOyBpIDwgbGVmdF9wYXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtZXJnZWRfbGlzdC5wdXNoKGxlZnRfcGFydFtpXSk7XHJcbiAgfVxyXG4gIGZvciAoOyBqIDwgcmlnaHRfcGFydC5sZW5ndGg7IGorKykge1xyXG4gICAgbWVyZ2VkX2xpc3QucHVzaChyaWdodF9wYXJ0W2pdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZXJnZWRfbGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Vfc29ydDtcclxuIiwiY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcbiIsImZ1bmN0aW9uIHByZXR0eVByaW50KG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcclxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcclxuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByZXR0eVByaW50O1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XHJcblxyXG5jbGFzcyBUcmVlIHtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgdGhpcy5yb290ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVHJlZShkYXRhQXJyYXksIHN0YXJ0LCBlbmQpIHtcclxuICBpZiAoc3RhcnQgPiBlbmQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcclxuICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGFBcnJheVttaWRdKTtcclxuXHJcbiAgbm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGRhdGFBcnJheSwgc3RhcnQsIG1pZCAtIDEpO1xyXG4gIG5vZGUucmlnaHQgPSBidWlsZFRyZWUoZGF0YUFycmF5LCBtaWQgKyAxLCBlbmQpO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcclxuZXhwb3J0IHsgYnVpbGRUcmVlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyZWUgZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgbWVyZ2Vfc29ydCBmcm9tIFwiLi9tZXJnZV9zb3J0XCI7XHJcbmltcG9ydCBwcmV0dHlQcmludCBmcm9tIFwiLi9wcmV0dHlfcHJpbnRcIjtcclxuaW1wb3J0IGluc2VydCBmcm9tIFwiLi9pbnNlcnRcIjtcclxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgZGVsZXRlS2V5IGZyb20gXCIuL2RlbGV0ZVwiO1xyXG5pbXBvcnQgZmluZCBmcm9tIFwiLi9maW5kXCI7XHJcbmltcG9ydCBsZXZlbE9yZGVyIGZyb20gXCIuL2xldmVsX29yZGVyXCI7XHJcbmltcG9ydCB7IGNhbGxfaW5vcmRlciwgY2FsbF9wb3N0b3JkZXIsIGNhbGxfcHJlb3JkZXIgfSBmcm9tIFwiLi9kZXB0aF9maXJzdFwiO1xyXG5pbXBvcnQgY2FsbF9oZWlnaHQgZnJvbSBcIi4vaGVpZ2h0XCI7XHJcbmltcG9ydCBjYWxsX2RlcHRoIGZyb20gXCIuL2RlcHRoXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcclxuaW1wb3J0IGlzQmFsYW5jZWQgZnJvbSBcIi4vaXNCYWxhbmNlZFwiO1xyXG5cclxubGV0IHRlc3RBcnJheSA9IFsxLCA3LCA3LCAyMywgNCwgMjMsIDgsIDksIDUsIDY3LCA2NywgNjM0NSwgMzI0XTtcclxudGVzdEFycmF5ID0gbWVyZ2Vfc29ydCh0ZXN0QXJyYXkpO1xyXG50ZXN0QXJyYXkgPSBbLi4ubmV3IFNldCh0ZXN0QXJyYXkpXTtcclxuY29uc29sZS5sb2codGVzdEFycmF5KTtcclxuXHJcbmxldCB0ZXN0VHJlZSA9IG5ldyBUcmVlKHRlc3RBcnJheSk7XHJcbnRlc3RUcmVlLnJvb3QgPSBidWlsZFRyZWUodGVzdEFycmF5LCAwLCB0ZXN0QXJyYXkubGVuZ3RoIC0gMSk7XHJcbi8vIGRlbGV0ZUtleSh0ZXN0VHJlZS5yb290LCAxKTtcclxuLy8gZGVsZXRlS2V5KHRlc3RUcmVlLnJvb3QsIDcpO1xyXG4vL2RlbGV0ZUtleSh0ZXN0VHJlZS5yb290LCA1KTtcclxucHJldHR5UHJpbnQodGVzdFRyZWUucm9vdCk7XHJcblxyXG5jb25zb2xlLmxvZyhjYWxsX2hlaWdodCh0ZXN0VHJlZS5yb290KSwgXCJ0cmVlJ3MgaGVpZ2h0XCIpO1xyXG5jb25zb2xlLmxvZyhjYWxsX2RlcHRoKHRlc3RUcmVlLnJvb3QsIHRlc3RUcmVlLnJvb3QubGVmdCkpO1xyXG5jb25zb2xlLmxvZyhpc0JhbGFuY2VkKHRlc3RUcmVlLnJvb3QpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9