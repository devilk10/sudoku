const Validator = require('./Validator');
const randomNumber = require('../utils/util');

class Generator {
    constructor(TOTAL_VALUES, size) {
        this.TOTAL_VALUES = TOTAL_VALUES;
        this.SIZE = size;
        this.validator = new Validator(size);
    }

    generate() {
        const board = this.createGrid(this.SIZE);
        return this.fillValues(board);
    };

    createGrid(splittingFactor) {
        return new Array(splittingFactor).fill(0).map(() => new Array(splittingFactor).fill(0));
    };

    fillValues(board) {
        for (let index = 0; index < this.TOTAL_VALUES; index++) {
            let randomRow = randomNumber(this.SIZE);
            let randomCol = randomNumber(this.SIZE);
            let number = randomNumber(this.SIZE + 1);
            if (board[randomRow][randomCol] === 0 && this.isUniq(board, randomRow, randomCol, number))
                board[randomRow][randomCol] = number;
            else index--;
        }
        return board;
    }

    isUniq(board, row, column, number) {
        return this.validator.isUniqCol(board, column, number) &&
            this.validator.isUniqRow(board, row, number) &&
            this.validator.isUniqBox(board, row, column, number);
    };
}

module.exports = Generator;