'use strict';

    let x = parseFloat(prompt('Введи X', ''));
    let y = parseFloat(prompt('Введи Y', ''));

    if ((Math.pow(x, 2) + Math.pow(y, 2) < 1) || (x < 0 && y < 0 && -2 - x - y < 0)){
        alert('Точка попадает в цель!');
    } else {
        alert('Точка не попадает в цель :(');
}
