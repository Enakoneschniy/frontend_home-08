; (() => {
  'use strict'

  console.log('task_4');

  let array = [1, 2, 1, 3, 4, 2, 5, 7];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum > 10) {
      console.log('Нужно ' + (i + 1) + ' элемента(-ов)');
      break;
    }
  }





  console.log('------------------');
})();