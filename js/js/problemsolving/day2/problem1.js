// String reverse with reversing of individual words
const reverseString = (str) => {
  const arr = str.split(" ");
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output = output + arr[i].split("").reverse().join("") + " ";
  }
  return output;
};

console.log(reverseString("My nam4e is sanskrati"));
