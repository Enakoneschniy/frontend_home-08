'use strict';

let x = parseFloat(prompt('Enter "x"', ''));
let y = parseFloat(prompt('Enter "y"', ''));

let a = -2;
let b = -2;
let field1 = x / a + y / b;

let radius = 1;
let r2 = radius * radius;
let x0 = 0;
let y0 = 0;
let field2 = (x - x0) * (x - x0) + (y - y0) * (y - y0);

if ( x >= -2 && x <= 0 && y >= -2 && y <= 0 && field1 >= 0 && field1  <= 1 ||
     field2 <= r2){
    alert ('The point falls into the field!');
} else {
    alert ('The point does not fall into the field!');
}
