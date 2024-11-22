// const obj = {
//   a: 42,
//   b: "hello",
//   c: 100,
//   d: true,
//   e: 42,
// };
// const arr = [42, 56, 100];
// let newArr = new Set();

// for (const key in obj) {
//   for (const element of arr) {
//     if (element == obj[key]) {
//       newArr.add(element);
//     }
//   }
// }

// console.log(newArr);

// Optimized Code 
const obj = {
  a: 42,
  b: "hello",
  c: 100,
  d: true,
  e: 42,
};
const arr = [42, 56, 100];
const arrSet = new Set(arr); 
let newArr = [];

for (const key in obj) {
  if (arrSet.has(obj[key])) {
    newArr.push(obj[key]);
  }
}

console.log(newArr);