'use strict';
let x;
let a = parseFloat(prompt("Введите число 'A'", ""));
let b = parseFloat(prompt("Введите число 'B'", ""));


if (a > b) {
  x = a + b / 2 * 4;
} else if (a == b) {
  x = 400;
} else if (a < b) {
  x = a - b + 2 / b * 4;
} else {
  alert("Вы не ввели число!!!");
}
alert("Получилось число " + x);