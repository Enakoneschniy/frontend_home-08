( function () {
    'use strict';
    function controlAge ( age ) {
    	var age = +prompt('Введите ваш возраст.','0');
    	if (age >= 16) {
    		alert('Добро пожаловать!');
    	} else if (age < 16 && age > 0) {
    		alert('Вы еще молоды!');
    	} else if (age == '' || age == undefined) {
    		alert('Введите возраст!');
    	}
    };
    controlAge ();
} )();