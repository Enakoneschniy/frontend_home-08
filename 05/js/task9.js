'use strict'

let experiense = parseFloat(prompt("Введите ваш стаж работы", ""));

if (experiense >= 0 && experiense < 3) {
  alert('Ваша надбавка составляет 0%');
} else if (experiense >= 3 && experiense < 10) {
  alert('Ваша надбавка составляет 10%');
} else if (experiense >= 10 && experiense < 20) {
  alert('Ваша надбавка составляет 20%');
} else if (experiense >= 20) {
  alert('Ваша надбавка составляет 25%');
} 