
var MemoryGame = (function() {
	function GameCtor(cardset) {
		var slots = cardset.values(); //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length = slots.length;//total slots, including gaps
			there = false; //position of face-up card if any, or false

			
//___________________________________________________________ RESET
		//replaces all removed cards, 
		//reshuffles the entire board, 
		//rebuilds the board face-down.
		var reset = function() {
			slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
		};
		


//__________________________________________________________ remainsAt
		var remainsAt = function(where) {//--> boolean
			return slots[where]!==undefined;
		};


//__________________________________________________________ valueAt
		var valueAt = function(where) {//--> card val
			return slots[where];
		};


//__________________________________________________________ removeAt
		var removeAt = function(where) {
			delete slots[where];
		};


//__________________________________________________________ faceupValue
		var faceupValue = function() {//--> card val
			return valueAt(there);
		};


//__________________________________________________________ faceupWhere
		var faceupWhere = function() {//--> integer
			return there;
		};


//__________________________________________________________ remaining
		var remaining = function() {//--> array of integers
			return Object.keys(slots).map(Number);
		};

// New methods:
//__________________________________________________________ gui
		var gui = function(useGui) {
			console.log("inside useGUI");
		};


//__________________________________________________________ size
		var size = function() {
			return slots.length;
		};

		//___________________________________________________ LIFT
		// attempts to lift a card. 
		//IF there is a face-down card at position where (a single number), THEN
		//	return its display value (by calling cardset.display(val) callback 
		//	on the card’s raw value); 
		//ELSE
		//  otherwise return false. 
		//ENDIF
		
		//IF there is not currently a face-up card, THEN
		//	leave this card face-up. (it is the first of two cards)
		//ENDIF

		//IF there’s already a face-up card THEN
		//	If this card and the face-up card match THEN // (according to cardset.match()), 
		//  	remove both from the board. 
		//ENDIF

		//IF all pairs are removed from the board THEN
		//  you win the game.
		//ENDIF

		//IF there is no match, 
		//	leave both cards in place
		//  turn both card face down.
		//ENDIF


//__________________________________________________________ lift
		var lift = function(here) {//--> display string
			if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;

			var matchStr = 'Match NOT FOUND'; // logging msg string

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up, so this card 1
				console.log("FIRST CARD is now FaceUP");
				there = here; //save the first card of the pair
				window.gui.show(valHere, true); // HACK
			} else {
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					window.gui.removeSoon(here);
					window.gui.removeSoon(there);
					matchStr = 'Match FOUND';
				} else {
					//either way, turn face-up to face-down:
					window.gui.hideSoon(here);
					window.gui.hideSoon(there);	
				}
				window.gui.hideSoon(here);			
				there = false; // reset the first var of the card pair
			}
			console.log(matchStr);
			console.log('sending this from lift('+ valHere +') to be displayed '+ cardset.display(valHere));
			return cardset.display(valHere); 
		};

		// Make some functions public as instance methods:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
		this.gui = gui;
		this.size = size;
	}//end ctor


//__________________________________________________________ isValid
	// Private Functions shared by all boards:
	// these could be placed inside ctor,
	// but then they would be rebuilt for each instance
	function isValid(where,length) {
			return (typeof where === 'number')
				&& (where%1 === 0)
				&& (where>=0)
				&& (where<length)
		}

//__________________________________________________________ shuffle
	function shuffle(array) {
	// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
		var end = array.length, temp, i;
  			// While there remain elements to shuffle…
		while (end>1) {
   			// Pick a remaining element…
   			i = Math.floor(Math.random() * end--);
   			// And swap it with the current element.
   			temp = array[end];
   			array[end] = array[i];
		    array[i] = temp;
 		}
	}

	return GameCtor;
})();

