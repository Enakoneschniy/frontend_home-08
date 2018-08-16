'use strict';
let valueA, valueB, maxValue, swSel;

function calculating() {
    valueA = document.getElementById('inpA').value;
    valueB = document.getElementById('inpB').value;

    if (!valueA || !valueB) swSel = 404;

    else {
        valueA = parseInt(inpA.value);
        valueB = parseInt(inpB.value);

        if (valueA > valueB) swSel = 1;
        else if (valueA < valueB) swSel = 2;
        else if (valueA === valueB) swSel = 3;
    }

    switch (swSel) {
        case 1:
            document.getElementById('result').value = "Число " + valueA + " больше";
            break;
        case 2:
            document.getElementById('result').value = "Число " + valueB + " больше";
            break;
        case 3:
            document.getElementById('result').value = "Числа равны";
            break;
        case 404:
            document.getElementById('result').value = "Нет входных данных";
            break;
    }
}



