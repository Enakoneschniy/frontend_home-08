'use strict';

let a = prompt ( "Enter the number of any week day");
let x;
switch (a) {
    case 1:
        x = "Monday";
        break;
    case 2:
        x = "Tuesday";
        break;
    case 3:
        x = "Wednesday";
        break;
    case 4:
        x = "Thursday";
        break;
    case 5:
        x = "Friday";
        break;
    case 6:
        x = "Saturday";
        break;
    case 7:
        x = "Sunday";
        break;
    default:
        x = "There are only 7 days in a week!"
}
alert (x);