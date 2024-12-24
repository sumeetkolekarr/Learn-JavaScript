// Q1
const obj = {
  harry: 98,
  bunny: 100,
  lucky: 40,
};

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(
//     "Marks of",
//     Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]
//   );
// }

// Q2
// for (const key in obj) {
//   console.log("Marks of", key, "is", obj[key]);
// }

// Q3
// let correct_num = 5;
// while (correct_num != 5) {
//   console.log("Try again!");
// }
// console.log("You have entered a correct Number");

// Q4
const avg = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(avg(5, 10, 15, 20, 25));
