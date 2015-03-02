// See cardset-example.js for examples

var MemoryCards = (function() {
	function Ctor() {
		
		var pre_path = 'imgs/'
		var file_ext = 'jpg'
		var cards = ['imgs/feather.jpg',
		'imgs/feather.jpg',
		'imgs/limb.jpg',
		'imgs/limb.jpg',
		'imgs/child.jpg',
		'imgs/child.jpg', 
		'imgs/dog.jpg',
		'imgs/dog.jpg'];

		this.values = function() {
			return cards.slice(); //return copy of values
		}

		this.match = function(a,b) {
			
			return a===b;
		}

		this.display = function(val) {
			return val; //display value is just card val
		}
	}
	//... 

	return Ctor;
})();
