'use strict';

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

function reOrder ( arr ) {
	var newArr = [];
	for ( i = 0; i < arr.length; i++ ) {
		if ( i % 2 === 0 ) {
			newArr[i] = arr[i+1];
		} else {
			newArr[i] = arr[i-1];
		}
	}
	var arrNew = newArr.reverse();
	console.log(arrNew);
	return newArr;
	
}

reOrder(arr);
