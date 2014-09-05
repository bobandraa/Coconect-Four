function View(){
}

View.prototype = {

  setCurrentPlayer: function(player) {
    // will be able to call player.name and player.color on this
    // $('#current_player').text(player.name)
    $('#players').text(player.name + "'s Turn!")
  },

  setCellColor: function(row, col, color) {
    $('#'+col+' .cell:nth-child('+(row)+')').css('background-color', color)
  },

  getColumns: function() {
    return $('.column');
  },

  setWinner: function(player) {
    // SHOW THE WINNER
  }
}
