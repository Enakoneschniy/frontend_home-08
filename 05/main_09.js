'use strict';

let workExperience = parseFloat( prompt('Enter your work experience, please', ''));


if (workExperience === 0 && workExperience < 3){
    alert ('Surcharge is 0%');
} else if (workExperience >= 3 && workExperience < 10 ){
    alert ('Surcharge is 10%');
} else if (workExperience >= 10 && workExperience < 20 ){
    alert ('Surcharge is 20%');
} else if (workExperience >= 20){
    alert ('Surcharge is 25%');
} else {
    alert ('Please enter the correct work experience');
}