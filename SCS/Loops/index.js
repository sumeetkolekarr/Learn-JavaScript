// Looping is repeating a sequence or order
// For Loop
// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// While Loop
// let i = 1;
// while (i < 33) {
//   console.log(i);
//   i++;
// }

// Do-While Loop
// i = 12
// do {
//     console.log(i);
//     i++
// } while (i<2)

// continue and break keyword
// for (let i = 1; i < 101; i++) {
//   if (i == 12) break;
//   if (i == 10) continue;
//   console.log(i);
// }

// Q1. Print Numbers from 1 to 10 using a for loop
// for (let index = 0; index < 11; index++) {
//   console.log(index);
// }

// Q2. Print Numbers from 10 to 1 using a while loop
// let i = 10
// while(i>0){
//     console.log(i);
//     i--
// }

// Q3. Print even numbers from 1 to 20 using a for loop
// for(i=0;i<21;i++){
//     if (!(i%2)) console.log(i);
// }

// Q4. Print odd numbers from 1 to 15 using a while loop
// let i = 1
// while(i<16){
//     if (i%2) console.log(i);
//     i++
// }

// Q5 Print the multiplication table of 5
// for(let i = 1;i<11;i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

// Q6 Find the sum of numbers from 1 to 100
// let i = 0;
// sum = 0;
// while (i < 101) {
//   sum += i;
//   i++;
// }
// console.log(sum)

// Q7 Print all the numbers between 1 to 50 which are divisible by 3
// let i = 0;
// while (i < 101) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// Q8 Take a number and print each number from 1 to that number if the number is odd or even
// let num = 6;
// for (i = 0; i <= num; i++) {
//   console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }

// Q9 Count how many numbers between 1 to 100 are divisible by both 3 and 5
// let i = 0;
// while (i < 101) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// Q10 Write a loop from 1 to 100 that prints each number and stops completely when it finds the first number divisible by 7
// let i = 1;
// while (i < 101) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
//   i++;
// }

// Q11 Print all the numbers from 1 to 20 and skip the numbers divisible by 3
// let i = 1;
// while (i < 20) {
//   i++;
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// Q12 Write a loop from 1 to 100 that prints only 5 odd numbers and then stops the loop
// let i = 0;
// let counter = 5;
// while (i < 101) {
//   i++;
//   if (i % 2 === 1) {
//     console.log(i);
//     counter--;
//   }
//   if (!counter) break;
// }

