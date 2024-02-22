const max = Math.max( 2, 3, 22 , 25, 8, 89);
// console.log(max);

const numbers = [2, 3, 22 , 25, 8, 89];
// console.log(...numbers);
const arrayMax = Math.max(...numbers);
// console.log(arrayMax);


// use spread operator to copy

const friends = [ 4, 5, 87, 9];
const bondhu = friends;
// bondhu.push(12);
// console.log(bondhu);
// console.log(friends);

// const dosto = [friends];
// console.log(dosto);


const dosto = [...friends];  // copy of array elements
// console.log(dosto);


friends.push(100);
console.log(friends);
console.log(dosto);


// advance 

const songkha = [ ...friends , 9999]; // add extra element while copy
console.log(songkha);