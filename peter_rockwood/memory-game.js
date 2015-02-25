var MemoryGame = (function() {
	function Ctor(cardset) {

		var consoleTitle = ",-,-,-.\n"+                         
						   "`,| | |   ,-. ,-,-. ,-. ,-. . .\n"+ 
  						   "  | ; | . |-' | | | | | |   | |\n"+ 
  						   "  '   `-' `-' ' ' ' `-' '   `-|\n"+ 
                		   "                             /|\n"+ 
                		   "            				 `-'" 
        var pageTitle =    ",-,-,-."+ '<br>' +                         
						   "`,| | |   ,-. ,-,-. ,-. ,-. . ." + '<br>' +
  						   "  | ; | . |-' | | | | | |   | |" + '<br>' +
  						   "  '   `-' `-' ' ' ' `-' '   `-|" + '<br>' + 
                		   "                              |" + '<br>' +
                		   "            				`-'" 

		console.log(consoleTitle)
		
		var cards = cardset.values();
		var board;
		var gui;

		newBoard();
		shuffleFast(cards);

		//internal functions
		function shuffleFast(cards){//adapted from Mike Bostock's Fisher-Yates implementation
				for(var i = cards.length-1; i > 0; i--){
					var randElement = Math.floor(Math.random() * i);
					var hold = cards[i];
					cards[i] = cards[randElement];
					cards[randElement] = hold;
				}
				
			}


		function newBoard() {
			board = [];
			for(var i = 0; i < cards.length; i++){
				board.push(0);
			}
		};


		function won() {
			for(var i = 0; i < board.length; i++){
				if (board[i] != 'gone'){
					return false;
				}
			}
			return true;
		}

		this.size = function(){
			return cards.length;
		}

		this.gui = function(useGui){
			if(useGui === 'undefined'){
				return this.gui;
			} else {
				this.gui = useGui;
			}
		}

		this.reset = function() {
			this.gui.reset()
			shuffleFast(cards); //shuffle
			newBoard(); // set board array to zero
			this.gui.printText(pageTitle)

			console.log(consoleTitle)

			return;
		}

		//make a reset button;
		var startOver = document.createElement('div');
		document.body.appendChild(startOver);
		startOver.setAttribute('id', 'reset');
		startOver.innerHTML = 'Reset';
		startOver.addEventListener('click',this.reset.bind(this));


		this.faceupWhere = function() {
			for(var i = 0; i < board.length; i++ ){
				if (board[i] == 1){
					return i;
				}
			}
			return false;

		}
		this.faceupValue = function() {
			return this.cards[this.faceupWhere()];

		}
		this.remaining = function() {
			var remains = [];
			for(var i = 0; i < board.length; i++){
				if(board[i] != 'gone'){
					remains.push(cards[i]);
				}
			}
			return remains
		}
		this.lift = function(where) {
			
			if(board[where] === 'gone'){ // check to see if position is already discarded
				console.log('no card here....dummy, choose another')
				this.gui.printText('no crd here....dmmy, chse anthr')
				console.log('board:', board);
				return
			}

			if(board[where] === 1){ // check to see if position is already face-up
				console.log('this card is already flipped....dummy, choose another')
				this.gui.printText('ths crd is alrdy flpd....dmmy, chse anthr')
				console.log('board:', board);
				return
			}

			
			if(String(this.faceupWhere()) === 'false'){ // if there is not already a card flipped
				board[where] = 1; // flip card
				whr = document.getElementById(where);
				this.gui.show(where, whr.textContent = cardset.display(cards[where])); // gui method
				console.log('you flipped: ' + cardset.display(cards[where]))
				console.log('flp anthr');
				this.gui.printText('flip another');
				console.log('board:', board);
				return cardset.display(cards[where]);

			}

			if(String(this.faceupWhere()) != 'false'){ // if there is already a card flipped
				if(cardset.match(cards[this.faceupWhere()], cards[where])){ // if match
					console.log('you flipped: ' + cardset.display(cards[where]))
				 	console.log('match!');
				 	this.gui.printText('match!');
				 	whr = document.getElementById(where);
					this.gui.show(where, whr.textContent = cardset.display(cards[where])); // gui method
				 	this.gui.removeSoon(where, this.faceupWhere()); // gui method
				 	board[where] = 'gone'; //remove matched cards from board
				 	board[this.faceupWhere()] = 'gone';

				 	
					if(won()){ //won() described above
						console.log('you win, good job, go outside');
						this.gui.printText('you win, good job, go outside');
						for(var i = 0; i < 16; i++){
							whr = document.getElementById(i);
							this.gui.show(i, whr.textContent = cardset.display(cards[i]))
							console.log(i)
						}
						
						return
					} 

				} else { // if no match
					console.log('you flipped: ' + cardset.display(cards[where]))
					console.log('no match, try again....dummy');
					this.gui.printText('no match, try again....dummy');
					whr = document.getElementById(where);
					this.gui.show(where, whr.textContent = cardset.display(cards[where]));
					this.gui.hideSoon(where, this.faceupWhere())
					board[where] = 0; // turn down both cards
					board[this.faceupWhere()] = 0;
				}
			}
			console.log('board:', board);
			return cardset.display(cards[where]);
		}

	}

	//...

	return Ctor;
})();

// (function (){
	//var cards = new MemoryCards();
	//var game = new MemoryGame(cards);
