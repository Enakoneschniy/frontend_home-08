'use strict';

let login = prompt('Enter Login:', '');
let password = prompt('Enter password:', '');

if (login === 'ivan' && password === '334455') {
    console.log('Welcome!');
} else if (login === 'alex' && password === '777') {
    console.log('Welcome!');
} else if (login === 'petr' && password === 'b5678') {
    console.log('Welcome!');
} else {
    console.log('Access Denied');
}