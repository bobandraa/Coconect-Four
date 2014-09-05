$('document').ready(function(){
  var board = new Board();
  board.create_grid();
  var player1 = new Player("Player 1", "red");
  var player2 = new Player("Player 2", "black");
  var game = new Game(board, player1, player2);


})

function Controller(game) {
  this.game = game;
  // body...
}
