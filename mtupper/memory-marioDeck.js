/**
 * Created by michaelt on 2/22/15.
 */
var MarioCard = (function() {

    function MarioCard(id) {
        this.id = id;
    }

    // Instance Methods

    var numCards = 50;

    MarioCard.prototype.isValid = function() {
        return (typeof this.id === 'number') &&
            (this.id % 1 === 0) &&
            (this.id >= 0) &&
            (this.id < this.constructor.numCards());
    };
    MarioCard.prototype.rank = function(){
        return Math.floor(this.id / 4) + 1;
    };
    MarioCard.prototype.suit = function(){
        return (this.id % 4) + 1;
    };
    MarioCard.prototype.color = function(){
        var c;
        var x = this.suit(this.id);
        if (x === 1 || x === 2) {
            c = "red";
        }
        else {
            c = "black";
        }
        return c;
    };
    MarioCard.prototype.name = function(){
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            (this.constructor.rankNames()[rankVal-1]
            +' of '						 		//-1 b/c no leading blank in arrays
            +this.constructor.suitNames()[suitVal-1]);
    };

    // Data sets

    var charNames = [
        'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Jack', 'Queen', 'King'
    ];

    var pairVals = [
        'Hearts', 'Diamonds', 'Spades', 'Clubs'
    ];

    var fullSet = [];
    for(var i = 0; i < numCards.length; i++) {
        fullSet.push(i);
    }

    // Class Constructor Methods

    MarioCard.isCard = function(card) {
        return (card instanceof MarioCard) && card.isValid();
    };
    MarioCard.numCards = function() {
        return numCards;
    };
    MarioCard.rankNames = function() {
        return rankNames.slice();
    };
    MarioCard.suitNames = function() {
        return suitNames.slice();
    };
    MarioCard.fullSet = function() {
        return fullSet.slice();
    };

    return MarioCard;

})();


// COPY & PASTED FROM TEMPLATE FOR TESTING INHERITANCE FROM CARD TO TAROT CONSTRUCTOR:

// This IIFE will create a subclass (constructor TarotCard) of a superclass (constructor MarioCard)
var TarotCard = (function(){ //<-- Superclass is parameter, but equals MarioCard

    // Create subclass constructor:
    function Ctor(id) {
        MarioCard.call(this,id); // call superclass ctor first
        this.upright = true; // then add subclass-specific properties
    }
    Ctor.isCard = MarioCard.isCard; //share one superclass method

    // Override some other superclass methods and resources:

    var suitNames = ["Cups","Pentacles","Swords","Wands"];
    var rankNames = MarioCard.rankNames(); // subclass ranks are derived from superclass MarioCard,
    rankNames.splice(10,1,"Page","Knight"); // but Jack gets replaced w. Page+Knight

    Ctor.rankNames = function() {
        return rankNames.slice();
    }
    Ctor.suitNames = function() {
        return suitNames.slice();
    }
    Ctor.numCards = function() {
        return 56;
    }

    // Replace default prototype so that subclass inherits from superclass MarioCard
    var proto = (Ctor.prototype = Object.create(MarioCard.prototype));
    proto.constructor = Ctor;

    // Disable one superclass instance method:
    proto.color = undefined; //Tarot cards have no color; disable inherited method

    return Ctor; //== TarotCard
})(); // end subclass IIFE


// ====================
// Testing suite as before...
// ====================

function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = new MarioCard(0);
var card3 = new MarioCard(3);
var card5 = new MarioCard(5);
var card51 = new MarioCard(51);
var card52 = new MarioCard(52); // invalid when tested

// Test instance methods:
assert(card0.rank()===1,        "Test 1 failed");
assert(card3.rank()===1,        "Test 2 failed");
assert(card51.rank()===13,      "Test 3 failed");
assert(card0.suit()===1,        "Test 4 failed");
assert(card5.suit()===2,        "Test 5 failed");
assert(card51.suit()===4,       "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

assert(card0.isValid(),		"Test 15 failed");
assert(card51.isValid(),	"Test 16 failed");
assert(!card52.isValid(),	"Test 17 failed");

// Test MarioCard.isCard:
assert(MarioCard.isCard(card0),  "Test 21 failed");
assert(MarioCard.isCard(card51), "Test 22 failed");
assert(!MarioCard.isCard(0),     "Test 23 failed");
assert(!MarioCard.isCard({}),    "Test 24 failed");
assert(!MarioCard.isCard(card52),"Test 25 failed");

// Now test Tarot cards!
var tarot0 = new TarotCard(0);
var tarot3 = new TarotCard(3);
var tarot5 = new TarotCard(5);
var tarot40 = new TarotCard(40);
var tarot46 = new TarotCard(46);
var tarot55 = new TarotCard(55);
var tarot56 = new TarotCard(56); // invalid when tested

// Test instance methods:
assert(tarot0.rank()===1,  "Test 51 failed");
assert(tarot3.rank()===1,  "Test 52 failed");
assert(tarot55.rank()===14,"Test 53 failed");
assert(tarot0.suit()===1,  "Test 54 failed");
assert(tarot5.suit()===2,  "Test 55 failed");
assert(tarot55.suit()===4, "Test 56 failed");
assert(!tarot0.color,   "Test 60 failed");

assert(tarot5.name()==='Two of Pentacles', 	"Test 61 failed");
assert(tarot40.name()==='Page of Cups',  	"Test 62 failed");
assert(tarot46.name()==='Knight of Swords', "Test 63 failed");
assert(tarot55.name()==='King of Wands',  	"Test 64 failed");

assert(tarot0.isValid(),	"Test 65 failed");
assert(tarot55.isValid(),	"Test 66 failed");
assert(!tarot56.isValid(),	"Test 67 failed");

// Test TarotCard.isCard:
assert(TarotCard.isCard(tarot0),  "Test 71 failed");
assert(TarotCard.isCard(tarot55), "Test 72 failed");
assert(!TarotCard.isCard(0),     "Test 73 failed");
assert(!TarotCard.isCard({}),    "Test 74 failed");
assert(!TarotCard.isCard(tarot56),"Test 75 failed");
