let s1 = "hello";
let s2 = "heloo";

let count = 0;
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      count++;
      str1 = str1.slice(i--, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram(s1, s2));
