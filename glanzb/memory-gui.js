var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {
		
		// if (typeof container === 'string') {
		// 	container = document.getElementById('container');
		// }
		// this.el = function() {
		// 	return container;
		// }

		// public instance methods:
		this.reset = function() {		// reset method of the gui constructor, property
			          
			//. button on click apply attr all face down..
			//game and gui reset
			var allFaceUp = document.getElementsByClassName('face-up');
			for (var i = 0; i < allFaceUp.length(); ++i) {
				allFaceUp[i].classList.remove('face-up');
				allFaceUp[i].classList.add('face-down');

			};	// allFaceUp[i] is a dom element, instance in the array
			
		}
		this.show = function(where,what) {	// the gui recieves the where and what, trusts the sorce
			var currentCard = document.getElementById(where);	// gets the id from the memory game
			currentCard.classList.remove('face-down');
			currentCard.classList.add('face-up');
			var cardText = document.createTextNode(what); 
			currentCard.appendChild(cardText);
			// game.lift value , lift knows the place and value
			//... gui.show, what is the value
			//cardset.display
		}
		this.removeSoon = function(whereArr) {
			//...they have been matched, hide them
			// where arr 
			// if (card1[1] where === card2[1] where) {
			// 	removeSoon
			// };
		}
		this.hideSoon = function(whereArr) {
			//... mismatch
			// if (card 1(val) !=== ) {
			// 	turn facedown (change css attr on it)
			// };
		}
		function clicked(){
			console.log(this.id);
			game.lift(parseInt(this.id));
		}


		var containerReset = this.reset;
		var listItem;
		// Do some initial setup and rendering...
		function render() {
			var container = document.getElementById('memorygame');
			container.innerHTML = ' ';

			var grid = document.createElement('ul');

			for (var i = 0; i < game.size(); ++i) {
				listItem = document.createElement('li');
				grid.appendChild(listItem);
				listItem.setAttribute('id',i)
				listItem.onclick = clicked;
				listItem.classList.add('face-down')
			}

			container.appendChild(grid);

			var footer = document.getElementById('footer');
			var button = document.createElement('button');
			var text = document.createTextNode("Reset");       
            button.appendChild(text);                                
            footer.appendChild(button);
            button.onclick = containerReset;
		}

		render();

	}

	return GuiCtor;
})();
// has to be generic