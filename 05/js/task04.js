"use strict"

var num1 = parseFloat(prompt('Введите первое число', ''));
var num2 = parseFloat(prompt('Введите второе число', ''));
var max;

if (num1 > num2) {
	max = num1;
	alert('Максимальное число ' + max);
} else if (num2 > num1) {
	max = num2;
	alert('Максимальное число ' + max);
}
