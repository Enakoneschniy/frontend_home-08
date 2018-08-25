; (() => {
  'use strict'

  console.log('task_13');

  let array = [1, 2, 3, 4, 5, 6];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArray.push(array[i] - 1);
    } else {
      newArray.push(array[i] + 1);
    }
  }

  console.log(newArray);





  console.log('------------------');
})();