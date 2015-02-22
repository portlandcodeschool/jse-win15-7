var MemoryCards = (function() {
	function genFace(){
		var eyes = ['0', '<', 'Ô', '†', '$','*','#','@'];
		var mouth = ['˚', 'o', '^', '-', '~', '¬', '≈', '='];
		var faces = [];

		function shuffleFast(thngs){//adapted from Mike Bostock's Fisher-Yates implementation
			for(var i = thngs.length-1; i > 0; i--){
				var randElement = Math.floor(Math.random() * i);
				var hold = thngs[i];
				thngs[i] = thngs[randElement];
				thngs[randElement] = hold;
			}
		};

		shuffleFast(eyes);
		shuffleFast(mouth);

		for(var i = 0; i < eyes.length; i++){
			face = eyes[i] + ' ' + eyes[i] + '<br></br>   ' + mouth[i];
			console.log(face);
			faces.push(face);
			faces.push(face);
		}
		//console.log(faces.length);
		return faces;
	}


	function Ctor() {
		var cards = genFace()


		this.values = function() {
			return cards.slice();
		}

		this.match = function(a,b) {
			//console.log(a, b);
			return a[0] === b[0];
		}

		this.display = function(val) {
			return val
		}
	}
	//...

	return Ctor;
})();
