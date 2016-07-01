$(document).on('ready', function () {
      console.log('create and begin the game here!')

      var game = new TicTacToe()
      var board = $('.tic-tac-toe')
      var buttons = $('.space')

      buttons.on('click', function (event) {
        event.preventDefault()
        var square = this.dataset.square

        game.takeTurn(this.dataset.square)

        if (game.turns === 0) {
          $(this).text('👸')
        } else if (game.turns % 2 === 1) {
          $(this).text('👸')
        }
         else if (game.board[this.dataset.square]['player'] === 'b') {
          $(this).text('🐲')
        }
        console.log(game.turns)
        console.log(game.board[this.dataset.square]['locked'])
      })
    })