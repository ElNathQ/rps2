var wins = 0;
var losses = 0;
var ties = 0;
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var winText = document.getElementById("wins");
var lossText = document.getElementById("loss");
var tieText = document.getElementById("tie");
var outcome = document.getElementById("outcome");


rock.addEventListener("click", function() {playGame("r"); });
paper.addEventListener("click", function() {playGame("p"); });
scissors.addEventListener("click", function() {playGame("r"); });

function playGame(input){
    let cpu = null;
    let word = null;
    let random = (Math.floor(Math.random()*3) + 1);
    if(random === 1){
        cpu = "r";
        word = "Rock";
    }else if(random === 2){
        cpu = "p";
        word = "Paper";
    }else if(random === 3){
        cpu = "s";
        word = "Scissors";
    }

   if((input === "r" && cpu === "s") || (input === "s" && cpu === "p") || (input === "p" && cpu === "r")){
        updateWins();
    }else if((input === "r" && cpu === "p") || (input === "s" && cpu === "r") || (input === "p" && cpu === "s")){
        updateLosses();
    }else if((input === "r" && cpu === "r") || (input === "s" && cpu === "s") || (input === "p" && cpu === "p")){
        updateTies();
    }

    outcome.innerHTML = `The CPU chose ${word}!`;
    winText.innerHTML = `Wins: ${wins}`;
    lossText.innerHTML = `Losses: ${losses}`;
    tieText.innerHTML = `Ties: ${ties}`;
}

function updateWins(){
    wins = wins+= 1;
}

function updateLosses(){
    losses = losses+= 1;
}

function updateTies(){
    ties = ties+= 1;
}


