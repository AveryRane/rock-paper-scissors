const options = ['rock', 'paper', 'scissors'];
let playerChoice = [];
let computerChoice = [];
let playerWins = 0;
let computerWins = 0;
let round = 1;

// player choice buttons

const rockBttn = document.getElementById('rockBttn');
rockBttn.addEventListener('click', () => {
	playerChoice.push(options[0]);
	getComputerChoice();
	playRound();
});

const paperBttn = document.getElementById('paperBttn');
paperBttn.addEventListener('click', () => {
	playerChoice.push(options[1]);
	getComputerChoice();
	playRound();
});

const scissorsBttn = document.getElementById('scissorsBttn');
scissorsBttn.addEventListener('click', () => {
	playerChoice.push(options[2]);
	getComputerChoice();
	playRound();
});

// computer choice generator
function getComputerChoice() {
	const choice = options[Math.floor(Math.random() * options.length)];
	computerChoice.push(choice);
}

function checkWinner() {
	let player = playerChoice[playerChoice.length - 1];
	let computer = computerChoice[computerChoice.length - 1];
	if (player === computer) {
		return 'Tie';
	} else if (
		(player === 'rock' && computer === 'scissors') ||
		(player === 'paper' && computer === 'rock') ||
		(player === 'scissors' && computer === 'paper')
	) {
		playerWins++;
		return 'Player';
	} else {
		computerWins++;
		return 'Computer';
	}
}

function incWinner() {
	document.getElementById('playerScore').innerHTML = playerWins;
	document.getElementById('computerScore').innerHTML = computerWins;
}

function playRound() {
	document.querySelector('h1').innerHTML = `Round : ${round}`;
	let winner = checkWinner();
	incWinner();
	if (playerWins == 5 || computerWins == 5) {
		checkGame();
	} else {
		switch (winner) {
			case 'Tie':
				document.getElementById('text').innerHTML = `${winner}!`;

				round++;
				break;
			case 'Player':
				document.getElementById('text').innerHTML = `${winner} Wins Round!`;
				// incWinner();
				round++;
				break;
			case 'Computer':
				document.getElementById('text').innerHTML = `${winner} Wins Round!`;
				// incWinner();
				round++;
				break;
		}
	}
}

function checkGame() {
	let gameWinner;
	if (playerWins > computerWins) {
		gameWinner = 'Player';
	} else if (computerWins > playerWins) {
		gameWinner = 'Computer';
	} else if (playerWins == computerWins) {
		gameWinner = 'Tie';
	}
	document.querySelector('h1').innerHTML = 'Game Over!';
	document.getElementById('text').innerHTML = `${gameWinner} Wins!`;
	setTimeout(() => {
		restart();
	}, 3000);
}

function restart() {
	round = 1;
	playerWins = 0;
	computerWins = 0;

	setTimeout(() => {
		incWinner();
		document.querySelector('h1').innerHTML = `Round : ${round}`;
		document.getElementById(
			'text'
		).innerHTML = `Face off against your computer in this riveting game of Rock,
					Paper, Scissors!`;
	}, 3000);
}
