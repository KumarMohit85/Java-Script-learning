// Primitive datatypes

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt
const score= 100
const scoreValue=100.3

const isLoggedIn= true
const outsideTemp=null
let userEmail

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId)

const bigNumber= 22333446565644223443252144252n


// Reference (Non primitive)

// arrays,objects,functions

const heroes =["shaktimaan","naagraj","doga"]
let myObj = {
    name:"mohit",
    age:22
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
console.log(typeof myFunction)
console.log(typeof heroes)
console.log(typeof myObj)