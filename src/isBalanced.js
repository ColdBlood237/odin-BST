import call_height from "./height";

function isBalanced(root) {
  if (root == null) {
    return true;
  }

  let left_height = call_height(root.left);
  let right_height = call_height(root.right);
  let difference = Math.abs(left_height - right_height);

  let is_balanced = true;

  if (difference > 1) {
    is_balanced = false;
  }

  is_balanced = is_balanced && isBalanced(root.left);
  is_balanced = is_balanced && isBalanced(root.right);

  return is_balanced;
}

export default isBalanced;
