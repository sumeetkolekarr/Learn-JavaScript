// Ex 1
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (dets) {
//   console.log(dets.key);
//   if (dets.key === " ") {
//     h1.textContent = "SPC";
//   } else {
//     h1.textContent = dets.key;
//   }
// });

// let btn = document.querySelector("#btn");
// let fileAccept = document.querySelector("#fileAccept");

// btn.addEventListener("click", function () {
//   fileAccept.click();
// });

// fileAccept.addEventListener("change", function (dets) {
//   const file = dets.target.files[0]
//   if (file) {
//     btn.textContent = file.name;
//     console.log(file.name);
//   }
// });

// Ex 3
let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')
form.addEventListener('submit', function(dets){
  dets.preventDefault();
  console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,);
})
