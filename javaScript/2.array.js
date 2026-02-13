const arr = [{ name: "dullat" }, { name: "jatt" }];

const sliced = arr.slice(0); // slice returns

console.log(sliced, arr);

sliced[0].name = "dullat2";
console.log(sliced, " + ", arr);

sliced.shift();

// slice

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(-2));
console.log(
  arr2.slice(0, -1),
  "this is arr2",
  arr2,
  "original is not manuplated",
);

// splice

console.log("############################################");

const cars = ["range", "m4", "mustang", "g wagon"];

let removed = cars.splice(1, cars.length - 1);

console.log("original , manuplated : ", cars, "new one : ", removed);

// add

const cars2 = [1, 2, 3, 4, 5, 6, 7];

let rcars = cars2.splice(-4, 3); // select from 4th element from last and remove 3 elements
console.log(cars2, rcars);

const addcars = cars2.splice(-1, 0, 4, 5, 6);
console.log(cars2);

// replace
console.log(cars2.splice(4, 1, "five"));
console.log(cars2);

// practice

cars2.splice(1, 2, "two", "three");
cars2.pop();
cars2.push("seven");

console.log(cars2);

// work on it
let lastn = 0;
let qwak = cars2.map((item, index) => {
  if (typeof item === "string") {
    return ++lastn;
  }

  lastn = item;
  return item;
});

// there are more, 29 methods in ArrayMethods.md file, those are cool , just try them in node shell

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// ########## spread [...] ############

function getSum(first, second, ...numbers) {
  return numbers.reduce((accum, item) => {
    // ignoring the first two values
    return (accum += item);
  }, 0);
}

console.log(
  getSum(1, 2, 3, 4, 5, 67, 7),
  "this is total sum using spread, taking args as array",
);
