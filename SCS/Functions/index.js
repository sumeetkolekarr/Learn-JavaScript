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

// Hoisting in Functions // Normal Functions are hoisted but Functional Expressions are not
// Hi();
// function Hi() {
//   console.log("Hello");
// }

// What Does ... operator mean in parameters?
// function abcd(a,b,...val){
//   console.log(a,b,val);
// }
// abcd(1,2,3,4,5,6)

// Use Rest Parameter to accept any number of scores and return the total
// function getScore(...scores){
//   console.log(scores.reduce((a,b)=>a+b,0));
// }
// getScore(10,1,2,5)

// A function which returns nothing, its value is undefined

// Convert the Given Function into a pure Function
// let total = 0;
// function addToTotal(num){
//   total += num
// }
// let total = 0;
// function addToTotal(num){
//   let newtotal = total
//   newtotal += num
// }

// What is the use of IIFE? Name one real-world use case
// let sk = function () {
//   let score = 0;
//   return {
//     getScore: function () {
//       console.log(score);
//     },
//     setScore: function (val) {
//       score = val;
//     },
//   };
// }();
// sk.getScore()
// sk.setScore(20)
// sk.getScore()

// What will be the output here and why?
// greet()
// var greet = function (){
//   console.log('Hi!');
// }

// Write a BMI Calculator
// function bmi (wt,ht){
//   return wt/(ht**2)
// }
// console.log(bmi(64, 1.5).toFixed(2));

// Create a HOF for Discount Calculator
// function discCal(disc) {
//   return function(price){
//     return price - price * (disc/100)
//   }
// }
// let disc = discCal(10)
// console.log(disc(200));

// Build a Counter using Closure
// function Counter() {
//   let i = 0;
//   return function () {
//     i++;
//     return i;
//   };
// }
// let c = Counter();
// console.log(c());
// console.log(c());
// console.log(c());
// let d = Counter();
// console.log(d());
// console.log(c());

// Create a pure function to transform a value
// function double(val) {
//   return val*2
// }
// console.log(double(5));

// Create an IIFE to isolate variables
// (function () {
//   const password = "secPass";
//   console.log(password);
// })();
// console.log(password);
