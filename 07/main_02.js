'use strict';

let arr = [];

for (let n = 1;  n <= 20;  n++) {
    let num = '';
    for (let m = 1;  m <= n;  m++){
        num += n;
    }
    arr.push(num);
    }

console.log(arr);
