// 1. Create a variable of type string and try to add a number to it
let a = "Lucky "
let b = a + 4
console.log(b); 

// 2. Use operator to find the datatype of the string in the above question
let c = typeof(b)
console.log(c);

// 3. Create a const object in JS. Can you change it to hold a number later?
const obj = {
    num: 54
}
// obj = 42 // Can not change object like this but keys can be changed
obj['num'] = 45
console.log(obj['num']);

// 4. Try to add a new key to the const object in above object
obj['isTrue'] = true
console.log(obj);

// 5. Write a JS Program to create a word-meaning dictionary of 5 words
const dict = {
    Ephemeral: "Lasting for a very short time",
    Serendipity: "The occurrence of events by chance in a happy or beneficial way",
    Melancholy: "A feeling of pensive sadness, typically with no obvious cause",
    Ebullient: "Cheerful and full of energy",
    Quixotic: "Exceedingly idealistic; unrealistic and impractical"
}

console.log(dict.Ephemeral);
console.log(dict['Quixotic']);