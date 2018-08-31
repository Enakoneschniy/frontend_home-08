;(() => {
    'use strict';
    let num = prompt('Введите число', '');
    if (num > 10) {
        alert(num * num)
    } else if (num < 7) {
        alert('Число меньше 7.')
    } else {
        alert(num);
    }
})();