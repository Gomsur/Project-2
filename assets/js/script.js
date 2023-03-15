const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'circle';
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const cells = Array.from(document.getElementsByClassName("cell"));
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
const instructionsElement = document.getElementById('instructions');
const instructionsbtn = document.getElementById('instructions_btn');
const playbtn = document.getElementById('playbtn');

startGame();

restartButton.addEventListener('click', restartGame);
instructionsbtn.addEventListener('click', () => {
	instructionsElement.classList.add('show');
});
playbtn.addEventListener('click', () => {
	instructionsElement.classList.remove('show');
});

function startGame() {
	cells.forEach((cell) => cell.addEventListener("click", playerTurn));
	
	winningMessageElement.classList.remove('show');
	gameover = false;
}

function playerTurn() {
	const cellIndex = parseInt(this.getAttribute("cellindex"));

	if (moves[cellIndex] !== "" || gameover) {
		return;
	}
	const current_cell = this;
	placeMark(current_cell, cellIndex);


	checkWin();


}

function endGame(draw) {
	if (draw) {
		winningMessageTextElement.innerText = "It's a draw!";
	} else {
		winningMessageTextElement.innerText = `${player} wins!`;
	}
	winningMessageElement.classList.add('show');
}

	function isDraw() {
		return [...cellElements].every(cell => {
			return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
		});
	}

	function placeMark(cell, currentClass) {
		cell.classList.add(currentClass);
	}
	
	function swapTurns() {
		isPlayer_O_Turn = !isPlayer_O_Turn;
	}

	function setBoardHoverClass() {
		boardElement.classList.remove(PLAYER_X_CLASS);
		boardElement.classList.remove(PLAYER_O_CLASS);
		if (isPlayer_O_Turn) {
			boardElement.classList.add(PLAYER_O_CLASS);
		} else {
			boardElement.classList.add(PLAYER_X_CLASS);
		}
	}

	function checkWin(currentClass) {
		return WINNING_COMBINATIONS.some(combination => {
			return combination.every(index => {
				return cellElements[index].classList.contains(currentClass);
			});
		});
	}