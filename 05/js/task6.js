'use script';

let number = parseFloat(prompt("Введите номер квартиры", ""));

if (number >= 1 && number <= 20) {
  alert('Эта квартира находиться в 1-м подъезде');
} else if (number >= 21 && number <= 48) {
  alert('Эта квартира находиться во 2-м подъезде');
} else if (number >= 49 && number <= 90) {
  alert('Эта квартира находиться в 3-м подъезде');
} else {
  alert('Такой квартиры нет в этом доме');
}
