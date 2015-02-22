var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			//style card face down
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

		// Do some initial setup and rendering...
		function render() {
			var container = document.getElementById('memorygame');
			container.innerHTML = ' ';
			var grid = document.createElement('ul');

			for(var i = 0; i < 8; i++) {
				var list = document.createElement('li');
				grid.appendChild(list);
			} 
			container.appendChild(grid);

		}
		render();
}

return GuiCtor;
})();


