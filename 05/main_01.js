'use strict';

let a = parseFloat(prompt('Input number "a", please', ''));
let b = parseFloat(prompt('Input number "b", please', ''));

let x ;
if (a > b) {
    (x = a + b / 2 * 4);
} else if (a < b) {
   (x = a - b + 2 / b * 4);
} else if (a === b) {
    (x = 400);
} else {
    alert ('You did not enter a number');
}


console.log(x);

