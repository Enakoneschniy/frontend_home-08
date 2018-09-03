(() => {
	'use strict';

	var str = 'every word have to start from big letter';
	var arr = str.split(' ');
	var arr1 = [];

	for (var i = 0; i < arr.length; i++) {
		arr1.push(ucfirst(arr[i]));
	}

	var str1 = arr1.join(' ');

	function ucfirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	};

})();