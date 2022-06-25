// const getData = () => {
//   console.log("getData");
// };

// const implementDebounce = (fn, d) => {
//   let timer;
//   return function () {
//     const context = this;
//     const args = arguments;
//     //clearInterval(timer);
//     timer = setTimeout(() => {
//       getData.apply(context, args);
//     }, d);
//   };
// };
// const deFunction = implementDebounce(getData, 500);
let body = document.getElementsByTagName("body");
let pa = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  let el = document.createElement("div");
  el.innerText = "div" + i;
  pa.append(el);
}
body[0].append(pa);
