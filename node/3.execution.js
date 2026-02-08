const fs = require("fs");

console.log("1: sync code");

fs.readFile("data.txt", () => {
  console.log("2: file read complete");
  process.nextTick(() => console.log("3: tick inside the file"));
  Promise.resolve().then(() => console.log("4: promise inside file"));

  fs.readFile("data.txt", () => {
    console.log("5: file read complete inside the second file read");
    process.nextTick(() => console.log("6: tick inside second file read"));
    Promise.resolve().then(() => console.log("7: promise inside second file"));
  });

  console.log("sync code after scheduling");
});

fs.readFile("data.txt", () => {
  console.log("8: read 3rd file");

  process.nextTick(() => console.log("9: tick from 3rd file"));
  setTimeout(() => {
    // why this went at the end of all?,
    // coz setTimeout has to wait for the NEXT loop because Timers phase already passed in the current loop!
    // when 3rd file read: was it in poll phase so, poll phase run the callback of  the fileread then we have fast cleanup and then check phase
    // time was untouched coz we alredy crossed timers phase now this timeout will be executed in next loop
    // so : fast cleanup -> timers -> fastcleanup -> poll -> fast cleanup -> check phase -> fastcleanup -> next loop
    console.log("10: settimeout from 3rd file");
  }, 0);
  setImmediate(() => console.log("11: immediate from 3rd file"));
});
