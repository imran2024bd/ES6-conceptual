// data access

//  task -01
const data = [{id:1 , name: 'abul' , address: 'kochu khet'}]


// console.log(data);
// console.log(data[0]);
// console.log(data[0].address);



//  task -02
const products = {
    count : 5000,
    data: [
        { id: 1, name: 'lenovo laptop' , price: 65000},
        { id: 1, name: ' macbook' , price: 165000},

    ]
}

// to find second product price

// console.log(products.data[1].price);


//  task -03

const user = {
    id : 5001,
    name : 'shoriful Raj',
    address :{
        street : {
            first: '54/1 uttor side',
        second: 'porirbag er goli',
        third : ' no dorai'
        }
    },
    City : 'Dhaka'
}

// to find second line of address 

console.log(user.address.street.second);



