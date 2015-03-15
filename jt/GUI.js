
var tabl, row, cell;
function Gui() {
  
this.makeButton=makeButton;
this.makeTable = makeTable;
this.print1 = print1;
this.matchFound = matchFound;
this.hidesoon = hidesoon;
this.facedown = facedown;

}


function make() {
  return Gui;
}
  
Gui.prototype = new Gui();
Gui.prototype.constructor = Gui;

function matchFound(item1) { 
  var i = 0;

  itemx = document.getElementById(item1[i]);
  itemy = document.getElementById(item1[(i+1)]);

  itemx.className='matched';
    itemy.className='matched';
}
  
function hidesoon(arg) {
  var timeoutthing = window.setTimeout(facedown(arg), 2000);
}
  

function facedown(arg) {
  var x = document.getElementById(arg);
  x.className='facedown';
  x.innerHTML='';
}

function makeTable(){
  tabl = document.createElement('table');
  document.body.appendChild(tabl);
    
  var count=0;  
  for (var c=0; c<3; c++) {               //use size function below to create table
    row = document.createElement('tr');
    //row.id=c;
    tabl.appendChild(row);
  
    for (var i=0; i<3; i++){
      cell=document.createElement('td');
      cell.id=(i+(c*3));

      cell.className='facedown';
      row.appendChild(cell);               //need to insert method to display cards as they are chosen
      cell.onclick = print1;
     
      } 
    }  
   };

function print1() {    
     
 var bb = Game.prototype.singleValues(this.id); 
 var j = document.getElementById(this.id);
 
 j.innerHTML=bb;
 j.className='faceup';
 var show = Game.prototype.lift(this.id); 
 return 'card';
 }    

function makeButton() {
  var bttn = document.createElement('button');
  document.body.appendChild(bttn);
  bttn.className = 'button';
  bttn.innerHTML = 'RESET';
  bttn.onclick= restart;
}
  
function restart() {
  console.log(7);
  var ii = new Gui();
  Game.prototype.reset();
  
  for (var i =0;i<deck.length ;i++) {
    Gui.prototype.facedown(i);
  }
}



