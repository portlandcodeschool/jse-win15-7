// jQuery version
var MemoryGUI = (function () {
	var numGuis = 0; // counts number of GUI instances made
    // Begin constructor:
	function GUI(container, _game) {
        _game.gui(this); // link _game to this gui
        // in constructor's closure
        var _len = game.size(),
            _guiID = numGuis++, //affords multiple GUIs without duplicating IDs
            _gui = this; 

        // ensure that a string container begins with '#'
        if (typeof container === 'string')
          if (container[0] !== '#')
            container = '#' + container;

        var _$container = $(container);

        this.reset = function() {
            for (var where=0; where<_len; ++where) {
                    resetAt(where);
            }
        };
        this.show = function(where, card) { // display card face
            $findCell(where)
                .attr('value',card)
                .addClass('faceup');
        };
        this.removeSoon = function(locs) {
            window.setTimeout(function() {
                locs.forEach(removeAt);
            }, 1000);
        };
            this.hideSoon = function(locs) {
            window.setTimeout(function() {
                locs.forEach(hideAt);
            }, 1000);
        };

        // ---- Private helper functions ----
        function hideAt(where) {
            $findCell(where).removeClass('faceup');
            // cell.removeAttribute('value');
            // Leaving the value attribute in place is harmless,
            //  but it does afford cheating by inspecting face-down cards.
        }
        function removeAt(where) {
            $findCell(where).addClass('matched');
        }
        function resetAt(where) {
            $findCell(where)
                .removeClass('faceup')
                .removeClass('matched');
        }

        function makeID(where) {// given a number, generate an id
            return 'board'+_guiID+'cell'+where;
        }

        function $findCell(where) {
            return $('#'+makeID(where));
        }

		// Initial setup and rendering... private
        function render() {
            // Page heading
    		$('#header').append('<h1>Wisdom of Westeros</h1>');
        	$('#header').append('<h2>Match <em>Game of Thrones</em> characters with their words!</h2>');

            var makeCell = function(where) {
                return $('<div>')
                        .attr('id', makeID(where))
                        .addClass('facedown')
                        .on('click',function() {
                            _game.lift(where);
                        });
            };

            var makeBoard = function() {
                for (var id=0; id<_len; ++id) {
                    _$container.append(makeCell(id));
                }
                return _$container.addClass('memoryboard');
            };

            var makeReset = function() {
                return $('<button>')
                        .html('Play Again')
                        .prependTo('#footer')
                        .on('click', function() {
                            _gui.reset();
                            _game.reset();
                        });
            };
        makeBoard();
        makeReset();
        } // end render

        render();

	} // end constructor

	return GUI;
})();
