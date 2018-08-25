;( function () {
'use strict';

function numberedPharagraphers() {
	let text = document.querySelectorAll('p');
	for ( let i = 0; i < text.length; i++ ) {
		let num = i + 1;
		text[i].insertAdjacentHTML('afterBegin', '№' + num + '. ')
	}
}
numberedPharagraphers();


} )();