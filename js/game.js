// models
  // board constructor
  //prototypes

  function Board(board){
    var won= false;
    this.board = board
  }

  Board.prototype = {
    create_board :function(){
      this.board = []
      for(i=0;i<7;i++){
        this.board.push(new Array(6))
      }
    }
  }


  // player constructor
    //prototypes

    function Player(name, color) {
      this.name = name;
      this.color = color;
    }


  // game constructor
    //prototypes

    function Game(board, red_player, black_player){
      this.board = board;
      this.red_player = red_player;
      this.black_player =  black_player;
    }

  Game.prototype = {
    drop_piece :function(col_number){
      for(k=0;k<7;k++){
       if (this.board.board[k][col_number] != null){
        this.board.board[k-1][col_number] = "X"
        return
       }

      }
      this.board.board[this.board.board.length-1][col_number] = "X"
    }
  }





    board =  new Board();
    board.create_board();
    new_game = new Game(board)
    console.log(board)
    new_game.drop_piece(1)
    new_game.drop_piece(1)
    console.log(board)
    console.log(board.board)
