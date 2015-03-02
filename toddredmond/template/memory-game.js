var MemoryGame = (function() {

	function Ctor(cardset) {
		var slots, //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there; //position of face-up card if any, or false

		// Helper functions which need access to closure vars;
		//  some fns will be made public as instance methods:
		var reset = function() {
			slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
		}
		reset();// reset now as part of init'ing

		var remainsAt = function(where) {//--> boolean
			return slots[where]!==undefined;
		}
		var valueAt = function(where) {//--> card val
			return slots[where];
		}
		var removeAt = function(where) {
			delete slots[where];
		}
		var faceupValue = function() {//--> card val
			return valueAt(there);
		}
		var faceupWhere = function() {//--> integer
			return there;
		}
		var remaining = function() {//--> array of integers
			return Object.keys(slots).map(Number);
		}
		
		var lift = function(here) {//--> display string
			var here = parseInt(here.substr(1));
			if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;
			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
				gui.show(there,valHere)
				
			} else {
				gui.show(here,valHere)
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					//console.log(valHere, " ", valueAt(there))
					gui.removeSoon([here,there]);
					//optional: report match
					console.log("Match!")
				} else {
					gui.hideSoon([there,here]);
				}
				//either way, turn face-up to face-down:
				there = false;
			}

			return cardset.display(valHere); 
			
		} //end of lift function
		// New methods:

		this.gui = function(useGui) {
			if (useGui === undefined) {
				return _gui;
			} else {
				_gui = useGui;
			}
		}
		this.size = function() {
			return length;
		}
		// Make some functions public as instance methods:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
		this.valueAt = valueAt;
		this.remainsAt = remainsAt;
		this.removeAt = removeAt;
		

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

	return Ctor;
})();

