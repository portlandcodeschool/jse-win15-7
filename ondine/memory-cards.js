var MemoryCards = (function() {

	function Ctor() {

		var gotWomen = [ 
									{name: 'daenerys', cardface: 'Daenerys Targaryen'},
									{name: 'daenerys', cardface: 'I will answer injustice with justice.'},
									{name: 'cersei', cardface: 'Cersei Lannister'},
									{name: 'cersei', cardface: 'When you play the game of thrones you win, or you die. There is no middle ground.'},
									{name: 'arya', cardface: 'Arya Stark'},
									{name: 'arya', cardface: 'Anyone can be killed.'},
									{name: 'sansa', cardface: 'Sansa Stark'},
									{name: 'sansa', cardface: 'They beat me, they humiliated me, they married me to the Imp.'},
									{name: 'brienne', cardface: 'Brienne of Tarth'},
									{name: 'brienne', cardface: 'I\'m no lady.'},
									{name: 'ygritte', cardface: 'Ygritte'},
									{name: 'ygritte', cardface: 'You know nothing, Jon Snow.'},
									{name: 'margaery', cardface: 'Margaery Tyrell'},
									{name: 'margaery', cardface: 'I want to be <i>the</i> Queen.'},
									{name: 'melisandre', cardface: 'Melisandre'},
									{name: 'melisandre', cardface: 'Death by fire is the purest death.'},
									{name: 'olenna', cardface: 'Olenna Tyrell'},
									{name: 'olenna', cardface: 'A golden rose, growing strong? Oh, yes, that strikes fear in the heart!'}
					 ];

		this.values = function() {
			return gotWomen.slice();
		};
		this.match = function(pair1,pair2) { 
			return (pair1.name===pair2.name); // check if num matches
		};
		this.display = function(val) { //val is pair [num, string]
			return val.name;  //display the string
		};

	}

	return Ctor;

})();
