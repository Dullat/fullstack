const fs = require("fs");
const os = require("os");
const { pipeline } = require("stream");
const path = require("path");
const EventEmitter = require("events");

// ### creating an event for notification
const noti = new EventEmitter();

noti.on("noti", (payload) => console.log(payload));

// ### creating a example file ####
const filePath = path.join(os.tmpdir(), "example.txt");

function createExampleFile() {
  for (let i = 0; i < 999; i++) {
    fs.writeFileSync(filePath, `Hello world ${i}\n`, { flag: "a" });
  }
}

// createExampleFile();

// ###### simple Read, Flow mode ############
const exampleStream = fs.createReadStream(filePath, {
  highWaterMark: 1024,
  start: 0,
  end: 2000,
  encoding: "utf8",
});

exampleStream.on("open", (fd) => console.log("File descriptor: ", fd));

exampleStream.on("data", (data) => {
  console.log("chunk: \n", data);

  exampleStream.close(); // closed after 1st chunk, it also gonna affect .read()
  exampleStream.destroy(new Error("stopped")); // to properly tear down stream and cleanup , use destroy
});

// ##### Pause mode #####
exampleStream.on("readable", () => {
  let chunk;
  while ((chunk = exampleStream.read()) !== null) {
    console.log("Chunk from Readable:\n", chunk);
  }
});

// ##### Pause and resume ###

async function ResumePause() {
  const stream = fs.createReadStream(filePath, {
    highWaterMark: 1024,
    start: 0,
    end: 2000,
    encoding: "utf8",
  });

  // for await (const chunk of stream) {
  //   console.log("This is chunk from async Fun read");
  // }

  stream.on("readable", (chunk) => {
    console.log("this is from async fun, reading data, but not logging");
    stream.pause();
    stream.isPaused() && noti.emit("noti", "File read from async file paused");
    process.nextTick(() =>
      console.log("Paused manually...... this is a tick.."),
    );
  });

  setTimeout(() => {
    console.log("starting again........");
    stream.resume();
  }, 4000);
}

ResumePause();

// ##### End #######
exampleStream.on("end", () =>
  console.log("############ Read completed ##########"),
);

// ### Read Line by line #######

async function readLine() {
  const lineStream = fs.createReadStream(filePath, {
    encoding: "utf8",
    highWaterMark: 16,
    start: 0,
    end: 200,
  });

  let leftover = "";

  for await (const chunk of lineStream) {
    leftover += chunk;

    let lines = leftover.split("\n");
    leftover = lines.pop();

    for (let line of lines) {
      console.log("Line: ", line);
    }
  }

  console.log("Line: ", leftover);
}

readLine();

// Read code file itself
async function readCode() {
  const readCodeStream = fs.createReadStream("./11.2.readStream.js", {
    encoding: "utf8",
    highWaterMark: 16,
  });

  let leftover = "";
  for await (const chunk of readCodeStream) {
    leftover += chunk;
    let lines = leftover.split("\n");
    leftover = lines.pop();

    for (const line of lines) console.log(line);
  }
}

readCode();
