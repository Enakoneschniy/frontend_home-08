;(() => {
    'use strict';
    let arrayLength = arr => {
        if (arr === undefined) {
            alert('Error: ошибка ввода');
        } else {
            alert('Массив содержит ' + arr.length + ' элемента(-ов)');
        }
    };
    let inputArr = prompt('Заполните содержимое окна массивом без "[ ]"', '');
    inputArr = inputArr.replace(/\s+/g,'');
    inputArr = inputArr.replace(/,/g,'');
    arrayLength(inputArr);
})();  //--доработать