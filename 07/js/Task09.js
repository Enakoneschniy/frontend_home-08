 'use strict';

var arr = [12, 9,  7, 1, 0, 4, 45, 789, 3, 12, 3, 9, 27, 7, 897];
var arrNew = [];

function isNumberInRange( arr ) {
	for (var i = 0; i < arr.length; i++) {
		if ( arr[i] > 0 && arr[i] < 10 ) {
			arrNew.push(arr[i]);
		}
	}
	return arrNew;
}

isNumberInRange( arr );

 