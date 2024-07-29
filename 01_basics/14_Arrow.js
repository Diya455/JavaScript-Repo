// const user=
// {
//     username:"Diya",
//     price:999,
//     welcomeMessage:function()
//     {
//         console.log(`${this.username} , Welcome to the website.`);   
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username="samm"
// user.welcomeMessage()

// function one()
// {
//     let username="Diya"
//     console.log(this.username);
// }
// one()

// const one=function()
// {
//     let username="Diya"
//     console.log(this.username);
// }
// one()

// const one=() =>
// {
//     let username="Diya"
//     console.log(this.username);
// }
// one()

// const addtwo=(num1 ,num2) => 
// {
//     return num1+num2
// }
// console.log(addtwo(3,4));

const addtwo=(num1 ,num2) => (num1+num2)             //explicit method.
    console.log(addtwo(3,4));