const arr = [0, 5, 0, 0, 5, 6, 0, 2, 7, 0];
const sort = (arr) => {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      length = length - 1;
      i--;
    }
  }
  return arr;
};

console.log(sort(arr));
