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
            return (pair1[1] === pair2[1]);
        };
        this.display = function (val) {
            return val[0];
        };
    }
	return MemoryCards;
})();