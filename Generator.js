class Generator {

    constructor(TOTAL_VALUES, size) {
        this.TOTAL_VALUES = TOTAL_VALUES;
        this.SIZE = size;
    }

    generate() {
        const board = this.createGrid(this.SIZE);
        return this.fillValues(board);
    };

    createGrid(splittingFactor) {
        return new Array(splittingFactor).fill(0).map((element) => new Array(splittingFactor).fill(0));
    };

    getRandomDigit(limit) {
        return Math.floor(Math.random() * limit);
    }

    fillValues(board) {
        for (let index = 0; index <= this.TOTAL_VALUES; index++) {
            let randomRow = this.getRandomDigit(this.SIZE);
            let randomCol = this.getRandomDigit(this.SIZE);
            let number = this.getRandomDigit(this.SIZE + 1);
            if (this.isUniq(board, randomRow, randomCol, number)) board[randomRow][randomCol] = number;
            else index--;
        }
        return board;
    }


    isUniqCol(board, col, number) {
        let column = board.map(x => x[col]);
        return !column.includes(number)
    }

    isUniqRow(board, row, number) {
        return !board[row].includes(number);
    }

    isUniq(board, row, column, number) {
        return this.isUniqCol(board, column, number) && this.isUniqRow(board, row, number) && this.isUniqBox(board, row, column, number)
    };

    isUniqBox(board, row, col, number) {
        let rowStart = row - (row % 3);
        let colStart = col - (col % 3);
        let boxElements = [];
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            boxElements = boxElements.concat(board[colStart + colIndex].slice(rowStart, 3));
        }
        return !boxElements.includes(number)
    }


}

module.exports = Generator;