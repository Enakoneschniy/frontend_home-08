'use strict';

let inpValueA, swSelOutp, outpValue;
let name;

function calculating() {
    document.getElementById('result').innerHTML = " ";

    inpValueA = document.getElementById('inpA').value;

    if (!inpValueA) {
        swSelOutp = 400;
        printing(swSelOutp);
    }
    else {
        inpValueA = parseInt(document.getElementById('inpA').value);

        if (inpValueA < 1) {
            document.getElementById('inpA').value = 1;
            inpValueA = 1;
        }
        else if (inpValueA > 9) {
            document.getElementById('inpA').value = 9;
            inpValueA = 9;
        }
        //       else inpValueA = document.getElementById('inpA').value;
    }

    switch (inpValueA) {
        case 1:
            f1();
            break;
        case 2:
            f2();
            break;
        case 3:
            f3();
            break;
        case 4:
            f4();
            break;
        case 5:
            f5();
            break;
        case 6:
            f6();
            break;
        case 7:
            f7();
            break;
        case 8:
            f8();
            break;
        case 9:
            f9();
            break;
    }
}

function f1() {
    let i = 4;
    for (i; i <= 400; i++) {
        outpValue = i;
        swSelOutp = 1;
        printing(swSelOutp);
    }
}

function f2() {
    let i = 4;
    while (i <= 13) {
        outpValue = i;
        swSelOutp = 1;
        printing(swSelOutp);
        i = i + 3;
    }
}

function f3() {
    let i = 654;
    while (i >= 0) {
        outpValue = i;
        swSelOutp = 1;
        printing(swSelOutp);
        i--;
    }
}

function f4() {
    let i = 1983;
    for (i; i <= 2018; i++) {
        outpValue = i;
        swSelOutp = 1;
        printing(swSelOutp);
    }
}

function f5() {
    let i = -4;
    while (i <= 100) {
        outpValue = i;
        swSelOutp = 1;
        printing(swSelOutp);
        i = i + 2;
    }
}

function f6() {
    let i = 1;
    while (i <= 9) {
        outpValue = "7 x " + i + " = " + 7 * i + "; ";
        swSelOutp = 1;
        printing(swSelOutp);
        i++;
    }
}

function f7() {
    outpValue = String.fromCharCode(2000);
    let i = 1000;
    while (i <= 2000) {
        outpValue = String.fromCharCode(i);
        swSelOutp = 1;
        printing(swSelOutp);
        i++;
    }
}

function f8() {
    let i = 0;
    outpValue = 0;
    while (i <= 100) {
        outpValue = outpValue + i;
        swSelOutp = 1;
        i++;
    }
    outpValue = "Cумма чисел от 0 до 100 равна " + outpValue;
    printing(swSelOutp);
}

function f9() {
    let i = 1;
    outpValue = 1;
    while (i <= 50) {
        outpValue = outpValue * i;
        swSelOutp = 1;
        i++;
    }
    outpValue = "Произведение чисел от 1 до 50 равно " + outpValue;
    printing(swSelOutp);
}

function printing(swSelOutp) {
    switch (swSelOutp) {
        case 1:
            document.getElementById('result').innerHTML += outpValue + " ";
            break;
        case 400:
            document.getElementById('result').value = "Отсутствуют входные данные";
            break;
    }
}

function clearing(swSelOutp) {
    document.getElementById('result').innerHTML = "";
}


