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
        console.log(`${product} ${category}`);
    }
    //public
    return {
        setProducts: items,
        print: show,
        isRegistred: function () {
            if (product !== undefined && category !== undefined) {
                return true;
            }
            return false;
        }
    };
})();

Product.setProducts('Samsung', 'Phone');
if (Product.isRegistred() ) {
    Product.print();
}