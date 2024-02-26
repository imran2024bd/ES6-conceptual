
//  task -01 
// function sum(a, b, c) {
//     const result = a + b + c;
//     return result;
// }

// const total = sum ( 45, 89 , 12);
// console.log(total);


// arguments for looking rest of the elements
// arguments is an array like of objects


//  task -02

// function sum(a, b, c) {
//     console.log( typeof arguments); 
//     // console.log(arguments[4]); 
//     // console.log(arguments);  // [Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }
//     const result = a + b + c;
//     return result;
// }

// const total = sum ( 45, 89 , 12 , 45 , 98 , 56);
// console.log(total);


// function sum(a, b, c) {
//     // arguments.push(45) ; // arguments.push is not a function
//     const arg = [...arguments]; // create array with the value of objects.  =>  [ 45, 89, 12, 45, 98, 56 ]
//     console.log(arg);
//     const result = a + b + c;
//     return result;
// }

// const total = sum ( 45, 89 , 12 , 45 , 98 , 56);
// console.log(total);

// to find how many parameter exist in a function
function sum(a, b, c) {
    const result = a + b + c;
    return result;
}
const total = sum ( 45, 89 , 12 , 45 , 98 , 56);
// console.log(total);
// console.log(typeof sum);

console.log(sum.length);  //  parameter exist in a function  => 3 (a, b, c)