//Main Interfaces

export class Items{
    id: number; 
    name: string;
    price: number;
    barcode:number;
    description: string;

    constructor(id: number, name: string, price: number, barcode: number, description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.barcode = barcode;
        this.description = description;
    }
}

export class Users{
    user_id: number; 
    username: string;
    email: string;
    wallet: string;

    constructor(id: number, username: string, email: string, wallet: string){
        this.user_id = id;
        this.username = username;
        this.email = email;
        this.wallet = wallet;

    }
}
