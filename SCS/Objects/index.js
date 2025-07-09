let obj = {
  name: "SK",
  age: 22,
  food: "veg",
  address: {
    city: "Kolhapur",
    pin: 416013,
    locations: {
      lat: 77.3,
      long: 70.2,
    },
  },
};

// console.log(obj.name)
// console.log(obj['age'])

let aa = "name";
// console.log(obj.aa); // This does not work
console.log(obj[aa]);

// Object Destructuring
let { lat, long } = obj.address.locations;
console.log(lat,long);
