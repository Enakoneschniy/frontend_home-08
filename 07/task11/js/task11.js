'use strict';

let isEven = i => i % 2 === 0;

const arr = [33, 6, 10, 1, 15, 3, 45, 8, 26, 17];
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i]) === false) {
        continue;
    }
    arrNew.push(arr[i]);
}
console.log(arrNew);