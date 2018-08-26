'use strict';

let arr = [2, 1, 0, 5, 1, 3, 7, 8, 9];

let checkSum = (arr, num) => {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (acc > num) {
            return i;
        } else {
            acc += arr[i];
        }
    }
};
console.log(checkSum(arr, 10));