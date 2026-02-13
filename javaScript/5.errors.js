async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    console.log(data);
    if (data) {
      throw new Error("Hi this me erroring...");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally here...");
  }
}

getData();
