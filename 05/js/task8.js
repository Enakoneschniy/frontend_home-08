'use strict'

let yearBirth = parseFloat(prompt("Введите год рождения", ""));

if (2018 - yearBirth >= 16) {
  alert('Добро пожаловать');
} else {
  alert('Вход воспрещен');
}