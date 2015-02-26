var MemoryGUI = (function () {

	function GuiCtor(container,game) {

		// public instance methods:

		// Reset turns all faceup cards facedown:
		this.reset = function() { // this reset is decoration, not the same as game reset
			// Alternate method:
			//  for (var i = 0; i < game.size(); ++i) {
			// 	listItem.classList.add('facedown');
			// }
			
			var allFaceups = document.getElementsByClassName('faceup');
			for (var i = 0; i < allFaceups.length; ++i) {
				allFaceups[i].classList.add('facedown');
				allFaceups[i].classList.remove('faceup');
			}
		};

		this.show = function(where,what) { // show card face (card1 & card2)
			var currentCard = document.getElementById(where);
				currentCard.classList.add('faceup');
				currentCard.classList.remove('facedown');
				currentCard.innerHTML = what;
			var cardContent = document.createTextNode(what);
				currentCard.appendChild(cardContent);
				//currentCard.innerHTML = '<p class="quote">val[1]</p>';
		};
		this.removeSoon = function(whereArr) { // matched cards hide or are removed - decoration
			//...([a,b]) are matched & hidden
			$().addClass('matched');
		};
		this.hideSoon = function(whereArr) { // an array of 2 numbers (mismatch)
			//...
		};

		function clicked() {
			game.lift(parseInt(this.id));
		}
	
		var grid, listItem;
		var startOver = this.reset;

		// Initial setup and rendering
		function render() {
			var container = document.getElementById('memorygame');
			container.innerHTML = '';
			grid = document.createElement('ul');

			for (var i = 0; i < game.size(); ++i) {
				listItem = document.createElement('li');
				grid.appendChild(listItem);
				listItem.setAttribute('id', (i));
				// attach event handler
				listItem.onclick = clicked;
				listItem.classList.add('facedown');
			}
			container.appendChild(grid);

		}
		render();

		$('body').prepend('<div id = "header">');
		$('#header').prepend('<h1>Wisdom of Westeros</h1>');
    $('#header').append('<h2>Match <em>Game of Thrones</em> characters with their words!</h2>');

		var btn = document.createElement('button');        
    var label = document.createTextNode('Reset');
    var footer = document.getElementById('footer');       
      	btn.appendChild(label);
      	footer.appendChild(btn);	                             
      	btn.onclick = startOver;
	}

	return GuiCtor;
})();

/*
TESTING faceup in the console:

var test = document.getElementById('memorygame');
var testCard = document.getElementById('0');
testCard
testCard.className = 'faceup'
*/