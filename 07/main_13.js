'use strict';

let array = [1, 2, 3, 4, 5, 6];
let arr1 = array.slice(0,2);
let arr2 = array.slice(2,4);
let arr3 = array.slice(4,6);

let newArr = [].concat(arr1.reverse(), arr2.reverse(), arr3.reverse());
console.log (newArr);

