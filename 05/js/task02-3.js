let x = parseFloat(prompt("Введите координату X", ''));
let y = parseFloat(prompt("Введите координату Y", ''));

if (y >= x - 2
	&& x <= 0
	&& x >= -2
	&& y <= 0
	&& y >= -2
	|| y <= 1 - x) {
	alert('Точка попадает в область');
} else {
	alert('Точка НЕ попадает в область');
}