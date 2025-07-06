// Function Declaration
// function dance() {
//   console.log("dance");
// }

// Function Expression
// let fnc = function () {
//   console.log("Function");
// };

// Fat Arrow Function
// let fx = () => {
//     console.log('Function');
// }

// Parameters
// function fx(v) {
//     console.log(`${v}`);
// }
// fx(3)
// fx(6)

// Default Parameters // If no default parameters provided, then default value is undefined
// function add(c1 = 0, c2 = 0) {
//   console.log(c1, c2);
// }
// add();

// Spread or rest Operator
// function ab(a, b, c, ...val) {
//   console.log(a, b, c, val);
// }
// ab(1, 2, 3, 4, 5);

// Return Keyword
// function val() {
//     return 12
// }
// let cal = val()
// console.log(cal);

// First Class Functions are the functions which can be treated as value
// function cal(val) {
//   val();
// }
// cal(function () {
//   console.log("Hi");
// });

// Higher Order Functions accepts or returns a function
// function abcd() {
//      return function(){
//         console.log('Hello');
//     }
// }
// abcd()()

// Pure vs Impure Functions
// let a = 12
// Pure Function
// function Hello() {
//     console.log('Hello');
// }
// Impure Function
// function Incre() {
//     a++
// }

// Closures are the functions which returns another function and use the variable from the parent function
// function abcd() {
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// Lexical Scoping means scope is determined by the position of variables and blocks in the code at the time of writing, not at the time of execution.
// function abcd() {
//   let a = 12;
//   function def() {
//     let b = 13;
//     function igh() {
//       let c = 13;
//     }
//   }
// }

// IIFE
// (function(){
//     console.log('Hi');
// })()

//Hoisting in Functions // Normal Functions are hoisted but Functional Expressions are not
Hi();
function Hi() {
  console.log("Hello");
}
