const generator = require("./models/Generator") ;

const sudokuGenerator = new generator(24,9);
const noOfRowsAndCols = 9;
let generatedBoard = sudokuGenerator.generate(noOfRowsAndCols);
let solved = new Solver(generatedBoard).solve();
console.log(solved);
console.log(generatedBoard);