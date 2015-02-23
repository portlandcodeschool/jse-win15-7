var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			//style card face down
			console.log('button clicked');
		}
		this.show = function(where,what) {
			//...
		}
		this.removeSoon = function(whereArr) {
			//make card hide, facedown
		}
		this.hideSoon = function(whereArr) {
			//hide but not quite right away. window.setTimeout
		}

		var clicked = function() {
			//console.log(this.id);
			//need to call the lift method
			game.lift(parseInt(this.id));
		}

		var invokeReset = this.reset;

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
			button.onclick = invokeReset;


		}
		render();
}

return GuiCtor;
})();


