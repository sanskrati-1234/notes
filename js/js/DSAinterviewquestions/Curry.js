function sum(a, b, c) {
  return a + b + c;
}
function multple(a, b, c) {
  return a * b * c;
}
function curry(sum) {
  return function _curried(...arg) {
    if (arg.length === sum.length) {
      return sum(...arg);
    }
    return function (...next) {
      return _curried(...arg, ...next);
    };
  };
}
//const curriedSum = curry(sum);
const curriedMul = curry(multple);
console.log(curriedSum(1)(2));
//console.log(curriedMul(1, 2, 3));

function sum(a, b, c) {
  return a + b + c;
}

function mul(...args) {
  console.log("MUL", args);
}
function curry(sum) {
  return function _curried(...arg) {
    return function (...next) {
      if (next.length !== 0) return _curried(...arg, ...next);
      return sum(...arg);
    };
  };
}

const curriedSum = curry(mul);
console.log(curriedSum(1)(2)(3)(4)());
