"use strict";
//task 1
(function () {

    let string = 'привет, я строка у которой все слова должны начинаться с большой буквы';

    function ucFirst(string) {
        let arrFromString = string.split(' ');
        let newArr = [];
        let result;
        arrFromString.forEach(item => {
            newArr.push(arrFromString = item.slice(0,1).toUpperCase() + item.slice(1));
        });
        result = newArr.join(' ');
        console.log(result);
    }

    ucFirst(string);

})();

//task 2

(function () {

    let string = 'var_text_hello';

    function camelCaseText(string) {
        let arrFromString = string.split('_');
        let newArr = [];
        let result;

        arrFromString.forEach(item => {
            newArr.push(arrFromString = item.slice(0,1).toUpperCase() + item.slice(1));
        });

        result = newArr.join('');
        console.log(result);
    }

    camelCaseText(string);

})();

//task 3

(function () {

    let searchString = 'строка';
    let arr = [1, 2, 3, 'строка', 'бублик'];

    function inArray(element, array) {
        array.forEach(item => {
            if(item === element){
                return console.log(true);
            }
        })
    }
    inArray(searchString, arr);

})();

//task 4

(function () {

    let str = '123456';
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    str = arr.splice(1, 1) + arr.splice(0, 1) + arr.splice(1, 1) + arr.splice(0, 1) + arr.splice(1, 1) + arr.splice(0, 1);
    console.log(str);

})();

//task 5

(function () {

    const user = {};
    user.name = 'Вася';
    user.surname = 'Петров';
    user.name = 'Сергей';
    delete(user.name);
    console.log(user);

})();

//task 6
(function () {
    let obj = {};

    function isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
               return false;
            }
        }
        return true;
    }
    isEmpty(obj)
})();



//task 7

(function () {

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    function sunSallary(obj) {
        let result = 0;
        if(!obj){
            return console.log(result);
        }
        for (let key in obj) {
            result += obj[key];
        }
        return console.log(result);
    }
    sunSallary(salaries);

})();

// task 8

(function () {

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250,

    };

    let max = 0;
    let name = '';
    function compareSalaries(obj) {
        for (let key in obj) {
            if(obj.hasOwnProperty(key)) {

               if(max < obj[key]) {
                   max = obj[key];
                   name = key;
               }

            }else {
                return console.log('нет сотрудников');
            }
        }
        console.log(name);
    }
    compareSalaries(salaries)


})();

//task 9

(function () {

    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    function multiplyNumeric(obj) {
        for(let key in obj) {
            if( isNumeric(obj[key]) ) {
                obj[key] *=  2;
            }
        }
    }
    multiplyNumeric(menu);
    console.log(menu);

})();


