function getExcelName(val) {
  if (val <= 26) return String.fromCharCode(val + 64);

  let remender = val % 26;
  let divisor = parseInt(val / 26);
  console.log("Line6", remender);
  console.log("Line7", divisor);
  if (remender === 0) {
    const val1 =
      divisor > 26
        ? getExcelName(divisor - 1)
        : String.fromCharCode(divisor + 64 - 1);

    return val1 + "Z";
  }

  if (remender !== 0 && divisor <= 26) {
    console.log(
      "Line16",
      String.fromCharCode(divisor + 64) +
        "" +
        String.fromCharCode(remender + 64)
    );
    return (
      String.fromCharCode(divisor + 64) +
      "" +
      String.fromCharCode(remender + 64)
    );
  }
  const r = getExcelName(divisor);

  return r + "" + String.fromCharCode(remender + 64);
}

console.log(getExcelName(26));
console.log(getExcelName(51));
console.log(getExcelName(52));
console.log(getExcelName(80));
console.log(getExcelName(676));
console.log(getExcelName(702));
console.log(getExcelName(705));
console.log(getExcelName(11856));
