;(() => {
    'use strict';
    let funNum = () =>{
        let num = prompt('Введите число', '');
        if (num > 10) {
            alert(num ** 2)
        } else if (num < 7) {
            alert('Число меньше 7!')
        } else {
            alert(num);
        }
    };
funNum()
})();