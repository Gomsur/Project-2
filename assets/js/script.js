var WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];


var moves = ["", "", "", "", "", "", "", "", ""];
var gameover = false;
var player = "x";



var cells = Array.from(document.getElementsByClassName("cell"));
var winningMessageElement = document.getElementById('winningMessage');
var restartButton = document.getElementById('restartButton');
var winningMessageTextElement = document.getElementById('winningMessageText');
var instructionsElement = document.getElementById('instructions');
var instructionsbtn = document.getElementById('instructions_btn');
var playbtn = document.getElementById('playbtn');

startGame();

restartButton.addEventListener('click', restartGame);
instructionsbtn.addEventListener('click', function() {
	instructionsElement.classList.add('show');
});
playbtn.addEventListener('click', function() {
	instructionsElement.classList.remove('show');
});

function startGame() {
	cells.forEach(function (cell){ cell.addEventListener("click", playerTurn);});
	
	winningMessageElement.classList.remove('show');
	gameover = false;
}

function playerTurn() {
	var cellIndex = parseInt(this.getAttribute("data-cell"));

	if (moves[cellIndex] !== "" || gameover) {
		return;
	}
	var current_cell = this;
	placeMark(current_cell, cellIndex);


	checkWin();


}

function endGame(draw) {
	if (draw) {
		winningMessageTextElement.innerText = "It's a draw!";
	} else {
		winningMessageTextElement.innerText = player +'wins!';
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
	for (var i = 0; i < WINNING_COMBINATIONS.length; i++) {
		
		var a = WINNING_COMBINATIONS[i][0];
var b = WINNING_COMBINATIONS[i][1];
var c = WINNING_COMBINATIONS[i][2];
		if (moves[a] !== "" && moves[a] === moves[b] && moves[a] === moves[c]) {
			endGame(false);
			gameover = true;
			break;
		}
	}

	if (moves.indexOf("") === -1) {
		cells.forEach(function(cell) { cell.removeEventListener("click", playerTurn);});

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

	cells.forEach(function(cell){
		cell.textContent = "";
		cell.addEventListener("click", playerTurn);
		cell.classList.remove("red");
		cell.classList.remove("blue");
	});
	winningMessageElement.classList.remove('show');
}