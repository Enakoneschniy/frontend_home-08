'use strict'

var roomNumber = +prompt('Введите номер квартиры', '');

if (roomNumber >= 1 && roomNumber <= 20) {
	alert('Эта квартира находнится в первом подъезде');
} else if (roomNumber >= 21 && roomNumber <= 48) {
	alert('Эта квартира находнится во втором подъезде');
} else if (roomNumber >= 49 && roomNumber <= 90) {
	alert('Эта квартира находнится в третьем подъезде');
} else {
	alert('Такой квартиры нет в этом доме')
}