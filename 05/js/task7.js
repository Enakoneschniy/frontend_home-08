'use strict'

let login = prompt("Введите логин", "");
let password = parseFloat(prompt("Введите пароль", ""));

if ((login == 'ivan' && password == 334455) ||
  (login == 'alex' && password == 777) ||
  (login == 'petr' && password == b5678)) {
  alert('Добро пожаловать');
} else {
  alert('Ошибка ввода');
}

