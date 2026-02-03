let s1 = "A"; // 1 code unit
let s2 = "💩"; // 2 code units
console.log(s1.length); // 1
console.log(s2.length); // 2

let str = "hello";

str[0] = "y"; // not gonna work, coz strs are immutable
console.log(str);

// access the strings

console.log(
  str[1],
  str.charAt(0),
  "strs can be treated as arrays for reading purpose",
);

// unicode and surrogate pairs UTF-16
let s = "💩"; // U+1F4A9 some emojis take 2 code units
console.log(s.length); // it gives length 2
console.log(s.charAt(0), s[1]);

// looping over string
let sloop = "hello world";
for (let ch of sloop) console.log(ch);

// ############ string oprations ############
//
// concat, str + str, js uses rope structures rather the just copying one on another; but may copy wher needed

let concated = str + "hahah";
console.log(concated);

// slice

let sliced = concated.slice(2, -1); // slice(start, end)
console.log(sliced, concated);

// substring

let sliced2 = concated.substring(2, 4); // this one is old method , no negative, also swap automatically if substring(4,2) -> substring(2,4)
console.log(sliced2);

// charAt

console.log(str.charAt(2));

// includes

console.log(str.includes("hello"));

// replace

const replaced = str.replace("he", "rrrr");
console.log(replaced, str);

// split

const splitted = "hy, its me".split(",");

console.log(splitted, typeof splitted); // typeof , its js being js, the correct way is isArray
console.log("is array?", Array.isArray(splitted));

// reverse a string

console.log("hello world".split("").reverse().join(""));

// ########## primiteve strs vs object strings #########
let objStr = new String("hello").toUpperCase();
console.log(objStr, typeof objStr);

// console.log(str.toUpperCase()); // "ABC", primitive strs are auto boxed
// JS internally does: new String(str).toUpperCase()

// these are different

console.log(new String("hello") === "hello"); // false, coz one has become object , you have to use ==
console.log(new String("hello") == new String("hello")); // false, even if == is used, coz ref is diff
