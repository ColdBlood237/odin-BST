import { buildTree } from "./tree";
import { call_inorder } from "./depth_first";

function rebalance(root) {
  let newArray = call_inorder(root);
  return buildTree(newArray, 0, newArray.length - 1);
}

export default rebalance;
