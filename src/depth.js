import call_height from "./height";

function call_depth(root, node) {
  let tree_height = call_height(root);
  let node_height = call_height(node);
  let node_depth = tree_height - node_height;

  return node_depth;
}

export default call_depth;
