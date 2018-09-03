'use strict';

function arrayFill( element, count ) {
	var arr = [];

	for ( var i = 0; i < count; i++ ) {
  	arr.push( element );
  }
  console.log( arr );
}

arrayFill( 'hello', 15 );
arrayFill( 'x', 5 );
arrayFill( 'y', 6 );
