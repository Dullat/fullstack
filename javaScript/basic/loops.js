const actualPin = 1234;
const entered = 234;

// for (; actualPin !== entered; ) {
//   console.log("ajajaj");
// }

let x = 10;
do {
  console.log(x, "run");
  x++;
} while (x < 5);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askPin() {
  rl.question("EnterPin: ", (answer) => {
    const entered = Number(answer);

    if (entered !== actualPin) {
      console.log("wrong.....");
      askPin();
    } else {
      console.log("passed...");
      rl.close();
    }
  });
}

const arr = [10, 3, 4, 5, 6, 2, 7, 8, 9];

// for of and for in
for (let alpha of arr) {
  console.log(alpha);
}

// askPin();

const obj = { name: "dullat", class: "MCA" };

for (key in obj) console.log(obj[key]);

// sort
console.log(arr.sort()); // this will not be correct coz it convert it into string

console.log(arr.sort((a, b) => a - b)); // this sort is higher order fun, and the arrow fun is callback fun
console.log(arr.sort((a, b) => b - a));
console.log(arr); // also changes original array

// array prototype

Array.prototype.sum = function () {
  let accum = 0;
  for (i = 0; i < this.length; i++) {
    accum += this[i];
  }
  return accum;
};

console.log(arr.sum());

const arr2 = [11, 2, 3, 4, 5];
Array.prototype.customSum = function (callback) {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += callback(this[i], i, this);
  }
  return sum;
};
const total = arr2.customSum((value) => value);
console.log(total);
