'use strict';
let x, y, outResult;

function calculating() {
    x = inpA.value;
    y = inpB.value;
    if (x == "" || y == "") {
        outResult = "Значения не заданы";
    }
    else if ((y <= (4 - x)) && (y <= (4 + x)) && y >= 0) {
        //y=4-x; y=4+x; y=0;
        outResult = "Точка попадает в область";
    }
    else {

        outResult = "Точка НЕ попадает в область"
    }
    result.value = outResult;
}




