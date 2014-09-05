// models
R = 6
H = 7

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
      for(r=0;r<6;r++){
       if (this.get_cell(r, col_number) != null){
        this.set_cell(r-1, col_number, piece)
        return (r - 1)
      }

    }
    this.set_cell(this.grid.length-1, col_number, piece)
    return (this.grid.length-1)
  },
  isFull : function() {
    for(var r = 0; r < this.grid.length; r++) {
      var column = this.grid[r];
      for(var c = 0; c < column.length; c++) {
        if(column[r] == undefined) {
          return false;
        }
      }
    }
    return true;
  },
  /////////////////////////////////////////////////////
  checkForWin : function(piece) {
    return (this.checkHorizontal(piece) || this.checkVertical(piece) || this.checkDiagonal(piece))
  },

  checkHorizontal : function(piece) {
    for (r=0; r <= R - 1; r++) {
      for (c=0; c <= H-4; c++) {
        if ((this.grid[r][c] == piece) && (this.grid[r][c+1] == piece) && (this.grid[r][c+2] == piece) && (this.grid[r][c+3] == piece)) {
          return true;
        }
      }
    }
    return false;
  },

  checkVertical : function(piece) {
    for (r = 0; r <= R - 4; r++){
      for (c = 0; c <= H - 1; c++){
        if ((this.grid[r][c] == piece) && (this.grid[r+1][c] == piece) && (this.grid[r+2][c] == piece) && (this.grid[r+3][c] == piece)) {
          return true;
        }
      }
    }
    return false;
  },

  checkDiagonal : function(piece) {
    return (this.checkSouthEast(piece) || this.checkSouthWest(piece))
  },

  checkSouthEast : function(piece) {
    for (r=0; r<= R-4; r++) {
      for (c=0; c<= H-4; c++) {
        if ((this.grid[r][c] == piece) && (this.grid[r+1][c+1] == piece) && (this.grid[r+2][c+2] == piece) && (this.grid[r+3][c+3] == piece)) {
          return true;
        }
      }
    }
    return false;
  },

  checkSouthWest : function(piece) {
    for (r=0; r<= R-4; r++) {
      for (c=H-1; c>= H-4; c--) {
        if ((this.grid[r][c] == piece) && (this.grid[r+1][c-1] == piece) && (this.grid[r+2][c-2] == piece) && (this.grid[r+3][c-3] == piece)) {
          return true;
        }
      }
    }
    return false;
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
      this.current_player;
      this.board = board;
      this.red_player = red_player;
      this.black_player =  black_player;
    }

    Game.prototype = {
      drop_piece :function(col_number){
        var row = this.board.receive_piece(col_number, this.current_player.color);
        if (this.current_player === this.red_player) {
          this.current_player = this.black_player
        } else {
          this.current_player = this.red_player
        }

        return row
      },
      isGameOver :function() {
        return this.board.checkForWin('black') || this.board.checkForWin('red')
      },
      getWinner : function() {
        if(this.board.checkForWin(this.red_player.color)) {
          return red_player;
        }
        else if(this.board.checkForWin(this.black_player.color)) {
          return black_player;
        }
      },
      start_game :function() {
        if (Math.random() > 0.5){
          this.current_player = this.red_player
        } else {
          this.current_player = this.black_player
        }
      }
    }

  // piece constructor

  function Piece(red, black){
    this.red = red;
    this.black = black;
  }




  // var player1 = new Player("Player 1", "red");
  // var player2 = new Player("Player 2", "black");


  // board =  new Board();
  // board.create_grid();
  // new_game = new Game(board, player1, player2)
  // new_game.start_game();
  // console.log(board)
  // new_game.drop_piece(0)
  // new_game.drop_piece(0)
  // new_game.drop_piece(0)
  // new_game.drop_piece(0)
  // new_game.drop_piece(0)
  // new_game.drop_piece(0)

  // new_game.drop_piece(1)
  // new_game.drop_piece(1)
  // new_game.drop_piece(1)
  // new_game.drop_piece(1)
  // new_game.drop_piece(1)
  // new_game.drop_piece(1)

  // new_game.drop_piece(2)
  // new_game.drop_piece(2)
  // new_game.drop_piece(2)
  // new_game.drop_piece(2)
  // new_game.drop_piece(2)
  // new_game.drop_piece(2)


  // new_game.drop_piece(3)
  // new_game.drop_piece(3)
  // new_game.drop_piece(3)
  // new_game.drop_piece(3)
  // new_game.drop_piece(3)
  // new_game.drop_piece(3)

  // new_game.drop_piece(4)
  // new_game.drop_piece(4)
  // new_game.drop_piece(4)
  // new_game.drop_piece(4)
  // new_game.drop_piece(4)
  // new_game.drop_piece(4)
  // console.log(board.isFull());

  // new_game.drop_piece(5)
  // new_game.drop_piece(5)
  // new_game.drop_piece(5)
  // new_game.drop_piece(5)
  // new_game.drop_piece(5)
  // new_game.drop_piece(5)


  // new_game.drop_piece(6)
  // new_game.drop_piece(6)
  // new_game.drop_piece(6)
  // new_game.drop_piece(6)
  // new_game.drop_piece(6)
  // new_game.drop_piece(6)
  // console.log(new_game.isGameOver())
  // console.log(new_game.isGameOver())
  // console.log(board.isFull());
  // console.log(board)
  // console.log(board.board)
