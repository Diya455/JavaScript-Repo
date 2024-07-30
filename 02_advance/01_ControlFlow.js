// operators: >,<,>=,<=,== is equal to,!= is not equal to,=== checks the strict equivalance,!== anti strict equivalance.

// if(2==="2")
// {
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }

//++++++++++++++++++++++++++++++++++++++++++++SWITCH CASE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const month =3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         //break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default case matched.");
//         break;
// }                 //basic syntax

//falsy values are: 0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values are:true,"0",'false'," ",[],{},function(){}

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0)
// {
//     console.log("Object is empty");
// }

//+++++++++++++++++++++++++++++++++++++++NULLISH COALESCING OPERATOR(???)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let val1;
val1=5 ?? 10;
console.log(val1);

let val2
val2=null ?? 10;
console.log(val2);

//++++++++++++++++++++++++++++++++++TERNEARY OPERATOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//condition ? true :false    --syntax

const iceTeaPrice=100
iceTeaPrice<80 ? console.log("affordable") : console.log("not affordable");

