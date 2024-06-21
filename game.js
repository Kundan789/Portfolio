let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const body = document.querySelector("body")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const genCompChoice = () => {
const options = ["Rock", "Paper", "Scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.")
    msg.innerHTML = "Game was Draw. Play agan."
    msg.style.backgroundColor = "purple"
    msg.style.border = "2px solid purple"
}

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin){
        console.log("you Win !")
        userScore++;
        userScorepara.innerText = userScore;
        greeting();
        msg.innerHTML = `You Win!  Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "lightgreen";
        msg.style.border = "2px solid green";
        // body.style.backgroundColor = "#ff000044";
    }else{
        console.log("you lose");
        compScore++;
        compScorepara.innerText = compScore;
        greeting();
        msg.innerHTML =  `You lose. ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.border = "2px solid maroon";

    }
}



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const CompChoice = genCompChoice();
    console.log("computer choice =", CompChoice)


    if(userChoice === CompChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
           userWin = CompChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper"){
           userWin = CompChoice === "Scissors" ? false : true;
        } else if(userChoice === "Scissors"){
            userWin = CompChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);

    }
};


choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

function greeting(){
    if(userScore >= 10){
        let body = document.querySelector("body")
        let thank = document.querySelector("#thank")
        // document.querySelector("#none").style.display = "none"
        body.classList.add("body")
        body.style.backgroundColor = " rgba(0, 0, 0, 0.373)"
        thank.classList.add("div")
        thank.style.color = "blue"
        thank.innerHTML = ' &ThickSpace; &ThickSpace;&ThickSpace;&ThickSpace; 😃 <br> You Win 10/10!         <button id="Btn2"><a href="game(rps).html" style="text-decoration: none; color: Black;font-weight: 800; height: 100%; width: 100%; display: flex; align-items: center;justify-content: center;">Play Again</a></button>'
        document.querySelector("#Btn2").classList.add("button")

    }
    else if(compScore >= 10){
        let body = document.querySelector("body")
        let thank = document.querySelector("#thank")
        // document.querySelector("#none").style.display = "none"
        body.classList.add("body")
        body.style.backgroundColor = " rgba(0, 0, 0, 0.373)"
        thank.classList.add("div2")
        thank.style.color = "lightblue"
        thank.innerHTML = `&ThickSpace; &ThickSpace;&ThickSpace;&ThickSpace; <p> 😒</p><br><p style = " -webkit-text-stroke: 2px black;"> You Lose ${userScore}/10!</p>         <button id="Btn2"><a href="game(rps).html" style="text-decoration: none; color: Black;font-weight: 800; height: 100%; width: 100%; display: flex; align-items: center;justify-content: center;">Play Again</a></button>`
        document.querySelector("#Btn2").classList.add("button")
    }
}


