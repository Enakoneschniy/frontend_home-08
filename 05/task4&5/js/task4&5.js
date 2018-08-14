'use strict';

    let x = parseFloat(prompt('Введи число 1', ''));
    let y = parseFloat(prompt('Введи число 2', ''));

     if (x > y) {
         alert(' Число ' + x + ' больше! ');
     } else if (x < y) {
         alert(' Число ' + y + ' больше! ');
     } else if (x === y) {
         alert('Числа равны!');
     } else {
         alert('Укажите число!');
     }
