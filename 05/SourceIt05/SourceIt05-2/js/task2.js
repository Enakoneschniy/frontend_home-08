'use strict';

let a = prompt('Введите координату Х');
let b = prompt('Введите координату Y');




if(a>0){
    let x1 = 0;
    let y1 = 0;
    let x2 = -1;
    let y2 = 1;
    let x3 = 1;
    let y3 = 1;

    let line1 = ((a-x1)*(y2-y1)-(b-y1)*(x2-x1));
    let line2 = ((a-x1)*(y1-y3)-(b-y1)*(x1-x3));
    if ((b<1)&&(line1<0)&&(line2>0)){
        alert('Точка попадает в область');
    }else{
        alert('Точка НЕ попадает в область');
    }
}else{
    let line1 = ((a-x1)*(y2-y1)-(b-y1)*(x2-x1));
    let line2 = ((a-x2)*(y2-y3)-(b-y2)*(x2-x3));
    if ((b>-1)&&(line1>0)&&(line2<0)){
        alert('Точка попадает в область');
    }else{
        alert('Точка НЕ попадает в область');
    }
}