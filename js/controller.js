$('document').ready(function(){
  var board = new Board();
  var view = new View();
  board.create_grid();
  var player1 = new Player("Player 1", "red");
  var player2 = new Player("Player 2", "black");
  var game = new Game(board, player1, player2);
  var controller = new Controller(game, view);
  controller.bindListeners();
  game.start_game();
  view.setCurrentPlayer(game.current_player); // VIEW METHOOOOOD


});

function Controller(game, view) {
  this.game = game;
  this.view = view;
}

var columnClicked = function(ev) {
  var column = ev.currentTarget;
  var color = this.game.current_player.color
  var row = this.game.drop_piece(column.id)

  // REMOVE EVENT LISTENER IF ROW == 0
  this.view.setCurrentPlayer(this.game.current_player);
  this.view.setCellColor(row+1, column.id, color) // VIEW METHOOOOOOD
}

Controller.prototype = {
  bindListeners: function() {
    var columns = this.view.getColumns();
    console.log(columns);
    for (i=0; i < columns.length; i++) {
      columns[i].addEventListener("click", columnClicked.bind(this));
    }
  }
}
