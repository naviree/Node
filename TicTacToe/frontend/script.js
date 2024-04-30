const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
const winnerDisplay = document.getElementById("winner");
let currentPlayer = "X";

const player1 = "X";
const player2 = "O";
const winningCombos = [
	[
		[0, 0],
		[0, 1],
		[0, 2],
	],
	[
		[1, 0],
		[1, 1],
		[1, 2],
	],
	[
		[2, 0],
		[2, 1],
		[2, 2],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
	],
	[
		[0, 1],
		[1, 1],
		[2, 1],
	],
	[
		[0, 2],
		[1, 2],
		[2, 2],
	],
	[
		[0, 0],
		[1, 1],
		[2, 2],
	],
	[
		[0, 2],
		[1, 1],
		[2, 0],
	],
];

const board = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

function handleClick() {
	cells.forEach((cell, index) => {
		cell.addEventListener("click", (event) => {
			if (cell.textContent === "") {
				cell.textContent = currentPlayer;
				if (currentPlayer === player1) {
					playerTurn(index, currentPlayer);
					currentPlayer = player2;
				} else {
					playerTurn(index, currentPlayer);
					currentPlayer = player1;
				}
			} else {
				console.log(
					"This spot is already occupied. Please choose another spot."
				);
			}
		});
	});
}

function playerTurn(index, currentPlayer) {
	let player = currentPlayer;
	let row = Math.floor(index / 3);
	let column = index % 3;

	board[row][column] = player;
	checkWinner(board);
}

function checkWinner(board) {
	for (let combo of winningCombos) {
		const [[a1, a2], [b1, b2], [c1, c2]] = combo;
		if (
			board[a1][a2] &&
			board[a1][a2] === board[b1][b2] &&
			board[a1][a2] === board[c1][c2]
		) {
			console.log("You won!");
		}
	}
	return null;
}

handleClick();
