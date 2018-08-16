'use strict';
let a, b, x;

function calculating() {
    a = inpA.value;
    b = inpB.value;
    if (a == "" || b == "") {
        x = "Нет входных данных";
    }
    else if (a != b) {
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
    result.value = x;
}



