//let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);    //its an object.

// let createDate=new Date(2005,4,4)     //months in javascript starts from 0.That explains the month June
                                      //when entered month as 5(May).moreover, in arrays only month starts from 0.
// console.log(createDate.toDateString());

// let randomDate=new Date(2005,4,4,5,3);    

// let randomDate=new Date("04-05-2005") //here month starts from 1 because it is not an array.

// console.log(randomDate.toDateString());
// console.log(randomDate.toLocaleDateString());

// console.log(randomDate);

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(randomDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(`${newDate.getDay()} and the time`);
newDate.toLocaleDateString('default',{
    weekday:"long",
})