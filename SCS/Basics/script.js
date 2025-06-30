//Variables

// Worst Way to Declare a Variable
// a = 10;

// Some Ways to initalize Variable

// Var is added in window and function scoped and can be redeclared
var a; //Declaration
var a = 10; //Initialization

// Let can not be redeclared but can have it's value changed multiple times or Reassigned and also is functional scoped and block scoped
let b;
b = 12;

// Let can not be redeclared but can have it's value can not be changed multiple times or Reassigned and also is functional scoped and block scoped and the value can be updated if the value is in an object
const c = 12;
// c = 12; // Can not do this 

// Temporal Dead Zone
// TDZ is in let and const
// console.log(num);
// let num = 5; //Throws an error as can't access num before initialization

// Hoisting
// When a variable is created, then its declaration part is upwards and its initialization part is at the bottom
// Var, let and Const can be hoisted and var gets undefined and let and const does not get a value

// Normally
// console.log(a);
// var a = 12

// Hoisting
// var a = undefined;
// console.log(a);
// a = 12