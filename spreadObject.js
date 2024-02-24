const person ={
    name: ' imran',
    age : 36,
    phone : '01815981606',
    p : [ 1, 0 ,2 ,3 ,4 ,5]
    address : {
        zilla : 'rajshahi',
        village : 'gouripur'
    }
}

// const {p , name, ...rest}    = person;
// console.log(name);
// console.log(rest);

// const { phone: mobile} = person
// console.log(mobile);

const { address:{zilla}} = person;
console.log(address);