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
		let div = document.getElementById('borderRadius');
		let child = document.createElement('div');
		div.appendChild(child).classList.add('small');
		child.addEventListener('mouseover', changeBodrer);
	}

	function changeBodrer (event) {
		let target = event.target;

		if (target.classList.contains('small')) {
			target.style.borderRadius = "50%";
		}
	}
	
})();

//Task04
(() => {
	'use strict';

	var div = document.querySelector('#div');
	var img = document.getElementsByClassName('img');

	for (let item of img) {
		item.addEventListener('click', changeBG);
	}

	function changeBG (event) {
		let target = event.target;
		div.style.background = 'url(' + target.getAttribute('src') + ') no-repeat center center / contain';
	}

})();

//Task05
(() => {
	'use strict';

	let divMove = document.querySelector('#move');
	divMove.addEventListener('click', moveDiv);
	let left = 0;

	function moveDiv (event) {
		left += 100;
		divMove.style.left = left + 'px';
	}


})();


