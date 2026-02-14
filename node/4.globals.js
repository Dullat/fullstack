// ########## GLOBALS ########

// global    --global object, just like window in browser
// _dirname  --path to current dir
// _filename --file name
// require   --common js to use modules
// module    --info abour current module
// process   --info about every env where program is being executed
// console   -- console.warn, error, log etc
// timers    --async tools (setTimeout), (clearTimeout)

global.myName = "dullat jatt";
global.sayHi = () => console.log("Hi from the global.sayHI");
console.log(myName);
sayHi();

// __dirname

console.log(__dirname);

// __filename
console.log(__filename);

// process
console.log(process.env.TERM);

// argv
console.log(process.argv);

// cwd
console.log(process.cwd());

// console
console.error("this is an error");

// timers
const timeout = setTimeout(
  () => console.log("this was a timer, of 1 sec"),
  1000,
);
