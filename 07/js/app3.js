; (() => {
  'use strict'

  console.log('task_3');

  function arrayFill(value, amount) {
    let arrayFill = [];
    for (let i = 0; i < amount; i++) {
      arrayFill.push(value);
    }
    return arrayFill;
  }

  console.log(arrayFill('x', 5));




  console.log('------------------');
})();