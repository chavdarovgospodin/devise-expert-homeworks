'use strict';


Array.prototype.findMin = function () {
    let min = this[0];

    for (let i = 0; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i]
        }

    }
    return min;
};

Array.prototype.findMax = function () {
    let max = this[0];

    for (let i = 0; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i]
        }

    }
    return max;
};


let array1 = [2, 5, 8, 1, 3, 14, 25, 7, 25, 9];


console.log("the smallest number is " + array1.findMin());

console.log("the largest number is " + array1.findMax());