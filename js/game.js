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
    createGrid :function(){
      this.grid = []
      for(i=0;i<6;i++){
        this.grid.push(new Array(7))
      }
    },
    getCell : function(x, y) {
      return this.grid[x][y]
    },
    setCell : function(x, y, piece) {
      this.grid[x][y] = piece
    },
    receivePiece: function(colNumber, piece) {
      if(this.getCell(0, colNumber) != null) {
        return null;
      }

      for(r=0;r<6;r++){
       if (this.getCell(r, colNumber) != null){
        this.setCell(r-1, colNumber, piece)
        return (r - 1)
      }

    }
    this.setCell(this.grid.length-1, colNumber, piece)
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

    function Game(board, redPlayer, blackPlayer){
      this.currentPlayer;
      this.board = board;
      this.redPlayer = redPlayer;
      this.blackPlayer =  blackPlayer;
    }

    Game.prototype = {
      dropPiece :function(colNumber){
        var row = this.board.receivePiece(colNumber, this.currentPlayer.color);

        if(row != null) {
          if (this.currentPlayer === this.redPlayer) {
            this.currentPlayer = this.blackPlayer
          } else {
            this.currentPlayer = this.redPlayer
          }

          return row;
        }
        else {
          return null;
        }
      },
      isGameOver :function() {
        return this.board.checkForWin('black') || this.board.checkForWin('red')
      },
      getWinner : function() {
        if(this.board.checkForWin(this.redPlayer.color)) {
          return this.redPlayer;
        }
        else if(this.board.checkForWin(this.blackPlayer.color)) {
          return this.blackPlayer;
        }
      },
      startGame :function() {
        if (Math.random() > 0.5){
          this.currentPlayer = this.redPlayer
        } else {
          this.currentPlayer = this.blackPlayer
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
  // board.createGrid();
  // new_game = new Game(board, player1, player2)
  // new_game.startGame();
  // console.log(board)
  // new_game.dropPiece(0)
  // new_game.dropPiece(0)
  // new_game.dropPiece(0)
  // new_game.dropPiece(0)
  // new_game.dropPiece(0)
  // new_game.dropPiece(0)

  // new_game.dropPiece(1)
  // new_game.dropPiece(1)
  // new_game.dropPiece(1)
  // new_game.dropPiece(1)
  // new_game.dropPiece(1)
  // new_game.dropPiece(1)

  // new_game.dropPiece(2)
  // new_game.dropPiece(2)
  // new_game.dropPiece(2)
  // new_game.dropPiece(2)
  // new_game.dropPiece(2)
  // new_game.dropPiece(2)


  // new_game.dropPiece(3)
  // new_game.dropPiece(3)
  // new_game.dropPiece(3)
  // new_game.dropPiece(3)
  // new_game.dropPiece(3)
  // new_game.dropPiece(3)

  // new_game.dropPiece(4)
  // new_game.dropPiece(4)
  // new_game.dropPiece(4)
  // new_game.dropPiece(4)
  // new_game.dropPiece(4)
  // new_game.dropPiece(4)
  // console.log(board.isFull());

  // new_game.dropPiece(5)
  // new_game.dropPiece(5)
  // new_game.dropPiece(5)
  // new_game.dropPiece(5)
  // new_game.dropPiece(5)
  // new_game.dropPiece(5)


  // new_game.dropPiece(6)
  // new_game.dropPiece(6)
  // new_game.dropPiece(6)
  // new_game.dropPiece(6)
  // new_game.dropPiece(6)
  // new_game.dropPiece(6)
  // console.log(new_game.isGameOver())
  // console.log(new_game.isGameOver())
  // console.log(board.isFull());
  // console.log(board)
  // console.log(board.board)
