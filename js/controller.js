$('document').ready(function(){
  var board = new Board();
  var view = new View();
  board.createGrid();
  var player1 = new Player("Player 1", "red", 'images/coconut.png');
  var player2 = new Player("Player 2", "black", 'images/beachball.png');
  var game = new Game(board, player1, player2);
  var controller = new Controller(game, view);
  controller.bindListeners();
  game.startGame();
  view.setCurrentPlayer(game.currentPlayer); // VIEW METHOOOOOD
});


function Controller(game, view) {
  this.game = game;
  this.view = view;
}

var columnClicked = function(ev) {
  if(!this.game.isGameOver()) {
    var column = ev.currentTarget;
    var color = this.game.currentPlayer.color
    var imgUrl = this.game.currentPlayer.image
    var row = this.game.dropPiece(column.id)

    if(row != null) {
      this.view.setCurrentPlayer(this.game.currentPlayer);
      this.view.setCellColor(row+1, column.id, imgUrl) // VIEW METHOOOOOOD
    }

    this.checkGameOver();
  }
}

Controller.prototype = {
  bindListeners: function() {
    var columns = this.view.getColumns();
    for (i=0; i < columns.length; i++) {
      columns[i].addEventListener("click", columnClicked.bind(this));
    }

    $("#reset").on("click", function() { this.resetGame(); }.bind(this))
  },
  checkGameOver: function() {
    if(this.game.isGameOver()) {
      this.view.setWinner(this.game.getWinner());
    }
  },
  resetGame: function() {
    this.game.resetGame();
    this.view.resetCells();
  }
}
