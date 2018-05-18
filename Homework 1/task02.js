'use strict';

const Product = {
    item1: "Samsung",
    item2: "Iphone",
    show: function () {
        console.log(`${this.item1} ${this.item2}`);
    }
}

Product.show();