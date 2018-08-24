;( function () {
'use strict';

function numberedPharagraphers() {
	var text = document.querySelectorAll('p');
	for ( var i = 0; i < text.length; i++ ) {
		var num = i + 1;
		text[i].insertAdjacentHTML('afterBegin', num)
	}
}
numberedPharagraphers();


} )();