; (() => {
    'use strict';

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    let obj1 = {
        name: 'Petrov'
    };
    let obj2 = {};

    console.log(isEmpty(obj1));
    console.log(isEmpty(obj2));

})();
