// Using Destructuring for CommonJS
// const {hello, helloName} = require('./index.js')

import def, { hello, helloName } from "./index.js"

hello()
helloName('Sumeet')
def()