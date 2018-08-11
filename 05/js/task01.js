"use strict"

let x;
let a = +prompt("Input any number for A", '');
let b = +prompt("Input any number for B", '');

if (a > b) {
	x = a + b / 2 * 4;
}  else if (a < b) {
	x = a - b + 2 / b * 4;
} else  if (a == b) {
	x = 400;
}
alert(x);
