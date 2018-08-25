( function () {
    'use strict';
    var result;
    function pow (number, index) {
        number = +prompt('Введите число', '1');
        index = +prompt('Введите степень', '1');
        result = Math.pow(number, index);
       
}
pow();
alert(result);
} )();