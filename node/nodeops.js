const fs = require("fs");

async function readData() {
  await fs.readFile("./example.txt", "utf8", (err, data) =>
    console.log("file is read\n", data),
  );
}

readData();

function getSum(first, second, ...numbers) {
  return numbers.reduce((accum, item) => {
    return (accum += item);
  }, 0);
}

console.log(getSum(1, 2, 3, 4, 5, 67, 7));
//
// encryption,
// paid tire (stripe), razor pay,
// live chat,
// profile,
// drive,
//
//
// flashy home(cyber)
