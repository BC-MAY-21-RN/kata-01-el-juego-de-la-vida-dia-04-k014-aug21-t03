const CheckCell = require("../src/CellCheck");

let Cell = new CheckCell();
let rows = 4;
let columns = 8;


test("should check if rules are applied to second board", () => {
  //must check if is alive when having 3 neighbours in a given position
  let lives = Cell.applyRules(3, 1, 1, firstGeneration, secondGeneration);
  expect(lives).toContain("*");
});

test("kill a cell", () => {
  const cell = new CheckCell("*");
  const response = cell.getState();
  cell.killAcell();
  expect(cell.getState()).toBe(".");
});

test("New cell", () => {
  const cell = new CheckCell(".");
  const response = cell.getState();
  cell.CreatNewCell();
  expect(cell.getState()).toBe("*");
});

test("how many alive neighbours does it have", () => {
const cellNeighbours = new NeighboursCells();
cellNeighbours.getNeighboursCells();
expect(cellNeighbours.showNeighboursCells()).toBe(3);
})
