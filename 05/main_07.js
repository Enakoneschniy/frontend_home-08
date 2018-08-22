'use strict';


let login = prompt('Enter your login, please', '');

let password = prompt('Enter your password, please', '');


if (login === 'ivan' && password === '334455') {
    alert ("Welcome!");
} else if (login === 'alex' && password === '777') {
    alert ("Welcome!");
} else if (login === 'petr' && password === 'b5678') {
    alert ("Welcome!");
} else {
    alert ('Login or password failed');
}




