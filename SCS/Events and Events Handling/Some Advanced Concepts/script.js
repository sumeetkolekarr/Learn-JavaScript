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
let main = document.querySelector('#main')
form.addEventListener('submit', function(dets){
  dets.preventDefault();
  // console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value);
  let card = document.createElement('div')
  card.classList.add('card')

  let profile = document.createElement('div')
  profile.classList.add('profile')

  let img = document.createElement('img')
  img.setAttribute('src', inputs[3].value)

  let h3 = document.createElement('h3')
  h3.textContent = inputs[0].value
  let h5 = document.createElement('h5')
  h5.textContent = inputs[1].value
  let p = document.createElement('p')
  p.textContent = inputs[2].value

  profile.appendChild(img)
  card.appendChild(profile)
  card.appendChild(h3)
  card.appendChild(h5)
  card.appendChild(p)

  main.appendChild(card)

  inputs.forEach(function (inp){
    if(inp.type !== 'submit'){
      inp.value = ""
    }
  })
})
