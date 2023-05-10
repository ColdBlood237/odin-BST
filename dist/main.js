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













let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 5, 67, 67, 6345, 324];
testArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](testArray);
testTree.root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(testArray, 0, testArray.length - 1);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(testTree.root);
console.log((0,_height__WEBPACK_IMPORTED_MODULE_8__["default"])(testTree.root), "tree's height");
console.log((0,_depth__WEBPACK_IMPORTED_MODULE_9__["default"])(testTree.root, testTree.root.left));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QlU7QUFDbkM7QUFDQTtBQUNBLG9CQUFvQixtREFBVztBQUMvQixvQkFBb0IsbURBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEOzs7Ozs7Ozs7Ozs7Ozs7QUN6RHZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU8sRUFBRSx5QkFBeUI7QUFDakU7QUFDQSxpQkFBaUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDL0Q7QUFDQSw4QkFBOEIsT0FBTyxFQUFFLHlCQUF5QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQztBQUNDOzs7Ozs7O1VDeEJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNZO0FBQ0c7QUFDWDtBQUNLO0FBQ0Y7QUFDUDtBQUNhO0FBQ3FDO0FBQ3pDO0FBQ0Y7QUFDUDtBQUMxQjtBQUNBO0FBQ0EsWUFBWSx1REFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkIsZ0JBQWdCLGdEQUFTO0FBQ3pCLHlEQUFXO0FBQ1gsWUFBWSxtREFBVztBQUN2QixZQUFZLGtEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvZGVsZXRlLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2RlcHRoLmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2RlcHRoX2ZpcnN0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvaGVpZ2h0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL2luc2VydC5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9sZXZlbF9vcmRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9tZXJnZV9zb3J0LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3QvLi9zcmMvcHJldHR5X3ByaW50LmpzIiwid2VicGFjazovL29kaW4tYnN0Ly4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYnN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1ic3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWxldGVLZXkocm9vdCwgZGF0YSkge1xyXG4gIHJvb3QgPSBkZWxldGVSZWMocm9vdCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVJlYyhyb290LCBkYXRhKSB7XHJcbiAgaWYgKHJvb3QgPT0gbnVsbCkgcmV0dXJuIHJvb3Q7XHJcblxyXG4gIGlmIChkYXRhIDwgcm9vdC5kYXRhKSByb290LmxlZnQgPSBkZWxldGVSZWMocm9vdC5sZWZ0LCBkYXRhKTtcclxuICBlbHNlIGlmIChkYXRhID4gcm9vdC5kYXRhKSByb290LnJpZ2h0ID0gZGVsZXRlUmVjKHJvb3QucmlnaHQsIGRhdGEpO1xyXG4gIGVsc2Uge1xyXG4gICAgaWYgKHJvb3QubGVmdCA9PSBudWxsKSByZXR1cm4gcm9vdC5yaWdodDtcclxuICAgIGVsc2UgaWYgKHJvb3QucmlnaHQgPT0gbnVsbCkgcmV0dXJuIHJvb3QubGVmdDtcclxuXHJcbiAgICByb290LmRhdGEgPSBtaW5WYWx1ZShyb290LnJpZ2h0KTtcclxuICAgIHJvb3QucmlnaHQgPSBkZWxldGVSZWMocm9vdC5yaWdodCwgcm9vdC5kYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5WYWx1ZShyb290KSB7XHJcbiAgbGV0IG1pbnYgPSByb290LmRhdGE7XHJcbiAgd2hpbGUgKHJvb3QubGVmdCAhPSBudWxsKSB7XHJcbiAgICBtaW52ID0gcm9vdC5sZWZ0LmRhdGE7XHJcbiAgICByb290ID0gcm9vdC5sZWZ0O1xyXG4gIH1cclxuICByZXR1cm4gbWludjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlS2V5O1xyXG4iLCJpbXBvcnQgY2FsbF9oZWlnaHQgZnJvbSBcIi4vaGVpZ2h0XCI7XHJcblxyXG5mdW5jdGlvbiBjYWxsX2RlcHRoKHJvb3QsIG5vZGUpIHtcclxuICBsZXQgdHJlZV9oZWlnaHQgPSBjYWxsX2hlaWdodChyb290KTtcclxuICBsZXQgbm9kZV9oZWlnaHQgPSBjYWxsX2hlaWdodChub2RlKTtcclxuICBsZXQgbm9kZV9kZXB0aCA9IHRyZWVfaGVpZ2h0IC0gbm9kZV9oZWlnaHQ7XHJcblxyXG4gIHJldHVybiBub2RlX2RlcHRoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxsX2RlcHRoO1xyXG4iLCJmdW5jdGlvbiBjYWxsX2lub3JkZXIocm9vdCwgZm4pIHtcclxuICBsZXQgaW5vcmRlckFycmF5ID0gW107XHJcbiAgaW5vcmRlcihyb290LCBmbik7XHJcblxyXG4gIGZ1bmN0aW9uIGlub3JkZXIocm9vdCwgZm4pIHtcclxuICAgIGlmIChyb290ICE9IG51bGwpIHtcclxuICAgICAgaW5vcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBpbm9yZGVyQXJyYXkucHVzaChyb290LmRhdGEpO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBmbihyb290LmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlub3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm4gaW5vcmRlckFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbF9wcmVvcmRlcihyb290LCBmbikge1xyXG4gIGxldCBwcmVvcmRlckFycmF5ID0gW107XHJcbiAgcHJlb3JkZXIocm9vdCwgZm4pO1xyXG5cclxuICBmdW5jdGlvbiBwcmVvcmRlcihyb290LCBmbikge1xyXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xyXG4gICAgICBwcmVvcmRlckFycmF5LnB1c2gocm9vdC5kYXRhKTtcclxuICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgZm4ocm9vdC5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBwcmVvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBwcmVvcmRlcihyb290LnJpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCFmbikge1xyXG4gICAgcmV0dXJuIHByZW9yZGVyQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxsX3Bvc3RvcmRlcihyb290LCBmbikge1xyXG4gIGxldCBwb3N0b3JkZXJBcnJheSA9IFtdO1xyXG4gIHBvc3RvcmRlcihyb290LCBmbik7XHJcblxyXG4gIGZ1bmN0aW9uIHBvc3RvcmRlcihyb290LCBmbikge1xyXG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xyXG4gICAgICBwb3N0b3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgcG9zdG9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICBwb3N0b3JkZXJBcnJheS5wdXNoKHJvb3QuZGF0YSk7XHJcbiAgICAgIGlmIChmbikge1xyXG4gICAgICAgIGZuKHJvb3QuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCFmbikge1xyXG4gICAgcmV0dXJuIHBvc3RvcmRlckFycmF5O1xyXG4gIH1cclxufVxyXG5leHBvcnQgeyBjYWxsX2lub3JkZXIsIGNhbGxfcHJlb3JkZXIsIGNhbGxfcG9zdG9yZGVyIH07XHJcbiIsImZ1bmN0aW9uIGZpbmQocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwgfHwgcm9vdC5kYXRhID09IGRhdGEpIHtcclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHtcclxuICAgIHJldHVybiBmaW5kKHJvb3QubGVmdCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmluZChyb290LnJpZ2h0LCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmluZDtcclxuIiwiZnVuY3Rpb24gY2FsbF9oZWlnaHQobm9kZSkge1xyXG4gIGlmIChub2RlID09IG51bGwpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgbGV0IGxlZnRfaGVpZ2h0ID0gY2FsbF9oZWlnaHQobm9kZS5sZWZ0KSArIDE7XHJcbiAgbGV0IHJpZ2h0X2hlaWdodCA9IGNhbGxfaGVpZ2h0KG5vZGUucmlnaHQpICsgMTtcclxuXHJcbiAgcmV0dXJuIE1hdGgubWF4KGxlZnRfaGVpZ2h0LCByaWdodF9oZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxsX2hlaWdodDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxuZnVuY3Rpb24gaW5zZXJ0KHJvb3QsIGRhdGEpIHtcclxuICByb290ID0gaW5zZXJ0UmVjKHJvb3QsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwgZGF0YSkge1xyXG4gIGlmIChyb290ID09IG51bGwpIHtcclxuICAgIHJvb3QgPSBuZXcgTm9kZShkYXRhKTtcclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEgPCByb290LmRhdGEpIHtcclxuICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGRhdGEpO1xyXG4gIH0gZWxzZSBpZiAoZGF0YSA+IHJvb3QuZGF0YSkge1xyXG4gICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnNlcnQ7XHJcbiIsImZ1bmN0aW9uIGxldmVsT3JkZXIocm9vdCwgZm4pIHtcclxuICBpZiAocm9vdCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGxldmVsQXJyYXkgPSBbXTtcclxuICBjb25zdCBxdWV1ZSA9IFtdO1xyXG4gIHF1ZXVlLnB1c2gocm9vdCk7XHJcblxyXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcclxuICAgIGxldCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKTtcclxuICAgIGxldmVsQXJyYXkucHVzaChjdXJyZW50KTtcclxuICAgIGlmIChmbikge1xyXG4gICAgICBmbihjdXJyZW50KTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50LmxlZnQgIT0gbnVsbCkgcXVldWUucHVzaChjdXJyZW50LmxlZnQpO1xyXG4gICAgaWYgKGN1cnJlbnQucmlnaHQgIT0gbnVsbCkgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcclxuICB9XHJcblxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybiBsZXZlbEFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGV2ZWxPcmRlcjtcclxuIiwiZnVuY3Rpb24gbWVyZ2Vfc29ydChhcnJheSkge1xyXG4gIGlmIChhcnJheS5sZW5ndGggPCAyKSB7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBsZXQgbGVmdF9oYWxmID0gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgbGV0IHJpZ2h0X2hhbGYgPSBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLyAyKTtcclxuICBsZWZ0X2hhbGYgPSBtZXJnZV9zb3J0KGxlZnRfaGFsZik7XHJcbiAgcmlnaHRfaGFsZiA9IG1lcmdlX3NvcnQocmlnaHRfaGFsZik7XHJcblxyXG4gIHJldHVybiBtZXJnZShsZWZ0X2hhbGYsIHJpZ2h0X2hhbGYpO1xyXG59XHJcblxyXG4vLyBtZXJnZSB3aGVuIGxlZnQgcGFydCBhbmQgcmlnaHQgcGFydCBhcmUgYm90aCBzb3J0ZWQgYWxyZWFkeVxyXG5mdW5jdGlvbiBtZXJnZShsZWZ0X3BhcnQsIHJpZ2h0X3BhcnQpIHtcclxuICBsZXQgbWVyZ2VkX2xpc3QgPSBbXTtcclxuICBsZXQgaSA9IDA7XHJcbiAgbGV0IGogPSAwO1xyXG4gIHdoaWxlIChpIDwgbGVmdF9wYXJ0Lmxlbmd0aCAmJiBqIDwgcmlnaHRfcGFydC5sZW5ndGgpIHtcclxuICAgIGlmIChsZWZ0X3BhcnRbaV0gPCByaWdodF9wYXJ0W2pdKSB7XHJcbiAgICAgIG1lcmdlZF9saXN0LnB1c2gobGVmdF9wYXJ0W2ldKTtcclxuICAgICAgaSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVyZ2VkX2xpc3QucHVzaChyaWdodF9wYXJ0W2pdKTtcclxuICAgICAgaisrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKDsgaSA8IGxlZnRfcGFydC5sZW5ndGg7IGkrKykge1xyXG4gICAgbWVyZ2VkX2xpc3QucHVzaChsZWZ0X3BhcnRbaV0pO1xyXG4gIH1cclxuICBmb3IgKDsgaiA8IHJpZ2h0X3BhcnQubGVuZ3RoOyBqKyspIHtcclxuICAgIG1lcmdlZF9saXN0LnB1c2gocmlnaHRfcGFydFtqXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2VkX2xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlX3NvcnQ7XHJcbiIsImNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xyXG4iLCJmdW5jdGlvbiBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XHJcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmV0dHlQcmludDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxuY2xhc3MgVHJlZSB7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFRyZWUoZGF0YUFycmF5LCBzdGFydCwgZW5kKSB7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XHJcbiAgbGV0IG5vZGUgPSBuZXcgTm9kZShkYXRhQXJyYXlbbWlkXSk7XHJcblxyXG4gIG5vZGUubGVmdCA9IGJ1aWxkVHJlZShkYXRhQXJyYXksIHN0YXJ0LCBtaWQgLSAxKTtcclxuICBub2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGRhdGFBcnJheSwgbWlkICsgMSwgZW5kKTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XHJcbmV4cG9ydCB7IGJ1aWxkVHJlZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUcmVlIGZyb20gXCIuL3RyZWVcIjtcclxuaW1wb3J0IG1lcmdlX3NvcnQgZnJvbSBcIi4vbWVyZ2Vfc29ydFwiO1xyXG5pbXBvcnQgcHJldHR5UHJpbnQgZnJvbSBcIi4vcHJldHR5X3ByaW50XCI7XHJcbmltcG9ydCBpbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XHJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcclxuaW1wb3J0IGRlbGV0ZUtleSBmcm9tIFwiLi9kZWxldGVcIjtcclxuaW1wb3J0IGZpbmQgZnJvbSBcIi4vZmluZFwiO1xyXG5pbXBvcnQgbGV2ZWxPcmRlciBmcm9tIFwiLi9sZXZlbF9vcmRlclwiO1xyXG5pbXBvcnQgeyBjYWxsX2lub3JkZXIsIGNhbGxfcG9zdG9yZGVyLCBjYWxsX3ByZW9yZGVyIH0gZnJvbSBcIi4vZGVwdGhfZmlyc3RcIjtcclxuaW1wb3J0IGNhbGxfaGVpZ2h0IGZyb20gXCIuL2hlaWdodFwiO1xyXG5pbXBvcnQgY2FsbF9kZXB0aCBmcm9tIFwiLi9kZXB0aFwiO1xyXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XHJcblxyXG5sZXQgdGVzdEFycmF5ID0gWzEsIDcsIDcsIDIzLCA0LCAyMywgOCwgOSwgNSwgNjcsIDY3LCA2MzQ1LCAzMjRdO1xyXG50ZXN0QXJyYXkgPSBtZXJnZV9zb3J0KHRlc3RBcnJheSk7XHJcbnRlc3RBcnJheSA9IFsuLi5uZXcgU2V0KHRlc3RBcnJheSldO1xyXG5jb25zb2xlLmxvZyh0ZXN0QXJyYXkpO1xyXG5cclxubGV0IHRlc3RUcmVlID0gbmV3IFRyZWUodGVzdEFycmF5KTtcclxudGVzdFRyZWUucm9vdCA9IGJ1aWxkVHJlZSh0ZXN0QXJyYXksIDAsIHRlc3RBcnJheS5sZW5ndGggLSAxKTtcclxucHJldHR5UHJpbnQodGVzdFRyZWUucm9vdCk7XHJcbmNvbnNvbGUubG9nKGNhbGxfaGVpZ2h0KHRlc3RUcmVlLnJvb3QpLCBcInRyZWUncyBoZWlnaHRcIik7XHJcbmNvbnNvbGUubG9nKGNhbGxfZGVwdGgodGVzdFRyZWUucm9vdCwgdGVzdFRyZWUucm9vdC5sZWZ0KSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==