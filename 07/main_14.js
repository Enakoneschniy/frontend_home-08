'use strict';

let array = [1, 2, 3, 4, 5, 6];

let newArr = [].concat(array.slice(4), array.slice(2,4), array.slice(0,2));
console.log (newArr);