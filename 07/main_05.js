'use strict';

let rndArray = [];
let count = 10;
for (let c = count; c > 0; c--) {
    rndArray.push(Math.round(Math.random()*10));
}
console.log(rndArray);

rndArray.sort (function(a, b){
    return a - b;
});

console.log(rndArray);

