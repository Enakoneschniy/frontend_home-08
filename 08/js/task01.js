;( function () {
'use strict';

function redPharagraph () {
	var red = document.querySelectorAll('p');
	for ( var i = 0; i < red.length; i++ ) {
		red[i].style.backgroundColor = 'red';
	}
}

redPharagraph();

} )();