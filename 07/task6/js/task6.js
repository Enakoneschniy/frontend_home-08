'use strict';

let arr = [[5, 1, 4], [2, 8, 6], [7]];
let result = 0;
for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
        result += arr[a][b];
    }
}
console.log(result);