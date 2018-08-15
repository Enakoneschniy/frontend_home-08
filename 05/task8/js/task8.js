'use strict';


let age = parseFloat(prompt('Введи год своего рождения'));
let realTime = 2018;
let year = 2002;
let youAge = realTime - age;

if (age <= year){
alert(' Вам ' +youAge+ ', добро пожаловать! ');
} else {
    alert(' Вам ' +youAge+ ', вход воспрещен! ');
}