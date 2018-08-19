'use strict';

function isNumberInRange(a) {
    return a > 0 && a < 10;
}

const arr = [2, 10, 85, 6, 15, 1, 0, 8, 5, 3];
const result = [];

for (let i = 0; i < arr.length; i++){
    if (isNumberInRange(arr[i])) {
        result.push(arr[i]);
    }
}

console.log(result);



