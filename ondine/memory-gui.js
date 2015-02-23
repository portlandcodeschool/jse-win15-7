var MemoryGUI = (function () {

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() { // this reset is decoration, not the same as game reset
			// One method:
			// for (var i = 0; i < game.size(); ++i) {
			// 	listItem.classList.add('facedown');
			// }

			// Alternate method:
			var allFaceups = document.getElementsByClassName('faceup');
			for (var i = 0; i < allFaceups.length; ++i) {
				allFaceups[i].classList.remove('faceup');
				allFaceups[i].classList.add('facedown');
			}
		};
		this.show = function(where,what) { // show card face (card1 & card2)
			var currentCard = document.getElementById(where);
				currentCard.classList.add('faceup');
				currentCard.classList.remove('facedown');	
				var cardContent = document.createTextNode(what);
				currentCard.appendChild(cardContent);
		};
		this.removeSoon = function(whereArr) { // matched cards hide or are removed - decoration
			//...
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

		var footer = document.getElementById('footer');
		var btn = document.createElement('button');        
	    var text = document.createTextNode('Reset');       
	      	btn.appendChild(text);                                
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