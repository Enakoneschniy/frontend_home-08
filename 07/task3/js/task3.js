'use strict';

let array = (num, length) => new Array(length).fill(num);

console.log(array('x', 5));

//---

let arrayFill = (num, length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(num)
    }
    return arr;
};
console.log(arrayFill('x', 5));