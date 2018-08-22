'use strict';

let exp = parseInt(prompt('Insert your experience:', ''));

if (exp > 0 && exp < 3) {
    console.log('Your increase is 0%');
} else if (exp > 3 && exp < 10) {
    console.log('Your increase is 10%');
} else if (exp > 10 && exp <20) {
    console.log('Your increase is 20%');
} else if (exp > 20) {
    console.log('Your increase is 25%');
} else {
    console.log('Incorrect Number');
}