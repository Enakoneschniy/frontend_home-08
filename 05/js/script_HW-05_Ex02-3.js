'use strict';
let x, y, outResult;

function calculating() {
    x = inpA.value;
    y = inpB.value;
    if (x == "" || y == "") {
        outResult = "Значения не заданы";
    }
    else if (((y >= (-x - 2)) && y <= 0 && x <= 0) || (y <= Math.sqrt(1 - x ** 2))) {
        
        outResult = "Точка попадает в область";
    }
    else {

        outResult = "Точка НЕ попадает в область"
    }
    result.value = outResult;
}




