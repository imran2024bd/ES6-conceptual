// const numbers = [ 4, 5, 2, 8, 10]


// manual way
// const doubled = [];
// for ( const num of numbers){
//     const double = num * 2 ;
//     doubled.push(double)
// }

// console.log(doubled);

// map => loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array .

// using map 

const numbers = [ 4, 5, 2, 8, 10]

function doubleIt(num) {
    // console.log('num is', num);
    return num * 2 ;
}
const result = numbers.map(doubleIt);
// console.log(result);





// using arrow function
const double2 = n   => n *2 ;

const output = numbers.map(double2);
// console.log(output);



// Directly using arrow function in a map

const output2   =   numbers.map( n => n * 2);
//  
le.log(output2);



Map ( value , index , inputted Array)







