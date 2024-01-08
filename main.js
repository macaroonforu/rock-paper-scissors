

let humanScore = 0; 
let computerScore = 0; 

const buttons = document.querySelectorAll(".btn")
    buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', playATurn)
    })

function initializeButtons(){
    results = document.querySelector(".results"); 
    results.display = ("none");
    results.innerHTML = `<div class = "grid-box">
    <div class = "grid">
        <div class = "score-keep">
            <p class = "score-text"></p>
        </div>
    
        <div class = "Computer"><h3>Computer's Move</h3></div>
        <div class = "Human"><h3>Human's Move</h3></div>

        <div class = "Computer-Choice"><img></div>
        <div class = "Human-Choice"><img></div>
           
        <div class = "round-result">
            <p class = "round-text"></p>
        </div>

        <div class = "final-result">
            <h2 class = "final-text"></h2>
            <button class = "reset">Play Again</button> 
        </div>
        
    </div>
</div>`; 
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener('click', reset); 
}


function getComputerChoice(){
    const items = ["Rock", "Paper", "Scissors"]; 
    const randomNumber = Math.floor(3*(Math.random())); 
    return items[randomNumber]; 
}

function playRound(computerSelection, playerSelection){
    initializeButtons(); 
    results = document.querySelector(".results"); 
    results.display = ("flex");
    const computerImage = document.querySelector(".Computer-Choice").firstElementChild; 
    const playerImage = document.querySelector(".Human-Choice").firstElementChild;

    if(playerSelection == "Rock"){
        playerImage.setAttribute("src", "./rock.png"); 
    }

    if(playerSelection == "Paper"){
        playerImage.setAttribute("src", "./paper.png"); 
    }

    if(playerSelection == "Scissors"){
        playerImage.setAttribute("src", "./scissors.png"); 
    }
    
    if(computerSelection == "Rock"){
        computerImage.setAttribute("src", "./rock.png"); 
    }

    if(computerSelection == "Paper"){
        computerImage.setAttribute("src", "./paper.png"); 
    }

    if(computerSelection == "Scissors"){
        computerImage.setAttribute("src", "./scissors.png"); 
    }

   var player =  playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1, playerSelection.length);
   const result = document.querySelector(".round-text"); 
    if(computerSelection == player){
    result.textContent = "Tie: " + computerSelection + " (Computer) ties " + player + " (Human)"; 
    return 0; 
    }
    else if(((computerSelection == "Rock")&&(player == "Scissors")) || ((computerSelection == "Scissors")&&(player == "Paper"))|| ((computerSelection == "Paper")&&(player == "Rock"))){
        result.textContent = "Loss: " + computerSelection + " (Computer) beats " + player + " (Human)"; 
        return -1; 
    }
    else{
        result.textContent = "Win: " + player + " (Human) beats " + computerSelection + " (Computer)"; 
        return 1; 
    }
}

function playATurn(){
    let status = playRound(getComputerChoice(), event.target.innerText);
    if(status == 1){
        humanScore += 1; 
    }
    else if(status == -1){
        computerScore+=1; 
    }
    const score = document.querySelector(".score-text"); 
    score.textContent = "Current Score: Computer: " + computerScore + " Human: " + humanScore; 

    document.querySelector(".Computer").classList.add("visible"); 
    document.querySelector(".Human").classList.add("visible"); 

    const finalResult = document.querySelector(".final-text"); 
    const results = document.querySelector(".round-text");
    if(humanScore == 5 || computerScore ==5){
        if(humanScore == 5){ 
            results.textContent = "You Win! You defeated the computer! 😁"; 
        }
        if(computerScore ==5){
            results.textContent = "Sorry! you lost to the computer! 😭"; 
        }
        document.querySelector(".final-result").classList.add("pink"); 
        document.querySelector(".round-text");
        //roundResult.innerHTML = "";  
        score.textContent = "Final Score: Computer: " + computerScore + " Human: " + humanScore; 
        const buttons = document.querySelectorAll(".btn")
        buttons.forEach(function(currentBtn){
        currentBtn.disabled = true; 
        })
        document.querySelector(".reset").classList.add("visible"); 
    }
}

function reset(){ 

    humanScore = 0; 
    computerScore = 0; 
    const roundResult = document.querySelector(".round-text"); 
    const scoreKeep = document.querySelector(".score-text"); 
    const finalResult = document.querySelector(".final-text"); 
    console.log(roundResult.innerHTML); 
    roundResult.innerHTML = "";  
    scoreKeep.innerHTML = ""; 
    finalResult.innerHTML = ""; 
    const buttons = document.querySelectorAll(".btn")
        buttons.forEach(function(currentBtn){
        currentBtn.disabled = false; 
        })

    const compImg = document.querySelector(".Computer-Choice").firstElementChild; 
    const humanImg = document.querySelector(".Human-Choice").firstElementChild; 
    compImg.removeAttribute("src");  
    humanImg.removeAttribute("src"); 

    document.querySelector(".final-result").classList.remove("pink"); 
    document.querySelector(".Computer").classList.remove("visible"); 
    document.querySelector(".Human").classList.remove("visible"); 
    document.querySelector(".reset").classList.remove("visible");
    display();    
}

function display(){
    results = document.querySelector(".results"); 
    results.innerHTML = `<div>
    <p class = "opening-text">Make your first Move to start!</p>
</div>`; 
}

display(); 





