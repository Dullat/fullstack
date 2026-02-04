// A function is a code block that can be called, passed, stored and returned
//
// ################# Factory Funs ##################
// a fun that creates and returns another fun or object

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter(), counter()); // output : 1 2

function createObj(name, course) {
  // problem, everytime new copy of sayHi is created
  return {
    name: name,
    class: course,
    sayHi() {
      console.log("hi");
    },
  };
}

const newObj = createObj("dullat", "mca");
console.log(newObj);

// ############### Constructor fun ###############
// just fun ment to be called with "new" to create objects, and magic happen when "new" is used
// auto object creation, shared methods via prototype, instance indentification "p1 instanceof CreateObject", allow inheritance
function CreateObject(name, course) {
  this.name = name;
  this.course = course;
  // if you put a fun here it will not be shared, so use prototype
}

CreateObject.prototype.sayHi = function () {
  // sayHi exist once, and shared amoung all instances
  console.log("hi..");
};

const p1 = new CreateObject("dullat", "MCA");

// ############### higher order funs ############
// a fun at least does one of these: takes fun as arg, or returns a fun : map, filter, reduce are higher order fns
function greet(fn) {
  fn();
}

greet(() => console.log("greetings mofoos..")); // passing a fun as arg

// ############## Callback funs ################
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 1000);
}

fetchData((data) => console.log(data));

// ############# FirstClass funs ##############
// js treate funs like values: store in varibales, pass as args, and return from funs
const fn = () => console.log("Hi");

function execute(f) {
  f();
}

execute(fn);

// ############# Pure funs ####################
// no side effects, like nothing elase affect the output, and output is predictable
// its impure if inpute is mutated, logged, http call, changing file sys, query to dom, modify outer varibales
// simple rule is to just calculate input ############ More is on MDN or FreeCodingCamp

const add = (x, y) => x + y;

console.log(add(3, 4));

// ############ IIFE : immediately invoked fun expression ####################
// scope isolation
// avoiding global pollution (pre-ES6 days)
(function () {
  console.log("Runs immediately");
})();

// ############# Function currying ###########################################
// a function with multiple args chained
// add(2)(3)
function addCurry(a) {
  return (b) => {
    return a + b;
  };
}

console.log(addCurry(2)(3));

// ############# final word #################
// Because JavaScript has first-class functions,
// we can create higher-order and factory functions that use closures to encapsulate state.

// Generator Funs , Read wiki
