'use strict';
let result;

// 1. Система уравнений
let a = parseInt(prompt('Enter a:'));
let b = parseInt(prompt('Enter b:'));

result = 400;
if (a > b) {
    result = a + b / 2 * 4
} else if (a < b) {
    result = a - b + 2 / b * 4
}

alert(result);

// 2. Попадание точки в область
let x = parseFloat(prompt('Enter x:'));
let y = parseFloat(prompt('Enter y:'));

function isHigher(x1, y1, x2, y2, x, y) {
    let k = (y2 - y1) / (x2 - x1);
    let b = y1 - k * x1;
    return y > k * x + b;
}

if (!isHigher(-4, 0, 0, 4, x, y) && !isHigher(0, 4, 4, 0, x, y) && isHigher(-4, 0, 4, 0, x, y)) {
    alert('Точка попадает в область 1');
} else {
    alert('Точка НЕ попадает в область 1');
}

if ((isHigher(-1, 1, 1, -1, x, y) && isHigher(1, 1, -1, -1, x, y) && !isHigher(-1, 1, 1, 1, x, y)) ||
    (!isHigher(-1, 1, 1, -1, x, y) && !isHigher(1, 1, -1, -1, x, y) && isHigher(-1, -1, 1, -1, x, y))) {
    alert('Точка попадает в область 2');
} else {
    alert('Точка НЕ попадает в область 2');
}

if ((isHigher(-2, 0, 0, -2, x, y) && x < 0 && y < 0) ||
    (Math.pow(x, 2) + Math.pow(y, 2) < 1)) {
    alert('Точка попадает в область 3');
} else {
    alert('Точка НЕ попадает в область 3');
}

// 3. Дни недели
let dayNumber = parseInt(prompt('Enter day number:'));
switch (dayNumber) {
    case 1:
        result = 'Понедельник';
        break;
    case 2:
        result = 'Вторник';
        break;
    case 3:
        result = 'Среда';
        break;
    case 4:
        result = 'Четверг';
        break;
    case 5:
        result = 'Пятница';
        break;
    case 6:
        result = 'Суббота';
        break;
    case 7:
        result = 'Воскресенье';
        break;
    default:
        result = 'Нет такого дня недели.';
}

alert(result);

// 4. Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
// 5. Найти максимальное из двух чисел. Учтите вариант равенства чисел
let num1 = parseInt(prompt('Enter num1:'));
let num2 = parseInt(prompt('Enter num2:'));

if (num1 === num2) {
    result = 'Числа равны';
} else if (num1 > num2) {
    result = num1;
} else {
    result = num2;
}

alert('max: ' + result);

// 6.
let flatNumber = parseInt(prompt('Enter flat number:'));
if (flatNumber >= 1 && flatNumber <= 20) {
    result = '1';
} else if (flatNumber >= 21 && flatNumber <= 48) {
    result = '2';
} else if (flatNumber >= 49 && flatNumber <= 9) {
    result = '3';
} else {
    result = 'нет такой квартиры';
}

alert(result);

//7.
let login = prompt('Enter login:');
let password = prompt('Enter password:');
result = 'Ошибка входа';
if ((login === 'ivan' && password === '334455') ||
    (login === 'alex' && password === '777') ||
    (login === 'petr' && password === 'b5678')) {
    result = 'Добро пожаловать';
}

alert(result);

// 8.
let age = parseInt(prompt('Enter your age:'));
if (age >= 16) {
    result = 'добро пожаловать';
} else {
    result = 'вход воспрещен';
}

alert(result);

// 9.
let experience = parseInt(prompt('Enter your experience:'));
if (experience >= 0 && experience < 3) {
    result = '0%';
} else if (experience >= 3 && experience < 10) {
    result = '10%';
} else if (experience >= 10 && experience < 20) {
    result = '20%';
} else if (experience >= 25) {
    result = '25%';
} else {
    result = 'experience invalid'
}
alert(result);