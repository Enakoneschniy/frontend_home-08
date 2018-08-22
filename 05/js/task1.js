'use strict';

let a = parseInt(prompt('Введите a:', ''));
let b = parseInt(prompt('Введите b:', ''));
let x;

if (a < b) {
    x = a - b + 2 / b * 4;
} else if (a > b) {
    x = a + b / 2 * 4;
} else {
    x = 400;
}
console.log(x);