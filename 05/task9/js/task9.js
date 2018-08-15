'use strict';

let year = parseFloat(prompt('Укажи свой стаж работы в sourceIT', ''));

if (year >= 0 && year <= 2){
    alert('Надбавка составляет 0%');
} else if (year >= 3 && year <= 9){
    alert('Надбавка составляет 10%');
} else if (year >= 10 && year <= 19){
    alert('Надбавка составляет 20%');
} else if (year >= 20){
    alert('Надбавка составляет 25%');
} else {
    alert('Переработал');
}
