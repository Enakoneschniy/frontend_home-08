'use strict';

var dividers = [];

function getDivisors ( num ) {
	for (var i = 1; i <= num; i++ ) {
		if ( num % i == 0 ) {
			dividers.push( i );
		}
	}
	return dividers;
}
