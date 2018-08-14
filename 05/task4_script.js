'use strict';

let a = prompt( "Введите первое число" );
let b = prompt( "Введите второе число" );

if ( a > b ) {
    alert ( a );
} else if ( a < b ) {
    alert ( b );
} else {
    alert ( a + "и" + b + "-равны!")
}