const getData = () => {
  console.log("getData");
};

const implementDebounce = (fn, d) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    //clearInterval(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};
const deFunction = implementDebounce(getData, 500);
