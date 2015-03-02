
var cards,game,gui; //global vars make debugging easier
function go() {
	// set global vars:
	cards = new MemoryCards();//<--maybe add argument for some card sets
	game  = new MemoryGame(cards);
	gui   = new MemoryGUI('memorygame',game);
	game.gui(gui); // link game to gui
}

window.addEventListener("load",go);


//delete
/*var foods = new FoodCards();
var game1 = new MemoryGame(foods);

var animals = new AnimalCards();
var game2 = new MemoryGame(animals);*/
