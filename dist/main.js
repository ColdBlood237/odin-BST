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










let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 3, 5, 67, 67, 6345, 324];
testArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](testArray);
testTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);

console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.call_postorder)(testTree.root));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDWTtBQUNHO0FBQ1g7QUFDSztBQUNGO0FBQ1A7QUFDYTtBQUNxQztBQUM1RTtBQUNBO0FBQ0EsWUFBWSx1REFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkIsZ0JBQWdCLGdEQUFTO0FBQ3pCLHlEQUFXO0FBQ1g7QUFDQSxZQUFZLDREQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZGVsZXRlLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2RlcHRoX2ZpcnN0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaW5zZXJ0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2xldmVsX29yZGVyLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL21lcmdlX3NvcnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9wcmV0dHlfcHJpbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlbGV0ZUtleShyb290LCBkYXRhKSB7XHJcbiAgcm9vdCA9IGRlbGV0ZVJlYyhyb290LCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUmVjKHJvb3QsIGRhdGEpIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSByZXR1cm4gcm9vdDtcclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHJvb3QubGVmdCA9IGRlbGV0ZVJlYyhyb290LmxlZnQsIGRhdGEpO1xyXG4gIGVsc2UgaWYgKGRhdGEgPiByb290LmRhdGEpIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwgZGF0YSk7XHJcbiAgZWxzZSB7XHJcbiAgICBpZiAocm9vdC5sZWZ0ID09IG51bGwpIHJldHVybiByb290LnJpZ2h0O1xyXG4gICAgZWxzZSBpZiAocm9vdC5yaWdodCA9PSBudWxsKSByZXR1cm4gcm9vdC5sZWZ0O1xyXG5cclxuICAgIHJvb3QuZGF0YSA9IG1pblZhbHVlKHJvb3QucmlnaHQpO1xyXG4gICAgcm9vdC5yaWdodCA9IGRlbGV0ZVJlYyhyb290LnJpZ2h0LCByb290LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pblZhbHVlKHJvb3QpIHtcclxuICBsZXQgbWludiA9IHJvb3QuZGF0YTtcclxuICB3aGlsZSAocm9vdC5sZWZ0ICE9IG51bGwpIHtcclxuICAgIG1pbnYgPSByb290LmxlZnQuZGF0YTtcclxuICAgIHJvb3QgPSByb290LmxlZnQ7XHJcbiAgfVxyXG4gIHJldHVybiBtaW52O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVLZXk7XHJcbiIsImZ1bmN0aW9uIGNhbGxfaW5vcmRlcihyb290LCBmbikge1xyXG4gIGxldCBpbm9yZGVyQXJyYXkgPSBbXTtcclxuICBpbm9yZGVyKHJvb3QsIGZuKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5vcmRlcihyb290LCBmbikge1xyXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xyXG4gICAgICBpbm9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGlub3JkZXJBcnJheS5wdXNoKHJvb3QuZGF0YSk7XHJcbiAgICAgIGlmIChmbikge1xyXG4gICAgICAgIGZuKHJvb3QuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5vcmRlcihyb290LnJpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBpbm9yZGVyQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxsX3ByZW9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgbGV0IHByZW9yZGVyQXJyYXkgPSBbXTtcclxuICBwcmVvcmRlcihyb290LCBmbik7XHJcblxyXG4gIGZ1bmN0aW9uIHByZW9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XHJcbiAgICAgIHByZW9yZGVyQXJyYXkucHVzaChyb290LmRhdGEpO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBmbihyb290LmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHByZW9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIHByZW9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm4gcHJlb3JkZXJBcnJheTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxfcG9zdG9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgbGV0IHBvc3RvcmRlckFycmF5ID0gW107XHJcbiAgcG9zdG9yZGVyKHJvb3QsIGZuKTtcclxuXHJcbiAgZnVuY3Rpb24gcG9zdG9yZGVyKHJvb3QsIGZuKSB7XHJcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XHJcbiAgICAgIHBvc3RvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBwb3N0b3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHBvc3RvcmRlckFycmF5LnB1c2gocm9vdC5kYXRhKTtcclxuICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgZm4ocm9vdC5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm4gcG9zdG9yZGVyQXJyYXk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IGNhbGxfaW5vcmRlciwgY2FsbF9wcmVvcmRlciwgY2FsbF9wb3N0b3JkZXIgfTtcclxuIiwiZnVuY3Rpb24gZmluZChyb290LCBkYXRhKSB7XHJcbiAgaWYgKHJvb3QgPT0gbnVsbCB8fCByb290LmRhdGEgPT0gZGF0YSkge1xyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkge1xyXG4gICAgcmV0dXJuIGZpbmQocm9vdC5sZWZ0LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaW5kKHJvb3QucmlnaHQsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaW5kO1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XHJcblxyXG5mdW5jdGlvbiBpbnNlcnQocm9vdCwgZGF0YSkge1xyXG4gIHJvb3QgPSBpbnNlcnRSZWMocm9vdCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBkYXRhKSB7XHJcbiAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4gICAgcm9vdCA9IG5ldyBOb2RlKGRhdGEpO1xyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkge1xyXG4gICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwgZGF0YSk7XHJcbiAgfSBlbHNlIGlmIChkYXRhID4gcm9vdC5kYXRhKSB7XHJcbiAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHJvb3QucmlnaHQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc2VydDtcclxuIiwiZnVuY3Rpb24gbGV2ZWxPcmRlcihyb290LCBmbikge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgY29uc3QgbGV2ZWxBcnJheSA9IFtdO1xyXG4gIGNvbnN0IHF1ZXVlID0gW107XHJcbiAgcXVldWUucHVzaChyb290KTtcclxuXHJcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgbGV2ZWxBcnJheS5wdXNoKGN1cnJlbnQpO1xyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIGZuKGN1cnJlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnQubGVmdCAhPSBudWxsKSBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCk7XHJcbiAgICBpZiAoY3VycmVudC5yaWdodCAhPSBudWxsKSBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmbikge1xyXG4gICAgcmV0dXJuIGxldmVsQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZXZlbE9yZGVyO1xyXG4iLCJmdW5jdGlvbiBtZXJnZV9zb3J0KGFycmF5KSB7XHJcbiAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHtcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGxldCBsZWZ0X2hhbGYgPSBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLyAyKTtcclxuICBsZXQgcmlnaHRfaGFsZiA9IGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAvIDIpO1xyXG4gIGxlZnRfaGFsZiA9IG1lcmdlX3NvcnQobGVmdF9oYWxmKTtcclxuICByaWdodF9oYWxmID0gbWVyZ2Vfc29ydChyaWdodF9oYWxmKTtcclxuXHJcbiAgcmV0dXJuIG1lcmdlKGxlZnRfaGFsZiwgcmlnaHRfaGFsZik7XHJcbn1cclxuXHJcbi8vIG1lcmdlIHdoZW4gbGVmdCBwYXJ0IGFuZCByaWdodCBwYXJ0IGFyZSBib3RoIHNvcnRlZCBhbHJlYWR5XHJcbmZ1bmN0aW9uIG1lcmdlKGxlZnRfcGFydCwgcmlnaHRfcGFydCkge1xyXG4gIGxldCBtZXJnZWRfbGlzdCA9IFtdO1xyXG4gIGxldCBpID0gMDtcclxuICBsZXQgaiA9IDA7XHJcbiAgd2hpbGUgKGkgPCBsZWZ0X3BhcnQubGVuZ3RoICYmIGogPCByaWdodF9wYXJ0Lmxlbmd0aCkge1xyXG4gICAgaWYgKGxlZnRfcGFydFtpXSA8IHJpZ2h0X3BhcnRbal0pIHtcclxuICAgICAgbWVyZ2VkX2xpc3QucHVzaChsZWZ0X3BhcnRbaV0pO1xyXG4gICAgICBpKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXJnZWRfbGlzdC5wdXNoKHJpZ2h0X3BhcnRbal0pO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoOyBpIDwgbGVmdF9wYXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtZXJnZWRfbGlzdC5wdXNoKGxlZnRfcGFydFtpXSk7XHJcbiAgfVxyXG4gIGZvciAoOyBqIDwgcmlnaHRfcGFydC5sZW5ndGg7IGorKykge1xyXG4gICAgbWVyZ2VkX2xpc3QucHVzaChyaWdodF9wYXJ0W2pdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZXJnZWRfbGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVyZ2Vfc29ydDtcclxuIiwiY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcbiIsImZ1bmN0aW9uIHByZXR0eVByaW50KG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcclxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcclxuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByZXR0eVByaW50O1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XHJcblxyXG5jbGFzcyBUcmVlIHtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgdGhpcy5yb290ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVHJlZShkYXRhQXJyYXksIHN0YXJ0LCBlbmQpIHtcclxuICBpZiAoc3RhcnQgPiBlbmQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcclxuICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGFBcnJheVttaWRdKTtcclxuXHJcbiAgbm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGRhdGFBcnJheSwgc3RhcnQsIG1pZCAtIDEpO1xyXG4gIG5vZGUucmlnaHQgPSBidWlsZFRyZWUoZGF0YUFycmF5LCBtaWQgKyAxLCBlbmQpO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcclxuZXhwb3J0IHsgYnVpbGRUcmVlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyZWUgZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgbWVyZ2Vfc29ydCBmcm9tIFwiLi9tZXJnZV9zb3J0XCI7XHJcbmltcG9ydCBwcmV0dHlQcmludCBmcm9tIFwiLi9wcmV0dHlfcHJpbnRcIjtcclxuaW1wb3J0IGluc2VydCBmcm9tIFwiLi9pbnNlcnRcIjtcclxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgZGVsZXRlS2V5IGZyb20gXCIuL2RlbGV0ZVwiO1xyXG5pbXBvcnQgZmluZCBmcm9tIFwiLi9maW5kXCI7XHJcbmltcG9ydCBsZXZlbE9yZGVyIGZyb20gXCIuL2xldmVsX29yZGVyXCI7XHJcbmltcG9ydCB7IGNhbGxfaW5vcmRlciwgY2FsbF9wb3N0b3JkZXIsIGNhbGxfcHJlb3JkZXIgfSBmcm9tIFwiLi9kZXB0aF9maXJzdFwiO1xyXG5cclxubGV0IHRlc3RBcnJheSA9IFsxLCA3LCA3LCAyMywgNCwgMjMsIDgsIDksIDMsIDUsIDY3LCA2NywgNjM0NSwgMzI0XTtcclxudGVzdEFycmF5ID0gbWVyZ2Vfc29ydCh0ZXN0QXJyYXkpO1xyXG50ZXN0QXJyYXkgPSBbLi4ubmV3IFNldCh0ZXN0QXJyYXkpXTtcclxuY29uc29sZS5sb2codGVzdEFycmF5KTtcclxuXHJcbmxldCB0ZXN0VHJlZSA9IG5ldyBUcmVlKHRlc3RBcnJheSk7XHJcbnRlc3RUcmVlLnJvb3QgPSBidWlsZFRyZWUodGVzdEFycmF5LCAwLCB0ZXN0QXJyYXkubGVuZ3RoIC0gMSk7XHJcbnByZXR0eVByaW50KHRlc3RUcmVlLnJvb3QpO1xyXG5cclxuY29uc29sZS5sb2coY2FsbF9wb3N0b3JkZXIodGVzdFRyZWUucm9vdCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=