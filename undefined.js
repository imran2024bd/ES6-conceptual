
// 8 ways to get undefined
// 1.  variable that is not initialized will give undefined
// 2.  function with no return.
// 3.  parameter that is not passed will be undefined
// 4.  if return has nothing on the right side will return undefined
// 5.  property that doesnot exists on an object will give you undefined
// 6.  accessing array elements outside of the index range
// 7.  deleting an element inside an array
// 8.  set a value directly to understand

// No. 01
let first;
// console.log(first);

// No. 02
function second(a , b) {
    const total = a + b;
}
const result = second();
// console.log(result);


// No. 03

function third(a , b, c, d) {
    const total = a + b + c + d ;
    // console.log( a , b, c, d);
}
third ( 2 , 3);


// No. 04
function noNegative(a , b) {
    if( a < 0 || b < 0 ){
        return
    }
    return a + b;
}
const total = noNegative( 2 , -5);
// const total = noNegative( 2 , 5);
// console.log(total);


// No. 05

const fifth = { id: 2 , name: 'ponchom' , age : 40}
// console.log(fifth.age , fifth.salary);


// No. 06

// const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[1], sixth[4] , sixth[200]);


// No. 07
const sixth = [4, 89, 87, 56, 54];
// you should not do it, instesd use of splice
delete sixth[1];
// console.log(sixth[1], sixth[4] , sixth[200]);
// console.log(sixth);

// No. 07
const eigth = undefined ;
const ninth = null ;
const data = { results : [] , update: null}
// console.log(typeof undefined);
console.log(typeof null);