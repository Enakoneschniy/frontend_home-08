'use strict';

    let x = parseFloat(prompt('Введи X', ''));
    let y = parseFloat(prompt('Введи Y', ''));

    let x1 = 1;
    let x2 = 0;
    let y1 = -1;
    let y2 = 0;
    let target1 = (x - x1) / (x2 - x1);
    let target2 = (y - y1) / (y2 - y1);

    let x3 = -1;
    let x4 = 0;
    let y3 = -1;
    let y4 = 0;
    let target3 = (x - x3) / (x4 - x3);
    let target4 = (y - y3) / (y4 - y3);

    let x5 = -1;
    let x6 = 0;
    let y5 = 1;
    let y6 = 0;
    let target5 = (x - x5) / (x6 - x5);
    let target6 = (y - y5) / (y6 - y5);

    let x7 = 1;
    let x8 = 0;
    let y7 = 1;
    let y8 = 0;
    let target7 = (x - x7) / (x8 - x7);
    let target8 = (y - y7) / (y8 - y7);

    if (x >= 0 && y >= -1 && x <= 1 && y <= 0 && target1 >= target2 ||
        x >= -1 && y >= -1 && x <= 0 && y <= 0 && target3 >= target4 ||
        x >= -1 && y <= 1 && x <= 0 && y >= 0 && target5 >= target6 ||
        x >= 0 && y >= 0 && x <= 1 && y <= 1 && target7 >= target8){
        alert ('Точка попадает в цель!');
    } else {
        alert ('Точка не попадает в цель :(');
    }
