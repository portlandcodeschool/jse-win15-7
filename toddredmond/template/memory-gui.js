var MemoryGUI = (function () {

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			//turn everything facedown
			for (var r=0; r<game.size(); r++) {
			var clear = document.getElementById('n'+r);
			clear.className = 'card_down';
			}

		};
		this.show = function(where,what) {
			//...
			var cell = 'n'+where;
			var test = document.getElementById(cell);
			//test.setAttribute('value',what);
			test.classList.add('card_up')
			test.innerHTML = '<img src=' + what +  ' class="cardImage"></img>'

		};
		this.removeSoon = function(whereArr) {
			//...
			//array of two numbers
			var card01 = document.getElementById('n'+whereArr[0]);
			var card02 = document.getElementById('n'+whereArr[1]);	
			window.setTimeout(function() {
				card01.className = 'removeCard';
				card01.innerHTML = '';
        		card02.className = 'removeCard';
				card02.innerHTML = '';
      		}, 1000);
		};
		this.hideSoon = function(whereArr) {
			//...
			//turns card after set time
			var card01 = document.getElementById('n'+whereArr[0]);
			var card02 = document.getElementById('n'+whereArr[1]);	
			window.setTimeout(function() {
				card01.className = 'card_down';
				card01.innerHTML = '';
        		card02.className = 'card_down';
				card02.innerHTML = '';
      		}, 1000);

		};

		// Do some initial setup and rendering...
		
		this.makeTable = function() {
			var cellcount = game.size();
			var tbl = document.createElement('table');
			var container = document.getElementById('memorygame');
				var row = document.createElement('tr');
				row.className = 'card';
				tbl.appendChild(row);
				for (var y = 0; y<cellcount; y++) {
					var cell = document.createElement('td');
					cell.setAttribute('id', "n"  + y);
					cell.onclick = cardClick;
					row.appendChild(cell);
				}//end of inner loop to create cells

		//} //end of loop to create rows
		container.appendChild(tbl);
		return cell;
	} ();//end of makeTable function

		function cardClick(num) {
			game.lift(num.target.id);
		} // end of cardClick function

		function btnReset() {
			var btn_reset = document.createElement('button');
			document.body.appendChild(btn_reset)
			//btn_reset.ClassList.add('btn_reset');
			btn_reset.className = 'btn_reset'
			btn_reset.innerHTML = 'Reset'
			btn_reset.addEventListener('click', function() {
				gui.reset();
				game.reset();
			})
		};

		this.cardClick = cardClick;
		this.btnReset = btnReset;
		btnReset()
	} // end of contstructor
	return GuiCtor;
})();
