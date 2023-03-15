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
	isPlayer_O_Turn = false;
	cellElements.forEach(cell => {
		cell.classList.remove(PLAYER_X_CLASS);
		cell.classList.remove(PLAYER_O_CLASS);
		cell.removeEventListener('click', handleCellClick);
		cell.addEventListener('click', handleCellClick, { once: true });
	});
	setBoardHoverClass();
	winningMessageElement.classList.remove('show');
}

function handleCellClick(e) {
	const cell = e.target;
	const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;
	placeMark(cell, currentClass);
	if (checkWin(currentClass)) {
		endGame(false);
	} else if (isDraw()) {
		endGame(true);
	} else {
		swapTurns();
		setBoardHoverClass();
	}
}

	function endGame(draw) {
		if (draw) {
			winningMessageTextElement.innerText = "It's a draw!";
		} else {
			winningMessageTextElement.innerText = `Player with ${isPlayer_O_Turn ? "O's" : "X's"} wins!`;
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