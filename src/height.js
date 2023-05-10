function call_height(node) {
  if (node == null) {
    return 0;
  }

  let left_height = call_height(node.left) + 1;
  let right_height = call_height(node.right) + 1;

  return Math.max(left_height, right_height);
}

export default call_height;
