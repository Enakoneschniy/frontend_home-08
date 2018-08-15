window.onload = function () {

    (function () {
        let dayOfWeek = parseFloat( prompt('введите номер дня', '') );

        switch (dayOfWeek) {
            case 1:
                alert( 'ваш день понедельник!' );
                break;
            case 2:
                alert( 'ваш день вторник!' );
                break;
            case 3:
                alert( 'ваш день среда!' );
                break;
            case 4:
                alert( 'ваш день четверг!' );
                break;
            case 5:
                alert( 'ваш день пятница!' );
                break;
            case 6:
                alert( 'ваш день субота!' );
                break;
            case 7:
                alert( 'ваш день воскресенье!' );
                break;
            default:
                alert( 'такого дня не существует' );
        }
    })()

}