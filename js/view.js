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
    $('#'+col+' .cell:nth-child('+(row)+')').css({"position": "relative", "top": "-600px"}).animate({top: "0px"}, "slow")
    // debugger
    $('#'+col+' .cell:nth-child('+(row)+')').effect( "bounce", {times:2});
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
  dropCells: function() {
    $(".cell").animate({top: "1000px"}, {duration: 1500, complete: this.resetCells});
  },
  resetCells: function() {
    $('#gameover').css("display", "none")
    $(".cell").css({"top": "0px", "background-color" : "0", "background-image" : ""})

  }
}
