var MemoryGUI = (function () {

	//...

	function GuiCtor(container, game) {
		if(typeof container === 'string'){
			container = document.getElementById(container)};
		if(!(container instanceof HTMLElement)) {
			return {}
		}; 
		

		// public instance methods:
		this.reset = function() {
			//...

		}
		this.show = function(where,what) {
			//...
			console.log("showing!");
			console.log('here is where');
			console.log(where.id);
			console.log('here is what');
			console.log(what);
			var showIt = document.getElementById(where);
			showIt.setAttribute('class', 'face-up');
			showIt.innerHTML = what;

		}
		this.removeSoon = function(whereArr) {
			//...
			var target = document.getElementById(whereArr);
			//window.setTimeout(function(){target.className = 'hidden'; target.innerHTML = ''}, 5000);
			window.setTimeout(function(){delete target}, 5000);
		}
		this.hideSoon = function(whereArr) {
			//...
			window.setTimeout(function(){document.getElementById(whereArr).className = 'face-down';
				document.getElementById(whereArr).innerHTML = ''}, 5000);
		}

		this.checker = function(){
			game.showGui();
			console.log(valueAt(0))
		}

		// Do some initial setup and rendering...
/*		var toDraw = game.size();
*/	

		this.render = function(){
			container.innerHTML = '';
			var playmat = document.createElement('table');
			for (row = 0; row<2; row++){
				console.log(game.size());
				var gameRow = document.createElement('tr');
				//gameRow.className = 'cardBorder';
				for (cell = 0; cell<(game.size()*0.5); cell++){
					var cardCell = document.createElement('td');
					gameRow.appendChild(cardCell);
					cardCell.setAttribute('id', (row*4+cell));
					cardCell.className = 'face-down';
					console.log(row*4+cell);
					cardCell.onclick = function(){
					console.log('ok im lifting from gui.js');
					console.log(this.lift + 'gui.js');
					game.lift(this);
//					game.lift(row*4+cell);};
					};
				};
			
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
	game1.gui(g1u);
}

window.onload = doStuff;


/* Testing Consoles:


		console.log('this is game lift: ')
		console.log(game.lift(0));
		console.log('Is container a string?' + (typeof container === 'string'));
		console.log('this is your container' + container);
		console.log('this is your getElementById: ' + document.getElementById(container))

			console.log('trying to show a name:')
			console.log(game.faceupValue())
			console.log('here is where your faceup is')
			console.log(game.faceupValue());
			console.log('render shows this as game');
			console.log(game);
			

			this was your gui.click thingy:
									if (game.faceupWhere()===false){
							this.className = 'face-up';
						};
						game.lift(Number(this.id));
//						this.innerHTML = game.faceupValue().name; 
						for (cards = 0; cards <(game.size()); cards++){
							if (game.faceupWhere() !== cards){
								document.getElementById(cards).className = 'face-down'
							}
						};
						for (cards = 0; cards<(game.size()); cards++){
							if (game.remaining().indexOf(cards) < 0){
								document.getElementById(cards).className = 'hidden';
								document.getElementById(cards).innerHTML = '';
							}
						}
						console.log(game.faceupValue().name);
					/*	console.log(game.remaining().length);
						if (game.remaining().length = 0){
							console.log('You won!');
						}  

						THE END.

			This was your SHOW:

									//if(game.faceupValue() !== undefined){
			//game.lift(where);
			//showIt.innerHTML = game.faceupValue().name;
	/*	} else {
			console.log('went on to else');
			game.there = false;
			game.lift(where);
			showIt.innerHTML = game.faceupValue().name; 
		} */
		/*		showIt.innerHTML = game.faceupValue().name;
			} else if ((game.faceupWhere()!==false) && (game.faceupWhere()!==true)){
				game.lift(where);
				showIt.innerHTML = game.faceupValue().name;
			} 

			END SHOW

*/
