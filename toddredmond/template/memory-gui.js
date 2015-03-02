// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var MemoryGUI = (function () {

	//...
	//var rowcount = 10;
	//var cellcount = game.size();
	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			//turn everything facedown
			var clear = document.getElementsById('td');
			clear.className = 'card_down';
		};
		this.show = function(where,what) {
			//...
			//called by gui.show
			var cell = 'n'+where;
			//console.log(cell)
			var test = document.getElementById(cell);
			test.innerHTML = what;
			//console.log('test ',test)
			test.setAttribute('value',what);
			//console.log(test);
			//console.log(what)
			//var tested = document.getElementById(where);
			//console.log(tested)
			//test = document.getElementById(test);
			test.classList.add('card_up')
			//cardClick(test);
      //console.log(what);
      //test.setAttribute('Value',what);
			

		};
		this.removeSoon = function(whereArr) {
			//...
			//array of two numbers
			var card01 = document.getElementById('n'+whereArr[0]);
			var card02 = document.getElementById('n'+whereArr[1]);
			console.log(card01)	
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
		/*var btn_reset = document.createElement('button')
			document.body.appendChild(btn_reset)
			//btn_reset.ClassList.add('btn_reset');
			btn_reset.className = 'btn_reset'
			btn_reset.innerHTML = 'Reset'*/

		this.makeTable = function() {
			var cellcount = game.size();
			//var cellcount = 16;
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
			//return document.getElementById(num);
			//game.lift(parseInt(test))
			//console.log('You Clicked card ' + num.target.id);
			//console.log()
			//test.classList.add('card_up')
			//console.log(test)
			//return test;
			//game.lift(num)
			//return num;
		} // end of cardClick function
	
		//this.makeTable = makeTable;
		this.cardClick = cardClick;
	} // end of contstructor

	return GuiCtor;
})();
/*
//You can test your gui without a game module:
//just call the ctor directly with dummy args, like so: 
var gui = new MemoryGUI( 16,
function(i){console.log('clicking on '+i);},
function(){console.log("resetting game")}
                       
);
//Then call its public methods:
//gui.makeTable()
//console.log(container)
gui.show(1,'test');
gui.show(2,'test');
gui.hideSoon([1,2]);
gui.removeSoon([1,2]);
//etc */
