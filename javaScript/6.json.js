const path = require("path");
const obj = {
  name: "dullat",
};

const json = JSON.stringify(obj);

console.log(typeof json);

// ######### this code is for 8.path.js , to understand path and __dirname etc ##########
console.log("This is from 6.json.js file : ", __dirname, __filename);
console.log(
  "This is from 6.json.js , this is .resolve:",
  path.resolve("somefile.txt"),
);
// .resolve logging node/some.txt , not javaScript/some.txt coz it start from cwd()
// so cwd is node/ coz 8.path.js is executed there
