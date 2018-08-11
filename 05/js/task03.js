"use strict"

var dayOfWeak = parseFloat(prompt('Введите номер дня недели', ''));

switch (dayOfWeak) {
  case 1:
  alert('Это понедельник');
  break;

  case 2:
  alert('Это вторник');
  break;

  case 3:
  alert('Это среда');
  break;

  case 4:
  alert('Это четверг');
  break;

  case 5:
  alert('Это пятница');
  break;

  case 6:
  alert('Это суббота');
  break;

  case 7:
  alert('Это воскресенье');
  break;

  default:
  alert('Такого дня недели нет')

}