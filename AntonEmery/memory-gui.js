var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			//style card face down
			console.log('Game reset!');
		}
		
		this.show = function(where, value) {
			//change card css to face up. where parameter equals card id 
			$('#' + where).toggleClass('face-up face-down');
			var currentClass = document.getElementById(where).classList;
			//console.log(currentClass);
			if(currentClass[0] == 'face-up') {
				console.log(value[0]); //animal name of card
			}
		}
		
		this.removeSoon = function(whereArr) {
			//make card hide, facedown
		}
		
		this.hideSoon = function(whereArr) {
			//hide but not quite right away. window.setTimeout
			whereArr.forEach(function(x) {
				//make class face down
				$('#' + x).toggleClass('face-down');
			})
		}

		var clicked = function() {
			//call the lift method
			game.lift(parseInt(this.id));
			//call show function
			invokeShow(this.id, game.valueAt(this.id));  //second argument is the array that contains card name and number
		}

		var callReset = this.reset;
		var invokeShow = this.show;
		var hideSoon = 

		// Do some initial setup and rendering...
		function render() {
			var container = document.getElementById('memorygame');
			container.innerHTML = ' ';
			var grid = document.createElement('ul');

			for(var i = 0; i < game.size(); i++) {
				var list = document.createElement('li');
				list.setAttribute('id', i);
				grid.appendChild(list);
				list.onclick = clicked;
				list.classList.add('face-down');
			} 
			container.appendChild(grid);

			var footer = document.getElementById('footer');
			var button = document.createElement('button');
			var text = document.createTextNode('Reset');
			footer.appendChild(button);
			button.appendChild(text);
			button.onclick = callReset;


		}
		render();
}

return GuiCtor;
})();


