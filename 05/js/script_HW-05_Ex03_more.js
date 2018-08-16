'use strict';
let inpData, outData;
let startFrom;


function calculating() {
    inpData = document.getElementById("inpA").value;
//    document.getElementById("result").value = inpData;
     var rad = document.getElementsByName('week');
     for (var i = 0; i < 2; i++) {
         if (rad[i].checked) {
            startFrom = rad[i].value;

         }
//         document.getElementById("result").value = startFrom;
    }
    if (startFrom == "vs") {
        switch (parseInt(inpData)) {
            case 1:
                outData = "Воскресенье"
                break;
            case 2:
                outData = "Понедельник"
                break;
            case 3:
                outData = "Вторник"
                break;
            case 4:
                outData = "Среда"
                break;
            case 5:
                outData = "Четверг"
                break;
            case 6:
                outData = "Пятница"
                break;
            case 7:
                outData = "Суббота"
                break;
            default: outData = "Такого дня недели не существует"
        }
    }
    else if (startFrom == "pn") {
        switch (parseInt(inpData)) {
            case 1:
                outData = "Понедельник"
                break;
            case 2:
                outData = "Вторник"
                break;
            case 3:
                outData = "Среда"
                break;
            case 4:
                outData = "Четверг"
                break;
            case 5:
                outData = "Пятница"
                break;
            case 6:
                outData = "Суббота"
                break;
            case 7:
                outData = "Воскресенье"
                break;
            default: outData = "Такого дня недели не существует"
        }
    }

    document.getElementById("result").value = outData;
}
