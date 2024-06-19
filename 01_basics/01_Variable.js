const account_Id=144553
let account_Email="diya@google.com"
var account_Password="12345"
account_City="Jaipur"
let account_State

// account_Id=2      //not allowed

account_Email="lavkesh@google.com"
account_Password="9537001690"
account_City="Khambhat"

/*
prefer not to use var becasue of issue in block scope and functional scope.
*/

console.log(account_Id);
console.table([account_Email,account_Password,account_City,account_State])