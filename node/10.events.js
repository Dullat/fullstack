const eventEmitter = require("events");
const os = require("os");

const myEmitter = new eventEmitter();

myEmitter.on("dullat", (name, age) => {
  console.log(os.tmpdir(), { name, age });
});

myEmitter.on("dullat", (name, age) => {
  console.log("im second one....");
});

myEmitter.emit("dullat", "dullat", 24);
myEmitter.emit("dullat", "dullat-jatt", 24);

console.log(myEmitter.eventNames());
console.log(myEmitter.listeners());

// remove event listenr
myEmitter.on("removed", handler);

myEmitter.emit("removed");

myEmitter.removeListener("removed", handler);
myEmitter.emit("removed"); // removed

// ######## Once vs On #############
// once: runs only one time, on: runs everytime called
function handler() {
  console.log("im handler");
}
myEmitter.once("go", handler);

myEmitter.emit("go"); // will be emitted only once
myEmitter.emit("go");

// ######## Errors ###########

myEmitter.on("error", (err) => {
  console.error("Handling error: ", err.message);
});

myEmitter.emit("error", { message: "something went wrong...", status: 505 });

// Node.js internal modules, such as http, stream, and fs,
// heavily utilize the EventEmitter class to handle asynchronous operations
// by emitting events upon completion or data availability.
// Modules extend EventEmitter to enable asynchronous,
// event-driven communication (e.g., data, end, error)
// via .on() for listeners and .emit() for triggering actions, underpinning Node’s
// non-blocking I/O model
