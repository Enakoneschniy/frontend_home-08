window.onload = function () {
    (function () {
        const matrix = [[], [], [], [], [], [], [], [], [], []];

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {
                matrix[i][j] = (i + 1) * (j + 1);
            }

        }
        console.log(matrix)
    })();

//    matrix 2

    (function () {
        const matrix = [[], [], [], [], [], [], [], [], [], []];

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][i] = 1;
            matrix[i][matrix.length - (i + 1)] = 2;

            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] === undefined && i <= 4) {

                    for (let a = 0; a < matrix.length; a++) {
                        for (let k = a + 1; k < matrix.length - (a + 1); k++) {
                            if (a <= 3) {
                                matrix[a][k] = 3;
                            }
                        }
                    }


                    for (let s = 1; s <= 5; s++) {
                        for (let p = 0; p <= s - 1 && p < 4; p++) {
                            matrix[s][p] = 6;

                        }


                    }

                    for (let s = 6; s <= 8; s++) {
                        for (let s2 = 0; s2 <= 8 - s; s2++) {
                            matrix[s][s2] = 6;
                        }
                    }


                }



                for (let c = matrix.length - 1; c >= 6; c--) {

                    for (let c2 = 10 - c; c2 <= c - 1; c2++) {
                        matrix[c][c2] = 5;
                    }


                }
            }
            for(let g = 0; g < matrix.length; g++) {
                if(matrix[i][g] === undefined) {
                    matrix[i][g] = 4;
                }
            }

        }


        console.log(matrix)


    })();

//    matrix 3
    (function () {
        let matrix = [];
        for( let i = 0; i <= matrix.length; i++) {
            matrix.push([]);
            matrix[i][0] = 1;
            matrix[i][matrix.length - 1] = 1;

            for (let j = 0; j < matrix.length; j++) {
                if(matrix[i][j] === undefined) {
                    matrix[i][j] = matrix[i - 1][j] +  matrix[i - 1][j - 1];
                }


            }

            if(i === 9) {
                break;
            }

        }
        console.log(matrix);
    })();


};


