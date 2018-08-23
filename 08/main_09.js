; (() => {
    'use strict';

    function func (arr) {
        if(arr.length > 0){
            console.log(arr.length);
        } else if (arr.length == 0){
            return false;
        }
    }

    console.log(func([2, 3, 85, 2, 44, 0, 55]));
    console.log(func([1, 2, 3, 10, 8, 2, 3, 85, 2, 44, 0, 55]));
    console.log(func([12, 3, 85]));
    console.log(func([]));
})();