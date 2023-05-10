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
import isBalanced from "./isBalanced";
import rebalance from "./rebalance";

let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 5, 67, 67, 6345, 324];

testArray = merge_sort(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new Tree(testArray);
testTree.root = buildTree(testArray, 0, testArray.length - 1);

deleteKey(testTree.root, 1);
// deleteKey(testTree.root, 7);
//deleteKey(testTree.root, 5);

prettyPrint(testTree.root);

console.log("balanced :", isBalanced(testTree.root));
console.log(call_inorder(testTree.root));

testTree.root = rebalance(testTree.root);
prettyPrint(testTree.root);
console.log("new tree balanced: ", isBalanced(testTree.root));
