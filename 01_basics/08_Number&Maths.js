//++++++++++++++++++++++++++++++++++NUMBERS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const score=400
// console.log(score);

const balance=new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber=23.8669
// console.log(otherNumber.toPrecision(2));   //this property returns the closest value to the input number. 
                                             //eg- given here is two so the number obtained will be only of total no=2.
// console.log(otherNumber.toExponential(5));

const newNumber=1000000;
// console.log(newNumber.toLocaleString('en-IN'));    //converts the number to local standard method of number system.

//+++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-39812));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));    //takes the bigger number values round up.
// console.log(Math.floor(4.2));   //takes the smaller number values round up. 

console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor((Math.random()*(min-max+1)))+min);
