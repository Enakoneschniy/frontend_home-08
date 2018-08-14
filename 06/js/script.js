'use strict';

// exercise 1
for (let a = 4; a <= 400; a++){
    let exercise1 = document.getElementById("ex1");
    exercise1.insertAdjacentHTML("beforeEnd", a + '; ');
}

// exercise 2
let b = 4;

do {
    let exercise2 = document.getElementById("ex2");
    exercise2.insertAdjacentHTML("beforeEnd", b + '; ');
    b+=3;
}while (b <=13);

// exercise 3
let c = 654;

while (c >= 0){
    let exercise3 = document.getElementById("ex3");
    exercise3.insertAdjacentHTML("beforeEnd", c + '; ');
    c--;
}

// exercise 4
let d = 1983;

while (d <= 2017){
    let exercise4 = document.getElementById("ex4");
    exercise4.insertAdjacentHTML("beforeEnd", d + '; ');
    d++;
}

// exercise 5
for (let e = -4; e <= 100; e+=2){
    let exercise5 = document.getElementById("ex5");
    exercise5.insertAdjacentHTML("beforeEnd", e + '; ');
}

// exercise 6
for (let f = 1; f <= 9; f++){
    const number = 7;
    let exercise6 = document.getElementById("ex6");
    exercise6.insertAdjacentHTML("beforeEnd", number + '*' + f + "=" + number*f + '; <br>');
}

// exercise 7
let g = 1000;

do {
    let exercise7 = document.getElementById("ex7");
    exercise7.insertAdjacentHTML("beforeEnd", '&#' + g + '; ');
    g++;
}while (g <=2000);

// exercise 8
let h = 0;
let sumH = 0

while (h <= 100){
    sumH = sumH + h
    h++;
}

let exercise8 = document.getElementById("ex8");
exercise8.insertAdjacentHTML("beforeEnd", sumH + '; ');

// exercise 9

let productI = 1;

for (let i = 1; i <= 50; i++){
    productI = productI * i;
}

let exercise9 = document.getElementById("ex9");
exercise9.insertAdjacentHTML("beforeEnd", productI + ';');