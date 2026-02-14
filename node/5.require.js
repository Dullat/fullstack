const { sayHi, secret, count } = require("./5.module.js");
const { name, count: oldCount } = require("./3.execution.js"); // this require executing the whole 3.execution.js file
// because reauire executes the file first

console.log(secret);
sayHi();

console.log(module);

// ##### Count++ problem #######
console.log(oldCount);
