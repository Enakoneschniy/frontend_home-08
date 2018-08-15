'use strict';
//1
let num1 = 4;
while (num1 <= 400) {
    console.log(++num1);
}
//2
let num2 = 1;
while (num2 < 13) {
    console.log(num2 += 3);
}
//3
let num3 = 655;
while (num3 > 0) {
    console.log(--num3);
}
//4
let num4 = 1982;
while (num4 < 2017) {
    console.log(++num4);
}
//5
let num5 = -5;
while (num5 < 100) {
    console.log(++num5);
}
//6
for (let num6 = 7 ; num6 <= 63; num6 += 7) {
    console.log(num6)
}
//7
for (let num7 = 1000 ; num7 <= 2000; num7++) {
    console.log(`ӆ${num7}`);
}
//8
let sum = 0;
for (let num8 = 1; num8 <= 100; num8++) {
    sum += num8;
}
console.log(sum);
//9
let sum1 = 1;
for (let num9 = 1; num9 <= 50; num9++) {
    sum1 *= num9;
}
console.log(sum1);