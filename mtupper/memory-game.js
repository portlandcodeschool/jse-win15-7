var MemoryGame = (function() {

	function MemoryGame(cardset) {
        var slots,
            length,
            there;

		// some of the instance methods may need to be
		// specific to each instance
		// ...

		var reset = function() {
            slots = cardset.values();
            length = slots.length;
            there = false;
            shuffle(slots);
        };
		var remainsAt = function(where) { //boolean
            return slots[where] !== undefined;
        };
        var valueAt = function(where) {
            return slots[where];
        };
        var removeAt = function(where) {
            delete slots[where];
        };
        var faceupValue = function() {
            return valueAt(there);
        };
        var faceupWhere = function() {
            return there;
        };
        var remaining = function() {
            return Object.keys(slots).map(Number);
        };
		var lift = function(here) {
            if (!isValid(here, length)) return false;
            if (!remainsAt(here)) return false;
            if (there === here) return false;

            // must be a face-down card here; proceed...
            var valHere = valueAt(there);
            if (there === false) {
                // no current face-up
                there = here; // turn here face-up
            }
            else {
                // check for match with face-up
                if (cardset.match(valHere, valueAt(there))) {
                    // match; remove both
                    removeAt(here);
                    removeAt(there);
                    // testing report match to console
                    console.log("match!");
                }
                // either way, turn face-up to face-down
                there = false;
            }
            return cardset.display(valHere);
        };

		// New methods:
		this.gui = function(useGui) {
            if (useGui === undefined) return null;
            return useGui;
        };

		this.size = function() {
            return length;
        }
        this.reset = reset;
        this.lift = lift;
        this.faceupValue = faceupValue;
        this.faceupWhere = faceupWhere;
        this.remaining = remaining;
	}

	// some of those instance methods could instead be shared
	// by installing them in GameCtor.prototype
	// ...

    var isValid = function(where, length) {
        return (typeof where === 'number') &&
            (where % 1 === 0) &&
            (where > 0) &&
            (where < length)
    };
    var shuffle = function(array) {
        // Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
        var end = array.length, temp, i;
            // While there remains elements to shuffle
        while (end > 1) {
            // Pick remaining element
            i = Math.floor(Math.random() * end--);
            // And swap it with the current element
            temp = array[end];
            array[end] = array[i];
            array[i] = temp;
        }
    };
	return MemoryGame;
})();
