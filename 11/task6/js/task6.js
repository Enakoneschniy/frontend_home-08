;(() => {
    'use strict';
    let obj = {};
    let isEmpty = obj => {
        return Object.keys(obj).length === 0;
    };
    console.log(isEmpty(obj))
})();