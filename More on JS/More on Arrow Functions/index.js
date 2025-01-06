const sayHello = (name, greet) => console.log(greet + ", Hello " + name);

// sayHello('Bunny', 'Good Morning');

const x = {
  name: "Lucky",
  role: "JS Developer",
  exp: 12,
  show: function () {
    // let that = this;
    // console.log(this);
    // setTimeout(function(){
    setTimeout(() => {
      console.log(`The name is ${this.name} and role is ${this.role}`);
    }, 2000);
  },
};

x.show()