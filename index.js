$(document).on('ready', function () {
      console.log('create and begin the game here!')

      var game = new TicTacToe()
      var board = $('.tic-tac-toe')
      var buttons = $('.space')

      buttons.on('click', function (event) {
        event.preventDefault()
        var square = this.dataset.square

        game.takeTurn(this.dataset.square)

        if (game.turns === 0 || game.turns % 2 === 1) {
          $(this).text('👸')
        } else {
          $(this).text('🐲')
        }
        console.log(game.turns)
      })
    })