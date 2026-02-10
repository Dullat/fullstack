// https://youtu.be/fVXp7ZWjlO4?si=MpFTSf6a8sbsf9MH
// ########### globalThis ##########
// modern way points to both
console.log(global === globalThis);
// console.log(window === globalThis);

// ########## browser ##########
var x = 10; // creates window.x
function foo() {} // creates window.foo

let a = 1;
const b = 2; // both of these dont create properties on window
// btw strict js dont allow to call window through "this" inside a fun

// ######### Node ##############
// nothing is goes to global, everyting is scoped to file
// so here global has only explicitly put things on global like console, setTimeout, __dirname etc
// you can do it explicitly too
globalThis.x = 12;
console.log(x);

// ######### This #############
function talk() {
  console.log(this);
}

const user = {
  name: "sina",
  talk,
};

talk(); // logs global object
user.talk(); // logs the user object

const obj = {
  name: "dullat",
  sayHi(message, age, phone) {
    console.log("hiiii..", this.name, message, age);
  },
};

obj.sayHi("this is message", 45);

const greet = obj.sayHi;
greet(); // undefined, greet is no longer called on object so its lost

// But you can force this, or what "this" should be by using call
greet.call(obj, "this is message using call", 35);
talk.call(obj); // see. we changed "this" for the talk fun, which was holding on user object

// you can also use apply, that allow to pass args as array
greet.apply(obj, ["this is message using apply", 897]);

// Bind, just bind it but dont call it yet
const newGreet = greet.bind(obj, "bound");
newGreet(90); // you can pass some args on binding and some while calling

// ############ new binding ###########
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(this);
};

const p1 = new Person("dullat");
p1.sayHi();

// ########### Arrow funs dont have "this" ##############
const usr = {
  name: "jatt",
  greet: function () {
    const inner = () => console.log(this); // lexical this
    inner();
  },
};

usr.greet();

// another example
class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    const interval = setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
      if (this.seconds >= 10) clearInterval(interval);
    }, 1000);
  }
}

const t1 = new Timer();
t1.start();
