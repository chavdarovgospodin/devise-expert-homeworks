'use strict';

let Product = (function () {
    //private
    let product;
    let category;

    function items(pname, cname) {
        product = pname;
        category = cname;
    }

    function show() {
        console.log(`${product} ${cateogry}`);
    }
    //public
    return function(product,category) {
        items(pname,cname);
        this.print = show;
        this.setNames = items;
        this.isRegistered = function(){
            if (product !== undefined && category !== undefined){
                return true;
            }
            return false;
        }
        
    };
})();


let a = new Product ("Samsung", "Phone");
a.print();

a.setNames('Lenovo', 'Laptop');

if (a.isRegistered() ){
    a.print();
}
