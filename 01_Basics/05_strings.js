const name = "mohit"
const repoCount = 50

// console.log(name + repoCount + " palk")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("string-declaration-using-object")

console.log(gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
console.log(gameName.substring(0, 4))
console.log(gameName.slice(-6, -1) + gameName.charAt(gameName.length - 1))

const newStringOne = "   mohit   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())
console.log(newStringOne.trimStart())

console.log(newStringOne.replace('mo', 'ro'))
console.log(newStringOne)
console.log(newStringOne.includes('hit'))
console.log()