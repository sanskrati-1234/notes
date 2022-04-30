const removeDuplicate = (arr) => {
  const newArr = new Set();
  for (let i = 0; i < arr.length; i++) {
    newArr.add(arr[i]);
  }
  arr.length = 0;
  arr = Array.from(newArr);
  return arr;
};
console.log(removeDuplicate([1, 1, 2, 2]));
