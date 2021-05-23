var gameState = 0
var playerCount;
var database;
var player,game,form;
var allPlayers;


function setup(){
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Start();
}

function draw(){
  if(playerCount === 4){
    game.Update(1);
  }

  if(gameState === 1){
    clear();
    game.Play();
  }

}