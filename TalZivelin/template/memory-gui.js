var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			/*var allFaceUp = document.getElementsByClassName('face-up');
			for (var i = 0; i < allFaceUp.length; ++i) {
				allFaceUp[i].classList.add('face-down');				
				allFaceUp[i].classList.remove('face-up');				
			};
			container.innerHTML = ''; */
			game.reset();
			render();
			
		}
		this.show = function(where,what) {
			//...
			var currentCard = document.getElementById(where);
			
			currentCard.classList.remove('face-down');
			currentCard.classList.add('face-up');
			console.log(what);
			
			//var cardContent = document.createTextNode(game.lift());     
           // currentCard.appendChild(cardContent); 
			
			currentCard.innerHTML = '<img src=img/' + what + '.jpg></img>';
			
						
		}
		this.removeSoon = function(locs) {
			console.log(locs);
			
			window.setTimeout(function() {
				var card01 = document.getElementById(locs[0]);
				var card02 = document.getElementById(locs[1]);				
				card01.classList.add('removeCard');
				card02.classList.add('removeCard');
				//console.log(card01, card02);
				//alert("Match!");
			}, 1000);
		}
		this.hideSoon = function(locs) {
			console.log(locs);
			
			window.setTimeout(function() {
				var card01 = document.getElementById(locs[0]);
				var card02 = document.getElementById(locs[1]);				
				card01.classList.add('face-down');
				card02.classList.add('face-down');
				card01.innerHTML = '';
				card02.innerHTML = '';
				//console.log(card01, card02);
				//alert("Try again sucker!");
			}, 1000);
		}
		
		function clicked(){
			//console.log(this.id);
			game.lift(parseInt(this.id));
			//gui.show(parseInt(this.id));
			//console.log("this is show pars, id " + parseInt(this.id));
			//console.log("this is game pars, id " + game.valueAt(parseInt(this.id)));
			//show(parseInt(this.id),game.valueAt(parseInt(this.id)));
			
		}
		
		var guiReset = this.reset;
		var listitem;
		var newCard;
		var showCards = game.show;
		var containerReset = this.reset;
		
		function render() {
			var container = document.getElementById('memorygame');
			container.innerHTML = ' ';

			var grid = document.createElement('ul');

			for (var i = 0; i < game.size(); ++i) {
				//console.log(game.lift(i));
				listitem = document.createElement('li');				
				grid.appendChild(listitem);
				listitem.setAttribute('id', i);
				listitem.setAttribute('class', 'card' + i);
				listitem.onclick = clicked;
				listitem.classList.add('face-down');
				
			}
			
			container.appendChild(grid);
				if (document.getElementById('footer') == undefined) {
					var footer = document.createElement('footer');
					container.appendChild(footer)
					// document.getElementById('footer');
					var button = document.createElement('button');
					var text = document.createTextNode("Reset");       
		            button.appendChild(text);                                
		            footer.appendChild(button);	
					} else {
						return;
					}
		
            button.onclick = containerReset;
			
			/* var footer = document.getElementById('footer');
		    var btn = document.createElement('button');        
            var text = document.createTextNode("Reset"); 
			btn.appendChild(text);                                
            footer.appendChild(btn);
			btn.onclick = guiReset; */		
			
		}
		render();
	
	}

	return GuiCtor;
})();