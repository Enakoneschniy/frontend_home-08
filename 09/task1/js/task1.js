;(() => {
    'use strict';
    let str = 'строка с большой буквы с!';
    let ucFirst = (str) => {
        let strInArr = str.split(' ');
        let newArr = [];
        strInArr.forEach(item => {
            newArr.push(strInArr = item.slice(0, 1).toUpperCase() + item.slice(1));
        });
        let result = newArr.join(' ');
        alert(result);
    };
    ucFirst(str);
})();