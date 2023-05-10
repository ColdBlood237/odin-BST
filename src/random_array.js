import merge_sort from "./merge_sort";

function random_array() {
  let random_length = Math.floor(Math.random() * 10);
  let array = [];

  for (let i = 0; i < random_length; i++) {
    let random_value = Math.floor(Math.random() * 1000);
    if (!array.includes(random_value)) {
      array.push(random_value);
    }
  }

  array = merge_sort(array);
  return array;
}

export default random_array;
