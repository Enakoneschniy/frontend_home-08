'use strict';

let arr = [1, 2, 3, 4, 5, 6];
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arrNew[i] = arr[i - 1];
    } else if (arr[i] % 2 !== 0) {
        arrNew[i] = arr[i + 1];
    }
}
arr = arrNew;
console.log(arr);