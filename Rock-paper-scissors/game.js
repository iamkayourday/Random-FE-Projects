document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const resultDisplay = document.getElementById('resultDisplay');


    const playPrompt = confirm("Do you want to Play the game?");
    const playerName = prompt(`Type a username of your choice`);

    if (playPrompt === false) {
        resultDisplay.textContent = `Game stopped. Refresh the page to play again.`;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

    } else {
        resultDisplay.textContent = `Welcome ${playerName},Choose your move:`;
    }



const choices = ['Rock', 'Paper', 'Scissors'];
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;



function play () {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice == computerChoice) {
        resultDisplay.textContent = `Tie You both choose ${playerChoice}`
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        resultDisplay.textContent = `Computer won this round`
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        resultDisplay.textContent = `${playerName} won this round`
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        resultDisplay.textContent = `${playerName} won this round`
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        resultDisplay.textContent = `Oops Computer won this round`
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        resultDisplay.textContent = `Oops Computer won this round`
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        resultDisplay.textContent = `${playerName} won this round`
    } 
}
rock.addEventListener('click', () => {
    playerChoice = 'Rock';
    play();
})
paper.addEventListener('click', () => {
    playerChoice = 'Paper';
    play();
})
scissors.addEventListener('click', () => {
    playerChoice = 'Scissors';
    play();
})

});





