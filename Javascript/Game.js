class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    Update(state){
        database.ref("/").update({
            gameState : state,
        });
    }
    Start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    Play(){
        form.hide();
        textSize(30);
        text("Game has Started", 120, 100);
        Player.getInfo();
        if(allPlayers !== undefined){
            var displayPos = 130;
            for (var plr in allPlayers) {
                if(plr === "Player" + player.index){
                    fill("red");
                }
                else fill("black");
                displayPos += 20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPos)}
        }
        if(keyDown("up")&&player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}