const difference = ( x , y) => x - y;
const multiply = ( first , second , third )=> first * second * third ;

const getAge = (person) => person.age ;
const student = { name : 'imran' , age: 38};
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const numbersAll = [ 25, 35 , 45 , 55];
const third = getThird(numbersAll);
// console.log(third);

// single parameter
// const doubleIt = num => num *2 ;
// const doubleIt = (num) => num *2 ;


// no parameter

const getPI = () => Math.PI
console.log(getPI());


// large arrow function . if you want to get anything returnrsd from this function , you have to use the return keyward.

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z ;
    const result = sum + mult ;
    return result;
}