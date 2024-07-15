//Memories are of two types: Stack Memory(Primitive) and Heap Memory(Non-Primitive).
let youtubename="Diya shah";
let anotherytname=youtubename  //calling above varaible into another variable.
anotherytname="chaiaurcode";
console.log(anotherytname);
console.log(youtubename);

let userone={
    email:"userone@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="diya@google.com";

console.log(userone.email);
console.log(usertwo.email);
