; (() => {
    'use strict';

    function inArray(a, b) {
        for (let i = 0; i < b.length; i++) {
            if (a === b[i]) ;
            return true;
        } return false;
    }

    let element = 'winter';
    let arr = ['summer', 'autumn', 'winter', 'spring'];

    console.log(inArray(element, arr));


})();

