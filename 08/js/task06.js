( function () {
    'use strict';
   function makeUnderline (tag) {
    	var tag = prompt('Введите тег элемента для подчеркивания ', 'p');
    	var element = document.getElementsByTagName(tag);
    	for (var i = 0; i < element.length; i++) {
    		element[i].style.textDecoration = "underline";
    	}
    };
    var delay = setTimeout(makeUnderline, 300);;
} )();