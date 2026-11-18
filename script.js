var namesIn;
var n = 0;
var win;
var player1, player2;
var list;
var newPlayer;
var p1 = 0;
var p2 = 0;
var winBtn = document.getElementById("winBtn");
var loseBtn = document.getElementById("loseBtn");
var enter = document.getElementById("enter");
var names = new Array();
var namesIn = document.getElementById("names");

var update = function(){
  document.getElementById("player1").textContent = player1;
  document.getElementById("player2").textContent = player2;
  
}

var rotate = function(){
  list = document.getElementById("list");
  newPlayer = document.createElement('li');
  newPlayer.textContent = namesIn.value;
  list.appendChild(newPlayer);
  names.push(namesIn.value);
  namesIn.value = " ";
  n++; 
}
winBtn.onclick = function () {
  //player 1 win
  win = true;
};
loseBtn.onclick = function () {
  //player 1 lose
  win = false;
    };

namesIn.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
      rotate();
      update();

  }
});
enter.onclick = function (){
  rotate();
  update();
}



  winBtn.onclick = function (){
    player1 = names[p1];
    player2 = names[p2];
    update();
    if(p1>n || p2>n){
      p2===0;
    }
    else {
      p2++;
    }
  }
  loseBtn.onclick = function (){
    player2 = names[p2];
    player1 = names[p1];
    update();
    if(p1>n || p2>n){
      p1===0;
    }
    else {
      p1++;
    }
  }


