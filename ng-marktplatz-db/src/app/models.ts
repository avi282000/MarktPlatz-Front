//Main Classes

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
