"use strict";

let userYearOfBirth = prompt( "Введите год вашего рождения." );

if ( userYearOfBirth <= 2002 && userYearOfBirth >= 1920 ) {
    alert( "Добро пожаловать!" );
} else if ( userYearOfBirth >= 2001 && userYearOfBirth <= 2018 ) {
    alert( "Вход запрещен!" );
} else {
    alert( "Вход запрещен! Но какой у Вас необычный год рождения!" );
}