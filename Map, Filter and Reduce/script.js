let arr = [5, 2, 8, 6, 4];

// Map Method
// Map makes new array and original array is not changed and foreach does not
// let a = arr.map((element, index, array) => {
//   console.log(element, index, array);
//   return index + element;
// });

// Array Filter Method
// Creates a new array and original array is not changed and filters according to the condition provided
// let a = arr.filter((element)=>{
//     return element<6
// })
// console.log(a);

// Array Reduce Method
// Reduces an array to a single value without changing the original array
const reduceFunc = (h1, h2) => {
  return h1 + h2;
};
let ans = arr.reduce(reduceFunc);
console.log(ans);
