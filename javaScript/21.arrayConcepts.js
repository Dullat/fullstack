// ###################### mutability #################################
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mutated = arr.splice(3);
mutated.push(11);
mutated.unshift(2);
mutated[mutated.length - 1] = "a";

console.log(mutated);

// #################### length and sparse ############################
let arr2 = [];
arr2[5] = 1;
arr2[6] = 2;
let length = Object.keys(arr2).length;

console.log(arr2, length);
delete arr2[5]; // creates an empty hole, thats why we use arr.splice(1, 1)
console.log(arr2);

// fix sparse arrays

let dense1 = arr2.filter(() => true); // it will completly remove empty spaces

let dense2 = Array.from(arr2); // it will fill empty places with undefined, like: [undefined, undefined, undefined, so on.., 1]

console.log(dense1, dense2);

let dense3 = Array.from(arr2, (v) => v ?? 0); // fill array's empty spaces with 0s, like:[0,0,0,0,1]
console.log(dense3);

arr2.map((i) => console.log("iterated", i)); // 1
arr2.forEach((i) => console.log("iterated", i)); // 1

for (i of arr2) {
  // for of and Array.from , perfectly iterate over empty spaces
  console.log("undef", i);
}

Array.from(arr2, (i) => console.log(i));

// ################# Array Like Objects ##################

const obj = {
  // like function arguments, behave like array but lack array methohds
  0: "a",
  1: "b",
  length: 2,
};
console.log(obj.length); // 2

for (let i = 0; i <= obj.length - 1; i++) console.log(obj[i]); // other method dont work but for loop can work

// ############### distruction #########################

const [a, b] = arr;
console.log(a, b); // 0 1

// ################ shallow copy deepcopy ###############
// in shallowCopy refrence is shared, so manuplating newcopy can also manuplate the original
// but in deepcopy, new refs are created , its copied but from scratch like new refs by using JSON.parse and stringify
const original = [1, 2, 3, 4, [5, 6, 7], { name: "dullat" }];
let shallowCopy = [...original];

console.log(shallowCopy); // yes its logging : [ 1, 2, 3, 4, [ 5, 6, 7 ], { name: 'dullat' } ], but here refrence is shared
shallowCopy[5].name = "there was my name here"; // gotcha: shallowCopy[5] = "there was my ...." , its does not gonna cahange original, coz shallowCopy share refs or nested objects, not for array slots themself
// like at [5] there was refrence here like "0x86ahjs87" , shallowCopy[5] = "there.." gonna replace ref wiht "there.." , it only applied to menuplate by ref like [5].name = "there.."
console.log(original, shallowCopy);

// so to get new and diff refs , we need a deep copy

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy[5].name = "dullat"; // ok setting back to my name , coz we alredy cahnged it with shallowCopy, and yes now manuplating one does not affect other
console.log(original, deepCopy);

// TIP #######################################
// Since arrays are reference types in JavaScript,
// modifying a copy of an array (even a shallow copy) affects the original array if you’re working with objects within it.
// This is crucial for understanding how data is passed around in your program
