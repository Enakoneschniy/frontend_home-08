;(() => {
    "use strict";
    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    let acc = 0;
    for (let key in salaries) {
        acc += salaries[key];
    }
    console.log(acc);
})();