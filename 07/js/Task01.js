'use strict';

var arr = [];
var element = 'x';

for (var i = 0; i < 10; i++) {
	arr.push(element);

	for (i < 0; i < 10; i++) {
		arr.push(element += 'x');
	}
}

console.log(arr);
