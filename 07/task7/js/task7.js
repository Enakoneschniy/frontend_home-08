'use strict';

let arr = [[[5, 1, 4], [2, 8, 6]], [[4, 7, 2], [7, 5, 1, 6]]];
let result = 0;
for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
        for (let c = 0; c < arr[a][b].length; c++) {
            result += arr[a][b][c];
        }
    }
}
console.log(result);
