// Q1
// let age = prompt('Enter your age...')
// age = parseInt(age)
// if(age>18){
//     alert('You can Drive...')
// } else {
//     alert('You can not Drive...')
// }

// Q2
// do {
//   a = confirm("Do you want to enter your age?");
//   if (!a) {
//     break;
//   }
//   let age = prompt("Enter your age...");
//   age = parseInt(age);
//   if (age > 18) {
//     alert("You can Drive...");
//   } else {
//     alert("You can not Drive...");
//   }
// } while (a);

// Q3
// do {
//   a = confirm("Do you want to enter your age?");
//   if (!a) {
//     break;
//   }
//   let age = prompt("Enter your age...");
//   age = parseInt(age);
//   if (age > 18) {
//     alert("You can Drive...");
//   } else if (age < 0) {
//     console.error("You entered Invalid age...");
//   } else {
//     alert("You can not Drive...");
//   }
// } while (a);

// Q4
// let num = prompt("Enter a number...");
// num = parseInt(num);
// num > 4 ? location.href = "https://google.com" : location.href = "";

// Q5
// let ans = confirm("Do you like light theme?");
// if (ans) {
//   document.body.style.background = "white";
// } else {
//   document.body.style.background = "black";
// }

// Alternate Solution of Q5
let ans = prompt("Enter the color...");
document.body.style.background = ans;
