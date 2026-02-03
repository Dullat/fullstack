let arr = [1, 2, 3, 4, 5];

const test = arr.forEach((item, index, arr) => {
  console.log(`Index: ${index}, Item: ${item}`);
  return item * 2;
});

console.log("Result of forEach:", test); // undefined coz for each does not return anything

const mapped = arr.map((item, index, arr) => {
  console.log(`Index: ${index}, Item: ${item}`);
  return item * 2;
});

console.log("Result of map:", mapped); // [2, 4, 6, 8, 10] coz map returns a new array

const filtered = arr.filter((item, index, arr) => {
  console.log(`Index: ${index}, Item: ${item}`);
  return item % 2 === 0;
});

console.log("Result of filter:", filtered); // [2, 4] coz filter returns a new array with items that pass the test

const reduced = arr.reduce((accumulator, item, index, arr) => {
  console.log(`Index: ${index}, Item: ${item}, Accumulator: ${accumulator}`);
  return accumulator + item;
}, 0);

console.log("Result of reduce:", reduced); // 15 coz reduce returns a single value

arr.forEach((item) => console.log(item * item));

// find gst

const prices = [100, 200, 300, 400, 500];
const gstRate = 0.18;

const withGst = prices.map((price) => price + price * gstRate);

console.log("Prices with GST:", withGst);

const mixed = [56, "u", "45", "🙌", "🤦‍♀️"];

const emojis = mixed.filter((item) => item.length > 1);
console.log(emojis);

const values = [0, "false", "", false, true, 1, "hello"];
const result = values.filter((value) => Boolean(value)); // value only also gonna work
const result2 = values.filter(Boolean);
console.log(result, result2);

console.log(mixed.includes(56));

