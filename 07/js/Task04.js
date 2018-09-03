'use strict';

var arr = [1, 2, 3, 4, 5, 6, 7, 3, 1];

var sum = 0;

for ( var i = 0; i < arr.length; i++ ) {
	sum = sum + arr[i];
	if (sum > 10) {
		var num = i + 1;
		console.log( 'Чтобы получить сумму больше 10, нужно сложить ' + num + ' элементов' );
		break;
	}
}


