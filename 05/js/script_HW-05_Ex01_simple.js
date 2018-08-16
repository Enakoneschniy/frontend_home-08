'use strict';

function run() {
    let a, b, x;
    a = prompt("Введите число 'а'", 1);
    b = prompt("Введите число 'b'", 1);
    calculating();

    function calculating() {

        if (a != b) {
            if (a > b) {
                x = (a + b) / (2 * 4)
            }
            else if (a < b) {
                x = (a - b + 2) / (b * 4)
            }
        }
        else {
            x = 400
        }
        alert("Результат равен " + x);
    }
}



