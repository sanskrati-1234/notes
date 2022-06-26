let arr = [1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  if (!arr.includes(arr[i] - 1)) {
    obj[arr[i]] = 1;
    while (arr.includes(++current)) {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
}
console.log(Math.max(...Object.values(obj)));
