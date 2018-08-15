'use strict'

var surcharge;
var workYears = parseFloat(prompt('Введите ваш стаж работы', ''));

if (workYears >= 0 && workYears < 3) {
	surcharge = '0%'
} else if (workYears >= 3 && workYears < 10) {
	surcharge = '10%'
} else if (workYears >= 10 && workYears < 20) {
	surcharge = '20%'
} else if (workYears >= 20) {
	surcharge = '25%'
}

alert('Ваш стаж работы: ' + workYears + ' лет. Ваша надбавка ' + surcharge);