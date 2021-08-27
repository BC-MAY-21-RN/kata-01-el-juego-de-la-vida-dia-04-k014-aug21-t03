const CheckCell = require('../src/CellCheck');

let Cell = new CheckCell();
let rows = 4;
let columns = 8;
let firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];
  
  let secondGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];


test('should check if rules are applied to second board', () => {
    //must check if is alive when having 3 neighbours in a given position
    let lives = Cell.applyRules(3,1,1, firstGeneration, secondGeneration);
    expect(lives).toContain('*');

})   