const removeDuplicate = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
// removeDuplicate([1, 2, 1, 2, 3, 3]);
console.log(removeDuplicate([1, 2, 1, 2, 3, 3]));
