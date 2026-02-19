const chalk = require("chalk");

const users = [
  { name: "dullat", age: 24 },
  { name: "jatt", age: 24 },
  { name: "deep", age: 24 },
];

const getData = new Promise((resolve, reject) => {
  console.log("Im in bruh...");
  setTimeout(() => {
    const serverUp = true;
    if (serverUp) {
      resolve(users);
    } else {
      reject({ error: "something went wrong" });
    }
  }, 0);
});

getData.then((data) => console.log(data));

const getUsers = async function () {
  try {
    const data = await getData;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const getProducts = async function () {
  try {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getProducts();
