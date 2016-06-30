function TicTacToe() {
  this.turns = 0

  this.board = {
    a1: {player: "c", locked: false},
    b1: {player: "c", locked: false},
    c1: {player: "c", locked: false},
    a2: {player: "c", locked: false},
    b2: {player: "c", locked: false},
    c2: {player: "c", locked: false},
    a3: {player: "c", locked: false},
    b3: {player: "c", locked: false},
    c3: {player: "c", locked: false}
  };
}

// A, B, C are columns; 1, 2, 3 are rows.
// Therefore a1 is top left, and b3 is bottom right

TicTacToe.prototype = {
  
}


// what happens during a turn
TicTacToe.prototype.takeTurn = function(spaceAddress) {
  if (this._spaceChecker == true) {
    this._lockSpace(spaceAddress)
    this._updatePlayer(spaceAddress)
    this._checkWin()
    this.turns++
  }
}

TicTacToe.prototype._spaceChecker = function (spaceAddress) {
  if (this[board][spaceAddress] == false) {
    return true
  } else {
    return false
  }
}

TicTacToe.prototype._lockSpace = function (spaceAddress) {
  this.board[spaceAddress][locked] = true
}

TicTacToe.prototype._updatePlayer = function (spaceAddress) {
  if (this.turns % 2 == 0) {
    this.board[spaceAddress][player] = 'a'
  } else {
    this.board[spaceAddress][player] = 'b'
  }
}

TicTacToe.prototype._checkWin = function () {
  
}
