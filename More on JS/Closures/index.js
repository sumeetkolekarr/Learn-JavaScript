// function init() {
//   var name = "Mozilla"; // name is a local variable createdby init
//   function dispName() {
//     console.log(name);
//   }
//   name = "Bunny";
//   return dispName;
// }

// let c = init();
// c();

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    let y = () => {
    //   let a = 2;
      console.log(a);
      let z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}

let a = returnFunc();
a();
