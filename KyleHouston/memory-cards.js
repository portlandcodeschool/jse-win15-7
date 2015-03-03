var MemoryCards = (function() {
	function Ctor() {
		var cards = Card.fullSet();
		
		this.values = function() {
			return cards.slice();
		}

		this.match = function(a,b) {
			if ((a.rank() == b.rank()) && (a.color() == b.color())) {
				return true;
			} else {
				return false;
			}
		}

		this.display = function(val) {
			return val.name();
		}
	}
	//...

	return Ctor;
})();