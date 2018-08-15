'use strict';

let userLogin = prompt ( "Enter your Login" );
let userPassword = prompt( "Enter your Password");

if ( (userLogin = "ivan" || "alex" || "petr") && (userPassword = 334455 || 777 || "b5678" )) {
    alert( "Welcome!");
} else {
    alert( "Error!");
}
