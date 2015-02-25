var MemoryGUI = (function () {
	
	
	
	//click = function() {console.log('click')}

	function GuiCtor(container,game) {
		var size = game.size();
		//var size = 16;
		if(typeof container === 'string'){
		var container = document.getElementById(container);
		};

		printed = document.createElement('h1');
		document.body.appendChild(printed);

		
		this.render = function(){
			var id = 0;
			container.innerHTML = '';
			var table = document.createElement('table'); //make table

			printed.innerHTML = 'wlcm to mmry flp a crd'

			for(var i = 0; i < Math.sqrt(size); i++){ //make table rows
				table.appendChild(document.createElement('tr'));
			
				for(var j = 0; j < Math.sqrt(size); j++){ //make table cells
					tabCol = document.createElement('td'); // create
					tabCol.setAttribute('id', id); // give each cell a unique id
					tabCol.className = 'down'; // display down css class
					tabCol.addEventListener('click', function(){game.lift(this.id)}); 
					//tabCol.setAttribute('')}
					
					table.children[i].appendChild(tabCol); //attach to table
					//tabCol.className = 'dimensions';
					id++;

				}
			}
			container.appendChild(table);

			
		}

		this.render()

		
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
