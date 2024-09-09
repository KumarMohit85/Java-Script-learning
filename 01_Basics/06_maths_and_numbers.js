const score = 400
// console.log(score)

const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(1))

const otherNumber = 23.456789
// console.log(otherNumber.toPrecision(4))

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-US'))



//++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.8))
console.log(Math.ceil(4.2))
console.log(Math.min(1, 2, 3, 4, 5, 6))
console.log(Math.max(1, 2, 3, 4, 5, 6))

console.log(Math.random())  // gives a value between 0 to 1
console.log(Math.random() * 10 + 1)  // if we want a value between 1 to 10  (+1 because floor value of 0.1 will give 0)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
