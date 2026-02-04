logger();
//loggerAnonVar()
// loggerAnon()
function logger() {
  // funn declaration , will be hoisted
  console.log("normal fun, will be hoisted");
}

const loggerAnon = function () {
  // fun expressions , not hoisted
  console.log("anony fun , stored in const so cant be hoisted");
};

const arrow = () => {
  // no this, no arguments, can not be used as constructors, still fun expression
  console.log("no hoist, no this");
};

// Function declarations are hoisted with their implementation
// whereas function expressions follow variable hoisting rules and are only available after assignment.

// first class functions, basically passing a fun to another as a value
function higher(arrow) {
  arrow();
}

higher(arrow); // here fun passed as value

