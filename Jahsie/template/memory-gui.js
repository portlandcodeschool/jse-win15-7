var MemoryGUI = (function() {

	//...

	function GuiCtor(container, game) {
		var cardNums = game.size();
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

			for (c=0; c < cardNums; c++) {
				thisCard = game.valueAt(c);
				var theCardID = thisCard[2];
				var newCard = document.createElement('div');
				newCard.setAttribute('id', c);
				newCard.setAttribute('class', 'cardDiv face-down');
				cardsDiv.appendChild(newCard);
				var cardFace = "<img src='img/" + theCardID + ".png' class='card'>";
				newCard.innerHTML = cardFace;

				newCard.onclick = function() {


					var cardToLift = this.id;
					var liftCard = cardToLift.toString();
					console.log(game.lift(liftCard));					
					console.log('flipped card' + liftCard);
					this.classList.toggle('face-down');

				}
			}
			container.appendChild(cardsDiv);
		};

		var clickableCard = document.getElementsByClassName('cardDiv');
		console.log(clickableCard);
		
		// clickableCard.onclick = function() {
		// 	console.log('clicked card');
		// 	this.classList.toggle('face-down');
		// 	// game.lift(theCardID);					
		// 	// console.log('flipped card' + theCardID);

		// };

				// 	//window.lastEvent = evt;

				// }
		this.render = render;			

		// public instance methods:



		// 	};
		// 	//...
		// };
		// this.show = function(where,what) {
		// 	//...
		// };
		// this.removeSoon = function(whereArr) {
		// 	//...
		// };
		// this.hideSoon = function(whereArr) {
		// 	//...
		// };

		// this.render = render;
		// Do some initial setup and rendering...
		var resetButton = document.getElementById('reset');
		console.log('this is the' + resetButton);

		resetButton.onclick = function() {
			console.log('reset clicked');
			render();
		};

	}

	return GuiCtor;
})();

//var gameSize = game.size();


