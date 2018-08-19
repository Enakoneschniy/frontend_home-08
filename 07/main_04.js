'use strict';

let rndArray = [];
let count = 10;
for (let c = count; c > 0; c--) {
    rndArray.push(Math.round(Math.random()*10));
}
console.log(rndArray);

function foo (rndArray) {
    let sum = 0;
    for (let i = 0; i < rndArray.length; i++) {
        sum += rndArray [i];
        if (sum > 10) {
            return i + 1;
        }
        }
}

console.log(foo(rndArray));

