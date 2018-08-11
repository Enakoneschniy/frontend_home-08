'use strict'

var year = +prompt('Введите ваш год рождения', '');
var age = 2018 - year;
alert('Ваш возраст: ' + age);
if (age >= 16) {
	alert('Добро пожаловать')
} else {
	alert('Вход воспрещен')
}


