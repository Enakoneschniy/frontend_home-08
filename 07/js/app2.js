; (() => {
  'use strict'

  console.log('task_2');

  let array = [];

  for (let i = 1; i < 10; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += i;
    }
    array.push(str);
  }

  console.log(array)






  console.log('------------------');
})();