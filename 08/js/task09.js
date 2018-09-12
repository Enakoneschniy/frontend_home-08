( function () {
    'use strict';

 var arr = [];
 var elementsNum = 0;
 function arrLength (arr) {

 	if (arr.length == 0 ) {
 		alert('Ошибка');
 	}

 	elementsNum = parseFloat(arr.length);
 	console.log(elementsNum);
 	return elementsNum;
};
arrLength();
arrLength([]);
arrLength([1, 2, 3]);
} )();