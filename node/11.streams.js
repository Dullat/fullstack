const fs = require("fs");
const path = require("path");
const os = require("os");
const { pipeline } = require("stream");

const filePath = path.join(os.tmpdir(), "example.txt");

for (let i = 0; i < 3000; i++) {
  fs.writeFileSync(filePath, `hello world ${i}\n`, { flag: "a" });
}

// const stream = fs.createReadStream(filePath, { encoding: "utf8" });
const stream = fs.createReadStream(filePath, { highWaterMark: 1024 * 16 }); // means maximum buffer size

// Flowing mode, when pipe, "data" etc
// but if we dont use listeners it will go into paused mode
stream.on("data", (chunk) => {
  // default buffer size is 64kb
  console.log("this is a chunk:", chunk);
});

stream.on("end", () => {
  console.log("############ read ended ##############");
});

stream.on("error", (error) => {
  console.log(error);
});

// Paused mode
// stream.read() , is a manual way
stream.read();

// #### delete that big file #######
fs.rm(
  filePath,
  { force: true },
  (
    error, // if stream is opened first and then we delete file
  ) =>
    // here, it will keep reading the chunks, coz when we delete something, os does not destroy it immediatly
    // it just removes the dir entry , data on disk remains, it is removed fully when no process is using it
    console.log(error ? error : "deleted sucessfully"),
);
