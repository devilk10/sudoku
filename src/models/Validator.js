class Validator {

    constructor(size) {
        this.BOX_SIZE = Math.sqrt(size);
    }

    isUniqCol(board, col, number) {
        let column = board.map(x => x[col]);
        return !column.includes(number)
    }

    isUniqRow(board, row, number) {
        return !board[row].includes(number);
    }

    isUniqBox(board, row, col, number) {
        let rowStart = row - (row % this.BOX_SIZE);
        let colStart = col - (col % this.BOX_SIZE);
        let boxElements = [];
        for (let rowIndex = 0; rowIndex < this.BOX_SIZE; rowIndex++) {
            boxElements = boxElements.concat(board[rowStart + rowIndex].slice(colStart, colStart+this.BOX_SIZE));
        }
        return !boxElements.includes(number)
    }
}
module.exports = Validator;