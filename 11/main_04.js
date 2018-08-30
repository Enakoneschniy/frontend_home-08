;(() => {
    'use strict';

    let str = '1234567';
    let arr = str.split('');

    let arr1 = arr.slice(0, 2);
    let arr2 = arr.slice(2, 4);
    let arr3 = arr.slice(4, 6);

    let newArr = [].concat(arr1.reverse(), arr2.reverse(), arr3.reverse());

    let newStr = newArr.join('');
    alert(newStr);


})();