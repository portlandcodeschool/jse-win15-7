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
			console.log(value[0]); //animal name of card
			// if(currentClass[1] == 'face-up') {
			// 	console.log(value[0]); //animal name of card
			// }
		}
		
		this.hideSoon = function(whereArr) {  //sets facedown
			//hide but not quite right away. window.setTimeout
			window.setTimeout(function() { 
				whereArr.forEach(function(x) {
					//make class face down
					$('#' + x).attr('class', 'face-down');
					//$('#' + x).toggleClass('face-up face-down'); //only second card is going face down
				});
			}, 1000);
		}

		this.removeSoon = function(whereArr) {  //remove matched cards from game
			window.setTimeout(function() {
				whereArr.forEach(function(x) {
					//set class invisible
					$('#' + x).attr('class', 'invisible');
					//$('#' + x).addClass('invisible');  not working, game still sees card
					//need to make card face down as well
				});
			}, 1000);
		}

		var clicked = function() {
			
			game.lift(parseInt(this.id)); 
			
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
				list.classList.add('face-down');
				list.onclick = clicked;
				
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


