function TicTacToe() {
  this.turns = 0

// this.board = {
//     a1: 2,
//     b1: 7,
//     c1: 6,
//     a2: 9,
//     b2: 5,
//     c2: 1,
//     a3: 4,
//     b3: 3,
//     c3: 8
//   }

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
  if (this.board[spaceAddress]['locked'] == false ){
      this._lockSpace(spaceAddress)
      this._updatePlayer(spaceAddress)
      this.turns++
    } else if (this.board[spaceAddress]['locked'] === true) {
      return false
    }
  return this.board
}

TicTacToe.prototype._spaceChecker = function (spaceAddress) {
  if (this.board[spaceAddress]['locked'] === false) {
    return true
  } else {
    return false
  }
}

TicTacToe.prototype._lockSpace = function (spaceAddress) {
  this.board[spaceAddress]['locked'] = true
}

TicTacToe.prototype._updatePlayer = function (spaceAddress) {
  if (this.turns % 2 == 0) {
    this.board[spaceAddress]['player'] = 'a'
  } else {
    this.board[spaceAddress]['player'] = 'b'
  }
}

// maybe make a check win button? 
TicTacToe.prototype._checkWin = function () {
  if (this.board['a1']['player'] === ((this.board['b1']['player'] && this.board['c1']['player']) || (this.board['a2']['player'] && this.board['a3']['player']) || (this.board['b2']['player'] && this.board['c2']['player']))) {
    return true
  } else if (this.board['a2']['player'] === (this.board['b2']['player'] && this.board['c2']['player'])) {
    return true
  } else if (this.board['a3']['player'] === ((this.board['b2']['player'] && this.board['c1']['player']) || (this.board['b3']['player'] && this.board['c3']['player']))) {
    return true
  } else if (this.board['b1']['player'] === (this.board['b2']['player'] && this.board['b3']['player'])) {
    return true
  } else if (this.board['c1']['player'] === (this.board['c2']['player'] && this.board['c3']['player'])) {
    return true
  }
}
