module.exports = class NeighboursCells {
   
  firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];
  
  secondGeneration = [4,8];
  showBoard(firstGeneration);

  showBoard(arrayToPrint){
    for (let row = 0; row < arrayToPrint.length; row++) {
        for (let col = 0; col < arrayToPrint.length; col++) {
            console.log(arrayToPrint[row][col]);   
        }
    }
  }
    checkGeneration(){    
        for (let row = 0; row < this.firstGeneration.length; row++) {
            for (let col = 0; col <  this.firstGeneration.length; col++) {
                countNeighbors(this.firstGeneration[row][col], row, col);             
            }
        }
    }


countNeighbors(cellToCheck, row, col){
    let counter = 0;
    for (let neighboursRow = row - 1; neighboursRow <= row + 1; neighboursRow++) {
        for (let neighboursCol = col -1; neighboursCol <= col + 1; neighboursCol++) {
            if (cellToCheck == "*" && (neighboursRow != row && neighboursCol != col)) {
                counter++;
                this.verifyRules(counter , row, col);
            }            
        }
    }    
}

verifyRules(neighboursAlive, row, col){
    if (neighboursAlive < 2 || neighboursAlive > 3) {
        this.secondGeneration[row][col] = ".";
    }else if (neighboursAlive == 3 && this.firstGeneration[row][col] == ".") {
        this.secondGeneration[row][col] = "*";
    }else if (neighboursAlive == 2 || neighboursAlive == 3 && (this.firstGeneration[row][col] == "*")){
        this.secondGeneration[row][col] = this.firstGeneration[row][col];
    }
  }

}