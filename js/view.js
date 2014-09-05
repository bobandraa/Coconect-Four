function View(){
}

View.prototype = {

  setCurrentPlayer: function(player) {
    // will be able to call player.name and player.color on this
    // $('#current_player').text(player.name)
    $('#players').text(player.name + "'s Turn!")
  },

  setCellColor: function(row, col, imageUrl) {
    $('#'+col+' .cell:nth-child('+(row)+')').css('background-image', 'url("' + imageUrl + '")')
  },

  getColumns: function() {
    return $('.column');
  },

  setWinner: function(player) {
    $('#gameover').text(player.name + " wins!!!")
    $('#gameover').css("display", "inline")
    $('#players').text("Game Over!")
    $('#gameover').blink()
  },
  resetCells: function() {
    $(".cell").css({"background-color" : "0", "background-image" : ""})
    $('#gameover').css("display", "none")
    
  }
}
