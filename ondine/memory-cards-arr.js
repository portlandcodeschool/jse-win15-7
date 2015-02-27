var MemoryCards = (function() {

	function Ctor() {

		var cards = [ [1,'Daenerys Targaryen'],[1,'I will answer injustice with justice.'],
						[2,'Cersei Lannister'],[2,'When you play the game of thrones you win, or you die. There is no middle ground.'],
						[3,'Arya Stark'],[3,'Anyone can be killed.'],
						[4,'Sansa Stark'],[4,'They beat me, they humiliated me, they married me to the Imp.'],
						[5,'Brienne of Tarth'],[5,'I\'m no lady.'],
						[6,'Ygritte'],[6,'You know nothing, Jon Snow.'],
						[7,'Margaery Tyrell'],[7,'I want to be <i>the</i> Queen.'],
						[8,'Melisandre'],[8,'Death by fire is the purest death.'],
						[9,'Olenna Tyrell'],[9,'A golden rose, growing strong? Oh, yes, that strikes fear in the heart!']
					 ];

		this.values = function() {
			return cards.slice();
		};
		this.match = function(pair1,pair2) { 
			return (pair1[0]===pair2[0]); // check if num matches
		};
		this.display = function(val) { //val is pair [num, string]
			return val[1];  //display the string
		};

	}

	return Ctor;

})();
