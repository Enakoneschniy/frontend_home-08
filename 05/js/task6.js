'use strict';

let flat = parseInt(prompt('Insert flat number:', ''));

if (flat > 1 && flat < 21) {
    console.log('Entrance 1');
} else if (flat > 20 && flat < 49) {
    console.log('Entrance 2');
} else if (flat > 48 && flat < 91) {
    console.log('Entrance 3');
} else  {
    console.log('Incorrect flat number')
}