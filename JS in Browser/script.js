let a, b;
a = 6;
b = 5;
console.log(a + b);

console.log(console);
console.assert(true);
console.assert(false);

obj = { a: 1, b: 2 };
console.table(obj);

console.warn("I am a warning");
console.error("I am an error");
console.info("I am an Info");

console.time("forLoop");
for (let i = 0; i < 5; i++) {
  console.log(233);
}

console.timeEnd("forLoop");

console.time("whileLoop");

let i = 0;
while (i < 5) {
  console.log(233);
  i++;
}

console.timeEnd("whileLoop");
