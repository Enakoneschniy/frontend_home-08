'use strict';

let arr = [1, 2, 3, 4, 5, 6];
let arrNew = [].concat(arr.splice(4, 2), arr.splice(2, 2), arr.splice(0, 2));
arr = arrNew;
console.log(arr);