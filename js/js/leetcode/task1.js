let arr = [9, 9, 9],
  carry = 0,
  val = 0,
  num = 5;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i === arr.length - 1) {
    val = arr[i] + num;
  } else if (carry > 0) {
    val = arr[i] + carry;
  } else {
    val = arr[i];
  }
  if (val <= 9 && carry === 0) {
    arr[i] = val;
    break;
  } else if (val > 9 && carry === 0) {
    carry = parseInt(val / 10);
    arr[i] = val % 10;
  } else if (val > 9 && carry !== 0) {
    carry = parseInt(val / 10);
    arr[i] = val % 10;
  } else if (val <= 9 && carry !== 0) {
    carry = parseInt(val / 10);
    arr[i] = val % 10;
  } else {
    carry = 0;
  }
}
if (carry !== 0) {
  arr.unshift(carry);
}

console.log(arr);
