'use strict';

var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = [6];

var arr = [arr1, arr2, arr3];

var sum = 0;
for ( var i = 0; i < arr.length; i++) {
	for ( var j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	};
};


