"use strict"

let x = parseFloat(prompt("Введите координату X", ''));
let y = parseFloat(prompt("Введите координату Y", ''));

if (y >= 0
	&& y <= 4
	&& x >= -4
	&& x <= 0
	&& y <= x + 4) {
	alert('Точка попадает в область');
} else  if (y >= 0
	&& y <= 4
	&& x >= 0
	&& x <= 4
	&& y <= 4 - x) {
	alert("Точка попадает в область");
} else {
	alert("Точка НЕ попадает в область");
}