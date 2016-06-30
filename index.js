$(document).on('ready', function () {
      console.log('create and begin the game here!')

      var board = $('.tic-tac-toe')
      var buttons = $('.space')
      console.log(board)
      console.log(buttons)

      buttons.on('click', function (event) {
        event.preventDefault()
        console.log(this)
      })
    })