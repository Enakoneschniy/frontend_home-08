'use strict';
var number = Math.round(Math.random() * 10);
var pop = 3;

function guessNumber() {
	var guess = document.getElementById('input').value;
	var result = document.getElementById('result');

	if ( pop === 0 ) {
		result.innerHTML = 'Вы использовали все попытки угадать';
		return;
	} pop--;

	if ( guess === number ) {
		result.innerHTML = 'Вы угадали число';
	} else if ( guess > number ) {
		result.innerHTML = 'Попробуйте число меньше. У вас есть еще ' + pop + ' попытки';
	} else if ( guess < number ) {
		result.innerHTML = 'Попробуйте число больше. У вас есть еще ' + pop + ' попытки';
	} else if ( guess < 0 || guess > 10 ) {
		result.innerHTML = 'Упс, числа вне "0 - 10" не считаются';
	}
}
