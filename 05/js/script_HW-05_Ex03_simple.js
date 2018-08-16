'use strict';
let inpData, outData;
setTimeout(DayOfTheWeek(), 5000);

function DayOfTheWeek() {

    inpData = prompt("Введите номер дня недели", 1);
    if (!inpData) inpData = 404;
    switch (parseInt(inpData)) {
        case 1:
            outData = "Воскресенье";
            break;
        case 2:
            outData = "Понедельник";
            break;
        case 3:
            outData = "Вторник";
            break;
        case 4:
            outData = "Среда";
            break;
        case 5:
            outData = "Четверг";
            break;
        case 6:
            outData = "Пятница";
            break;
        case 7:
            outData = "Суббота";
            break;
        case 404:
            outData = "Введите корректные данные";
            break;
        default:
            outData = "Такого дня недели не существует"
    }
    alert(outData);
}


