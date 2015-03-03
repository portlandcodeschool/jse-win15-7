var MemoryGUI = (function() {



    function GuiCtor(container, game) {

        // public instance methods:
        this.reset = function() {
            console.log('******* reset BUTTON PRESSED');
            window.go();
            game.reset();
        };

        this.show = function(where, what) {
            $(where).removeClass('facedown')
                .addClass('faceup');
        };

        this.removeSoon = function(whereAt) {
            window.setTimeout(function() {
                var elem = document.getElementById(whereAt);
                elem.classList.remove('faceup');
                elem.classList.add('gone');
            }, 750);          
        };

        this.hideSoon = function(whereAt) {
            window.setTimeout(function() {
                var elem = document.getElementById(whereAt);
                elem.classList.remove('faceup');
                elem.classList.add('facedown');
            }, 750);    
        };

        this.wait = function() {
            //does nothing but filled the need for a function to wait on;
        };

        this.setupCallbacks = function(cards) {
            var board = new CardBoard('memorygame', 8);
            board.render();
            board.populate(this.onClickHandler, cards);
            // setup the reset button
            $('button').click(this.reset); //TODO get a better button name :-)
        };


        this.onClickHandler = function(event) { // onclick gets an event object as the parameter

            console.log("\njust clicked on ID = " + this.id + 'which is a ' + $(event.target).text());

            var liftResult = game.lift(Number(this.id));
            console.log('game.lift(Number(this.id)) returned*** ' + liftResult);
            if (liftResult === undefined) {
                liftResult = false; // HACK ToFIX based on lift logic, this works for now on first click
            }
            gui.show(event.target, liftResult);

        };
    } // end GUI Ctor

    return GuiCtor;
})();

//  WORLD'S UGLIEST BOARD HACK starts here.... :-)
//
// TEMP solution, make the checkboard the card game
// shrunk down distant cousin to the checkerboard renamed the "CardBoard"

var CardBoard = (function() {
    var CardBoard = function(container, size) {
        var maxCol = 8;
        this.numRows = Math.ceil(maxCol / size);
        this.numCols = maxCol;
        this.populate = populate;
        this.render = render;
        this.board = {};
        if (typeof container === 'string') {
            this.board = document.getElementById(container);
        }
    };

    this.populate = function(eventHandlerFn, items) { // hint: items are cards
        var displayList = items.values();

        // TODO replace this with 100% JQuery No javascript...
        for (var id = 0, r = 0; r < this.numRows; ++r) { // row loop
            for (var c = 0; c < this.numCols; ++c, ++id) { // col loop

                // using ID, get the current cell and stuff it with the item to display 
                var cell = document.getElementById(id);
                var displayText = document.createTextNode(items.display(displayList[id]));
                cell.appendChild(displayText);
                console.log('populate() appended ID:' + id + ' with ' + items.display(displayList[id])); // attach the handler logOnClick
                cell.addEventListener('click', eventHandlerFn);
            }
        }
    };

    this.render = function() {
        this.board.innerHTML = '';

        // TODO replace this with 100% JQuery No javascript...
        var table = document.createElement('table');

        for (var r = 0, id = 0; r < this.numRows; ++r) {
            var tr = document.createElement('tr');
            table.appendChild(tr);
            for (var c = 0; c < this.numCols; ++c, ++id) {
                var td = document.createElement('td');
                td.setAttribute('id', parseInt(id));
                td.classList.add('facedown');
                tr.appendChild(td);

            }
        }

        // setup the reset button

        var btn = document.createElement('button');
        var text = document.createTextNode('Reset');
        btn.appendChild(text);


        this.board.appendChild(table);
        this.board.appendChild(btn);

    };

    return CardBoard;
})();