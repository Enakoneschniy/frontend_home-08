window.onload = function () {

//    task 1
    (function () {
        let arr = [];
        for(let i = 0; i < 10; i++) {
            arr[i] = '';
            for (let j = 0; j < arr.length; j++) {
                arr[i] += 'x';
            }

        }

        console.log(arr)
    })();

//    task 2
    (function () {
        let arr = [];
        for(let i = 0; i < 10; i++) {
            arr[i] = '';
            for (let j = 0; j < arr.length; j++) {
                arr[i] += i;
            }

        }

        console.log(arr)
    })();


//    task 3

    function arrayFill(elem, count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr[i] = elem;
        }
        console.log(arr);
    }

    arrayFill('xz', 8);


//    task 4

    (function () {
        let arr = [2,8,5,2,10,15];
        let curentSum = 0;
        for (let i = 0; i < arr.length; i++) {
            curentSum += arr[i];

            if(curentSum > 10 ) {

                console.log('нужное количество элементов ' + (i + 1));
                break;
            }
        }
    })();

// task 5

    (function () {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }
        console.log(newArr)
    })();

//  task 6

    (function () {
        let arr = [ [1,2,3], [4,5,10], [6,7,10], [10, 2,10] ];
        let result = 0;
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                result += arr[i][j];
            }
        }
        console.log('сумма всех элементво двухмерного массива: ' + result)
    })();

//    task 7

    (function () {
        let arr = [ [ [1, 2, 5], [3, 4] ], [ [5, 6], [7, 8] ] ];
        let result = 0;
        for(let i = 0; i < arr.length; i++) {

            for(let j = 0; j < arr[i].length; j++) {

                for (let k = 0; k < arr[i][j].length; k++) {
                    result += arr[i][j][k]
                }

            }
        }
        console.log('сумма элементов трехмерного массива: ' + result);
    })();

//    task 8

    function isNumberInRange(number) {
        if( number > 0 && number < 10) {
           return true;
        }else {
            return false;
        }
    }
    isNumberInRange(8);

//    task 9
    (function () {
        let arr = [3,45,23,5,7,8,10,11,22,33];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if(isNumberInRange(arr[i]) !== true) {
                continue;
            }
            result.push(arr[i]);
        }
        console.log(result);
    })();

//    task 10

    function isEven(number) {
        if( number % 2 === 0 ) {
            return true;
        }else {
            return false;
        }

    }

//    task 11

    (function () {
        let arr = [22,33,2,4,5,55,66,88];
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            if ( isEven(arr[i]) !== true ) {
                continue;
            }
            newArr.push(arr[i]);
        }
        console.log(newArr);
    })();

//    task 12

        function getDivisors(number) {

            let divisorsArr = [];

            for( let i = 0; i <= number; i++) {
                if( number % i !== 0) {
                    continue;
                }
                divisorsArr.push(i);
            }
            console.log(divisorsArr);

        }
    getDivisors(40);


//   task 13

    (function () {
        let arr = [1, 2, 3, 4, 5, 6];
        let newArr = []
        for(let i = 0; i < arr.length; i++) {
            if( arr[i] % 2 === 0 ) {
                newArr[i] = arr[i - 1];
            }else if( arr[i] % 2 !== 0 ) {
                newArr[i] = arr[i + 1];
            }
        }
        arr = newArr;
        console.log(arr);
    })();

//    task 14

    (function () {
        let arr = [1, 2, 3, 4, 5, 6];
        let newArr = [].concat(arr.splice(4, 2), arr.splice(2, 2), arr.splice(0,2));
        arr = newArr;
        console.log(arr);
    }  )();

}