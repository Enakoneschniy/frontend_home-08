;(() => {
    'use strict';
    let inArray = (element, array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        return false;
    };

    let arrLang = ['javascript', 'php', 'c', 'c++', 'java', 'python', 'ruby', 'c#', 'swift', 'objective-c'];
    let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(inArray('php', arrLang));
})();