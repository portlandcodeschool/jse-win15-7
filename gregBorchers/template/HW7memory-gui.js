var MemoryGUI = (function() {

   

    function GuiCtor(container, game) {

        // public instance methods:
        this.reset = function() {
            //...
        };
        this.show = function(where, what) {
            //...
        };
        this.removeSoon = function(whereArr) {
            //...
        };
        this.hideSoon = function(whereArr) {
            //...
        };


        // Do some initial setup and rendering...

        this.setupCallbacks = function(cards) {
            var board = new CardBoard('memorygame',8);
            board.render();
            board.populate(this.onClickHandler,cards);
        };

// STATUS - only logging for now.
        this.onClickHandler = function(event) { // onclick gets an event object as the parameter
           
            console.log("\njust clicked on ID = " + this.id);
            // TIP - use this tactic for investigations --- > window.lastEvent = event;
            console.log("\njust clicked on ID = x=" + event.clientX + " y=" + event.clientY);

            console.log('now we need to CALL the LIFT(' + this.id + ') function');

        };
    } // end GUI Ctor

    return GuiCtor;
})();

//  HACK starts here.... :-)
//
// TEMP solution, make the checkboard the card game
// shrunk down distant cousin to the checkerboard renamed the "CardBoard"

var CardBoard = (function() {
    var CardBoard = function(container,size) {
        var maxCol = 8;
        this.numRows = Math.ceil(maxCol/size);
        this.numCols = maxCol;
        this.populate = populate;
        this.render = render;
        this.board = {};
        if (typeof container === 'string') {
            this.board = document.getElementById(container);
        }
    };

    this.populate = function(eventHandlerFn, items) {  // hint: items are cards
        var displayList = items.values();
        
        // TODO replace this with 100% JQuery No javascript...
        for (var id = 0, r = 0; r < this.numRows; ++r) { // row loop
            for (var c = 0; c < this.numCols; ++c, ++id) { // col loop
                
                    // using ID, get the current cell and stuff it with the item to display 
                    var cell = document.getElementById(id);                  
                    var displayText = document.createTextNode(items.display(displayList[id]));
                    cell.appendChild(displayText);
                    // attach the handler logOnClick
                    cell.addEventListener('click', eventHandlerFn);       
            }
        }
    };

    this.render = function() {
        this.board.innerHTML = '';

        // TODO replace this with 100% JQuery No javascript...
        var table = document.createElement('table');

        for (var r = 0, i = 0; r < this.numRows; ++r) {
            var tr = document.createElement('tr');
            table.appendChild(tr);
            for (var c = 0; c < this.numCols; ++c, ++i) {
                var td = document.createElement('td');
                td.setAttribute('id', i);
                td.classList.add(((r + c) % 2) ? 'faceup' : 'faceup');
                tr.appendChild(td);

            }
        }
        this.board.appendChild(table);
    };

    return CardBoard;
})();