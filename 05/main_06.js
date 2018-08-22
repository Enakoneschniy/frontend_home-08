'use strict';

let entrance1 = 1, entrance2 = 2, entrance3 = 3; // подъезд 1, 2, 3

let apartmentNumber = parseFloat (prompt ('Input a number of apartment from 1 to 90, please', ''));


if (apartmentNumber >= 1 && apartmentNumber <= 20) {
    alert ('The apartment is located in the ' + entrance1 + ' entrance!');
} else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
    alert ('The apartment is located in the ' + entrance2 + ' entrance!');
} else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
    alert ('The apartment is located in the ' + entrance3 + ' entrance!');
} else {
    alert ('You did not enter a correct number');
}
