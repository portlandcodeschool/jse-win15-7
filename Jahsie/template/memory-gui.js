var MemoryGUI = (function() {

	//...

	function GuiCtor(container, game) {
		var game = game;
		var cardNums = game.size();
		// var liftFunction = game.lift;
		// this.liftFunction = liftFunction;
		// var liftACard = game.lift;
		// var what = liftACard.toString();
		// console.log(what);


		var body = document.body;
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


					var cardToLift = this.id;

					game.lift(cardToLift);
					var liftCard = cardToLift.toString();					
					console.log('flipped card' + liftCard);
					this.classList.toggle('face-down');


				};
			}
			container.appendChild(cardsDiv);
		};

		// var clickableCard = document.getElementsByClassName('cardDiv');
		// console.log("This is a clickable card" + clickableCard);
		
		// clickableCard.onclick = function() {
		// 	console.log('clicked clickable card');
		// 	// this.classList.toggle('face-down');
		// 	game.lift(theCardID);					
		// 	console.log('flipped card' + theCardID);

		// };

		// this.showMatch = showMatch;

		// var match = function() {
		// 	this.showMatch();
		// 	window.setTimeout(showMatch, 1000);
		// }




				// 	//window.lastEvent = evt;

				// }
		// public instance methods:
		// 	};
		// 	//...
		// };
		var show = function(where, what) {
			var cardToShow = document.getElementById(where);
			console.log("cardToShow = " +cardToShow);
			cardToShow.classList.toggle('face-down');

		};

		var hide = function(here) {
			var toHide = function() {
				var cardToHide1 = document.getElementById(here);
				console.log("cardToHide1 = " +cardToHide1);
				cardToHide1.classList.toggle('face-down');				
			}
			window.setTimeout(toHide, 2500); 
		}


		this.removeSoon = function(whereArr) {
			//...
		};
		this.hideSoon = function(whereArr) {
			//...
		};

		var clickMatch = document.getElementById('showTheMatch');
		var showMatchMessage = function() {
			var matchMessage = document.getElementById('match');
			var toggleMessage = function() {
				matchMessage.classList.toggle('showCelebration');
			}
			toggleMessage();
			window.setTimeout(toggleMessage, 2500);
		}				

		var matchSet = function(here, there) {
			var here = document.getElementById(here);
			console.log(here);
			var there = document.getElementById(there);
			console.log(there);
			here.className = "cardDiv matched";
			there.className = "cardDiv matched";
		}

		this.showMatchMessage = showMatchMessage;
		this.show = show;
		this.hide = hide;
		this.render = render;
		this.matchSet = matchSet;
		// Do some initial setup and rendering...
		var resetButton = document.getElementById('reset');

		resetButton.onclick = function() {
			container.innerHTML = '';
			render();
		};
	}

	return GuiCtor;
})();

