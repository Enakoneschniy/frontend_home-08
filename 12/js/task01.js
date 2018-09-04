//Task 01
(() => {
	'use strict';

	document.getElementById('mouseover_div').onmousemove = function (event) {
		event = event || window.event;
		document.getElementById('x').value = event.offsetX;
		document.getElementById('y').value = event.offsetY;
	}

})();

//Task 02
(() => {
	'use strist';
	var folder = document.getElementById('folder');
	folder.addEventListener('dblclick', openFolder);

	function openFolder () {
		folder.style.backgroundPosition = "right top";
	}

})();

//Task03
(() => {
	'use strist';

	for (i = 0; i < 300; i++) {
		var div = document.getElementById('task3');
		var child = document.createElement('div');
		div.appendChild(child).classList.add('small');
	}; 

	
})();