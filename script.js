let userCount = 0;
let compCount = 0;

const choices = document.querySelectorAll(".choices");
const message = document.querySelector("#msg");
const userScore = document.querySelector("#user_score");
const compScore = document.querySelector("#computer_score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("Game was draw");
    message.innerText = "Draw"
    message.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userCount++;
        userScore.innerText = userCount;
        message.innerText = `You Win: ${userChoice} beats ${compChoice}`;
        console.log("You win");
        message.style.backgroundColor = "green";
        
    } else{
        compCount++;
        compScore.innerText = compCount;
        message.innerText = `You Loose: ${compChoice} beats ${userChoice}`;
        console.log("You loose");
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("The user choice was: ", userChoice)
    const compChoice = genCompChoice();
    console.log("The computers choice was: ", compChoice)
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else{
            //paper, rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choices) => {
    console.log(choices);
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    })
})