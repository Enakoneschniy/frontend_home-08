'use strict';

let m = -4;
while (m <= 100) {
    if (m % 2 !== 0) {
        m++;
        continue;
    }
    console.log(m++);
}