//ES6 Exports
export const hello = () => {
    console.log('Hello Harry');
}

export const helloName = (name) => {
    console.log('Hello, ' + name);
}

const def = () => {
    console.log('Kya chal rha hai bhai?');
}

export default def

//CommonJS
// module.exports = {hello, helloName}