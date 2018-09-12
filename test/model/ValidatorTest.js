const chai = require('chai');
const assert = chai.assert;
const Validator = require('../../src/models/Validator');
const board = [
    [1, 2, 3, 0],
    [0, 3, 0, 1],
    [0, 1, 2, 4],
    [0, 4, 2, 4]];


describe('Validator', function() {

    describe('isUniqCol', function () {
        it('should return false when number is present in the columns', function () {
            let validator = new Validator(4);
            let isUniq = validator.isUniqCol(board, 0, 1);
            assert.isNotOk(isUniq);
        });
        it('should return true when number is not present in the columns', function () {
            let validator = new Validator();
            let isUniq = validator.isUniqCol(board, 0, 4);
            assert.isOk(isUniq);
        });
    });

    describe('isUniqRow', function () {
        it('should return false when number is present in the rows', function () {
            let validator = new Validator(4);
            let isUniq = validator.isUniqRow(board, 0, 2);
            assert.isNotOk(isUniq);
        });
        it('should return true when number is not present in the rows', function () {
            let validator = new Validator();
            let isUniq = validator.isUniqRow(board, 0, 4);
            assert.isOk(isUniq);
        });
    });

    describe('isUniqBox', function () {
        it('should return false when number is present in the box', function () {
            let validator = new Validator(4);
            let isUniq = validator.isUniqBox(board, 2, 3, 4);
            assert.isNotOk(isUniq);
        });
        it('should return true when number is not present in the box', function () {
            let validator = new Validator(4);
            let isUniq = validator.isUniqBox(board, 3, 3, 3);
            assert.isOk(isUniq);
        });
    });
});