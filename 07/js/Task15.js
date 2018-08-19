; ( function  () {
'use strict';

function arrayMatrix ( rows, columns ) {
  var arr = [];
  for( var i = 1; i <= rows; i++ ) {
    arr[i] = [];
    for( var j = 1; j <= columns; j++ ) {
      arr[i][j] = i * j;
    }
  }
  return arr;
}
var myMatrix = arrayMatrix( 10, 10 );
console.log(myMatrix);

})();

( function () {
'use strict';

function arrayMatrix ( rows, columns ) {
  var arr = [];
  for( var i = 0; i < rows; i++ ) {
    arr[i] = [];
    for( var j = 0; j < columns; j++ ) {
      arr[i][j] = 0;
      if ( i == j ) {
      	arr[i][j] = 1;
      } else if ( i + j == 9 ) {
      	arr[i][j] = 2;
      } else if ( i >= 0 && i <= 3 && j >= 1 && j <= 8 && i < j && (i + j < 9) ) {
      	arr[i][j] = 3;
      } else if ( i >= 1 && i <= 8 && j >= 6 && j <= 9 && i < j ) {
      	arr[i][j] = 4;
      } else if ( i >= 6 && i <= 9 && j >= 1 && j <= 8 && (i + j > 9)) {
      	arr[i][j] = 5;
      } else if ( i >= 1 && i <= 8 && j >= 0 && j <= 3 ) {
      	arr[i][j] = 6;
      }
    }
  }
  return arr;
}
var myMatrix = arrayMatrix( 10, 10 );
console.log(myMatrix);

}) ();


( function () {
'use strict';
function arrayMatrix ( rows, columns ) {
  var arr = [];
  for( var i = 0; i < rows; i++ ) {
    arr[i] = [];
    for( var j = 0; j < columns; j++ ) {
      arr[i][j] = 0;
      if ( i == j ) {
        arr[i][j] = 1;
      } else if ( i > j ) {
      	arr[i][j] = summ();
      	function summ (elem1, elem2) {
      		if ( j === 0 ){
      			return 1;
      		} else {
        	elem1 = arr[i-1][j];
        	elem2 = arr[i-1][j-1];
        	return (summ = elem1 + elem2);
        }
        }
      }
    }
  }
  return arr;
}

var myMatrix = arrayMatrix( 10, 10 );
console.log( myMatrix );


}) ();
