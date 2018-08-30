; (() => {
    'use strict';
    let obj = {};
    obj.name = 'Вася';
    obj.surname = 'Петров';

    console.log(obj);

    obj.name = 'Сергей';

    console.log(obj);

    delete obj.name;

    console.log(obj);



})();