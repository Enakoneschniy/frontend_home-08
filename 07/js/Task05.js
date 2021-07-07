'use strict';

var arr = [2, 8, 3, 4, 5, 0, 1, 6, 9, 11, 24];
var arrNew = [];


for ( var i = arr.length; i > 0; i-- ) {
	arrNew.push( arr.pop(i) );
}

