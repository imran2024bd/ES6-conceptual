// always use ===
// equal comparison does not work for non-primitive



// const first = 2 ;
// const second = 2 ;
// if(first == second){
//     console.log('values are equal');
// }
// else{
//     console.log('values are not equal');
// }

// ********************************************************

// const first = 2 ;
// const second = '2' ;
// if(first == second){
//     console.log('values are equal');
// }
// else{
//     console.log('values are not equal');
// }

// ***************************************************************

// const first = 0 ;
// const second = false;
// // const first = 1 ;
// // const second = true;
// if(first === second){
//     console.log('values are equal');
// }
// else{
//     console.log('values are not equal');
// }
// const first = 2 ;
// const second = '2' ;
// if(first == second){
//     console.log('values are equal');
// }
// else{
//     console.log('values are not equal');
// }

// type coercion
// type conversion
// type casting



// const first = {x: 5} ;
// const second = {x: 5};
// // const first = {} ;
// // const second = {};
// // const first = [] ;
// // const second = [];
// if(first === second){
//     console.log('values are equal');
// }
// else{
//     console.log('values are not equal');
// }



const first = [] ;
const second = first;
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}