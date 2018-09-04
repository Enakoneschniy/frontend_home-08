(() => {
    "use strict";
    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    const multiplyNumeric = (menu) => {
        for (let key in menu) {
            menu[key] = isNumeric(menu[key]) ? menu[key] * 2 : menu[key];
        }
    };
    multiplyNumeric(menu);
    console.log(menu);

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
})();