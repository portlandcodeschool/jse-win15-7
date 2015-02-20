
var cards,game,gui; //global vars make debugging easier
function go() {
	// set global vars:
	cards = new MemoryCards();//<--maybe add argument for some card sets
	console.log("loaded cards");	
	game  = new MemoryGame(cards);
	console.log(" loaded game");	
	gui   = new MemoryGUI('memorygame', game);
	console.log("gui -new Memeory GUI");
	game.gui(gui); // link game to gui
	console.log("loaded game.gui(gui)");
	gui.render();
	console.log("loaded render");
}

window.addEventListener("load",go);


