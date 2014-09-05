function View(){
}

View.prototype = {

  set_current_player: function(player) {
    // will be able to call player.name and player.color on this
  },

  setColor: function(row, col, color) {

  },

  setCell: function(x, y, color) {

  },

  getColumns: function() {
    // should return all columns using a JQuery selector
  }
}

$( ".column .cell" ).on("click", function() {
  $( this ).className( "red_cell" );
});
// $("#1 .cell:first").on("click", console.log("omg"))

//   function set_color(){
//   $( ".last" ).css("background-color", "red")
// });

};

