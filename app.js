let myText = document.getElementById('myText');
let wordCount = document.getElementById('wordCount');

myText.addEventListener('keyup', function (event) {
    let maxAmount = 280;
    let words = myText.value.split(' ');
    wordCount.innerText = words.length;
    if (words.length > maxAmount) {
        myText.value = myText.value.substring(0, 280);
        alert('Вы ввели больше слов, чем разрешает программа!');
    }
    
});
