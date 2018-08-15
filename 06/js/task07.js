'use strict'

var symbolsArr = [];
for (var num = 1000; num <= 2000; num++) {
	var symbol = '&#' + num +';';
	symbolsArr.push(symbol);
	console.log(String(symbol));
	document.getElementById('symbols').innerHTML = symbolsArr;
}