
// for (let index = 0; index < 10; index++) {
//     let p = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000*(index+1));
//     });
//     p.then(() => {console.log(index+1)})
// }

// for (let index = 0; index < 10; index++) {
//       setTimeout(() => {
//         console.log(index+1);
//       }, 1000*(index+1));
// }


let funx = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello')
        }, 1000);
    })
    let p = await p1 
    console.log(p);
    return p
}

funx()