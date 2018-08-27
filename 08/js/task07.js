( function () {
    'use strict';
    (function controlAge ( age ) {
    	var age = +prompt('Введите ваш возраст.','0');
    	age > 16 ? alert('Добро пожаловать!') : alert('Вы еще молоды!');
    })();


} )();