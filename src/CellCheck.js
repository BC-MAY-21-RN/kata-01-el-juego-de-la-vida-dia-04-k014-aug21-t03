module.exports = class CheckCell {
 possibleState = {
    LIVE: "*",
    DEAD: ".",
  };
  constructor(state) {
    this.state = state;
  }

  applyRules(neightbours, x, y, firstGeneration, secondGeneration) {
    if (firstGeneration[x][y] == "*" && (neightbours < 2 || neightbours > 3)) {
      secondGeneration[x][y] = ".";
    } else if (firstGeneration[x][y] == "." && neightbours == 3) {
      secondGeneration[x][y] = "*";
    } else {
      secondGeneration[x][y] = firstGeneration[x][y];
    }
    return secondGeneration[x][y];
  }

  getState(){
    return this.state;
  }
  killAcell() {    
    this.setState(this.possibleState.DEAD);
  }

  CreatNewCell(){
    this.setState(this.possibleState.LIVE);
  }

  setState(state) {
    this.state = state;
  }
};
