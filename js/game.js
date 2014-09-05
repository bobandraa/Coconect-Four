// models

  // board constructor
  //prototypes

  function Board(grid){
    var won= false;
    this.grid = grid
  }

  Board.prototype = {
    create_grid :function(){
      this.grid = []
      for(i=0;i<6;i++){
        this.grid.push(new Array(7))
      }
    },
    get_cell : function(x, y) {
      return this.grid[x][y]
    },
    set_cell : function(x, y, piece) {
      this.grid[x][y] = piece
    },
    receive_piece: function(col_number, piece) {
      for(k=0;k<6;k++){
       if (this.get_cell(k, col_number) != null){
        this.set_cell(k-1, col_number, "x")
        return
       }

      }
      this.set_cell(this.grid.length-1, col_number, "x")
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
      this.board.receive_piece(col_number);
    }
  }

  // piece constructor

    function Piece(red, black){
      this.red = red;
      this.black = black;
    }





    board =  new Board();
    board.create_grid();
    new_game = new Game(board)
    console.log(board)
    new_game.drop_piece(1)
    new_game.drop_piece(1)
    new_game.drop_piece(1)
    console.log(board)
    console.log(board.board)
