// singleton


//object literals
// Object.create()     // object creation using constructor

//using symbol
const mySym = Symbol("myKey")

const JSUser = {
    name: "Mohit",
    "full name": "Mohit Kumar Pal",
    [mySym]: "myKey1",
    age: 21,
    location: "Ranchi",
    email: "mohit@gmail.com",
    isLoggedn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JSUser.name)
console.log(JSUser["name"])
console.log(JSUser["full name"])
console.log(JSUser[mySym])

JSUser.name = "Mohit Kumar"

console.log(JSUser)

// Object.freeze(JSUser)     // to allow no changes
JSUser.name = "Mohit Kumar Pal"
console.log(JSUser)

JSUser.greeting = function () {
    console.log(`Hello JS user ${this.name}`)
}

JSUser.greeting()