const glass ={ 
    name: 'glass' ,
color: 'golden' ,
price : 12 ,  
isCleaned : true
}

// name: , color: , price: , isCleaned:  is  a property or keyes
//'glass', 'golden',  12,  true  is a property  value

// console.log(glass);

// to find  property or keyes

const keyes = Object.keys(glass);
// console.log(keyes);
// [ 'name', 'color', 'price', 'isCleaned' ]

// to find  property value

const values = Object.values(glass);
// console.log(values);
// [ 'glass', 'golden', 12, true ]


const pair = Object.entries(glass);
// console.log(pair);


// array of array , two dimensional array
// [
//     [ 'name', 'glass' ],  
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]


// delete glass.isCleaned;
// console.log(glass);


const { isCleaned , ...shortGlass}= glass;
// console.log(shortGlass);



// freeze
 Object.freeze(glass);
 glass.source = 'Bangladesh';

//  console.log(glass);



 // sealed

 Object.seal(glass);
 glass.source = 'Bangladesh';

 console.log(glass);