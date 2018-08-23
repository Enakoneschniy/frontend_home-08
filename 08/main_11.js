; (() => {
    'use strict';
    const numForGuess = Math.round(Math.random() * 10);

    let countOfAttempts = 1;

    function guessNum() {
        while (countOfAttempts <= 3) {
            let guesses = parseFloat(prompt('Input a number from 0 to 10', ''));
            {
                if (guesses === undefined) {
                    break;
                } else if (countOfAttempts === 3) {
                    alert('You lost! Try again! Number of attempts is ' + countOfAttempts);
                    break;
                } else {
                    { if (guesses === numForGuess) {
                            alert('Сongratulations, you won! Number of attempts is ' + countOfAttempts);
                            return countOfAttempts;
                        } else if (guesses < numForGuess) {
                            alert('Try to enter a larger number');
                        } else if (guesses > numForGuess) {
                            alert('Try to enter a lesser number');
                        } else if (guesses > 10 || guesses < 0) {
                            alert('Input a number from 0 to 10');
                        }
                        countOfAttempts++;
                    }
                }
            }
        }
    }

    guessNum();


})();


