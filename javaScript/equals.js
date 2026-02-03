console.log(0.99999999999999999999999999999);
console.log([0, 1] == 0, 1);

console.log("1,2" == [1, 2]);

// [0,1] == 0
// ↓
// [0,1].toString() → "0,1"
// ↓
// Number("0,1") → NaN
// ↓
// NaN == 0 → false

console.log({} == 1); // gives NaN : "[Object, Object]" -> NaN

console.log(NaN == NaN);
console.log(Number.isNaN(NaN));

console.log(
  null == undefined,
  "null == to undefined always give true, coz its exception and creator wanted it",
);

console.log(undefined == undefined);

// in non primitive memorys are also checked, so memory is not same so its false

console.log(Object);
console.log({} == {});
console.log({} == [], "not same {} != []");
console.log([1] == [1]); // false coz ref is diff , if [1] == 1 is true coz here iits in string then number
