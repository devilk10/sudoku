const Generator = require("./models/Generator") ;
const Solver = require("./models/Solver") ;

const sudokuGenerator = new Generator(24,9);
const noOfRowsAndCols = 9;
let generatedBoard = sudokuGenerator.generate(noOfRowsAndCols);
console.log(generatedBoard);
let solved = new Solver(generatedBoard).solve();
console.log(solved);
