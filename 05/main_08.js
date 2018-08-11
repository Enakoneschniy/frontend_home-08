'use strict';

let age = parseFloat (prompt ('Enter your age, please', ''));
alert ('You are ' + age + ' years old');

if (age >= 16){
    alert ('Welcome!');
} else if (age <= 16 && age >= 1){
    alert ('No entry!');
} else {
    alert ('You are humorist!');
}

