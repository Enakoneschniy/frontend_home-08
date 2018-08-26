'use strict';

let isNumberInRange = num => num > 0 && num < 10;

const arr = [4, 63, 7, 0, 9, 11, 5, 98, 2, 33, 6, 10, 1, 15, 3, 45, 8, 26];
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i]) === false) {
        continue;
    }
    arrNew.push(arr[i]);
}
console.log(arrNew);