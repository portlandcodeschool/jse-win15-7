var MemoryGUI = (function () {

	//...

	function GuiCtor(container, game) {
		if(typeof container === 'string'){
			container = document.getElementById(container);
			console.log('this is now your container: ' + container);
			};	
		if(!(container instanceof HTMLElement)) {
			return {}
		}; 

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
			console.log('here is where your faceup is')
			console.log(game1.faceupValue());
			console.log('render shows this as game');
			console.log(game);
			container.innerHTML = '';
			var playmat = document.createElement('table');
			for (row = 0; row<2; row++){
				var gameRow = document.createElement('tr');
				//gameRow.className = 'cardBorder';
				for (cell = 0; cell<(game.size()*0.5); cell++){
					var cardCell = document.createElement('td');
					cardCell.setAttribute('id', (row*4+cell));
					cardCell.className = 'face-down';
					cardCell.innerHTML = cardCell.id;
					cardCell.onclick = function(){
						if (game.faceupWhere()===false){
							this.className = 'face-up';
						};
						game.lift(Number(this.id));
						for (cards = 0; cards <(game.size()); cards++){
							if (game.faceupWhere() !== cards){
								document.getElementById(cards).className = 'face-down'
							}
						};
						for (cards = 0; cards<(game.size()); cards++){
							if (game.remaining().indexOf(cards) < 0){
								document.getElementById(cards).className = 'hidden'
							}
						}
						
					};
//					cardCell.setAttribute('onclick', 'console.log(' + '\'' + game.lift(Number(cardCell.id)) + '\'' + ')');					
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
	console.log('this is before g1u is defined for faceup')
	console.log(game1.faceupValue());
	g1u = new MemoryGUI('memorygame', game1);
	g1u.render();
}

window.onload = doStuff;


/* Testing Consoles:


		console.log('this is game lift: ')
		console.log(game.lift(0));
		console.log('Is container a string?' + (typeof container === 'string'));
		console.log('this is your container' + container);
		console.log('this is your getElementById: ' + document.getElementById(container))

*/
