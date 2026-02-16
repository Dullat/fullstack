const chalk = require("chalk");
// ######## Get even ###############
function getEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

getEven([3, 4, 5, 6, 7, 8, 9]);

// ######### Sum ###################

function getSome(...nums) {
  return nums.reduce((accum, item, index, arr) => (accum += item), 0);
}

getSome(1, 3, 4, 5, 6, 6);

// ######## count totals ##########
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

fruits.reduce((accum, item) => {
  if (accum[item]) {
    accum[item] += 1;
  } else {
    accum[item] = 1;
  }
  return accum;
}, {});

// ####### remove duplicates ########

const nums = [1, 2, 2, 3, 4, 4, 5];
nums.includes(3);

nums.filter((item, index, arr) => arr.indexOf(item) === index);

nums.reduce((accum, item, index) => {
  if (!accum.includes(item)) accum.push(item);
  return accum;
}, []);

// ###### get most expensive #######

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 },
];

products.reduce((accum, item, index) => {
  if (accum < item.price) accum = item.price;
  return accum;
}, 0);

// ##### categorize by age ########

const people = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 20 },
  { name: "John", age: 25 },
];

// required output
// {
// 20: [ppl1, ppl2]
// 25: [ppl1, ppl2]
// }

const output = {};

people.forEach((item) => {
  if (!output.hasOwnProperty(item.age)) {
    output[item.age] = [item.name];
  } else {
    output[item.age] = [...output[item.age], item.name];
  }
});

console.log(chalk.bgYellow.black("############# with forEach ############"));
console.log(output);

// with reduce
const rSorted = people.reduce((accum, item) => {
  if (!accum.hasOwnProperty(item.age)) {
    accum[item.age] = [item.name];
    return accum;
  } else {
    accum[item.age] = [...accum[item.age], item.name];
  }
  return accum;
}, {});

console.log(chalk.bgRed.black("############# with reduce ############"));
console.log(rSorted);
