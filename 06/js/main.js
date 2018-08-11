// 1. Вывести числа от 4 до 400 на экран.
for (let i = 4; i <=400; i++) {
  console.log(i);
}


// 2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
for (let i = 4; i <= 50; i += 3) {
  console.log(i);
}

// 3 Вывести числа 654 653 652 до нуля.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 4. Вывести все годы с 1983 до 2017.
for (let i = 1983; i <= 2017; i++) {
  console.log(i);
}

// 5. Вывести числа -4 -2 0 2 4 6 ...100.
for (let i = -4; i <= 100; i++) {
  console.log(i);
}

// 6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
for (let i = 1; i <= 9; i++) {
  console.log(i * 7);
}

// 7. Выведите с помощью цикла коды спецсимволов от 1000 до 2000.
// Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;
for (let i = 10; i <= 15; i++) {
  console.log(`&#${i}`);
}

// 8. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// 9. С помощью цикла вывести произведение чисел от 1 до 50.
let multiplication = 1;
for (let i = 1; i <= 5; i++) {
  multiplication *= i;
}
console.log(multiplication);
