var MemoryGUI = (function() {

	function GuiCtor(container, game) {
		var game = game;
		var cardNums = game.size();
		var body = document.body;
		var resetButton = document.getElementById('reset');
		var clickMatch = document.getElementById('showTheMatch');

		if (typeof container === "string") {
			container = document.getElementById(container);
		}
		// if (!(container instanceof HTMLElement)) {
		// 	return {};
		// }
		// var introT = document.getElementById('intro');
		// console.log(introT);


		var render = function() {
			var cardsDiv = document.createElement('div');
			cardsDiv.setAttribute('id', 'cardSet');
			game.reset();
			
			for (var c = 0; c < cardNums; c++) {
				thisCard = game.valueAt(c);
				var theCardID = thisCard[2];
				var newCard = document.createElement('div');
				newCard.setAttribute('id', c);
				newCard.setAttribute('class', 'cardDiv face-down');
				cardsDiv.appendChild(newCard);
				var cardFace = "<img src='img/"  + theCardID + ".png' class='card'>";
				newCard.innerHTML = cardFace;

				newCard.onclick = function() {
					var cardString = this.id;
				 	var cardNumber = parseInt(cardString);
				 	game.lift(cardNumber);
				};


			}
			container.appendChild(cardsDiv);
		};

		
		// public instance methods:
		// 	};
		// 	//...
		// };
		var show = function(where, what) {
			var cardToShow = document.getElementById(where);
			cardToShow.classList.toggle('face-down');
		};

		var hide = function(here) {
			var toHide = function() {
				var cardToHide1 = document.getElementById(here);
				cardToHide1.classList.toggle('face-down');				
			}
			window.setTimeout(toHide, 1500); 
		}

		var showMatchMessage = function() {
			var matchMessage = document.getElementById('match');
			var toggleMessage = function() {
				matchMessage.classList.toggle('showCelebration');
			}
			toggleMessage();
			window.setTimeout(toggleMessage, 2500);
		}	

		var showCelebrateMessage = function() {
			var celebrateMessage = document.getElementById('win');
			var toggleMessage = function() {
				celebrateMessage.classList.toggle('showCelebration');
			}
			toggleMessage();
		}						

		var matchSet = function(here, there) {
			var here = document.getElementById(here);
			var there = document.getElementById(there);
			here.className = "cardDiv matched";
			there.className = "cardDiv matched";
		}


		this.showCelebrateMessage = showCelebrateMessage;
		this.showMatchMessage = showMatchMessage;
		this.show = show;
		this.hide = hide;
		this.render = render;
		this.matchSet = matchSet;

		resetButton.onclick = function() {
			console.log("buut");
			container.innerHTML = '';
			render();
		};
		// Do some initial setup and rendering...
		render();

	}

	return GuiCtor;
})();




