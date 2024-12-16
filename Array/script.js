//Getting started with array
let marks = [51, 82, 33, 64, 58, null, false, "Not Present"];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[10]); // Undefined as the 10th index does not exist

// marks[6] = 98;
// marks[7] = 55;
// console.log(marks);
// console.log(typeof marks);
// console.log(marks.length);

//  Quick Quiz
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

//Array Methods

//Converts array to String
// console.log(marks.toString())

//Joins all the array elements using a seperator
// console.log(marks.join('-'))
// console.log(typeof marks.join('-'));

// Removes last element in an array and changes the main array
// let popped = marks.pop()
// console.log(marks, popped);

// Returns the new element at the end of array and changes the main array
// let pushed = marks.push(26);
// console.log(marks, pushed);

// Removes first element and returns it, also changes the main array
// let shifted = marks.shift();
// console.log(marks, shifted);

// Adds new element to the beginning, also changes the main array
// let unshifted = marks.unshift(25);
// console.log(marks, unshifted);

// Deletes the value not the index
// console.log(marks.length);
// delete marks[0];
// console.log(marks.length);
// console.log(marks);

// Joins arrays to the given array and does not change the main array
// let newMarks = [54, 87, 95, 63];
// console.log(marks.concat(newMarks))
// console.log(marks);
// console.log(newMarks);

// Sorts an array alphabetically and chan
// ges the main array
// console.log(marks);
// marks.sort()
// console.log(marks);

let numArr = [4, 52, 74, 1, 23, 45];
// numArr.sort((a, b) => a - b);
// console.log(numArr);

// Reverses the Array and changes the original array
// numArr.reverse();
// console.log(numArr);

// Used to add new items to an array
// numArr.splice(2, 4, 78, 99, 100, 56, 74, 5, 2);
// console.log(numArr);
// console.log(typeof numArr);

// Slices out a piece from an array
// let newNumArr = numArr.slice(3,5)
// console.log(newNumArr);

// Loops in array
// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
// }

// ForEach Loop
// numArr.forEach((element)=>{
//     console.log(element+element);
// })

// Array From
// let catName = 'Bunny'
// let arr = Array.from(catName)
// console.log(arr);

// For of 
// for (const i of numArr) {
//     console.log(i);
// }

// For In 
// for (const key in numArr) {
//     console.log(numArr[key]);
// }