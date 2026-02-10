// ################# Object #############
// collection of key:value pair + prototype pointer

const mySym = Symbol("dj"); // if you want to symbol as key
const obj1 = {
  a: 1,
  b: "a",
  c() {
    return `${this.a}, ${this.b}`;
  },
  [mySym]: "mySymKey",
};

console.log(typeof obj1[mySym]); // string: coz its giving the type of value which is str not the key's type
console.log(Object.getOwnPropertySymbols(obj1)); // get all the symbols
const key = "a";
console.log(obj1.c(), obj1.a, obj1["a"], obj1[key], obj1.key); // obj1.key : undefined
// keys a immutable , coz strings are immutable in js

// objects are refrence types

const a = { x: "x" };
const b = a;

b.x = "dullat";
console.log(a.x); // dullat: coz a stored ref of object memory then we assigned ref to b

const x = {};
const y = {};
console.log(x === y, {} == {}); // false false : yah both are same but refs are diff that's why "false", remember the comment above

// ################ Shalow copy vs deepCopy ############
const user = {
  name: "dullat",
  course: "MCA",
  address: {
    city: "Mansa",
    state: "Punjab",
  },
};

// shalow copy copies the object but not the nested

const shallow = { ...user };
shallow.address.city = "BLZ";

const { name: username, course } = user;
console.log(username, "this is username");

console.log(shallow, user); // in both address ref is same to user's address object also manuplated

// deep copy
const deep = structuredClone(user);
deep.address.city = "new city";

console.log(deep, user);
// JSON.parse(JSON.stringify())
// it breaks on funs, dates, maps, undefined etc
// coz it can not represent code like functions

// ################## Object.create, create prototype ############
// child.Object.create(parent), method sharing, dynamic lookup and no constructor required
// it does deligation: means "if i cant do something myself, then i ask someone to do it for me"
const base = {
  // avoid putting mutable data here like variables
  greet() {
    console.log("hello");
  },
};

const objA = Object.create(base);
const objB = Object.create(base);
objA.greet();

console.log(objA.greet === objB.greet); // gives true, coz greet shared amoung all
console.log(objA.hasOwnProperty("greet"), base.hasOwnProperty("greet")); // false, true

// now prove that nothing copies it just deligation
// objA.sayHi(); // error

base.sayHi = () => console.log("hiii"); // dynamic lookup , no constructor needed objA.sayHi(); // working, even base was assigned before,, its called ### Dynamic lookup , checked at run time###

// ################# __proto__ ###############
// _proto_ points to the objects's prototype (the one used for deligation)
console.log(objA.__proto__, Object.getPrototypeOf(objA));
// objA.prototype only works for constructors and functions
function ConFun(name) {
  this.name = name;
}

ConFun.prototype.sayHi = () => console.log("hahahahhah");
const conFun1 = new ConFun("dullat");
console.log(
  Object.getPrototypeOf(conFun1),
  ",",
  ConFun.prototype,
  ConFun.__proto__,
);
console.log(conFun1 instanceof ConFun); // true
console.log(conFun1 instanceof Object); // true
// obj
//   └─ __proto__ → Base.prototype
//         └─ __proto__ → Object.prototype
//               └─ __proto__ → null

// ######### delete ############
objA.name = "dullat";
console.log(objA);
delete objA.name; // delete, safely
console.log(objA, "my name was deleted");

// ######### seal ####################
// new properties cant be added or removed
// but existing ones can be changed
Object.seal(objA);
objA.sirname = "dullat jatt";
console.log(objA);

// ########### freezzzzzzzzz ###########
// works on shallow level
Object.freeze(objA);

objA.age = 87; // not gonna work coz, its froozzeeennn

console.log(objA);
