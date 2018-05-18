'use strict';

function Product () {
    this.__product = '';
    this.__category = '';

    this.show = function (){
        console.log(`${this.product} ${this.category}`)
    }
}

Object.defineProperty (Product.prototype, 'product',{
    set: function(prod) {
        this.__product = prod;
    }
    ,get: function (){
        return this.__product;
    }
});

Object.defineProperty (Product.prototype, 'category',{
    set: function(cat) {
        this.__category = cat;
    }
    ,get: function (){
        return this.__category;
    }
});

let a = new Product ();

a.product = 'Samsung';
a.category = 'Phone';

console.log (`${a.product} ${a.category}`);