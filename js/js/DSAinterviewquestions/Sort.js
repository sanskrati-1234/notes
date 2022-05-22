function sort012(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0 && i != 0) {
      arr.splice(i, 1);
      arr.unshift(0);
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] === 2 && i != n - 1) {
      arr.splice(i, 1);

      arr.push(2);
      //i--;
    }
  }

  return arr;
}

console.log(sort012([2, 1, 0], 12));
