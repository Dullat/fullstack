// ############ object methods ############
const obj = {
  name: "dullat",
  age: "797979",
};

console.log(Object.keys(obj).includes("name"));
const values = Object.values(obj);
values.forEach((item, index) => console.log(`${index}: ${item}`));

// fun challs

function createRobo(name, power) {
  return {
    name: name,
    power: power,
  };
}

const r1 = createRobo("dullat", 4);
const r2 = createRobo("jatt", 5);

const fight = (r1, r2) => {
  if (r1.power > r2.power) console.log("someone won");
};

fight(r1, r2);
