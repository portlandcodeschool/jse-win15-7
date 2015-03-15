
var cardset = [
  'a',
  'b',
  'a',
  'c',
  'q',
  'r',
  't',
  'r',
  'u'
];
var cardset2 = cardset.slice();
var faceup = [
  100
]; //this will hold the index numbers of the card turned up
var valueArr = [
];
var indexArr = [
];
//var remainingcards = cardset.slice(); //this will hold the index numbers of the cards still in play


var Game = function () {
  var newGame = Game.prototype.reset;
  this.lift = lift;
  this.reset = reset;
  return newGame;   
}

var NewGame2 = new Game();


Game.prototype = new Game();
Game.prototype.constructor = Game;


function lift (what) {
  
if (indexArr.length>2){   //if there are more than 2 cards in the indexarr
  indexArr.splice(0,2);   //it removes the first 2 - this resets for the next round
  valueArr.splice(0,2);   //but does so after that next round has begun (after drawing the 3rd card)
}
  console.log(indexArr);
  console.log(valueArr);
  
  card = cards.prototype.display(what);
  //console.log(card); //Gui.show.call(where, remainingcards[where]);       //call to show the card          
  cardValue = deck[what]//Game.prototype.singleValues(what);
  
  valueArr.push(cardValue);
  indexArr.push(what);
  
  if (indexArr[1] != undefined) {           //if a card is already face-up
    if (cards.prototype.match(valueArr[0], valueArr[1])) {  //determine if there is a match
      console.log('Match!');
    
      var matched = [indexArr[0], indexArr[1]]; //created var for console.log printout
      console.log(matched);
      
      Gui.prototype.matchFound(matched);
      matched = [];     //empty the arrays to prepare for a new round -
      //console.log(indexArr, valueArr, matched);
      
      indexArr = [];  //empty the arrays to prepare for a new round -
      valueArr = [];  //empty the arrays to prepare for a new round -
      //console.log(indexArr, valueArr, matched);
    }
    
    else {            //reset cards to facedown postition
      //console.log(indexArr);
      window.setTimeout(function() {
        for (i=0; i<2; i++) {
          w=document.getElementById(indexArr[i]), 
          w.className='facedown', 
          w.innerHTML=''
        }
      }, 1000);   //1 second (1000 microsec) delay before turning cards face-down

      //console.log(indexArr);
      
      } 

    //console.log(indexArr);
    //console.log(valueArr);
  }
  
  return card;
}

var deck;
function reset() {
  console.log('inside prototype.reset');
  deck=[];

  
var newCards= cards.prototype;
  
     newObj = {};
     for (var i = 0; i<newCards.length; i++){
       newObj[Math.random()]=newCards[i];
         }   
     console.log(newObj);
     randoms = Object.keys(newObj);
     randoms.sort();
      console.log(randoms);

     var deckObj={};

     for (var i= 0; i<randoms.length; i++){

       deckObj[ randoms[i]] = newObj[randoms[i]];
       deck.push(newObj[randoms[i]])
     }

    console.log(deck);
    return deck;
  }

Game.prototype.singleValues = function(index) {
  return deck[index];
}

