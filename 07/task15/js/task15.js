'use strict';

let matrix1 = () => {
    let arr1 = [];
    for (let a = 1; a <= 10; a++) {
        let arr2 = [];
        for (let b = 1; b <= 10; b++) {
            arr2.push(a * b);
        }
        arr1.push(arr2)
    }
    return arr1;
};
console.log(matrix1());

//---

let matrix2 = () => {
    let arr1 = [];
    for (let a = 1; a <= 10; a++) {
        let arr2 = [];
        for (let b = 1; b <= 10; b++) {
            if (a === b) {
                arr2.push('1');
            } else if (11 - a === b) {
                arr2.push('2');
            } else if (b > a && a < 11 - b) {
                arr2.push('3');
            } else if (a > 11 - b && b > a) {
                arr2.push('4');
            } else if (a > 11 - b && b < a) {
                arr2.push('5');
            } else if (a > b && a < 11 - b) {
                arr2.push('6');
            }
        }
        arr1.push(arr2);
    }
    return arr1;
};
console.log(matrix2());

//---

const PascalTriangle = (count) => {
    let arr1 = [[1], [1, 1]];
    for (let i = 0; i <= count - 2; i++) {
        let arr2 = [1];
        let arr3 = arr1[arr1.length - 1];
        for (let i = 0; i <= arr3.length - 2; i++) {
            arr2.push(arr3[i] + arr3[i + 1]);
        }
        arr2.push(1);
        arr1.push(arr2);
    }
    return arr1;
};
console.log(PascalTriangle(10));