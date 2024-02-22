const actor = {
    name: 'Imran',
    age: 38,
    phone: ' 01719 118588',
    money: 123456789
}

// if right side is an object left side of destructuring will be object as well

// console.log(actor.age);
// console.log(actor.phone);





// manual
// const phone = actor.phone;
// const age = actor.age;
// console.log(phone);
// console.log(age);


// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value


// const {phone , age} = actor;

// console.log(phone);
// console.log(age);

// const {phone , age: boyos} = actor;

// console.log(boyos);


// array destructuring
const numbers = [45, 99];
const [first , second] = numbers;
const [x , y] = [12, 66];

// console.log(first , second , x);


//using function  create array

function doubleThem(a , b) {
    return [a*2 , b*2];
}
// console.log(doubleThem(4 , 5));


const myObject = {
    student: 'Mike',
    teacher: 'Suchan'
};

const { student: pupil , teacher: prof} = myObject;
// console.log(pupil , prof);

const { student , teacher} =myObject;
// console.log(student , teacher);

const employee = {
    id: 007 ,
    name: 'imran',
    dept: 'stat'
}

const id = employee.id;
const name = employee.name;

// const { id, name}= employee;
console.log(id, name);




