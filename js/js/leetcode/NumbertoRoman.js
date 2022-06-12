let num = 123;

const roman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let ans = "";
for (let i = 0; num > 0; ++i) {
  while (num >= values[i]) {
    num = num - values[i];
    ans = ans + roman[i];
  }
}

console.log(ans);
