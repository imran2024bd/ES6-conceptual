/*
truthy :
1. true
2. any number ( +ve , -ve) will be truthy other than 0
3. any string other than empty string
4. 'false' , '0' , {} ,  []

falsy:
1. false
2. 0
3. ''  ( empty string)
4.  undefined
5.  null

 */




// const x = 'false';
// const x = '0';
// const x = ' ';
// const x = '';
// const x = 'imran';
// const x = 0;
// const x = 4;
// const x = -4;
// const x = true;
// const x = false;
// if(x){
//     console.log(' The value of x is truthy');
// }

// else {
//     console.log('The value of x is falsy');
// }

// let x =  [5 , 6] ;
// let x =  [] ;
// let x = { a: 2 , b: 5} ;
// let x = {} ;
// let x = null ;
// let x ;
// console.log(x);

// if(x){
//     console.log(' The value of x is truthy');
// }

// else {
//     console.log('The value of x is falsy');
// }


// optional
// check falsy
// if(x === false)
// const y = null ;
// if(!y){
//     console.log('value is falsy');
// }

// check truthy

const z = ' ';
if (!!z){
    console.log('value is truthy');
}