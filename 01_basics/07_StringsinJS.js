const name="Diya"
const repoCount=50
// console.log(name + repoCount + " Value");    //this is old method and not productive.

console.log(`Hello from ${name} to all ${repoCount}`);  //better way to concat two strings.

//string methods:-
const gameName=new String('diyashah');
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,5);   //here the end number is 5 but we get the output only upto 4th number.
console.log(newString);

const anotherString=gameName.slice(-8,4);   //here the end number is 5 but we get the output only upto 4th number.
console.log(anotherString);

const newStringOne="   DiyaShah   ";
console.log(newStringOne.trim());     //simply eliminates the extra space that is not required.

const url="https://diyashah.com%20shah";
console.log(url.replace("diyashah","onlyshahs"));
console.log(url.includes('1234'));
console.log(url.includes('://'));           //checks wether the value is in it or not.