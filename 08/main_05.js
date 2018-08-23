; (() => {
    'use strict';

    const num = parseFloat(prompt('input number', ''));
    const numDegree = parseFloat(prompt('input degree', ''));

    function pow(){
       return Math.pow(num, numDegree)
    }

    alert(pow());


})();

