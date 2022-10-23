/**
 * 36. Valid Sudoku
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
        let status = true;
        let vertical = [];
        let qube = [];

        loop:
        for (let i = 0; i < board.length; i++) {
                let hashMap = {};
                for (let j = 0; j < board[i].length; j++) {
                        if (hashMap[board[i][j]] && board[i][j] !== '.') {
                                status = false;
                                break loop;
                        }

                        if (board[i][j] !== '.') {
                                hashMap[board[i][j]] = true;
                        }


                        if (vertical[j]) {
                                if (vertical[j].indexOf(board[i][j]) !== -1 && board[i][j] !== '.') {
                                        status = false;
                                        break loop;
                                }
                                vertical[j].push(board[i][j]);

                        } else {
                                vertical[j] = [board[i][j]];
                        }

                        let row = Math.floor(i / 3);
                        let column = Math.floor(j / 3);



                        if (qube[row * 3 + column]) {
                                if (qube[row * 3 + column].indexOf(board[i][j]) !== -1 && board[i][j] !== '.') {
                                        status = false;
                                        break loop;
                                }
                                qube[row * 3 + column].push(board[i][j]);
                        } else {
                                qube[row * 3 + column] = [board[i][j]];
                        }
                }
        }

        return status;
};

let board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
console.log(isValidSudoku(board));
