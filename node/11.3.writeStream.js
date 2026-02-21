const fs = require("fs");
const os = require("os");
const path = require("path");

const filePath = path.join(os.tmpdir(), "output.txt");

// ########### write stream, with buffer and drain understanding ############
process.stdout.write("Write Streams\n");

function writeData() {
  const ws = fs.createWriteStream(filePath, {
    encoding: "utf8",
    flags: "w",
    highWaterMark: 1,
  });

  let i = 0;
  let ok = true;

  function write() {
    while (i < 20 && ok) {
      ok = ws.write(`Hello world ${i}\n`);
      // const chunk = Buffer.alloc(512);
      // let ok = ws.write(chunk);
      i++;
    }
    ws.on("drain", () => {
      console.log("Buffer drained, starting write again");
      ok = true;
      write();
    });
  }

  write();
}

writeData();
