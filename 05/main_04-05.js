'use strict';

let num1 = parseFloat(prompt('Input a first number, please', ''));
let num2 = parseFloat(prompt('Input a second number, please', ''));


if (num1 > num2) {
    alert ("The first number " + num1 + " is larger than the second!");
} else if (num1 < num2) {
    alert ("The second number " + num2 + " is larger than the first!");
} else if (num1 === num2) {
    alert ('You entered the same numbers');
} else {
    alert ('You did not enter a number');
}
