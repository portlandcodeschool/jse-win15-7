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
			$('#' + where).toggleClass('face-down face-up');
			var currentClass = document.getElementById(where).classList;
			console.log(value[0]); //animal name of card
			// if(currentClass[1] == 'face-up') {
			// 	console.log(value[0]); //animal name of card
			// }
		}
		
		this.hideSoon = function(whereArr) {  //sets facedown
			//hide but not quite right away. window.setTimeout
			whereArr.forEach(function(x) {
				//make class face down
				console.log('hide soon');
				$('#' + x).attr('class', 'face-down');
				//$('#' + x).toggleClass('face up face-down');
			});
		}

		this.removeSoon = function(whereArr) {  //sets invisible
			whereArr.forEach(function(x) {
				//set class invisible
				console.log('removing ' + x);
				$('#' + x).addClass('invisible');
			});

		}

		var clicked = function() {
			game.lift(parseInt(this.id)); //removed parse int
		}


		var callReset = this.reset;
		

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


