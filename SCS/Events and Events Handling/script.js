// Event means some Actions Happen
// EventListener means some reaction occurs when an action happens

// Selecting the Paragraph
let p = document.querySelector("p");

// Adding an event listener
// Event Listener for Single Click
// p.addEventListener('click', function(){
//     p.style.color = 'red'
//     document.body.style.backgroundColor = 'black'
// })

// Event Listener for Double Click
function doubleClk() {
  p.style.color = "yellow";
  document.body.style.backgroundColor = "black";
}

// Event Listener for Input
// let input = document.querySelector("input");
// input.addEventListener("input", function (evt) {
//   if (evt.data !== null) {
//     console.log(evt.data);
//   }
// });

// Adding and Removing Event Listeners
p.addEventListener("dblclick", doubleClk);
p.removeEventListener("dblclick", doubleClk);

// Practice
let input = document.querySelector("input");
input.addEventListener("input", function (ent) {
  console.log(ent);
  let h1 = document.createElement("h1");
  document.body.appendChild(h1);
  h1.textContent = ent.timeStamp;
});
