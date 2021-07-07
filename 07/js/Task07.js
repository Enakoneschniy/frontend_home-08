'use strict';

var arr_1_1 = [1, 5, 6, 8];
var arr_1_2 = [5, 6, 3, 1];
var arr_2_1 = [4, 3, 7, 2, 454];
var arr_2_2 = [4, 5, 6, 7, 11, 89, 53];

var arr_1 = [arr_1_1, arr_1_2];
var arr_2 = [arr_2_1, arr_2_2];
var arr = [arr_1, arr_2];
var sum1 = 0;

console.log( arr );

for ( var i = 0; i < arr.length; i++ ) {
	for ( var j = 0; j < arr[i].length; j++ ) {
		for ( var x = 0; x < arr[i][j].length; x++ ) {
			sum1 += arr[i][j][x];
		};
	};
};

