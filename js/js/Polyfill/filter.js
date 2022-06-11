Array.prototype.myFilter = function (cb) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      //console.log(arr);
      arr.push(this[i]);
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6];

const arr1 = arr.myFilter(function (item) {
  return item <= 5;
});

console.log(arr1);
