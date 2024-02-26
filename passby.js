// primitive are pass by values

let num1 = 5 ;
let num2 = 7 ;

function multiply( a , b) {
    // a = 27;
    const result = a * b ;
    rrimitiveeturn result;
}

const output = multiply(num1 , num2);
// console.log(output);


// object and array are pass by reference


let student1 = { name: 'jalil' , partner: 'borsha'};
let student2 = { name: 'Raj' , partner: 'anika'};

function makeMovie(couple1 , couple2) {
    couple1.name = 'Ononto';
    couple2.partner = 'Nusrat'
}

console.log(student1 , student2);
makeMovie(student1 , student2);
console.log(student1 , student2);
