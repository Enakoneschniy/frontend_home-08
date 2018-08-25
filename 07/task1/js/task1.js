'use strict';

let arr = [];
let element = 'x';
let acc = "";
for (let n = 0; n <= 10; n++) {
    acc = acc + element;
    arr.push(acc);
}
console.log(...arr);