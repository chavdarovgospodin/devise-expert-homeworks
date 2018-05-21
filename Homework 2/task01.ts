
export class Product {
    private _item: string;
    private _quantity: number;

    constructor(item: string, quantity: number) {
        this._item = item;
        this._quantity = quantity;
    }

    set item(item: string){
        this._item = item;
    }

    set quantity(quantity: number){
        this._quantity = quantity;
    }

    get item():string{
        return this._item;
    }

    get quantity():number{
        return this._quantity;
    }

    toString():string {
        let print = `${this.item} ${this.quantity}`
        return print;
    }

}

