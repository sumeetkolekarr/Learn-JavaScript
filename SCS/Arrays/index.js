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
// let colors = ['Green', 'Yellow']
// colors.splice(1,0,'Red','Blue')

// Q. Use .map() to square each number:
// let arr = [1,2,3,4]
// let newArr = arr.map(function(val){
//     return val*val
// })
// console.log(newArr);

// Q. Use .filter() to keep numbers greater than 10:
// let arr = [10, 12, 3, 4];
// let filArr = arr.filter((val) => {
//   return val > 10;
// });
// console.log(filArr);

// Q. Use .reduce() to find the sum of Array:
// let arr = [10, 12, 3, 4];
// let sum = arr.reduce(function(acc,val){
//     return acc+val
// }, 0)
// console.log(sum);

// Q. Use .find() to find the first number less than 10:
// let arr = [10, 12, 3, 4];
// let arrFin = arr.find(function (val) {
//   return val < 10;
// });
// console.log(arrFin);

// Q. Use .some() to check if any student has scored below 35:
// let arr = [45,60,15,38]
// let ans = arr.some(function(val){
//     return val<35
// })
// console.log(ans);

// Q. Use .every() to check if all numbers are even:
// let arr = [2,4,6,8,10]
// let ans = arr.every(function(val){
//     return val%2==0
// })
// console.log(ans);

// Q. Destructure to get First Name and Last Name
// let fullname = ['Sumeet', 'Kolekarr']
// let [firstName, lastName] = fullname
// console.log(firstName, lastName);

// Q. Merge 2 arrays using spread operator:
// let a = [1,2]
// let b = [3,4]
// let c = [...a, ...b]
// console.log(c);

// Q. Add 'India' to the first in the array using spread operator
// let countries = ['US', 'UK']
// countries = ['INDIA', ...countries]
// console.log(countries);

// Q. Clone the array and not by reference
// arr = [1, 2, 3];
// arr2 = [...arr];
