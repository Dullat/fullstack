class Product {
  static Corp = "Evil corp";
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static getInfo() {
    console.log(Product.constructor.toString());
  }

  getToatalPrice() {
    return this.price * this.quantity;
  }

  getDiscounted(percentage) {
    return this.price - (this.price * percentage) / 100;
  }
}

const p1 = new Product("laptop", 30000, 5);

console.log(p1.getDiscounted(18));

Product.getInfo();

class Dealer extends Product {
  constructor(name, price, quantity, dealer) {
    super(name, price, quantity);
    this.dealer = dealer;
  }

  showDealerInfo() {
    console.log(`dealer : ${this.dealer}, holding on item : ${this.name}`);
  }

  addShippingPrice(shippingCost) {
    return this.price + this.shippingCost;
  }
}

const d1 = new Dealer("bike", 500000, 1, "dullat");
d1.showDealerInfo();

class LocalAgency extends Dealer {
  constructor(name, price, quantity, dealer, shopName) {
    super(name, price, quantity, dealer);
    this.shopName = shopName;
  }

  showInfo() {
    console.log(this.shopName, this.name);
  }
}

const l1 = new LocalAgency("remote", 50, 10, "dullat", "dullat.inc");
console.log(l1);

// multiple Inheritance
// mixins
const CanPlay = {
  play() {
    console.log("playing....");
  },
};

const CanRun = {
  run() {
    console.log("runing....");
  },
};

Object.assign(LocalAgency.prototype, CanPlay, CanRun);
LocalAgency.prototype.sayBy = function () {
  console.log(this.name);
};

l1.play();
l1.sayBy();

console.log(l1.__proto__);
console.log(LocalAgency.prototype);

// polyorphism
// methods are overriddddeennnnnnnnnnnn

// class RunPoly extends SomeParent{
//   play , it overrides the play fun of parent
// }

class A {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log("A is playing");
  }
}

class B extends A {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  play() {
    console.log("B has overriden A's play function , its called polyorphism");
  }
}

const b1 = new B("dullat", 24);
b1.play();
