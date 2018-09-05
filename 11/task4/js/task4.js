;(() => {
    'use strict';
    let numStr = "123456";
    let numArr = numStr.split('');
    let newArr = [];
    for (let i = 0; i < numArr.length; i++) {
        i % 2 === 0 ? newArr[i] = numArr[i + 1] : newArr[i] = numArr[i - 1];
    }
    let newStr = newArr.join('');
    console.log(newStr)
})();