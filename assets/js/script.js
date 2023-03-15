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

function placeMark(cell, cell_index) {
	moves[cell_index] = player;
	cell.textContent = player;
	if (player == "x") {
		cell.classList.add("red");
	}
	if (player == "o") {
		cell.classList.add("blue");
	}

}

function swapTurns() {
	if (!gameover) {
		player = player === "x" ? "o" : "x";
	}
}

function checkWin() {
	for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
		const [a, b, c] = WINNING_COMBINATIONS[i];
		if (moves[a] !== "" && moves[a] === moves[b] && moves[a] === moves[c]) {
			endGame(false);
			gameover = true;
			break;
		}
	}
	if (moves.indexOf("") === -1) {
		cells.forEach((cell) => cell.removeEventListener("click", playerTurn));

		endGame(true);
		gameover = true;
		return;
	}
	swapTurns();
}

function restartGame() {
	player = "x";
	moves = ["", "", "", "", "", "", "", "", ""];
	gameover = false;
	cells.forEach((cell) => {
		cell.textContent = "";
		cell.addEventListener("click", playerTurn);
		cell.classList.remove("red");
		cell.classList.remove("blue");
	});
	winningMessageElement.classList.remove('show');
}