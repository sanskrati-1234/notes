const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.myReduce = function (cb, init) {
  let accu = init;
  for (let i = 0; i < this.length; i++) {
    accu = accu ? cb(accu, this[i], i, this) : this[i];
  }
  return accu;
};

const acc = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(acc);
