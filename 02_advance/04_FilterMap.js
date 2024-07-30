// const coding=["ruby","topaz","emrald","saphire"]

// const values = coding.forEach((item) => 
//     {
//         console.log(item); 
//         //return item;     
//     } )

//     console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,8,9,23,32435]
// const newmyNum = myNums.filter( (num) => num >= 5 )     //filter operations basic syntax.
// console.log(newmyNum);


// const books=
//    [{title: 'Book 1', genere:'Fiction', published:1981, edition:2004},
//     {title: 'Book 2', genere:'Non-Fiction', published:1999, edition:2019},
//     {title: 'Book 3', genere:'History', published:1967, edition:2020},
//     {title: 'Book 4', genere:'Documentary', published:1998, edition:2022},
//     {title: 'Book 5', genere:'Kids', published:1999, edition:2010},
//     {title: 'Book 6', genere:'Geography', published:2000, edition:2011},
//     {title: 'Book 7', genere:'Science', published:2004, edition:2015}]

//     const userBooks = books.filter( (bk) => bk.published <= 1999
// )
//     console.log(userBooks);



// const nums = [1,2,3,4,5,6,7,8,9,10]
// const myNums = nums
//                  .map( (num) => num * 10)
//                  .map( (num) => num + 1 )
//                  .filter( (num) => num >= 30) 
// console.log(myNums);


const mynums =[1,2,3]
const Total = mynums.reduce( function(acc , currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0 )
console.log(Total);


const shoppingcart = [
    {item:1 , price:12000},
    {item:2 , price:12200},
    {item:3 , price:22000},
    {item:4 , price:10000},
]

const priceofcart = shoppingcart.reduce( (acc,item)=> acc + item.price,0)
console.log(priceofcart);