sum(89,8)
sum() // undefined undefined , no error
//someFun() // no hoisting for arrow , will give error

// function and calling
function sum(a, b) {
    console.log(a, b)
}

sum(34, 89)
sum() // undefined undefined , no error

// arrow functions , these are not hoisted
const someFun = () => {
    console.log("im arrow fun")
}

// tex calc
const taxCalc = (amount) => amount + (amount * .18)
const tablePrinter = (n) => {
    for(let i = 1; i <= 10; i++){
        console.log(i * n)
    }
}

const obj = {
    length: 10
}

console.log(Array.from(obj))

Array.from({length: 10}, (_, i) => {
    console.log(i)
})

console.log(Array.from([]))

// [...Array(5)].forEach((_, i) => {
//   console.log(i)
// }) // this is also something


console.log(taxCalc(1000))
console.log(tablePrinter(2))

// fun returning fun
function giveFun() {
    let 
    return () => {
        console.log("hahahah")
    }
}

const rec = () => {}

console.log(giveFun()()) // or const fun = givenFun() then fun()

