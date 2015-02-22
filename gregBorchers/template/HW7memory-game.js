
var MemoryGame = (function() {
	function GameCtor(cardset) {
		var slots, //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there; //position of face-up card if any, or false

		// Helper functions which need access to closure vars;
		//  some fns will be made public as instance methods:
		
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
		reset();// reset now as part of init'ing


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
			console.log("inside size function");
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
		//	leave this card face-up. 
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

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
			} else {
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					//optional: report match
					console.log("Match!");
				}
				//either way, turn face-up to face-down:
				there = false;
			}
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


/**** original
	function GameCtor(cardset) {
		var slots, //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there; //position of face-up card if any, or false

		// Helper functions which need access to closure vars;
		//  some fns will be made public as instance methods:
		
		//___________________________________________________ RESET
		//replaces all removed cards, 
		//reshuffles the entire board, 
		//rebuilds the board face-down.
		var reset = function() {
			slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
		};
		reset();// reset now as part of init'ing


		var remainsAt = function(where) {//--> boolean
			return slots[where]!==undefined;
		};
		var valueAt = function(where) {//--> card val
			return slots[where];
		};
		var removeAt = function(where) {
			delete slots[where];
		};
		var faceupValue = function() {//--> card val
			return valueAt(there);
		};
		var faceupWhere = function() {//--> integer
			return there;
		};
		var remaining = function() {//--> array of integers
			return Object.keys(slots).map(Number);
		};

// New methods:
		var gui = function(useGui) {
			console.log("inside useGUI");
		};

		var size = function() {
			console.log("inside size function");
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
		//	leave this card face-up. 
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


		var lift = function(here) {//--> display string
			if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
			} else {
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					//optional: report match
					console.log("Match!");
				}
				//either way, turn face-up to face-down:
				there = false;
			}
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

	// Private Functions shared by all boards:
	// these could be placed inside ctor,
	// but then they would be rebuilt for each instance
	function isValid(where,length) {
			return (typeof where === 'number')
				&& (where%1 === 0)
				&& (where>=0)
				&& (where<length)
		}

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


function DummyGameCtor(cardset, size) {
		//ignore cardset, but allow optional size parameter
		this.size = function() {
			return size || 16; //default to 16 if size is undefined or 0
		};

		var _gui = null; //private variable
		this.gui = function(useGui) {
			if (useGui === undefined) //no parameter; act as getter:
				return _gui;
			// else act as setter:
			_gui = useGui;
		};

		this.lift = function(where) {
			console.log("Attempted lift("+where+")");
		};
	}
	// add these dummy methods to prototype to ensure complete interface:

	DummyGameCtor.prototype.remaining	= function() {
		return Object.keys(slots).map(Number);
	};
	DummyGameCtor.prototype.reset 		= function() {
		slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
	};
	DummyGameCtor.prototype.faceupWhere	= function() {
		return there;
	};
	DummyGameCtor.prototype.faceupValue	= function() {
		return valueAt(there);
	};

	return DummyGameCtor;
})();

***/