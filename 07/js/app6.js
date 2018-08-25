; (() => {
  'use strict'

  console.log('task_6');

  let array = [[1, 2, 3], [4, 5], [6]];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum = sum + array[i][j];

    }
  }

  console.log(sum);






  console.log('------------------');
})();