const Score=100;
const scoreValue=10.56;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
console.log(userEmail);
console.log(isLoggedIn);
const Id=Symbol('123');                  //though both id and anotherid's value is same as-Symbol('123')
const anotherId=Symbol('123');             //but the value doesnt return to be true. Instead it is false.
console.log(Id===anotherId);

const bigNumber=1235627810029223898n;       //adding 'n' at the end of a big integer number makes the number
                                            //automatically convert into BigInteger.
const heroes=["Spiderman","IronMan","Thor"];
let myobj1
{
    name:"Diya";
    age:19;
}

//declaring Function as a Variable
const myFunction=function()
{
    console.log("Hello World!");
}
console.log(typeof bigNumber);
console.log(typeof myFunction);