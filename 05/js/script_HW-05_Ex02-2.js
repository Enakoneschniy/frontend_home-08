'use strict';
let x, y, outResult;

function calculating() {
    x = inpA.value;
    y = inpB.value;
    if (x == "" || y == "") {
        outResult = "Значения не заданы";
    }
    else if ((y <= 1 && y >= x &&  y >= -x ) || (y >= -1 && y <= x &&  y <= -x )) {
// y=1; y=-1; y=x; у=-x;
        outResult = "Точка попадает в область";
    }
    else {

        outResult = "Точка НЕ попадает в область"
    }
    result.value = outResult;
}




