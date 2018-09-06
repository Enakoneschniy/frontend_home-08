;(() => {
    'use strict';
    let salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    const getPersonWithMaxSalary = salaries => {
        let max = 0;
        let person;
        for (let prop in salaries) {
            if (salaries.hasOwnProperty(prop)) {
                if (salaries[prop] > max) {
                    max = salaries[prop];
                    person = prop;
                }
            }
        }
        return person || 'Нет сотрудников';
    };
    console.log(getPersonWithMaxSalary(salaries))
})();