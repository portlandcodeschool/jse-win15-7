var MemoryGUI = (function () {
	
	
	
	//click = function() {console.log('click')}

	function GuiCtor(container,game) {
		var size = 16;

		if(typeof container === 'string'){
		var container = document.getElementById(container);
		};

		

		this.render = function(){
			var id = 0;
			container.innerHTML = '';
			var table = document.createElement('table');

			for(var i = 0; i < Math.sqrt(size); i++){
				table.appendChild(document.createElement('tr'));
			
				for(var j = 0; j < Math.sqrt(size); j++){
					tabCol = document.createElement('td');
					tabCol.setAttribute('id', id);
					tabCol.className = 'down';
					tabCol.addEventListener('click', function(){game.lift(this.id)}); 
					//tabCol.setAttribute('')}
					
					table.children[i].appendChild(tabCol);
					//tabCol.className = 'dimensions';
					id++;
				}
			}
			container.appendChild(table);

			
		}

		this.render()

		printed = document.createElement('h1');
		document.body.appendChild(printed);


		// public instance methods:
		this.reset = function() {
			this.render();
		}
		this.show = function(where,what) {
			var showCell = document.getElementById(where);
			showCell.innerHTML = what;
			showCell.className = 'up';
		};
		this.removeSoon = function(where, prevWhere) {
			window.setTimeout(function(){
				var card = document.getElementById(where);
				var prevCard = document.getElementById(prevWhere);
				card.className = 'gone'
				prevCard.className = 'gone'
			}, 800)
		};
		this.hideSoon = function(where, prevWhere) {
			window.setTimeout(function(){
				var card = document.getElementById(where);
				var prevCard = document.getElementById(prevWhere);
				card.className = 'down'
				prevCard.className = 'down'
			}, 800)
		}

		this.printText = function(what){
			printed = document.getElementsByTagName('h1')[0];
			printed.innerHTML = what;
			//window.setTimeout(function(){printed.innerHTML = ''}, 3000);
		}

		// Do some initial setup and rendering...
	}

	return GuiCtor;
})();
