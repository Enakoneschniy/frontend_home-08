;(() => {
    'use strict';
    let str = 'var_text_hello';
    let res =  str.split('_').reduce((acc,item) => acc + (acc === "" ? item : item.slice(0, 1).toUpperCase() + item.slice(1)),"");
    console.log(res);
})();