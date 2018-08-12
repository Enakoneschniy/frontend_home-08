window.onload = function () {

    (function () {
        let a = parseFloat( prompt("введите значение a", '') );
        let b = parseFloat( prompt("введите значение b", '') );
        let x;
        if( a > b ) {
            x = a + b / 2 * 4;
        }else if ( a < b ){
            x = a - b + 2 / b * 4;
        }else {
            x = 400;
        }
        alert(x);
    })();

}