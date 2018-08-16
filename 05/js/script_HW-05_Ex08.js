'use strict';

let inpValueA, swSel, age;
let name;

function access() {

    inpValueA = document.getElementById('inpA').value;

    if (!inpValueA) {
        swSel = 404;
    }
    else {
        inpValueA = parseInt(document.getElementById('inpA').value);
        if (inpValueA >= 16) swSel = 1;
        else swSel = 400;
    }

    switch (swSel) {
        case 404:
            document.getElementById('result').value = "Введите корректные данные";
            break;
        case 4:
            document.getElementById('result').value = "Вам " + inpValueA + " лет. Добро пожаловать!";
            break;
        case 3:
            document.getElementById('result').value = "Вам " + inpValueA + " года. Добро пожаловать!";
            break;
        case 2:
            document.getElementById('result').value = "Вам " + inpValueA + " год. Добро пожаловать!";
            break;
        case 1:
            document.getElementById('result').value = "Вам " + inpValueA + ". Добро пожаловать!";
            break;
        case 403:
            document.getElementById('result').value = "Вам " + inpValueA + " лет. Доступ воспрещен!";
            break;
        case 402:
            document.getElementById('result').value = "Вам " + inpValueA + " года. Доступ воспрещен!";
            break;
        case 401:
            document.getElementById('result').value = "Вам " + inpValueA + " год. Доступ воспрещен!";
            break;
        case 400:
            document.getElementById('result').value = "Вам " + inpValueA + ". Доступ воспрещен!";
            break;
    }
}



