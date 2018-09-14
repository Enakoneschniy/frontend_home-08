const CheckWordsQuantity = (function () {
    const textArea = document.getElementById('t_area');
    const span = document.getElementById('words_quantity');
    const checkWords = /[A-Za-zА-ЯЁа-яЁ]+/gmi;

    textArea.addEventListener('input', function () {
        const words = this.value.match(checkWords);
        if(words.length > 280) {
           span.textContent = 'Достигнуто максимально количество слов';
           words.length = 280;
       }else {
           span.textContent = `Количество введенных слов: ${words.length}`;
       }
    })
})();