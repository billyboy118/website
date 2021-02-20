let playerSelection;
let computeSelection;




function userSelection () {
    let playerSelection = prompt("Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    if (!(playerSelection == "rock"|| playerSelection == "paper"|| playerSelection == "scissors")) {
        playerSelection = prompt("You have spelt that wrong try again, Rock, Paper or Scissors")
            if (!(playerSelection == "rock"|| playerSelection == "paper"|| playerSelection == "scissors")) {
                playerSelection = prompt("You have spelt that wrong try again, Rock, Paper or Scissors")
                if (!(playerSelection == "rock"|| playerSelection == "paper"|| playerSelection == "scissors")) {
                    playerSelection = prompt("You have spelt that wrong try again, Rock, Paper or Scissors")
                    if (!(playerSelection == "rock"|| playerSelection == "paper"|| playerSelection == "scissors")) {
                    playerSelection = alert ("I give up go away!!!!") 
                    } else {
                        return playerSelection;
                    }
                } else{
                    return playerSelection;
                } 
            } else {
                return playerSelection;
            }
    } else {
        return playerSelection;    
    }
}

function computerPlay(){
    let rps = ["rock","paper","scissors"];
    let computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection = computerSelection.toLowerCase();
}

function roundRps1(){
    let response;
    let playerSelection = userSelection ();
    console.log("player selection " + playerSelection) ;
    let computeSelection = computerPlay();
    alert("Computer chooses " + computeSelection);

    if (playerSelection == computeSelection) {
        return response = "It is a draw, try again"; 
    } else if (playerSelection == "rock" && computeSelection == "paper") {
        return response = "Unlucky better luck next time";
    } else if (playerSelection == "rock" && computeSelection == "scissors") {
        return response = "Well done rock beats scissors";
    }
    
    else if (playerSelection == "paper" && computeSelection == "rock") {
        return response = "Well done you win";
    } else if (playerSelection == "paper" && computeSelection == "scissors") {
        return response = "Scissors beats paper, you lose";
    }
    
    else if (playerSelection == "scissors" && computeSelection == "paper") {
        return response = "Scissors smashes paper, YOU WIN";
    } else if (playerSelection == "scissors" && computeSelection == "rock") {
        return response = "lose";
    } else {
        return response = "Hmmmmmmmmmm something appears to be broke";
    }    
}

function game1() {
    let ps1;
    let ps2;
    let ps3;
    let ps4;
    let ps5;

    let cs1;
    let cs2;
    let cs3;
    let cs4;
    let cs5;

switch (roundRps1()){

case "Well done rock beats scissors":
case "Well done you win":
case "Scissors smashes paper, YOU WIN":
    ps1 = 1;
    cs1 = 0;
    alert ("You win");
break;
case "Unlucky better luck next time":
case "Scissors beats paper, you lose":
case "lose":
    ps1 = 0;
    cs1 = 1;
    alert ("You lose, what a loser");
break;    
default:
    alert ("Draw");
    ps1 = 0;
    cs1 = 0;
}

switch (roundRps1()){

case "Well done rock beats scissors":
case "Well done you win":
case "Scissors smashes paper, YOU WIN":
    ps2 = 1;
    cs2 = 0;
    alert ("You win");
break;
case "Unlucky better luck next time":
case "Scissors beats paper, you lose":
case "lose":
    cs2 = 1;
    ps2 = 0;
    alert ("You lose, what a loser");
break;
default:
    ps2 = 0;
    cs2 = 0;
    alert ("Draw");
}

switch (roundRps1()){

case "Well done rock beats scissors":
case "Well done you win":
case "Scissors smashes paper, YOU WIN":
    ps3 = 1;
    cs3 = 0;
    alert("You win");
break;
case "Unlucky better luck next time":
case "Scissors beats paper, you lose":
case "lose":
    cs3 = 1;
    ps3 = 0;
    alert("You lose, what a loser");
break;
default:
    ps3 = 0;
    cs3 = 0;
    alert("Draw");
}

switch (roundRps1()){

case "Well done rock beats scissors":
case "Well done you win":
case "Scissors smashes paper, YOU WIN":
    ps4 = 1;
    cs4 = 0;
    alert("You win");
break;
case "Unlucky better luck next time":
case "Scissors beats paper, you lose":
case "lose":
    cs4 = 1;
    ps4 = 0;
    alert("You lose, what a loser");
break;    
default:
    ps4 = 0;
    cs4 = 0;
    alert("Draw");
}
switch (roundRps1()){

case "Well done rock beats scissors":
case "Well done you win":
case "Scissors smashes paper, YOU WIN":
    ps5 = 1;
    cs5 = 0;
    alert("You win");
break;
case "Unlucky better luck next time":
case "Scissors beats paper, you lose":
case "lose":
    cs5 = 1;
    ps5 = 0;
    alert("You lose, what a loser");
break;    
default:
    ps5 = 0;
    cs5 = 0;
    alert("Draw");
}

let fps = parseInt(ps1+ps2+ps3+ps4+ps5);
let fcs = parseInt(cs1+cs2+cs3+cs4+cs5);

console.log (fps);

if (fps>fcs) {
    return (`Well done you win ${fps}-${fcs}`);
} else if (fps<fcs){
    return (`You lose ${fps}-${fcs}, what a loser`);
} else {
    return (`${fps}-${fcs} Draw, how boring`);
}
}
function startGame (){
    alert ("Hello, lets play Rock, Paper and Scissors, best out of 5");
    alert (game1());

}

// startGame ();
// location.reload(true);