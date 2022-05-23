const arr = [1, 2, 3, [1, 3, 5, [12]]];

// const flatten = (arr, d) => {
//   const result = [];
//   arr.map((ar) => {
//     if (Array.isArray(ar) && d > 0) {
//       return result.push(...flatten(ar, d - 1));
//     }
//     return result.push(ar);
//   });
//   return result;
// };

// const flatten1=(arr,d)=>{

//     arr.reduce((a)=>{
//         if(Array.isArray)
//     },[])
// }
console.log(flatten(arr, 1));
