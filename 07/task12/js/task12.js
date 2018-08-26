'use strict';

let getDivisors = num => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (num % i !==0){
            continue;
        }
        arr.push(i);
    }
    console.log(arr);
};
getDivisors(66);