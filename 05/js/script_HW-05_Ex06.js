'use strict';
let inpValue, outValue, swSel;

function calculating() {
    inpValue = document.getElementById('inpA').value;
    if (!inpValue) swSel = 400;
    else {
        inpValue = parseInt(document.getElementById('inpA').value);

        if (inpValue >= 1 && inpValue <= 20) {
            outValue = 1;
            swSel = 1;
        }
        else if (inpValue >= 21 && inpValue <= 48) {
            outValue = 2;
            swSel = 2;
        }
        else if (inpValue >= 49 && inpValue <= 90) {
            outValue = 3;
            swSel = 1;
        }
        else if (inpValue > 90) swSel = 401;
    }

    switch (swSel) {
        case 400:
            document.getElementById('result').value = "Введите корректный номер квартиры";
            break;
        case 401:
            document.getElementById('result').value = "В этом доме нет " + inpValue + " квартиры";
            break;
        case 1:
            document.getElementById('result').value = inpValue + "-я квартира находится в " + outValue + "-м подъезде";
            break;
        case 2:
            document.getElementById('result').value = inpValue + "-я квартира находится во " + outValue + "-м подъезде";
            break;
    }
}



