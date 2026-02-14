const { count } = require("./3.execution.js"); // check 5.modulecaching.md, its count++ problem
const secret = "SUPER_SECRET";

const sayHi = () => console.log(secret);

console.log(module);

count.counter = 5;
module.exports = { sayHi, secret, count };

// cant do this, coz last module.exports wins
// module.exports = () => console.log("hhahah")
// const name = "sone name"
// module.exports = name
// only require("some file"), also execute whole file
