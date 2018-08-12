window.onload = function () {
    //task 1-2

    function maxNum() {
        let a = parseFloat( prompt('введите число а', '0') );
        let b = parseFloat( prompt('введите число b', '0') );

        if( a > b ) {
            alert( 'большее число а: ' +  a);
        }else if( a < b ) {
            alert( 'большее число b: ' + b );
        }else {
            alert( 'числа равны' );
        }
    }
    maxNum();

//    task 3
    function findApartaments() {
        let numOfApartaments = parseFloat( prompt('введите номер квартиры') );

        if( numOfApartaments >= 1 && numOfApartaments <= 20 ){
            alert('квартира находится в первом подъезде');
        }else if ( numOfApartaments >= 21 && numOfApartaments <= 48 ) {
            alert('квартира находится вo втором подъезде');
        }else if ( numOfApartaments >= 49 && numOfApartaments <= 90 ) {
            alert('квартира находится в третьем подъезде');
        }else {
            alert('такой квартиры в доме нет!')
        }
    };

    findApartaments();

//    task 4

    function authentication() {
        let userLogin = prompt('введите логин', '').toLowerCase();
        let userPassword = prompt('введите пероль', '').toLowerCase();

        if( userLogin === 'ivan' && userPassword === '334455' || userLogin === 'alex' && userPassword === '777' || userLogin === 'petr' && userPassword === 'b5678' ) {
            alert( 'добро пожаловать!' );
        }else {
            alert( 'ошибка входа!' )
        }
    };
    authentication();


//    task 5

    function authByAge() {
        let userAge = parseFloat( prompt('введите ваш год рождления', '') );
        let currentDate = new Date().getFullYear();

        if( (currentDate - userAge) >= 16 && userAge > 1945) {
            alert( 'добро пожаловать!' );
        }else {
            alert( 'вход воспрещен!' );
        }
    };
    authByAge();

//    task 6

    function allowance() {
        let workExpirience = parseFloat(prompt('введите ваш стаж работы', ''));

        if (workExpirience >= 0 && workExpirience < 3) {
            alert('надбавка 0%');
        } else if (workExpirience >= 3 && workExpirience < 10) {
            alert('надбавка 10%');
        } else if (workExpirience >= 10 && workExpirience < 20) {
            alert('надбавка 20%');
        } else if (workExpirience < 0) {
            alert('вы еще не работали!');
        } else if (isNaN(workExpirience)) {
            alert('введите ваш опыт цифрами!');
        } else {
            alert('надбавка 25%');
        }
    }

    allowance();

//    task 7


    let button = document.getElementById('button');
    let container = document.getElementById('container');

    button.addEventListener('click', writeNum);

    function writeNum() {
        for( let i = 4; i <= 400; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = i;
            container.appendChild(listItem);
        }
    };

//    task 8

    (function () {
        for(let i = 4; i <= 13; i++) {
            if(i % 3 != 1) {
                continue;
            }
            console.log(i);
        }
    })();

//    task 9
        for(let i = 654; i >= 0; i--) {
            console.log(i);
        };


//    task 10

    (function () {
        let year = 1983;
        while(year <= 2017) {
            console.log(year);
            year++;
        }
    })();

//    task 11

    (function () {
        let num = -4;

        while (num <= 100) {
            if(num % 2 == 0){
                console.log(num);
            }
            num++;
        }
    })();


//    task 12

    (function () {
        for( let i = 1; i <= 9; i++) {
            console.log(7 * i);
        }
    })();

//    task 13
    (function () {
        for ( let i = 1000; i <= 2000; i++) {
            let specSymbol = '&#' + i +';';
            console.log(specSymbol);
        }
    })();

//    task 14

    (function () {
        let sum = 0;
        for(let i = 0; i <= 100; i++) {
            sum += i;

        }
        console.log(sum);
    })();


//    task 15

    (function () {
        let sum = 1;
        for(let i = 1; i <= 50; i++) {
            sum *= i;

        }
        console.log(sum);
    })();

}