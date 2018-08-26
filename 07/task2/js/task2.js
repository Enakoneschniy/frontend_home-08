'use strict';

const arr = [];

for (let a = 1; a <= 10; a++) {
    let acc = "";
    for (let b = 1; b <= a; b++) {
        acc += a;
    }
    arr.push(acc);
}
console.log(arr);