//+++++++++++++++++++++++++++++++++++++++++OBJECT LITERALS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const mySym=Symbol("key1")


// const JsUser=
// {
//     name:"Diya",
//     age:19,
//     Location:"Surat",
//     EmailId:"diyu455@gmail.com",
//     isLoggedIn:false,
//     LastLiginDays:["Monday","Saturday"],
//     [mySym]:"key1"
// }
// console.log(JsUser.Location);
// console.log(JsUser.EmailId);     //basic method but not correct to use.
// console.log(JsUser["EmailId"]);  //appropriate method to be used.Also giving it as an argument.
// console.log(typeof[mySym]);

// JsUser.EmailId="diyashah455@gmail.com"
// Object.freeze(JsUser)                    //this allows no change to occur in the object once changes are already made.
// JsUser.EmailId="microsoftuser@gmail.com"
// console.log(JsUser);

// JsUser.greeting=function()
// {
//     console.log("Hello from JS!");
// }
// JsUser.greetingtwo=function()
// {
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());


//+++++++++++++++++++++++++++++++OBJECT SINGLETON+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  const tinderUser=new Object()     //singleton object
// {
//     tinderUser.name="diya",
//     tinderUser.id="123",
//     tinderUser.email="diya@gmail.com"
// }
// // console.log(tinderUser);

// // const tinderUser={}               //non-singleton object
// // console.log(tinderUser);

// const regularUser=
// {
//     name:"abc",
//     fullname:
//     {
//         userfullname:"diya",
//         userid:"123abce",
//         useranotherid:
//         {
//             idname:"fgh345"
//         }
//     }
// }
// // console.log(regularUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//++++++++++++++++++++++++++++++++++++++++++++++++++++END++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const course=
// {
//     courseName:"JS",
//     courseInstructor:"Diya",
//     cousrsePrice:"999"
// }
// // console.log(course.courseName);

// const {courseInstructor:A}=course
// console.log(A);                    //this is called deconstructing of objects.


{
    "name":"Diya",
    "courseName":"JS",
    "coursePrice":"999"
}