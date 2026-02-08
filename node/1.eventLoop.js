// ########### event loop , non blocking #############
// stack

function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log("im c...");
}

a(); // a pushed -> b pushed -> c pushed -> c pop "im c..." -> b pop -> a pop

// ########### Microtask queue vs macrotask queue ##########

// Microtasks: Promise callbacks (.then, .catch, async/await)
// Macrotasks: timers, I/O callbacks
// process.nextTick: Node-specific, runs BEFORE microtasks
// Queues are flushed after every JS execution

setTimeout(() => {
  console.log("im timeout...");
  tickTesting();
}, 0);

Promise.resolve().then(() => {
  // this logged first, coz Microtask queue has higher priority
  console.log("im promise");
});

// ########## Ticks ##################
// process.nextTick: Node-specific, runs BEFORE microtasks
// Runs during Fast Cleaing which runs in between phases, read 32. md , will clear all

setTimeout(() => {
  console.log("timeout");
  tickTesting();
}, 0);

Promise.resolve().then(() => console.log("promise"));

function tickTesting() {
  process.nextTick(() => console.log("tick"));
}

tickTesting();
