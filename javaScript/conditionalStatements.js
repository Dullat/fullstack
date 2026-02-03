// truthy and falsy values
// falsy
// false, 0, -0, 0n, "", null, undefined, NaN
// truthy
// true, "0", "false", [], {}, function() {}, -1, infinity
console.log([] == false);
console.log([] === false);
console.log([1, 2] == false);

const logger = function () {};
if (logger) console.log("true");

const marks = -56;

// if else
if (marks >= 90 && marks <= 100) {
  console.log("A+");
} else if (marks >= 75 && marks < 90) {
  console.log("b+");
} else if (marks >= 50 && marks < 75) {
  console.log("good");
} else if (marks < 50 && marks >= 0) {
  console.log("fail");
} else if (marks > 100 || marks < 0) {
  console.log("choose a proper range");
}

let color = "red";

// switch
switch (color) {
  case "green":
    console.log("go go.....");
    break;

  case "red":
    console.log("stop rt");
    break;

  default:
    console.log("either lights or u fucked");
}

// ternary
let message =
  color === "red" ? "stop" : color === "green" ? "go go" : "idk nigga";

console.log(message);

// dice
const dice = Math.floor(Math.random() * 6) + 1;

const result =
  dice >= 3 ? (console.log("high"), console.log("qwak qwak")) : "low";
console.log(result);
