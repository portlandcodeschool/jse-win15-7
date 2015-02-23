// See cardset-example.js for examples

var MarioCards = (function() {
	function MarioCards() {
        // MarioCard values:
        var superMarioChars = [
            ['mario', 1], ['luigi', 1],
            ['wario', 2], ['vuigi', 2],
            ['mariojr', 3], ['luigijr', 3],
            ['cloudbee', 4], ['ghostface', 4]
        ];
        this.values = function () {
            return superMarioChars.slice();
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