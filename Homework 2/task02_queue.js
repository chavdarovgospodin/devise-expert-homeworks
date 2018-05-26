"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.put = function (el) {
        this.array.push(el);
    };
    Queue.prototype.get = function () {
        var firstElement = this.array.shift();
        return firstElement;
    };
    Queue.prototype.remove = function (el) {
        return this.array.reduce(function (T) { return T; });
    };
    return Queue;
}());
exports.Queue = Queue;
