"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(item, quantity) {
        this._item = item;
        this._quantity = quantity;
    }
    Object.defineProperty(Product.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (quantity) {
            this._quantity = quantity;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        var print = this.item + " " + this.quantity;
        return print;
    };
    return Product;
}());
exports.Product = Product;
