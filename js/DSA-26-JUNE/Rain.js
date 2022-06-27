let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let len = arr.length;
let left = [],
  right = [];
right.length = arr.length;
left.push(arr[0]);
right[right.length - 1] = arr[arr.length - 1];
for (let i = 1, k = arr.length - 2; i < arr.length && k >= 0; i++, k--) {
  if (left[i - 1] < arr[i]) {
    left[i] = arr[i];
  } else {
    left[i] = left[i - 1];
  }
  if (arr[k] > right[k + 1]) {
    right[k] = arr[k];
  } else {
    right[k] = right[k + 1];
  }
}
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans = ans + (Math.min(left[i], right[i]) - arr[i]);
}
console.log("left", left);
console.log("right", right);
console.log("ans", ans);
