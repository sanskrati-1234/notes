const arr = [
  [1, 2],
  [5, 10, [20, 40, [80, 160]]],
];

function flatten(arr, depth) {
  const result = [];
  Array.prototype.forEach.call(arr, (ar) => {
    if (Array.isArray(ar) && depth > 0) result.push(...flatten(ar, depth - 1));
    else result.push(ar);
  });
  return result;
}

console.log("line15", flatten(arr, 1));
console.log("line16", flatten(arr, 3));
console.log("line17", flatten(arr, 2));
