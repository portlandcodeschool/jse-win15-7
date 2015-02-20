// See cardset-example.js for examples

var MemoryCards = (function() {
	// card values:
	var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];

	function Ctor() {
		this.values = function() {
			return food.slice(); //return copy of values
		};
		this.match = function(str1,str2) {
			return str1[0]===str2[0]; //match if same initial letter
		};
		this.display = function(val) {
			return val; //display value is just card val
		};
	}

	return Ctor;

})();