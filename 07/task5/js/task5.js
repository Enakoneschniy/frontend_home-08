'use strict';

let arr = [4, 9, 2, 5, 8, 1, 6, 3, 7];
let arrAcc = [];

for (let i = arr.length; i > 0; i--) {
    arrAcc.unshift(arr.shift());
}
console.log(arrAcc);