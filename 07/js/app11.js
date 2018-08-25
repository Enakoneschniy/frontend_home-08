; (() => {
  'use strict'

  console.log('task_11');

let array = [23, 56, 35, 6, 24];
let newArray = [];

function isEven(number) {
  if (Math.round(number) % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
 
for (let i = 0; i < array.length; i++) { 
    if (isEven(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);






  console.log('------------------');
})();