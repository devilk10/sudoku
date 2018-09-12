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
        for (let colIndex = 0; colIndex < this.BOX_SIZE; colIndex++) {
            boxElements = boxElements.concat(board[colStart + colIndex].slice(rowStart, rowStart+this.BOX_SIZE));
        }
        return !boxElements.includes(number)
    }
}
module.exports = Validator;