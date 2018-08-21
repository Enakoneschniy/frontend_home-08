'use strict';
// 1.
// 2.
const generateArray = char => {
    let result = [];
    for (let index = 1; index <= 20; index++) {
        let string = '';
        for (let count = 1; count <= index; count++) {
            if (char === undefined) {
                string += index;
            } else {
                string += char;
            }
        }
        result.push(string)
    }
    return result;
};

console.log(generateArray('x'));
console.log(generateArray());

// 3.
const arrayFill = (char, count) => {
    let result = [];
    for (let index = 1; index <= count; index++) {
        result.push(char)
    }
    return result;
};

console.log(arrayFill('x', 5));

// 4.
const countItemsSumOver10 = (array) => {
    let sum;
    let count = 0;
    for (let element of array) {
        sum =+ element;
        count++;
        if (sum >= 10) return count
    }
};

console.log(countItemsSumOver10([5, 2, 1, 10, 5]));

// 5.
const reverseArray = array => {
    let tmp;
    let arrayLength = array.length;
    for (let index = 0; index <= arrayLength/2; index++){
        tmp = array[index];
        array[index] = array[arrayLength - 1 - index];
        array[arrayLength - 1 - index] = tmp;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 6.
// 7.
const sumArray = array => {
    let result = 0;
    array.forEach( item => {
        if (Array.isArray(item)) {
          result += sumArray(item);
        } else {
            result += item;
        }
    });
    return result
};


console.log(sumArray([[1, 2, 3], [4, 5], [6]]));
console.log(sumArray([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));

// 8.
const isNumberInRange = (number) => (number >0 && number < 10);

console.log(isNumberInRange(3));
console.log(isNumberInRange(12));

// 9.

console.log([10, 3, 8, 12, -5, 9, 0].filter(isNumberInRange));

// 10.
const isEven = (number) => number % 2 === 0;

console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(-5));
console.log(isEven(-6));

// 11.
console.log([10, 3, 8, 12, -5, 9, 0].filter(isEven));

// 12.
const getDivisors = (number) => {
    let result = [];
    for (let index = 1; index <= number; index++) {
        if (number % index === 0) {
            result.push(index);
        }
    }
    return result
};

console.log(getDivisors(8));
console.log(getDivisors(1));
console.log(getDivisors(567));

// 13.
const home13 = array => {
    return [].concat(array.slice(0, 2).reverse(), array.slice(2, 4).reverse(), array.slice(4, 6).reverse());
};

console.log(home13([1, 2, 3, 4, 5, 6]));

// 14.
const home14 = array => {
    return [].concat(array.slice(4, 6), array.slice(2, 4), array.slice(0, 2));
};

console.log(home14([1, 2, 3, 4, 5, 6]));


// 15.
const getMatrix15 = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        let temp = [];
        for (let j = 1; j <= 10; j++) {
            temp.push(i * j);
        }
        result.push(temp);
    }
    return result;
};

console.log(getMatrix15());

// 16.
const getMatrix16 = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        let temp = [];
        for (let j = 1; j <= 10; j++) {
            if (i === j) {
                temp.push('1');
            } else if (11 - i === j) {
                temp.push('2');
            } else if (j > i && i < 11 - j) {
                temp.push('3');
            } else if (i > 11 - j && j > i) {
                temp.push('4');
            } else if (i > 11 - j && j < i) {
                temp.push('5');
            } else if (i > j && i < 11 - j) {
                temp.push('6');
            }
        }
        result.push(temp);
    }
    return result;
};

console.log(getMatrix16());

// 17.
const printPascalTriangle = (count) => {
    let result = [[1], [1, 1]];
    for (let i = 0; i <= count - 2; i++){
        let prev = result[result.length - 1];
        let temp = [1];
        for (let i = 0; i <= prev.length - 2; i++) {
            temp.push(prev[i] + prev[i +1]);
        }
        temp.push(1);
        result.push(temp);
    }
    return result;
};

console.log(printPascalTriangle(10));