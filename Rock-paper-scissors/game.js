document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');


    const playPrompt = confirm("Play Game?");
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
        resultDisplay.style.backgroundColor = 'lightGray';
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        resultDisplay.textContent = `Computer won this round`
        resultDisplay.style.backgroundColor = 'black';
        computerScore += 10;

    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        resultDisplay.textContent = `You won this round`
        resultDisplay.style.backgroundColor = 'grey';
        playerScore += 10;

    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        resultDisplay.textContent = `You won this round`
        resultDisplay.style.backgroundColor = 'grey';
        playerScore += 10;

    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        resultDisplay.textContent = `Computer won this round`
        resultDisplay.style.backgroundColor = 'black';
        computerScore += 10;

    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        resultDisplay.textContent = `Computer won this round`
        resultDisplay.style.backgroundColor = 'black';
       computerScore += 10;

    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        resultDisplay.textContent = `You won this round`
        resultDisplay.style.backgroundColor = 'grey';
        playerScore += 10;
    } 
    scoreDisplay.textContent = `${playerName}: ${playerScore} - Computer: ${computerScore}`
    console.log(playerScore, computerScore);

    if (playerScore >= 100 || computerScore >= 100) {
        if (playerScore > computerScore) {
            scoreDisplay.textContent = `${playerName} wins the game with ${playerScore - computerScore} points!`;
            scoreDisplay.style.backgroundColor = "green"
        } else {
            scoreDisplay.textContent = `Computer wins the game with ${computerScore - playerScore} points!`;
            scoreDisplay.style.backgroundColor = 'red';
        }
    
        // Disable buttons to stop the game
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
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
});
});