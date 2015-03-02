// See cardset-example.js for examples

var MemoryCards = (function() {
	function Ctor() {
		//var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];
		var food = ['apple','apple','banana','banana','carrot','carrot'];

		this.values = function() {
			return food.slice(); //return copy of values
		}

		this.match = function(a,b) {
			
			console.log(a)
			console.log(b)
			//return str1[0]===str2[0]; //match if same initial letter
			return a===b;
		}

		this.display = function(val) {
			return val; //display value is just card val
		}
	}
	//... 

	return Ctor;
})();
