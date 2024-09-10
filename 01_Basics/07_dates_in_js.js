//Dates

let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2024, 8, 9)        // (year,month-1,day)

// console.log(myCreatedDate)
// console.log(myCreatedDate.toString())
// console.log(myCreatedDate.toISOString())
// console.log(myCreatedDate.toLocaleString())


let myCreatedDate = new Date("09-10-2024")        // ("month-day-year")

console.log(myCreatedDate)
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toISOString())
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime())  // the number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC (the Unix epoch) for a given Date object, myCreatedDate



let myCreatedDateTime = new Date(2024, 8, 9, 11, 0)     // (year,month-1,day,hour,minute)
console.log(myCreatedDateTime)
console.log(myCreatedDateTime.toString())
console.log(myCreatedDateTime.toISOString())
console.log(myCreatedDateTime.toLocaleString())

console.log(myCreatedDateTime.getDay())
console.log(myCreatedDateTime.getMonth())
console.log(myCreatedDateTime.getYear())

let date = myCreatedDateTime.toLocaleString('default', {
    weekday: "narrow",

})

console.log(date)



