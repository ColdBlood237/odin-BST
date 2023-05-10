import Tree from "./tree";
import merge_sort from "./merge_sort";
import prettyPrint from "./pretty_print";
import insert from "./insert";
import { buildTree } from "./tree";
import deleteKey from "./delete";
import find from "./find";
import levelOrder from "./level_order";
import { call_inorder, call_postorder, call_preorder } from "./depth_first";
import call_height from "./height";
import call_depth from "./depth";
import Node from "./node";

let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 5, 67, 67, 6345, 324];
testArray = merge_sort(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new Tree(testArray);
testTree.root = buildTree(testArray, 0, testArray.length - 1);
prettyPrint(testTree.root);
console.log(call_height(testTree.root), "tree's height");
console.log(call_depth(testTree.root, testTree.root.left));
