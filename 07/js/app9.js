; (() => {
  'use strict'

  console.log('task_9');

  let array = [1, 2, 15, 4, 23, 6, 4];
  let newArray = [];

  function isNumberInRange(number) {
    if (number > 0 && number < 10) {
      return true;
    } else {
      return false
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (isNumberInRange(array[i]) === true) {
      newArray.push(array[i]);
    }
  }

  console.log(newArray);





  console.log('------------------');
})();