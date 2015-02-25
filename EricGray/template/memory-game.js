var MemoryGame = (function() {
	function Ctor(cardset) {
		//...
		var slots,
			length,
			there,
			_gui;

		var reset = function() {
		
			slots = cardset.values()
			length = slots.length;
			there = false;
			shuffle(slots);

/*	My original code:
			this.shuffle();
			for (i = 0; i < cardset.values().length; i++){
				cardset.values()[i].faceup = false;}	*/
		}	

		var gui = function(useGui) {
			if (useGui === undefined) {
				return _gui;
			} else if (typeof useGui === 'object') {
				_gui = useGui;
			}
			//if (useGui===undefined) {return previous object}
			//else if (useGui===object) {remember useGui}
		}  

		reset();

		var remainsAt = function(where){
			return slots[where]!==undefined;
		}
		
		var valueAt = function(where){
			return slots[where];
		}

		var removeAt = function(where) {
			delete slots[where];
		}

		var faceupValue = function() {                         //maybe better as for each?
        	return valueAt(there);


		/* My original code:
        var counter = 0;
        for (i = 0; i < cardset.values().length; i++){
                if (cardset.values()[i].faceup === true){
                        return cardset.display(i)
                } else if (cardset.values()[i].faceup === false){
                        (counter += 1) && (console.log(counter))};};
                if (counter = (cardset.values().length + 1)){
                        return false}; */
		}


		var faceupWhere = function() {
			return there;
		}



		var remaining = function() {
			return Object.keys(slots).map(Number);
		}

		var size = function() {
			return length;
		}


		var lift = function(here) {
			var here = Number(here.id);

			if (!isValid(here, length)){console.log('at is valid'); return false;};
			if (!remainsAt(here)){console.log('at remains at'); return false;};
			if (there===here) {console.log('at there is here');return false;};

			if (_gui){
				_gui.show(here, valueAt(Number(here)).name);
			};

			var valHere = valueAt(here);
			if (there === false) {
				there = here;
			} else {
				if (cardset.match(valHere,valueAt(there))) {
					removeAt(here);
					removeAt(there);
					if (_gui){
						_gui.removeSoon([here, there]);
					}
					console.log("Match!");
					there = false;
					return;
				}
				_gui.hideSoon([there, here]);
				there = false;
			} 
			return cardset.display(valHere);
		

		/* My original code:

			console.log(cardset.values());
			if ((this.faceupValue()) === false){
				return (cardset.display(where)) && (cardset.values()[where].faceup = true)
			} else if (((this.faceupValue()) === true) && 
			(cardset.match(this.faceupValue, where) === true)){
				alert('Its a match!')
			} else {
				return false;
			}

		*/
			
	}

	this.reset = reset;
	this.lift = lift;
	this.faceupValue = faceupValue;
	this.faceupWhere = faceupWhere;
	this.remaining = remaining;
	this.size = size;
	this.gui = gui;


	//...
} //end of ctor

	function isValid(where, length) {
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

var game1 = new MemoryGame(heroesAndVillains);

//workshop and/or trash

/*

var elementPos = cardset.values().map(function(cardset){
	return cardset.values().name
}).indexOf(this.faceupValue());

*/