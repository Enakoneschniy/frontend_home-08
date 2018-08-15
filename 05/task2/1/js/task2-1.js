'use strict';

    let x = parseFloat(prompt('Введи X', ''));
    let y = parseFloat(prompt('Введи Y', ''));
    let a1 = 4;
    let a2 = -4;
    let b = 4;
    let target1 = x / a1 + y / b;
    let target2 = x / a2 + y / b;

    if (x <= 4 && x >= 0 && y >= 0 && y <= 4 && target1 >= 0 && target1 <= 1 || x >= -4 && x <= 0 && y >= 0 && y <= 4 && target2 >= 0 && target2  <= 1){
        alert ('Крачка попадает в цель!');
    } else {
        alert ('Точка не попадает в цель :(');
    }
