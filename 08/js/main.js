
// task 1

    function paragraphBackgroundColorChange() {
        const paragraph = document.querySelectorAll('p');

        for(let element of paragraph) {
            element.style.backgroundColor = "#E5E7F3";
        }
    }
    paragraphBackgroundColorChange();
    
// task 2

    function imageShadowsAdd() {
        const images = document.querySelectorAll('img');
        for(let element of images) {
            element.style.boxShadow = "0 0 3px 3px rgba(0,0,0, .5)"
        }
    }
    imageShadowsAdd();
    
// task 3
    
    function paragraphNumeric() {
        const paragraph = document.querySelectorAll('p');

        for (let i = 0; i < paragraph.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = '' + i;
            paragraph[i].insertBefore(span, paragraph[i].firstChild);
        }
    }
    paragraphNumeric();


//  task 4

    const buttons = document.querySelectorAll('button');
    const counter = document.getElementById('counter');
    let countNumber = 0;

    function buttonClickCounter() {
        for (let i = 0; i < buttons.length; i++ ) {
            buttons[i].addEventListener('click', function () {
                let span = document.createElement('span');
                countNumber += 1;
                span.innerHTML = '' + countNumber;
                counter.innerHTML = 'Количество нажатий на кнопки: ' + span.innerText;

            })
        }
    }
    buttonClickCounter()

//    task 5

    function myMathPow( num, pow) {
        let result = Math.pow(num, pow);
        alert(result);
    }

    myMathPow(4, 2);

//    task 6

    function tagUnderLine(tag) {
        const elements = document.getElementsByTagName(tag);

        for(let i = 0; i < elements.length; i++) {
            elements[i].style.textDecoration = 'underline';
        }
    }

    tagUnderLine('p');


//    task 7


    function checkAge(age) {
        if(age > 16) {
            alert('Добро пожаловать!');
        }else {
            alert('малой еще!');
        }
    };
    checkAge(17);

//    task 8

    function checkAgeModificated(age) {

        if( age === undefined || !age){
            alert('введите возраст');
        }else if(age > 16) {
            alert('Добро пожаловать!');
        }else {
            alert('малой еще!');
        }

    };
    checkAgeModificated(17);
    
//    task 9
    function arrayLength(array) {

        if(array === undefined) {
            alert('Ошибка!')
        }else {
            const result = array.length;
            alert('длинна массива:' + result);
        }
    }
    arrayLength();
    arrayLength([1, 2, 4]);

//    task 10

    function checkNumber() {
        let number = parseFloat( prompt('введите число', ''));
        if( number >= 10) {
            return number ** 2;
        }else if(number < 7) {
            return 'число меньше 7';
        }else {
            return number;
        }
    };
    checkNumber();

//task 11

function guessNumber() {
    let randomNumber = Math.round(Math.random() * 10);
    for(let i = 1; i <= 3; ++i) {
        let userNumber = parseFloat( prompt(`введите число от 0 до 10, попытка ${i} из 3`, ''));
        if(randomNumber === userNumber) {
            alert('Победа! ты угадал число');
            break;

        }else if(i >= 3){
            alert('попытки кончились, ты проиграл! Загаданное число было: ' + randomNumber);
            break;

        }else if(isNaN(userNumber) || userNumber === ''){
            alert('вводить можно только цифры!');
        }else if( userNumber > randomNumber ){
            alert('твое число больше');
        }else if( userNumber < randomNumber) {
            alert('твое число меньше');
        }
    }

};
guessNumber();

//task 12

function buyHamburger() {
    const form = document.getElementById('hamburger_form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let price = 0;
        let hamCaloricity = 0;
        let input = document.querySelectorAll('#hamburger_form input[type=radio], #hamburger_form input[type=checkbox]');

       if( document.getElementById('cheese').checked || document.getElementById('salad').checked || document.getElementById('ham').checked) {

           for(let i = 0; i < input.length; i++) {
               if(input[i].checked) {
                   price += parseFloat(input[i].getAttribute('data-price'));
                   hamCaloricity += parseFloat(input[i].getAttribute('data-caloricity'));

               }
           }

                   alert(`цена вашего гамбургера: ${price} грн! 
                   калорийность вашего гамбургера: ${hamCaloricity} ккал!`);
           form.reset();

       }else {
           alert('Обязательно нужно выбрать начинку!');
       }


    });
};
buyHamburger()


