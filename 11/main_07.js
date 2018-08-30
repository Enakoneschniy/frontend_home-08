; (() => {
    'use strict';

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    let sum = 0;

    for (let name in salaries) {
        sum += salaries[name];
    }
    console.log(sum || 0);


})();
