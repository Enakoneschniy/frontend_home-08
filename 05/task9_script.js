"use strict";

let userWorkingExperience = prompt( "Enter your working experience");

if ( userWorkingExperience >= 0 && userWorkingExperience < 3 ) {
    alert( "0 %");
} else if ( userWorkingExperience >= 3 && userWorkingExperience < 10) {
    alert( "10 %");
} else if ( userWorkingExperience >= 10 && userWorkingExperience < 20 ){
    alert( "20 %");
} else if (userWorkingExperience >= 20 ) {
    alert( "25 %");
}
