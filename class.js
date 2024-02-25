const products = [
    {id : 1 , name: 'lenovo' , price : 65000},
    {id : 2 , name: 'dell' , price : 45000},
    {id : 3 , name: 'hp' , price : 40000},
    {id : 4 , name: 'mac' , price : 150000},
]


//

class product {
    country = 'Bangladesh';
    constructor (name){
        this.name = name;
    }
    
    speak (talk){
        console.log(`you are talking about ${talk}`);
    }
}


// const lenovo =new product (' Le le lenovo')
// console.log(lenovo);
// lenovo.speak(` i m to obasta`)


class teacher{
    constructor(name , subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}

const tapan = new teacher ( 'Tapon sir' , 'Physics');
console.log(tapan);

const rashid = new teacher('Rashid' , 'English');
console.log(rashid);



