//Memory cards here

var cards1 = ["amnesia","blackout","amnesia","fugue", "blackout", "fugue", "out to lunch","out to lunch", "senior moment"];
//forgotten; gone; erased; omitted; it escapes me; absent (minded); psychological flatus; cogitus/cogitatius flatus; flatus mentis;cogito ergo flato

var cards = function() {
 return cards1;
};

cards.prototype = new cards();
cards.prototype.constructor = cards;


cards.prototype.match= function(valA, valB) {
  
  if (valA===valB) 
     return true;
  else
    return false;
  };

cards.prototype.display = function (value) {
  //Game.prototype.lift = function() 
  return cards1[value];
};

cards.prototype.values = function(index){
  return cards1[index];
}
var ee = new cards();