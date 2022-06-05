const promiseAll = (promises) => {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          result[index] = val;
          count = count + 1;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const p1 = new Promise((resolve, reject) => resolve("resolve1"));
const p2 = new Promise((resolve, reject) => resolve("resolve2"));
console.log(promiseAll([p1, p2]));
