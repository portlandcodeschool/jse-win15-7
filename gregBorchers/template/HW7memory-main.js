
var cards,game,gui; //global vars make debugging easier
function go() {
	// set global vars:
	cards = new MemoryCards();//<--maybe add argument for some card sets
	game  = new MemoryGame(cards);
	gui   = new MemoryGUI('memorygame',game);
	//game.gui(gui); // link game to gui
	var outStr = '';
	for (var i = 0; i < 8; i++) {
		outStr += game.lift(i) + '\n';		
	}
	console.log("test loop of cards " + outStr);
	console.log("seting up callbacks");
	gui.setupCallbacks(cards);
}

window.addEventListener("load",go);

