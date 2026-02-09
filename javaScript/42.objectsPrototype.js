// ######## prototype shit ###########
//
// 1 object literals

const obj1 = {
  name: "dullat",
};
const obj2 = {
  name: "jatt",
};

// ############################## what is prototype or [[prototype]]###########################################################################################

// [[prototype]] : this things points to the prototype of whatever created the object, basically *inherited*
// so it basically points to the Object.prototype, this is just default parent object for almost everything in js
// coz js needed to put toString, hasOwnProperty, valueOf like shared behaviour to all objects, so insted of copying this to all
// js says lets put all in Object and link everything to it
//
// Object.prototype = {
//   constructor: Object,
//   toString() { ... },
//   valueOf() { ... },
//   hasOwnProperty() { ... },
//   isPrototypeOf() { ... },
//   // ...
// };
console.log(Object.getPrototypeOf(Object.prototype), "prototype of Object"); // null, coz nothing above it
// Object.prototype is actual prototype object shared by all plain objects in js
// and __proto__ is an accessor on an object that points to the internal [[prototype]] link

obj1.saySomething = () => console.log("idk what to say"); // adding a fun to obj1, coz i will use it as base to create new obj, so that this becomes [[prototype]] for new created object
const obj3 = Object.create(obj1); // this inherit from obj1 so __proto__ gonna point to obj1

console.log(
  "\n ###############################################\n",
  obj3.__proto__,
  "\n",
  Object.getPrototypeOf(obj3),
  "\n",
  obj3.__proto__.__proto__, // this is going to follow the link chain obj3 -> obj1 -> Object.prototype -> null
  "\n",
  Object.prototype === obj3.__proto__.__proto__, // true
  "\n this explain the link: [[prototype]] well\n #################################################",
);
// ##########################################################################################################################################################################
//
// ##################################### Setters and getters(already done above) ################################################################################################################
obj1.__proto__.sayHi = () => console.log("this is sayHi"); // __proto__ points to the Object
Object.prototype.laugh = () => console.log("hahahah");
// Object.setPrototypeOf(obj, parent)

obj1.sayHi();
obj2.sayHi(); // this also logged coz sayHi applied to Object.prototype or [[prototype]] which is shared by all objects you can just do Object.prototype.sayHi, this is better way
[].sayHi(); // wtf is this??, that is waht js is: even array has an object from which it born
(() => {}).laugh();

Object.prototype.sayBy = () => console.log("byyy......");
obj2.sayBy();
console.log(Object.getPrototypeOf(obj2), obj2.__proto__);

// ##################### Constructor fun and prototype ################
// .prototype works on constructor funs

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return `hii... from the constructor fun, im ${this.name}`;
};

const p1 = new Person("dullat");

console.log(p1.sayHi(), Person.prototype); // Person.prototype is just like Object.prototype
console.log(p1.__proto__);

// this is gonna make you understand JS
const arr = [];
console.log(
  "This makes sense:",
  Object.getPrototypeOf(arr) === Array.prototype,
);
