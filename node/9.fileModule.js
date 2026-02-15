const fs = require("fs");
const os = require("os");
const path = require("path");
const chalk = require("chalk");

// ########## FS module ##############
// fs = file system, lets node interact with OS file system through libuv
//
// There are three types of FS api's
// 1. Sync, 2. async, 3. Promise-based

// ######## Sync file system, Blocks the code #########
console.log(chalk.bgYellow.black("############### Sync file ############"));
const filePath = path.join(os.tmpdir(), "temp.txt");
fs.writeFileSync(filePath, "hi this is me, dullat jatt...", "utf8"); // here js blocks the thread

const data = fs.readFileSync(filePath, "utf8");
console.log(data);

fs.writeFileSync(filePath, "\nappending this text..", { flag: "a" });

// ####### Async file system, does not block ########
fs.readFile(filePath, (err, data) => {
  console.log(chalk.bgGreen.black("############### Async file ############"));
  console.log(data.toString());
});
// ######## Promise based file system ###############
const fsAwait = require("fs/promises"); // can be used with await

async function readData() {
  try {
    const data = await fsAwait.readFile(filePath);
    console.log(chalk.bgGreen.black("########## Promise based file #########"));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readData();

// ####### mkdir #########################
const process = require("process");
async function createTempFile() {
  try {
    const tmpDir = os.tmpdir();
    const uploadsDir = path.join(tmpDir, "uploads");

    await fsAwait.mkdir(uploadsDir, { recursive: true });

    const filePath = path.join(uploadsDir, "data.json");

    process.nextTick(() =>
      console.log(
        chalk.bgGreen.black("############### mkdir file ############"),
      ),
    );

    await fsAwait.writeFile(filePath, JSON.stringify({ name: "dullat" }));
    // writeFile goes to libuv thread pool immediately
    // await pauses your function
    // nextTick runs before the promise resolves
    // writeFile promise resolves and fun continue
    // then setImmediate runs

    setImmediate(() => console.log("File created at:", filePath));

    const data = await fsAwait.readFile(filePath);

    setImmediate(() => console.log(data.toString()));
  } catch (error) {
    console.log(error);
  }
}

createTempFile();

// ###### delete and read dir ##########
