(() => {
	'use strict';

	var str = "123456";
	var arr = str.split('');
	var newArr = [];
	for ( var i = 0; i < arr.length; i++ ) {
		if ( i % 2 === 0 ) {
			newArr[i] = arr[i+1];
		} else {
			newArr[i] = arr[i-1];
		}
	};
	var newStr = newArr.join('');


})();