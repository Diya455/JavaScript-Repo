// const myarr=[1,2,3,4,5]
 
// myarr.push(6)       //this method add/pushes more new values in the current array.
// myarr.push(7)
// myarr.pop()         //delets the most recently added element from the array.
// myarr.unshift(9)    //adds the elements on the start of the array.
// myarr.shift()

// const newarr=myarr.join()
// console.log(typeof myarr);
// console.log(typeof newarr);

//++++++++++++++++++++++++++SPLICE & SPICE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("A ",myarr);
// const myn1=myarr.slice(1,3);
// console.log(myn1);

// console.log("B ",myarr);
// const myn2=myarr.splice(1,3)
// console.log(myn2);

const marvel_heroes=["ironman","thor","captain america"]
const dc_heroes=["batman","flash"]

all_heroes=marvel_heroes.concat(dc_heroes)
console.log(all_heroes);
console.log(all_heroes[3]);

//spread operator
all_finalheroes=[...marvel_heroes,...dc_heroes]
console.log(all_finalheroes);    //easy way compared to push and concat method


const another_arr=[1,2,3,[4,5,6],[6,7,[7,8]]]
const real_anotherarr=another_arr.flat(Infinity)
console.log(real_anotherarr);

console.log(Array.isArray("Diya"));
console.log(Array.from("DIYA"));


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));