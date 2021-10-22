//Main Classes

export class Items{
    id: number; 
    name: string;
    price: number;
    barcode:number;
    description: string;
    image: string;

    constructor(id: number, name: string, price: number, barcode: number, description: string, image: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.barcode = barcode;
        this.description = description;
        this.image = image;
    }
}
