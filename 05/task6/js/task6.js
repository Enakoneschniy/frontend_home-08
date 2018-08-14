'use strict';

let entrance1 = 1, entrance2 = 2, entrance3 = 3;

let flatNum = parseFloat(prompt('Введите номер подъезда от 1 до 90', ''));

if (flatNum >=1 && flatNum <= 20) {
    alert(' Квартира находится в ' +entrance1+ ' подъезде ');
} else if (flatNum >=21 && flatNum <= 48){
    alert(' Квартира находится в ' +entrance2+ ' подъезде ');
} else if (flatNum >=49 && flatNum <= 90) {
    alert(' Квартира находится в ' + entrance3 + ' подъезде ');
} else {
    alert('Вы живёте а другом доме :(');
}