
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)

//function with a return value
function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(5, 4)

console.log("Result: ", result)

function loginUserMessage(username) {
    if (username === undefined) {    // !username
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Mohit"))
console.log(loginUserMessage())