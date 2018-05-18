'use strict';

function Product() {

    this.item1 = "item1";
    this.item2 = 'item2';

    this.show = function() {
        console.log(`${this.item1} price is 204$ and ${this.item2} price is 30$"`);
    }
}


let samsung = new Product();

console.log(samsung.item1);

console.log(samsung.item2);

samsung.show();
