'use strict';

let login = prompt('Введи login', '');
let password = prompt('Введи password', '');

if (login === 'ivan' && password === '334455'){
    alert('Добро пожаловать!');
} else if (login === 'alex' && password === '777') {
    alert('Добро пожаловать!');
} else if (login === 'petr' && password === 'b5678') {
    alert('Добро пожаловать!');
} else {
    alert('Ошибка входа :(');
}