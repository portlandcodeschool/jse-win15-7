var MemoryGUI = (function () {

	//...

	function GuiCtor(container, game) {
		console.log('this is game: ')
		console.log(game.size());
		console.log('Is container a string?' + (typeof container === 'string'));
		console.log('this is your container' + container);
		console.log('this is your getElementById: ' + document.getElementById(container))
		if(typeof container === 'string'){
			container = document.getElementById(container);
			console.log('this is now your container: ' + container);
			};	
	/*	if(!(container instanceof HTMLElement)) {
			return {}
		}; */

		this.el = function(){
			if (!container){
				return null;
			} else {
				return container
			}
		}
		

		// public instance methods:
		this.reset = function() {
			//...
		}
		this.show = function(where,what) {
			//...
		}
		this.removeSoon = function(whereArr) {
			//...
		}
		this.hideSoon = function(whereArr) {
			//...
		}

		// Do some initial setup and rendering...
/*		var toDraw = game.size();
*/	

		this.render = function(){
			container.innerHTML = '';
			var playmat = document.createElement('table');
			for (row = 0; row<2; row++){
				var gameRow = document.createElement('tr');
				gameRow.className = 'cardBorder';
				for (cell = 0; cell<(game.size()*0.5); cell++){
					var cardCell = document.createElement('td');
					cardCell.setAttribute('id', (2*row + cell));
					cardCell.className = 'cardInterior';
					gameRow.appendChild(cardCell);
				}
				playmat.appendChild(gameRow);
			};
			container.appendChild(playmat);
		};

	}


		

	return GuiCtor;
})();

function doStuff(){
	g1u = new MemoryGUI('memorygame', game1);
	g1u.render();
}

window.onload = doStuff;
