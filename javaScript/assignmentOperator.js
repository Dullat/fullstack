let a = 12;
a += 5;
console.log(a);

// pre increment and post increment
console.log(a++);
console.log(++a);

let b = ++a;

console.log(b);

// gotcha
let x = 12;
let c = x++; // post is mostly use to track old and new value

console.log(x, c, "post increment");

// bit wise ops
// 5 = 101
// 3 = 011
console.log(5 & 3); // 001
console.log(5 | 3); // 111
console.log(5 ^ 3); // 110 exor
console.log(!5 | 3);

// question
console.log(1 > 3 > 4);
console.log(3 > 2 > 1); // true > 1 -> 1 > 1 -> false coz 1 == 1
