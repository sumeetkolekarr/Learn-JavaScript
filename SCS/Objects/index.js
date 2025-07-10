let role = "admin"; // Meant for Computed Properties

let objPersonal = {
  name: "Test",
  age: 2,
  food: "veg",
  address: {
    city: "SA",
    pin: 416013,
    locations: {
      lat: 77.3,
      long: 70.2,
    },
  },
  // Computed Properties
  [role]: "Test",
};

// console.log(obj.name)
// console.log(obj['age'])

// let aa = "name";
// console.log(obj.aa); // This does not work
// console.log(obj[aa]);

// Object Destructuring
// let { lat, long } = obj.address.locations;
// console.log(lat,long);

// let obj = {
//   name: "Test",
//   age: 2,
//   email: "Test@gmail.com",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// let obj2 = {...obj}
// let obj2 = Object.assign({ price: Infinity }, obj);
// console.log(obj2);

// Clones the entire object by referencing its values
// let obj2 = {...objPersonal}
// obj2.address.city = 'Bangalore'
// console.log(obj2);
// console.log(objPersonal);

// Deep Clone
// let obj2 = JSON.parse(JSON.stringify(objPersonal));
// obj2.address.city = 'Bangalore'
// console.log(obj2);
// console.log(objPersonal);

// Optional Chaining
// console.log(objPersonal.address.city);
// Handles the error if the key is not present
// console.log(objPersonal?.addresses?.city);

// Q. Can an Object key be a number or boolean?
// const obj = {
//   true: 'yes',
//   45: 'answer'
// }
// console.log(obj[true]);
// console.log(obj[45]);

// Q. Access the value from the object
// const user = {
//   'first-name': 'Test'
// }
// console.log(user.first-name); // Not Allowed
// console.log(user["first-name"]);

//  Q. Destructure the city and lat from the locations object
// const locations = {
//   city: "FrankFurt",
//   coordinates: {
//     lat: 12.2,
//     long: 77.4,
//   },
// };
// let { city } = locations;
// let { lat, long } = locations.coordinates;
// console.log(lat, long);

// Q. Destructure the key 'first-name' as a variable called firstName
// const user = {
//   "first-name": "Test",
// };
// let { "first-name": firstName } = user;
// console.log(user);

// Q. Use Object.entries() to print all key-value pairs as:
// title: JS
// duration: 4 weeks
const course = {
  title: "JS",
  duration: "4 weeks",
};

Object.entries(course).forEach(function (val) {
  console.log(val[0] + ": " + val[1]);
});
