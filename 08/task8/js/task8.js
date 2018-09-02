;(() => {
    'use strict';
    let ageFun = () => {
        let num = prompt('Лет сколько?', '');
        if (num === '') {
            alert('Та введи ты возраст');
            ageFun();
        } else if (num > 16) {
            alert('Добро пожаловать!')
        } else {
            alert('Ты слишком молод, парень')
        }
    };
    ageFun();
})();