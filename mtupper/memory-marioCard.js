/**
 * Created by mtupper on 2/22/15.
 */

var MarioCard = (function() {

    var numCards = 50;
    var imgURL = 'img/MarioCards/';
    var imgType = '.png';

    function MarioCard(id) {
        this.id = id;
    }

    /*

     // MarioCard values:
     var superMarioChars = [
     ['mario', 1], ['luigi', 1],
     ['wario', 2], ['vuigi', 2],
     ['mariojr', 3], ['luigijr', 3],
     ['cloudbee', 4], ['ghostface', 4]
     ];

     */

    // Instance Methods

    MarioCard.prototype.isValid = function() {
        return (typeof this.id === 'number') &&
            (this.id % 1 === 0) &&
            (this.id >= 0) &&
            (this.id < this.constructor.numCards());
    };
    MarioCard.prototype.rank = function() {
        if(!this.isValid()) return undefined;
        return (this.id % 2 === 0 ? (this.id / 2 + 1) : (Math.floor(this.id / 2) + 1));
    };
    MarioCard.prototype.suit = function() {
        if(!this.isValid()) return undefined;
        return (this.id % 2 === 0 ? 'a' : 'b');
    };
    MarioCard.prototype.name = function() {
        if(!this.isValid()) return undefined;
        return this.rank() + this.suit();
    };
    MarioCard.prototype.imgName = function() {
        if(!this.isValid()) return undefined;
        return this.name() + imgType;
    };
    MarioCard.prototype.imgURL = function() {
        if(!this.isValid()) return undefined;
        return imgURL + this.imgName();
    };
    MarioCard.prototype.charName = function() {
        if(!this.isValid()) return undefined;
        return charNames[this.id];
    };

    // Data sets

    var charNames = [
        'Mario', 'Luigi', 'Wario', 'Waluigi', 'Baby Mario', 'Baby Luigi', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
        'Twenty', 'Twenty-one', 'Twenty-two', 'Twenty-three', 'Twenty-four', 'Twenty-five', 'Twenty-six', 'Twenty-seven', 'Twenty-eight', 'Twenty-nine',
        'Thirty', 'Thirty-one', 'Thirty-two', 'Thirty-three', 'Thirty-four', 'Thirty-five', 'Thirty-six', 'Thirty-seven', 'Thirty-eight', 'Thirty-nine',
        'Forty', 'Forty-one', 'Forty-two', 'Forty-three', 'Forty-four', 'Forty-five', 'Forty-six', 'Forty-seven', 'Forty-eight', 'Forty-nine',
        'Fifty'
    ];

    var fullSet = [];
    for(var i = 0; i < numCards; i++) {
        fullSet.push(new MarioCard(i));
    }
    console.log(fullSet);

    //var pairSets = [];
    //for(var i = 0; i < numCards; i++) {
    //    var pair = [charNames[i], fullSet[i].rank()];
    //    pairSets.push(pair);
    //}
    //console.log(pairSets);

    // Class Constructor Methods

    MarioCard.isCard = function(card) {
        return (card instanceof MarioCard) && card.isValid();
    };
    MarioCard.numCards = function() {
        return numCards;
    };
    MarioCard.charNames = function() {
        return charNames.slice();
    };
    MarioCard.fullSet = function() {
        return fullSet.slice();
    };

    MarioCard.fullSet();

    return MarioCard;

})();

// ====================
// Testing suite as before...
// ====================

function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = new MarioCard(0);
var card3 = new MarioCard(3);
var card36 = new MarioCard(36);
var card37 = new MarioCard(37);
var card49 = new MarioCard(49);
var card51 = new MarioCard(51); // invalid when tested

// Test instance methods:
assert(card0.rank()  === 1,         "Test 1 failed");
assert(card3.rank()  === 2,         "Test 2 failed");
assert(card36.rank() === 19,        "Test 3 failed");
assert(card37.rank() === 19,        "Test 4 failed");
assert(card49.rank() === 25,        "Test 5 failed");
assert(card36.suit() === 'a',       "Test 6 failed");
assert(card37.suit() === 'b',       "Test 7 failed");
assert(card36.name() === '19a',     "Test 8 failed");
assert(card37.name() === '19b',     "Test 9 failed");
assert(card36.imgURL() === 'img/MarioCards/19a.png',     "Test 10 failed");
assert(card37.imgURL() === 'img/MarioCards/19b.png',     "Test 11 failed");
assert(card51.suit() === undefined, "Test 12 failed");
assert(card0.isValid(),             "Test 13 failed");
assert(!card51.isValid(),            "Test 14 failed");

// Test MarioCard.isCard:
assert(MarioCard.isCard(card0),     "Test 15 failed");
assert(MarioCard.isCard(card36),    "Test 16 failed");
assert(MarioCard.isCard(card37),    "Test 17 failed");
assert(!MarioCard.isCard(card51),   "Test 18 failed");
assert(!MarioCard.isCard(0),        "Test 19 failed");
assert(!MarioCard.isCard({}),       "Test 20 failed");
