function newHero(constructor, ...args) {
  obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  constructor.apply(obj, args);
  return obj;
}

function Hero(name) {
  this.name = name;
}

Hero.prototype.sayHi = function () {
  console.log(this.name);
};

console.log(Hero.prototype);

const h1 = newHero(Hero, "hulk");

console.log(h1.prototype, h1.__proto__);
console.log(Hero.__proto__, Hero.prototype);

console.log("#################");
console.log(h1.__proto__ === Hero.prototype); // true
console.log(Hero.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true

h1.sayHi();
