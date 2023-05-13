function getComputerChoice(){
    const items = ["Rock", "Paper", "Scissors"]; 
    const randomNumber = Math.floor(3*(Math.random())); 
    return items[randomNumber]; 
}


function playRound(computerSelection, playerSelection){
   var player =  playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1, playerSelection.length);
   if(player == ("Rock") || player == ("Paper") || player ==("Scissors")){
    var win = true; 
    if(computerSelection == player){
     console.log("Tie: " + computerSelection + " ties " + player); 
     return 0; 
    }
    else if(computerSelection == "Rock"){
     if(player == "Scissors"){
         win = false; 
     }
    }
     else if(computerSelection == "Scissors") {
         if(player == "Paper"){
             win = false; 
         }
     }
 
     if(!win){
         console.log("You Lose: " + computerSelection + " (Computer) beats " + player + " (Human)");
         return -1; 
     }
     else{
         console.log("You Win: " + player + " (Human) beats " + computerSelection + " (Computer)"); 
         return 1; 
     }
   }


    else{
        console.log("invalid input: please try again"); 
        return 0; 
    }
}

function game(){
    let humanScore = 0; 
    let computerScore =0; 
    for(let i = 0; i< 5; i++){
        let computer = getComputerChoice(); 
        let player = prompt("Enter a move: "); 
        let status = playRound(computer, player);
        if(status == 1){
            humanScore += 1; 
        }
        else if(status == -1){
            computerScore+=1; 
        }
        console.log("Current Score: Computer: " + computerScore + " Human Score: " + humanScore); 
    }
    if(computerScore > humanScore){
        console.log("Computer Wins! Final score: Computer: " + computerScore + " Human Score: " + humanScore); 
    }

    else if (humanScore > computerScore){
        console.log("You Win! Final score: Computer: " + computerScore + " Human Score: " + humanScore); 
    }

    else{
        console.log("Tie! Final score: Computer: " + computerScore + " Human Score: " + humanScore); 
    }
}

game(); 



 


    