
// const tinderUser = new Object()   // singleton object

const tinderUser = {}                 // non singleton object

tinderUser.id = "abc123"
tinderUser.name = "Mohit"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "ome@gmail.com",
    fullName: {
        userFullName: {
            firstName: "mohit",
            middleName: "kumar",
            lastName: "pal"
        }
    }
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName.middleName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2)   //(targetObject,object1,object2,....,objectn)

const obj3 = { ...obj1, ...obj2 }

console.log(obj3);

const users = [
    {
        "id": 1,
        "email": "m@gmail.com",
    },
    {
        "id": 2,
        "email": "n@gmail.com",
    },
    {
        "id": 3,
        "email": "0@gmail.com",
    },
    {
        "id": 4,
        "email": "p@gmail.com",
    }
]

console.log(users[1].email)


console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

// const { courseInstructor } = course

const { courseInstructor: instructor } = course

console.log(instructor)