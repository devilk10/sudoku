const Validator = require('./Validator');

class Solver {
    constructor(board) {
        this.board = board;
        this.emptyPositions = [];
        this.validator = new Validator(board.length);
    }

    getAllEmptyPos() {
        this.board.map((row, rowIndex) => {
            row.map((col, colIndex) => {
                if (col === 0) this.emptyPositions.push([rowIndex, colIndex])
            });
        });
        return this.emptyPositions;
    };

    isValueOkAt(board, row, column, number) {
        return this.validator.isUniqCol(board, column, number) &&
            this.validator.isUniqRow(board, row, number) &&
            this.validator.isUniqBox(board, row, column, number);
    }

    putValues() {
        for (let index = 0; index < this.emptyPositions.length;) {
            if (index < 0) {
                return 'No possible solution';
            }
            let limit = this.board.length;
            let correctStep = false;
            let rowIndex = this.emptyPositions[index][0];
            let colIndex = this.emptyPositions[index][1];
            let value = this.board[rowIndex][colIndex]+1;
            while (!correctStep && value <= limit) {
                if (this.isValueOkAt(this.board, rowIndex, colIndex, value)) {
                    this.board[rowIndex][colIndex] = value;
                    correctStep = true;
                }
                else value++;
            }
            if (!correctStep) {
                this.board[rowIndex][colIndex]=0;
                index--;
            } else index++;
        }
        return this.board;
    }

    solve() {
        this.getAllEmptyPos();
        return this.putValues();
    }
}

module.exports = Solver;