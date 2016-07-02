function TicTacToe() {
  this.turns = 0

  this.playerOne = []
  this.playerTwo = []

  this.board = {
    a1: {player: null, locked: false},
    b1: {player: null, locked: false},
    c1: {player: null, locked: false},
    a2: {player: null, locked: false},
    b2: {player: null, locked: false},
    c2: {player: null, locked: false},
    a3: {player: null, locked: false},
    b3: {player: null, locked: false},
    c3: {player: null, locked: false}
  }

  this.wins = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1']
  ]
}

// A, B, C are columns; 1, 2, 3 are rows.
// Therefore a1 is top left, and b3 is bottom right

TicTacToe.prototype = {
  
}


// what happens during a turn
TicTacToe.prototype.takeTurn = function(spaceAddress) {
  if (this.board[spaceAddress]['locked'] === false ){
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
    this.playerOne.push(spaceAddress)
  } else {
    this.board[spaceAddress]['player'] = 'b'
    this.playerTwo.push(spaceAddress)
  }
}



// var isSuperset = arr2.every(function(val) { return arr1.indexOf(val) >= 0; })

// TicTacToe.prototype.checkWin = function () {
//   if (this.turns < 5) {
//     return false
//   } else if (this.board['a1']['player'] !== 'c') {
//     if (this.board['a1']['player'] === ((this.board['b1']['player'] && this.board['c1']['player']) || (this.board['a2']['player'] && this.board['a3']['player']) || (this.board['b2']['player'] && this.board['c2']['player']))) {
//       return true
//     } else {
//       return false
//     }
//   } else if (this.board['a2']['player'] !== 'c') {
//     if (this.board['a2']['player'] === (this.board['b2']['player'] && this.board['c2']['player'])) {
//       return true
//     } else {
//       return false
//     }
//   } else if (this.board['a3']['player'] !== 'c') {
//     if (this.board['a3']['player'] === ((this.board['b2']['player'] && this.board['c1']['player']) || (this.board['b3']['player'] && this.board['c3']['player']))) {
//       return true
//     } else {
//       return false
//     }
//   } else if (this.board['b1']['player'] !== 'c') {
//     if (this.board['b1']['player'] === (this.board['b2']['player'] && this.board['b3']['player'])) {
//       return true
//     } else {
//       return false
//     }
//   } else if (this.board['c1']['player'] !== 'c') {
//     if (this.board['c1']['player'] === (this.board['c2']['player'] && this.board['c3']['player'])) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

