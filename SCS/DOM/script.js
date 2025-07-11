let abcd = document.querySelector("h1"); // Selects the first element provided as an Argument
// let abcdAll = document.querySelectorAll("h1"); // Selects all the element provided as an Argument
// console.log(abcd); // Logs only the element
// console.dir(abcd); // Logs in console in an object format with different properties

// InnerHTML, InnerText and TextContent
// abcd.textContent = 'Hi Test, How are you?'

// In InnerHTML Method, we can have the HTML elements in the DOM Manipulation
// abcd.innerHTML = "<i>Hello</i>";
// console.dir(abcd);

// Attribute Manipulation
let a = document.querySelector("a");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let img = document.querySelector("img");
// console.log(a);
// a.href = "https://google.com";
// setAttribute and getAttribute
a.setAttribute("href", "https://google.com");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/22800064/pexels-photo-22800064.jpeg?_gl=1*usn6cr*_ga*MTIwMTM2NTczNi4xNzIyNTI0MTM4*_ga_8JE65Q40S6*czE3NTIyMjcyNTEkbzc1JGcxJHQxNzUyMjI3MjY5JGo0MiRsMCRoMA.."
);
console.log(a2.getAttribute("href"));
a3.removeAttribute("href");
