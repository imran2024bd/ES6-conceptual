const numbers   =   [12, 10, 8, 15, 7];
const doubled   =   numbers.map(num => num * 2);
// console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const minusSix = numbers.map(n => n -6);
// console.log(minusSix);

const halves = numbers.map( n => n / 2);
// console.log(halves);


const friends = ['Tom' , 'John' , 'Micheal', 'Oliver'];
const lengths = friends.map(frd => frd.length);
console.log(lengths);
const firstLetter = friends.map( friend => friend[0]);
console.log(firstLetter);