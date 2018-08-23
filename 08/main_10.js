; (() => {
    'use strict';

    function func() {
        const num = parseFloat(prompt('input number', ''));
        if (num > 10) {
            return num ** 2;
        } else if (num < 7) {
            console.log('the number less than 7');
        } else if (num == 8) {
            return 7;
        } else if (num == 9) {
            return 8;
        }
    }
    console.log(func());

})();

