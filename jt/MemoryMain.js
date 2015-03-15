
var cards,game,gui; //global vars make debugging easier
function go() {

// set global vars:
//cards = new cards();//<--maybe add argument for some card sets

/*var game = new Game(cards);
var gui = new GUI('memorygame',game);
game.gui(gui); // link game to gui
*/

var cc = new cards();
var gg = new Game();
var tt = new Gui();
Game.prototype.reset();
tt.makeButton();
tt.makeTable();



}
window.addEventListener("load",go);