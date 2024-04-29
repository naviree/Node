const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
const winnerDisplay = document.getElementById("winner");
let currentPlayer = "X";
let winner = null;

const player1 = "X";
const player2 = "O";
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
	let cell = index;
	let player = currentPlayer;
	let row = Math.floor(index / 3);
	let column = index % 3;
	console.log(row);
	console.log(column);
	board[row][column] = player;
	console.log(board);
	winner = checkWinner(board);
	if (winner) {
		console.log("You win");
	}
}

function checkWinner(board) {
	for (let combo of winningCombos) {
		const [a, b, c] = combo;
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return true;
		}
	}
	return null;
}

handleClick();
