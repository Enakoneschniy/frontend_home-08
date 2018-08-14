'use strict';

let a = prompt('Введите координату Х');
let b = prompt('Введите координату Y');

let x1 = -4;
let y1 = 0;
let x2 = 0;
let y2 = 4;
let x3 = 4;
let y3 = 0;

let line1 = ((a-x1)*(y2-y1)-(b-y1)*(x2-x1));
let line2 = ((a-x2)*(y2-y3)-(b-y2)*(x2-x3));
if ((a>0)&&(line1>0)&&(line2<0)){
    alert('Точка попадает в область');
}else{
    alert('Точка НЕ попадает в область');
}

console.log(line1);
console.log(line2);
