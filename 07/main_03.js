'use strict';

function arrayFill(num, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(num);
    }
    return arr;
}

console.log(arrayFill('x', 5));