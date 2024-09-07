let score=undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (Number)
// true => 1, false => 0

let isLoggedIn= ""
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1-> true, 0-> false
// "" -> false
// "Mohit" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//********************************************  Operations  *************************/
let value= 3
let negValue= -value
console.log(negValue)


let str1 = "Hello"
let str2 = " Mohit"

let str3 = str1+str2

console.log(str3)

console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")

// these are not good practices

console.log(+true)
console.log(+"")
console.log(+"hi") // -> conversion to number using '+'

let num1,num2,num3

num1= num2=num3 = 2+2

console.log(num1,num2)

let gameCounter= 100
++gameCounter;

console.log(gameCounter)


console.log(2<1)
console.log("2">1)
console.log("2"<1)
console.log("02">1)

console.log(null>=0)
console.log(null==0) // works completely different then comparison operators.  
//  null is only equal to undefined when using == and not equal to any other value, including 0.
console.log(null<0)  //  When comparing null with a number, JavaScript first converts null to a number.

// avoid these type of conversion





