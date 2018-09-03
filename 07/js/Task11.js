'use strict';

var arr = [15, 12, 1, 259, 65, 48, 778, 13, -88, 6, 14, 77, 103];
var arrNew = [];

function isEven ( arr ) {
	for ( var i = 0; i < arr.length; i++ ) {
		if ( arr[i] % 2 === 0 ) {
			arrNew.push( arr[i] );
		}
	}
	return arrNew;
}

