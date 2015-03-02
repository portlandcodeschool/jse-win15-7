/**
 * Created by mtupper on 2/22/15.
 */

var MemoryCards = (function() {
	function MemoryCards() {

        var cards = MarioCard.fullSet();

        this.values = function () {
            return cards.slice();
        };
        this.match = function (pair1, pair2) {
            return (pair1.rank() === pair2.rank());
        };
        this.display = function (val) {
            return val.imgURL();
        };
    }
	return MemoryCards;
})();