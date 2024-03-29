// filter : selects elements based on a condition and return an array with the element that fulfilled the condition.
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter( n => n > 70);
// const selected = players.filter( n => n > 50);
// const selected = players.filter( n => n > 80);

// findings odd number
// const selected = players.filter( p => p % 2 === 1 );
// findings even number
const selected = players.filter( p => p % 2 === 0 );

// console.log(selected);

// total number of letter of each name which are odd
// const friends = ['Tom' , 'John' , 'Micheal', 'Oliver'];
// const oddFriend = friends.filter(friend => friend.length);
// console.log(oddFriend);
// console.log(friends.length);


// total number of letter of each name which are odd
// task -02
const friends = ['Tom' , 'John' , 'Micheal', 'Oliver' , 'Tim' , 'Joshna'];
const oddFriend = friends.filter(friend => friend.length > 4);
console.log(oddFriend);
