; (() => {
  'use strict'

  console.log('task_7');

  let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i][j].length; k++) {
        sum = sum + array[i][j][k];
      }
    }
  }
  console.log(sum);




  console.log('------------------');
})();