; (() => {
    'use strict';

    let str = 'var_text_hello';
    let arr = str.split('_');

    for (let i = 1; i < arr.length; i++) {
        if (arr[0] != arr[i]) {
            arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
        }
    }

        let newStr = arr.join('');
        alert(newStr);


})();

