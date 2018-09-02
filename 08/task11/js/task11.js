;(() => {
    'use strict';
    let NumberFun = () => {
        let Num = Math.round(Math.random() * 10);
        for (let i = 1; i <= 3; ++i) {
            let userInput = parseFloat(prompt(`Добро пожаловать! Угадай число от 0 до 10 и покажи кто здесь батя! Попытка № ${i} из 3`, ''));
            if (Num === userInput) {
                alert('Поздравляю! Тебе повезло!');
                break;
            } else if (i === 3) {
                alert('Ты проиграл! Загаданное число: ' + Num);
            } else if (isNaN(userInput) || userInput === '') {
                alert('Неверный ввод');
            } else if (userInput > Num) {
                alert('Слишком большое число.');
            } else if (userInput < Num) {
                alert('Слишком маленькое число.');
            }
        }
    };
    NumberFun();
})();