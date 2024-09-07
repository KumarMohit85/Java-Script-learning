const accountId=14453
let accountMail = "mohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"         // not a good practice
let accountState;
// accountId=2  -> this is not allowed because  const variables cannot be reassigned
accountMail= "mohit2@gmail.com"
accountPassword= "54321"
accountCity= "Ranchi"

/* 
prefer not to use var , because var is functional scope and let is block scope
*/
console.table([accountId,accountMail,accountPassword,accountCity,accountState])