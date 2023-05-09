function call_height(node) {
  let counter = 0;
  height(node);

  function height(node) {
    if (node == null) {
      return;
    }

    counter++;
    if (node.left != null) {
      height(node.left, node);
    } else if (node.right != null) {
      height(node.right, node);
    }
  }

  return counter;
}

export default call_height;
