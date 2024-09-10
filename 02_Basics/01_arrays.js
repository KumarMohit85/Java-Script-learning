// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["shaktimaan", "naagraj"]

console.log(myArr)
console.log(myArr[0])

const myArr2 = new Array(1, 2, 3, 4)

// myArr2.push(5)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

console.log(myArr2)
console.log(myArr2.includes(2))
console.log(myArr2.includes(9))

const newArr = myArr2.join()

console.log(newArr)
console.log(typeof newArr)

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(2, 4)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 5)   // change in original array

console.log(myn2)
console.log("B ", myArr)




