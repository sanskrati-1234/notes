let arr = [0, -1, 2, -3, 1];
let left = 0,
  right = arr.length - 1,
  count = 1,
  first = 0,
  second = 0,
  third = 0;
let sum = 0;
const sorted1 = arr.sort();
console.log(sorted1);
for (let j = 0; j < sorted1.length; j++) {
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[left] + sorted1[right] > sum && left !== right) {
      first = sorted1[left];
      second = sorted1[right];
      left++;
      if (left <= sorted1.length - 1) third = sorted1[left];
      count++;
    } else if (sorted1[left] + sorted1[right] < sum) {
      first = sorted1[left];
      second = sorted1[right];
      right--;
      if (right >= 0) third = sorted1[right];

      count++;
    }

    if (count === 3) {
      console.log(`(${first},${second},${third} )`);
      count = 1;
    }
  }
}
