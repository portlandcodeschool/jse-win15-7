var MemoryGUI = (function () {

	function GUI(container, game) {

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

		var	self = this;

		this.show = function(where,what) { // show card face (card1 & card2)
			var currentCard = document.getElementById(where);
				currentCard.classList.add('faceup');
				currentCard.classList.remove('facedown');
			var cardContent = document.createTextNode(what);
				currentCard.appendChild(cardContent);
				currentCard.innerHTML = '<p class="quote">' + what.name +'</p>';
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
			self.show(this.id, game.valueAt());
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

    $('body').append('<div id = "footer">');
    var $resetButton = $('<button id="resetButton">Play Again</button>');
    $('#footer').prepend($resetButton);
		$('resetButton').on('click', function() {
			$('li.faceup').attr('class', 'facedown');
		});
	}

	return GUI;
})();