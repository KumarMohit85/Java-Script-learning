const marvel_heroes = ["captain_america", "iron_man", "thor"]

const dc_heroes = ["batman", "superman", "flash", "wonder_women"]

// marvel_heroes.push(dc_heroes)     // changes original array

console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

// const allHeroes = marvel_heroes.concat(dc_heroes) // creates and return new array

// console.log(allHeroes)

//using spread operator

// const allHeroes2 = [...marvel_heroes, ...dc_heroes]
// console.log(allHeroes2)

marvel_heroes.push(...dc_heroes)

console.log(marvel_heroes)

const anotherArray = [1, 2, 3, 4, [5, 6, 7, 8], 9, 10, [11, 12, [13, 14, 15, [16, 17, 18]], 19], 20]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Mohit"))
console.log(Array.from("Mohit"))
console.log(Array.from({ name: "Mohit" }))      // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


