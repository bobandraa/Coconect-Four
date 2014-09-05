R = 6
H = 7

var checkForWin = function(piece) {
  return (checkHorizontal(piece) || checkVertical(piece) || checkDiagonal(piece))
}

  var checkHorizontal = function(piece) {
          for (r=0; r <= R - 1; r++) {
            for (c=0; c <= H-4; c++) {
              if ((our_board[r][c] == piece) && (our_board[r][c+1] == piece) && (our_board[r][c+2] == piece) && (our_board[r][c+3] == piece)) {
                return true;
                }
              }
            }
            return false;
          }

  var checkVertical = function(piece) {
          for (r = 0; r <= R - 4; r++){
            for (c = 0; c <= H - 1; c++){
              if ((our_board[r][c] == piece) && (our_board[r+1][c] == piece) && (our_board[r+2][c] == piece) && (our_board[r+3][c] == piece)) {
                return true;
              }
            }
          }
          return false;
        }

  var checkDiagonal = function(piece) {
    return (checkSouthEast(piece) || checkSouthWest(piece))
      };

    var checkSouthEast = function(piece) {
              for (r=0; r<= R-4; r++) {
                for (c=0; c<= H-4; c++) {
                  if ((our_board[r][c] == piece) && (our_board[r+1][c+1] == piece) && (our_board[r+2][c+2] == piece) && (our_board[r+3][c+3] == piece)) {
                    return true;
                }
              }
            }
            return false;
          }

    var checkSouthWest = function(piece) {
              for (r=0; r<= R-4; r++) {
                for (c=H-1; c>= H-4; c--) {
                  if ((our_board[r][c] == piece) && (our_board[r+1][c-1] == piece) && (our_board[r+2][c-2] == piece) && (our_board[r+3][c-3] == piece)) {
                    return true;
                }
              }
            }
            return false;
          }

console.log(checkForWin('X'))
