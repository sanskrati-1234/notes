const arr = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11];
let smal = Infinity,
  large = 0;
for (let i = 0; i < arr.length - 1; i++) {
  if (i == 0) {
    if (arr[i] > arr[i + 1]) {
      large = arr[i];
      smal = arr[i];
    }
  } else if (arr[i - 1] > arr[i] || arr[i] > arr[i + 1]) {
    if (smal > arr[i]) {
      smal = arr[i];
      console.log("small", smal);
    }
    if (large < arr[i]) {
      large = arr[i];
    }
  }
}
let left, right;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > small) {
    left = arr[i];
    break;
  }
}
for (let k = arr.length - 1; k >= 0; k--) {
  if (arr[k] < large) {
    right = arr[k];
    break;
  }
}
console.log("s", smal);
console.log("l", large);
