function XO(str) {
  let xcount = 0,
    ocount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      xcount++;
    } else if (str[i] === "o" || str[i] === "O") {
      ocount++;
    }
  }
  return xcount === ocount;
}

console.log(XO("xxoo"));
