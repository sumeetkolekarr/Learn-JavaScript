// Data Types

// Primitives
// Primitive values are immutable and stored by value. When you assign a primitive to a variable, you are copying the actual value.
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Reference
// Reference types are mutable and stored by reference. When you assign a reference value to a variable, you are copying the reference (memory address), not the actual object.
// Object, Array, Function

// Null Represents an intentional absence of any object value. It’s manually assigned to indicate “no value” or “empty”.Often used as a placeholder for future object assignment.
// Undefined Represents a variable that has been declared but not assigned a value. Also returned by functions that don’t explicitly return anything. Default value for uninitialized variables and missing function parameters.
// Symbols are Unique Immutable Values
// BigInt is used to store large integers

// Dynamic Typing
// You don’t need to declare a variable’s type, and A variable can hold values of different types at different times.

// typeOf
console.log(typeof NaN)
console.log(typeof null)
console.log(typeof Nan === 'number')

// Type Coercion 
// Type coercion is JavaScript's way of converting one data type to another automatically when performing operations with mixed types
console.log('5' - 1)
console.log('5' + 1)
console.log(5 + '1')
console.log(5 * '2')


// 0, false, "", null, undefined, NaN, document.all are all falsy values, rest all true