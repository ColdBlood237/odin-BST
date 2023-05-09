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
export { call_inorder, call_preorder, call_postorder };
