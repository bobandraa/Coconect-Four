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
    // SHOW THE WINNER
  },
  resetCells: function() {
    $(".cell").css({"background-color" : "0", "background-image" : ""})
  }
}
