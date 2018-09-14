const CheckWordsQuantity = (function () {
    const textArea = document.getElementById('t_area');
    const span = document.getElementById('words_quantity');
    const checkWords = /[A-Za-zА-ЯЁа-яЁ]+/gmi;

    textArea.addEventListener('input', function () {
        const wordsQuant = this.value.match(checkWords).length;
       if(wordsQuant > 280) {
           span.textContent = 'Достигнуто максимально количество слов';
       }else {

           console.log(wordsQuant);
           span.textContent = `Количество введенных слов: ${wordsQuant}`;
       }

    })
})();