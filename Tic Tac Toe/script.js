// Set up the board
const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const restartBtn = document.querySelector(".restart");
let currentPlayer = "X";
let gameWon = false;
let numMoves = 0;

cells.forEach((cell) => {
	cell.addEventListener("click", () => {
		if (!cell.classList.contains("x") && !cell.classList.contains("o") && !gameWon) {
			cell.classList.add(currentPlayer.toLowerCase());
			cell.classList.add("animate__animated", "animate__flipInY");
			cell.classList.add("animate__delay-1s");
			cell.classList.add("animate__faster");
			numMoves++;
			checkWin();
			if (!gameWon) {
				currentPlayer = currentPlayer === "X" ? "O" : "X";
			}
		}
	});
});

// Check if the game has been won
function checkWin() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningCombos.length; i++) {
		const combo = winningCombos[i];
		const cell1 = cells[combo[0]];
		const cell2 = cells[combo[1]];
		const cell3 = cells[combo[2]];

		if (cell1.classList.contains(currentPlayer.toLowerCase()) &&
			cell2.classList.contains(currentPlayer.toLowerCase()) &&
			cell3.classList.contains(currentPlayer.toLowerCase())) {
			gameWon = true;
			cell1.classList.add("animate__pulse");
			cell2.classList.add("animate__pulse");
			cell3.classList.add("animate__pulse");
			message.textContent = `${currentPlayer} wins!`;
			break;
		}
	}

	if (numMoves === 9 && !gameWon) {
		message.textContent = "Tie game!";
	}
}

// Restart the game
restartBtn.addEventListener("click", () => {
	cells.forEach((cell) => {
		cell.classList.remove("x");
		cell.classList.remove("o");
		cell.classList.remove("animate__pulse");
		cell.classList.remove("animate__flipInY");
		cell.classList.remove("animate__delay-1s");
		cell.classList.remove("animate__faster");
	});
	currentPlayer = "X";
	gameWon = false;
	numMoves = 0;
	message.textContent = "";
});
