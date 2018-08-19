'use strict';

function getDivisors(num) {
    let result = [];
    for (let i = 0; i <= num; i++){
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(getDivisors(20));
console.log(getDivisors(150));



