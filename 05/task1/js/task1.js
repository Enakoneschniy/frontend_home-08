'use strict';

    let x = 400;
    let a = prompt('input a', '');
    let b = prompt('input b', '');
    if (a > b) {
        x = a + b / 2 * 4
    } else if (a < b) {
        x = a - b + 2 / b * 4
    }
    alert(x);