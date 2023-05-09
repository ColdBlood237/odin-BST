import Tree from "./tree";
import merge_sort from "./merge_sort";
import prettyPrint from "./pretty_print";
import insert from "./insert";
import { buildTree } from "./tree";
import deleteKey from "./delete";

let testArray = [1, 7, 7, 23, 4, 23, 8, 9, 3, 5, 67, 67, 6345, 324];
testArray = merge_sort(testArray);
testArray = [...new Set(testArray)];
console.log(testArray);

let testTree = new Tree(testArray);
testTree.root = buildTree(testArray, 0, testArray.length - 1);
prettyPrint(testTree.root);

deleteKey(testTree.root, 9);

prettyPrint(testTree.root);
