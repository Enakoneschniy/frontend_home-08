;( function () {
'use strict';

function numberedPharagraphers() {
	var parag = document.querySelectorAll('p');
	for ( var i = 0; i < parag.length; i++ ) {
		parag[i].innerHTML = '<p>';
	}
}
numberedPharagraphers();


} )();