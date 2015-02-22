var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {

		// public instance methods:
		this.reset = function() {
			
		}
		this.show = function(where,what) {
			$('#i' + where).attr("src", what);
			$('#i' + where).removeClass('face-down').addClass('face-up');
			console.log(what);
		}
		this.removeSoon = function(whereArr) {
			//...
		}
		this.hideSoon = function(whereArr) {
			console.log('No match ' + whereArr[0]);
			console.log('No match ' + whereArr[1]);
			setTimeout(hideNow,2000);
			
			function hideNow() {
				for (var j = 0; j < whereArr.length; j++){
					$('#i' + whereArr[j]).removeClass('face-up').addClass('face-down');
				}
			}
		}

		var $contain;
		if (typeof container === "string") {
			$contain = $('#' + container);
		} 

		var numRows = Math.ceil(Math.sqrt(game.size()));
		var numCols = Math.floor(Math.sqrt(game.size()));
		var cell = 0;
		var $table = $('<table>', {id:'table'});
		$contain.append($table);

		for (var r = 0; r < numRows; r++) {
			var $newRow = $('<tr>');
			$table.append($newRow);
			for (var c = 0; c < numCols; c++) {
				if (cell > game.size()) {
					break;
				}
				var $newCell = $('<td>', {id:cell});
				var $loadCard = $('<img>', {id:String('i' + cell), width:'60px', height:'90px', src:'img/cardback.jpg'});
				//$loadCard.addClass('face-down');
				$newCell.append($loadCard).click(reportClick);
				cell++;
				$newRow.append($newCell);	
			}
		}				

	}
	function reportClick(evnt) {
		game.lift(parseInt(this.id));
	}
	return GuiCtor;
})();
