/**
 * Created by mtupper on 2/22/15.
 */

var MarioCards = (function() {
	function MarioCards() {

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
	return MarioCards;
})();