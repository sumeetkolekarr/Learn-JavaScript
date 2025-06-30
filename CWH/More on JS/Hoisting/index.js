console.log(a);
console.log(b);
// console.log(c); // Will throw an error as Cannot access 'c' before initialization
// fx(); // Will throw an error
greet()

function greet() {
    console.log('Good Morning!');
}

var a;
var b = 5; // Declarations hoisted to the top but initialization is not
// With let and var, hoisting is different
let c = 9;
console.log(b);
console.log(c);

// Function Ex and Class Ex are not hoisted
var fx = function() {
    console.log('Hello');
} 

fx();