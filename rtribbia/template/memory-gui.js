var MemoryGUI = (function () {


	function GuiCtor(container,game) {
		var cont;
		if (container instanceof HTMLElement) {
			cont = container;
		} else if ((typeof container) == "string") {
			cont = document.getElementById(container);
		} else { return {}};

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
		function lift(evt) {
			console.log(game.lift(this.id));
		}

		function renderCard_face(gameID) {
	        var img = document.createElement('img');
	        src = 'images/SVG-cards-1.3/' + game.getImg(gameID) + '.svg';
	        img.src = src;
	        img.setAttribute('width',65);
	        return img;
   		}
    

		function renderBoard() {
			
			//var table = document.createElement('table');
			var total = game.size();
			var numcols = Math.ceil(total/Math.floor(Math.sqrt(total)));
			var numrows = Math.ceil(total/numcols);

			var counter = 0;

			var table = document.createElement('table');

			for (var r = 0; r < numrows; r++) {
				var tr = document.createElement('tr');
				for (var c = 0; c < numcols; c++) {
					if (counter >= total) { c = numcols; break; }
					var td = document.createElement('td');
					var id = counter;
					td.setAttribute('id',id);
					td.classList.add('cell');
					td.appendChild(renderCard_face(id));
					td.onclick = lift;
					tr.appendChild(td);
					counter++;
				}
				table.appendChild(tr);
			}
			cont.appendChild(table);
		}
		// Do some initial setup and rendering...
		renderBoard();

	}

	return GuiCtor;
})();
