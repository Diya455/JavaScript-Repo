let score = false

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


//when converting a number=33 it easily converts 
//but numbers like 33abc are difficult to convert
//"33"=33
//"33abc"=NaN i.e Not a Number
//true=1; false=0

let isLoggedIn = "Diya"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

//when boolean value is 1 it gives output as true
//when boolean value is 0 it gives output as false
//when entered "" output came out to be false
//when entered "Diya" output came out to be true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)