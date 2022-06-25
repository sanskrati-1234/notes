const str = "";
let currentMax = 1,
  max = 0,
  character;


else  
for (let i = 1; i < str.length - 1; i++) {
  if (str[i - 1] === str[i]) {
    currentMax = currentMax + 1;
  } else {
    currentMax = 1;
  }
  if (currentMax > max) {
    max = currentMax;
    character = str[i];
  }
}
console.log(character );
