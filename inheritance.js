class vehicle {
    constructor ( name , price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log(' Gari mpves to another palace');
    }
}

class Bus extends vehicle{
    constructor(name , price, seat, ticketPrice)
    {
        super(name , price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
    }

}

class Truck extends vehicle {
    constructor (name , price , load){
        super ( name , price);
        this.load = load;
    }
}