var MemoryGame = (function() {
	
	function GameCtor(cardset) {
		// some of the instance methods may need to be
		// specific to each instance
		var slots, //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there; //position of face-up card if any, or false

		this.reset = function() {
			slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
		}
		var remainsAt = function(where) {//--> boolean
			return slots[where]!==undefined;
		} 
		var valueAt = function(where) {//--> card val
			return slots[where];
		}

		var removeAt = function(where) {
			delete slots[where];
		}
		this.remaining = function() {
			return Object.keys(slots).map(Number);
		}
		this.faceupWhere = function() {
			return there;
		}
		this.faceupValue = function() {
			return valueAt(there);
		}
		this.lift = function(here) {
			/*if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;*/

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
				gui.show(there)
			} else {
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					//optional: report match
					console.log("Match!")
				}
				//either way, turn face-up to face-down:
				there = false;
			}
			return cardset.display(valHere);
		}
		// New methods:
		this.gui = function(useGui) {
			this.gui.show();
		}

		this.size = function() {
			return cardset.length;
		}

		// Make some functions public as instance methods:
		this.valueAt = valueAt;
		/*this.removeAt = removeAt;
		this.remainsAt = remainsAt;
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;*/

	} // closing bracket for ctor
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
	// some of those instance methods could instead be shared
	// by installing them in GameCtor.prototype
	// ...

	return GameCtor;
})();
