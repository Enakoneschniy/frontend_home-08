'use strict';

function foo (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i][j].length; k++) {
                sum += arr[i][j][k];
            }
        }
        }
        return sum
    }

console.log(foo([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));

