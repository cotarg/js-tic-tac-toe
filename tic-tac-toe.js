function TicTacToe() {

}

// A, B, C are columns; 1, 2, 3 are rows.
// Therefore a1 is top left, and b3 is bottom right

TicTacToe.prototype = {
  board: {
    a1: {player: "c", locked: false},
    b1: {player: "c", locked: false},
    c1: {player: "c", locked: false},
    a2: {player: "c", locked: false},
    b2: {player: "c", locked: false},
    c2: {player: "c", locked: false},
    a3: {player: "c", locked: false},
    b3: {player: "c", locked: false},
    c3: {player: "c", locked: false}
  },

  plays: {
    playerOne: [],
    playerTwo: []
  },

  turns: 0
}


// what happens during a turn
TicTacToe.prototype.takeTurn = function(spaceAddress) {
  if (this._spaceChecker == true) {
    this._lockSpace(spaceAddress)
    this._updatePlayer(spaceAddress)
  }

}

TicTacToe.prototype._spaceChecker = function (spaceAddress) {
  if (this[board][spaceAddress] == false) {
    return true
  }
}

TicTacToe.prototype._lockSpace = function (spaceAddress) {
  
}
