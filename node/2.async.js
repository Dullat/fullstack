// ####### Promise ########
// Promise is a value that is not avalable yet, but will be: pending, fullfilled, rejected
const getRes = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolved");
    reject("error occured");
  }, 2000);
});

console.log(getRes); // pending
getRes.then((data) => console.log(data)).catch((err) => console.log(err)); // will log data, if resolved

// ######### fetch ########
// get data from internet

fetch("https://fakestoreapi.com/products/1")
  .then((data) => console.log(data.status)) // 200
  .catch((err) => console.log(err));

// ######### async/await ############
// just a syntatic suggar for Promise

const getProducts = async function (url) {
  try {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    if (data) console.log(res.status, data);
  } catch (err) {
    console.log(err, "\n error occured while getting products");
  }
};

getProducts();
