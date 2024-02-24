/**
* 1 . (var)  let const.
* 2. default parameter
* 3. template parameter
* 4. arrow function
* 5. destructuring and Spread operator
* 6. Object.keys , Object.values , Object.entries
* 7. for of used in array and string
* 8. for in loop used in object
 */


// 3. template parameter

const a = 56 ;
const numbers = [ 56 , 7 , 8]
const person = {
    name : ' imran hossain'
}

const message = ` Hi , I am ${person.name} and my aged ${a} years old .
 I also walking ${numbers[0]} minutes in everyday . I have a daughter aged in ${numbers[2]}`

//  console.log(message);

//  Hi , I am  imran hossain and my aged 56 years old .
//  I also walking 56 minutes in everyday . I have a daughter aged in 8




// * 4. arrow function
const square = x => x * x;
// console.log(square(5));         //  25
const sum = (a, b) => a + b;
// console.log(sum(3 , 2));        //  5






// 5. destructuring and Spread operator

const {age , z, ...others}   =  { x: 2 , y: 5, z: 3, name: 'ovijeet' , age: 55}
// console.log(age); // 55
// console.log(z);   // 3
// console.log(others);    // { x: 2, y: 5, name: 'ovijeet' }



 const [first , second, ...remaining]  = ['ram' , 'sam' , 'jodhu', 'modhu']

 console.log(first);    //  ram
 console.log(second);   //  sam
 console.log(remaining);    // [ 'jodhu', 'modhu' ]