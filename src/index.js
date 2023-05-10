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
import random_array from "./random_array";

const test_array = random_array();

console.log(test_array);

const test_tree = new Tree(test_array);
test_tree.root = buildTree(test_array, 0, test_array.length - 1);

prettyPrint(test_tree.root);
console.log("balanced :", isBalanced(test_tree.root));

console.log("level order:", levelOrder(test_tree.root));
console.log("preorder:", call_preorder(test_tree.root));
console.log("postorder:", call_postorder(test_tree.root));
console.log("inorder", call_inorder(test_tree.root));

for (let i = 0; i < 101; i++) {
  insert(test_tree.root, Math.floor(Math.random() * 1000));
}

prettyPrint(test_tree.root);
console.log("balanced :", isBalanced(test_tree.root));

test_tree.root = rebalance(test_tree.root);
prettyPrint(test_tree.root);
console.log("balanced :", isBalanced(test_tree.root));

console.log("level order:", levelOrder(test_tree.root));
console.log("preorder:", call_preorder(test_tree.root));
console.log("postorder:", call_postorder(test_tree.root));
console.log("inorder", call_inorder(test_tree.root));
