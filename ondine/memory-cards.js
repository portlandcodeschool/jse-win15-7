var MemoryCards = (function() {

	function Ctor() {

		var gameOfThrones = [ 
									{name: 'daenerys', cardface: 'daenerys.jpg', person: 'Daenerys Targaryen'},
									{name: 'daenerys', cardface: 'I will answer injustice with justice.'},
									{name: 'cersei', cardface: 'cersei.jpg', person: 'Cersei Lannister'},
									{name: 'cersei', cardface: 'When you play the game of thrones you win, or you die. \nThere is no middle ground.'},
									{name: 'arya', cardface: 'arya.jpg', person: 'Arya Stark'},
									{name: 'arya', cardface: 'Anyone can be killed.'},
									{name: 'sansa', cardface: 'sansa.jpg', person: 'Sansa Stark'},
									{name: 'sansa', cardface: 'They beat me, they humiliated me, they married me to the Imp.'},
									{name: 'brienne', cardface: 'brienne.jpg', person: 'Brienne of Tarth'},
									{name: 'brienne', cardface: 'I&#8217;m no lady.'},
									{name: 'ygritte', cardface: 'ygritte.jpg', person: 'Ygritte'},
									{name: 'ygritte', cardface: 'You know nothing, Jon Snow.'},
									{name: 'margaery', cardface: 'margaery.jpg', person: 'Margaery Tyrell'},
									{name: 'margaery', cardface: 'I want to be <i>the</i> Queen.'},
									{name: 'melisandre', cardface: 'melisandre.jpg', person: 'Melisandre'},
									{name: 'melisandre', cardface: 'Death by fire is the purest death.'},
									{name: 'olenna', cardface: 'olenna.jpg', person: 'Olenna Tyrell'},
									{name: 'olenna', cardface: 'A golden rose, growing strong? \nOh, yes, that strikes fear in the heart!'}
					 ];

		this.values = function() {
			return gameOfThrones.slice();
		};
		this.match = function(pair1,pair2) { 
			return (pair1.name===pair2.name);
		};
		this.display = function(val) {
			return val.cardface;
		};

	}

	return Ctor;

})();
