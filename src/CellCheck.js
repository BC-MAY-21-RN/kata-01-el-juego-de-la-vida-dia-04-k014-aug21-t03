module.exports = class CheckCell {
  
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
  };