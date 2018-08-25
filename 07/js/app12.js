; (() => {
  'use strict'

  console.log('task_12');

  function getDivisors(number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        array.push(i);
      }
    };
    return array;
  }

  console.log(getDivisors(15))







  console.log('------------------');
})();