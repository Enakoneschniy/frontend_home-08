(() => {
	'use strict';

	var o = {
		'Вася': 100,
		'Петя': 50,
		'Даша': 250,
		'Коля': 150
	};

		var max = 0;
		var maxName = '';
		for (var key in o) {
			if (max < o[key]) {
				max = o[key];
				maxName = key;
			}
		}
		
		alert (maxName || 'Нет сотрудников');






})()