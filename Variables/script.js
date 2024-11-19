let a = 67;
console.log(a);
a = "Bunny";
console.log(a);
// let 7Momo = 78 //Not Allowed

// const c; //Const must be initialized
let b = 57;
b = 27;
const c = "Bunny";
// let c = 'SK'; //Throws an error because constant can't be changed
{
  let b = "this";
  console.log(b);
}
console.log(b);

//NNBBSSU
let d = null;
let e = 345;
let f = true;
let g = BigInt("65") + BigInt("3");
let h = "Bunny";
let i = Symbol("I am a nice Symbol");
let j;
console.log(d, e, f, g, h, i, j);

// Object in JS
const item = {
    "SK": true,
    "Bunny": false,
    "Momo": 78,
    "Pari": undefined
}
console.log(item['Bunny']);