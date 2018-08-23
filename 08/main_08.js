; (() => {
    'use strict';

    function checkAge(){
        let inputAge = prompt('how old are you?' || '');
        if (inputAge === ''){
            alert('input age');
        } else if (inputAge > 16){
            alert('welcome');
        } else if (inputAge <= 16){
            alert ('you are still young');
        }
    }

    checkAge();
})();

