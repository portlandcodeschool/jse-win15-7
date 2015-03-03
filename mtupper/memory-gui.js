var MemoryGUI = (function () {

    function MemoryGUI(container,game) {
        // constructor variable
        var numGuis = 0; //counts number of GUI instances

        // public instance methods:
        this.reset = function() {

        }
        this.show = function(where,what) {
            console.log(where+", "+what.imgURL());
            var $cardFace = $('#' + where);
            $cardFace.attr("src", what.imgURL());
            $('#' + where).removeClass('face-down').addClass('face-up');
            console.log(what.charName());
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

        var $container;
        if (typeof container === "string") {
            $container = $('#' + container);
        }

        var numRows = 5;
        var numCols = 10;
        var cell = 0;
        var $table = $('<table>', {id:'table'});
        $container.append($table);

        for (var r = 0; r < numRows; r++) {
            var $newRow = $('<tr>');
            $table.append($newRow);
            for (var c = 0; c < numCols; c++) {
                if (cell > game.size()) {
                    break;
                }
                var $newCell = $('<td>', {id:cell});
                var $loadCard = $('<img>', {id:String('i' + cell), width:'100px', height:'125px', src:'img/cardback.jpg'});
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

    return MemoryGUI;

})();