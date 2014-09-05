function View(){
}

View.prototype = {

  setCurrentPlayer: function(player) {
    // will be able to call player.name and player.color on this
    // $('#current_player').text(player.name)
    if (player.name == )
  },

  setCellColor: function(row, col, color) {
    $('#'+col+' .cell:nth-child('+(row)+')').css('background-color', color)
  },

  getColumns: function() {
    return $('.column');
  }
}

// $( ".column .cell" ).on("click", function() {
//   $( this ).className( "red_cell" );
// });
// $("#1 .cell:first").on("click", console.log("omg"))

//   function set_color(){
//   $( ".last" ).css("background-color", "red")
// });
