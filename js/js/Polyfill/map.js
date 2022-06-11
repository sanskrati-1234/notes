let arr = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure",
];

Array.prototype.myMap = (fun) => {
  const a1 = [];
  for (let i = 0; i < this.length; i++) {
    a1.push(fun(this[i], i, this));
  }
  return a1;
};

const fun = arr.map((args) => {
  return args;
});
console.log(fun);
