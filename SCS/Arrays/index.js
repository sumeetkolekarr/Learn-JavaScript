// let arr = new Array() // A way to create array

// let marks = [12,15,16,18,21]
// console.log(marks[0]);
// marks[0] = 13
// console.log(marks[0]);

// Array Method
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.push(6);
// arr.push(7);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// arr.splice(2, 1) // (Index, Number of values to be removed)
// let newArr = arr.slice(0, 4); // Same as Splice but does not changes the main array
// let revRev = arr.reverse();
// let sr = arr.sort(function(a,b){
//     return a-b
// })
// console.log(sr);

// arr.forEach(function(val){
//     console.log(val+5);
// })

// Map Provides a New Array from the old Array
// let mapArr = arr.map(function(val){
//     if (val>3) return val
// })
// console.log(mapArr);

// Filter Provides a New Array which filters some value from old array
// let filArr = arr.filter(function(val){
//     if (val>3) return val
// })
// console.log(filArr);

// Reduce helps provide a single value from array
// let ans = arr.reduce(function(acc, val){
//     return acc + val
// }, 0)
// console.log(ans);

// Find method accepts a function and returns the first occurrence in an object
// let obj = [
//   { id: 1, key: 1 },
//   { id: 2, key: 2 },
//   { id: 3, key: 1 },
// ];

// let vafi = obj.find(function (val) {
//   return val.key === 1;
// });

// let va = arr.every(function (val) {
//   return val<1;
// });
// console.log(va);

// Destructuring
// let arr = [1, 2, 3, 4, 5];
// let [a, b, , d] = arr;
// console.log(a, b, d);

// Spread Operator
// console.log(...arr);

// Q. Insert 'Red' and 'Blue' at index 1 in this array
let colors = ['Green', 'Yellow']
colors.splice(1,0,'Red','Blue')