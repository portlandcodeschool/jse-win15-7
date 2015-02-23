var MemoryGUI = (function () {

	//...

	function MemoryGUI(container,game) {
        if (typeof container === 'string') {
            var $container = $('#' + container);
        }
        if (!($container instanceof HTMLElement)) {
            return {};
        }
        this.$el() = function() {
            return $container;
        };

		// public instance methods:
		this.reset = function() {

			//...
		}
		this.show = function(where,what) {
			//...
		}
		this.removeSoon = function(whereArr) {
			//...
		}
		this.hideSoon = function(whereArr) {
			//...
		}

		// Do some initial setup and rendering...
	}

	return MemoryGUI;
})();
