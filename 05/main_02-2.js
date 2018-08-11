'use strict';

let x = parseFloat(prompt('Enter "x"', ''));
let y = parseFloat(prompt('Enter "y"', ''));

let x1 = 1;
let x2 = 0;
let y1 = -1;
let y2 = 0;
let field1 = (x - x1) / (x2 - x1);
let field2 = (y - y1) / (y2 - y1);

let x3 = -1;
let x4 = 0;
let y3 = -1;
let y4 = 0;
let field3 = (x - x3) / (x4 - x3);
let field4 = (y - y3) / (y4 - y3);

let x5 = -1;
let x6 = 0;
let y5 = 1;
let y6 = 0;
let field5 = (x - x5) / (x6 - x5);
let field6 = (y - y5) / (y6 - y5);

let x7 = 1;
let x8 = 0;
let y7 = 1;
let y8 = 0;
let field7 = (x - x7) / (x8 - x7);
let field8 = (y - y7) / (y8 - y7);

if ( x >= 0 && y >= -1 && x <= 1 && y <= 0 && field1 >= field2  ||
     x >= -1 && y >= -1 && x <= 0 && y <= 0 && field3 >= field4 ||
     x >= -1 && y <= 1 && x <= 0 && y >= 0 && field5 >= field6  ||
     x >= 0 && y >= 0 && x <= 1 && y <= 1 && field7 >= field8)  {
     alert ('The point falls into the field!');
} else {
    alert ('The point does not fall into the field!');
}
