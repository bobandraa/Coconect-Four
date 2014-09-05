$('document').ready(function(){
  var board = new Board();
  var view = new View();
  board.create_grid();
  var player1 = new Player("Player 1", "red");
  var player2 = new Player("Player 2", "black");
  var game = new Game(board, player1, player2);
  var controller = new Controller(game, view);
  game.start_game();
  view.set_current_player(game.current_player); // VIEW METHOOOOOD


});

function Controller(game, view) {
  this.game = game;
  this.view = view;
}

var columnClicked = function(ev) {
  var column = ev.target.id
  var color = this.game.current_player.color
  var row = this.game.drop_piece(column)
  // REMOVE EVENT LISTENER IF ROW == 0

  this.view.set_cell(column, row, color) // VIEW METHOOOOOOD
}

Controller.prototype = {
  bindListeners: function(){
    var columns = this.view.getColumns() // VIEW METHOOOOOD
    for (i=0; i < columns.length; i++){
      columns[i].addEventListener("click", columnClicked).bind(this)
    }
  }
}
