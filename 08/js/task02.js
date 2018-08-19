;( function () {
'use strict';

function shadow() {
	var images = document.querySelectorAll('img');
	for ( var i = 0; i < images.length; i++ ) {
		images[i].style.boxShadow = '10px 10px 10px red';
	}
}
shadow();

} )();