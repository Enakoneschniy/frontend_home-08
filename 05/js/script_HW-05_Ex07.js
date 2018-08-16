'use strict';

let inpValueA, inpValueB, swSel;
let name;

let users = [];
users[0] = {
    lg: "ivan",
    pw: "334455",
}
users[1] = {
    lg: "alex",
    pw: "777"
}
users[2] = {
    lg: "petr",
    pw: "b5678"
}

function access() {

    inpValueA = document.getElementById('inpA').value;
    inpValueB = document.getElementById('inpB').value;

    if (!inpValueA || !inpValueB) {
        swSel = 404;
    }
    else {
        let i;
        for (i = 0; i < users.length; i++) {
            if (inpValueA == users[i].lg && inpValueB == users[i].pw) {
                swSel = 1;
                name = inpValueA;
            }
            else
                swSel = 0;
                name = inpValueA;
        }
    }

    switch (swSel) {
        case 404:
            document.getElementById('result').value = "Введите корректные данные";
            break;
        case 1:
            document.getElementById('result').value = "Добро пожаловать " + name;
            break;
        case 0:
            document.getElementById('result').value = "Ошибка входа, уважаемый " + name;
            break;
    }
}



