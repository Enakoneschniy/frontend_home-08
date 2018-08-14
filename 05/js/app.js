'use strict';
//1
let a = prompt('Введите значение а', "");
let b = prompt('Введите значение b', "");
let x = 400;
if (a > b) {
    x = a + b / 2 * 4
}
else if (a < b) {
    x = a - b + 2 / b * 4
}
alert('При введенных вами значениях a и b значение х равен' + x);
//2.1
let x1 = prompt('Введите значение по оси х', "");
let y1 = prompt('Введите значение по оси y', "");
if (4 * x1 + 4 * y1 - 16 <= 0 && 4 * x1 - 4 * y1 + 16 >= 0 && 0 <= y1 && y1 <= 4) {
    alert('Точка попадает в область!')
}
else {
    alert('Точка НЕ попадает в область')
}
//2.2
let x2 = prompt('Введите значение по оси х', "");
let y2 = prompt('Введите значение по оси y', "");
if (-1 * x2 + 1 * y2 >= 0 && -1 * x2 - 1 * y2 <= 0 && 0 < y2 && y2 <= 1
    || 1 * x2 - 1 * y2 >= 0 && -1 * x2 + 1 * y2 <= 0 && 0 > y2 && y2 >= -1) {
    alert('Точка попадает в область!')
}
else {
    alert('Точка НЕ попадает в область')
}
//2.3
let x3 = prompt('Введите значение по оси х', "");
let y3 = prompt('Введите значение по оси y', "");
if (x3 * x3 + y3 * y3 < 1
    || 2 * x3 + 2 * y3 + 4 >= 0 && 0 > y3 && y3 > -2 && 0 > x3 && x3 > -2) {
    alert('Точка попадает в область!')
}
else {
    alert('Точка НЕ попадает в область')
}
//3
let dayW = prompt('Введите номер дня недели', "");
switch (dayW) {
    case '1':
        alert('Понедельник');
        break;
    case '2':
        alert('Вторник');
        break;
    case '3':
        alert('Среда');
        break;
    case '4':
        alert('Четверг');
        break;
    case '5':
        alert('Пятница');
        break;
    case '6':
        alert('Суббота');
        break;
    case '7':
        alert('Воскресение');
        break;
    default:
        alert('Такого дня недели не существует!')
}
//4
let num1 = parseFloat(prompt('Введите первое число', ""));
let num2 = parseFloat(prompt('Введите второе число', ""));
if (num1 > num2) {
    alert(num1 + 'Большее число');
} else {
    alert(num2 + 'Большее число')
}
//5
let num3 = parseFloat(prompt('Введите первое число', ""));
let num4 = parseFloat(prompt('Введите второе число', ""));
if (num3 > num4) {
    alert(num3 + 'Большее число');
} else if (num3 < num4) {
    alert(num4 + 'Большее число')
} else {
    alert('Числа равны')
}
//6
let numFl = parseFloat(prompt('Введите номер квартиры', ""));
if (numFl <= 20) {
    alert('Эта квартира в Первом подъезде');
} else if (numFl > 20 && numFl <= 48) {
    alert('Эта квартира во Втором подъезде');
} else if (numFl > 48 && numFl <= 90) {
    alert('Эта квартира в Третьем подъезде');
} else {
    alert('Такого номера квартиры в этом доме не существует');
}
//7
let login = prompt('Введите Login', "");
let password = prompt('Введите  Password', "");
if (login === 'ivan' && password === '334455') {
    alert('Добро пожаловать');
} else if (login === 'alex' && password === '777') {
    alert('Добро пожаловать');
} else if (login === 'petr' && password === 'b5678') {
    alert('Добро пожаловать');
} else {
    alert('Ошибка входа');
}
//8
let yearBirth = parseFloat(prompt('Введите Ваш год рождения', ""));
let age = 2018 - yearBirth;
if (age >= 16) {
    alert('Ваш возраст' + age + 'Добро пожаловать')
} else {
    alert('Ваш возраст' + age + 'Вход воспрещен')
}
//9
let yearWorks = parseFloat(prompt('Введите Ваш стаж работы', ""));
if (yearWorks <= 3) {
    alert('Ваша надбавка 0%')
} else if (yearWorks > 3 && yearWorks <= 10) {
    alert('Ваша надбавка 10%')
} else if (yearWorks > 10 && yearWorks <= 20) {
    alert('Ваша надбавка 20%')
} else if (yearWorks > 20) {
    alert('Ваша надбавка 25%')
}

