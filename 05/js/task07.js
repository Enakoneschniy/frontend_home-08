'use strict'

var login = prompt('Введите имя пользователя', '');
var password = prompt('Введите пароль пользователя', '');

if (login == 'ivan' && password == 334455
	|| login == 'alex' && password == 777
	|| login == 'petr' && password == 'b5678') {
	alert('Добро пожаловать')
} else {
	alert('Ошибка входа')
}