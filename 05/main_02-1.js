'use strict';

let x = parseFloat(prompt('Enter "x"', ''));
let y = parseFloat(prompt('Enter "y"', ''));
let a1 = 4;
let a2 = -4;
let b = 4;
let field1 = x / a1 + y / b;
let field2 =  x / a2 + y / b;

if ( x <= 4 && x >= 0 && y >= 0 && y <= 4 && field1 >= 0 && field1  <= 1 ||
     x >= -4 && x <= 0 && y >= 0 && y <= 4 && field2 >= 0 && field2  <= 1){
    alert ('The point falls into the field!');
} else {
    alert ('The point does not fall into the field!');
}
