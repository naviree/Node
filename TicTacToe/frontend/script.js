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
		[0,0,0],
		[0,0,0],
		[0,0,0]
]

function handleClick() {
	cells.forEach((cell, index) => {
		cell.addEventListener("click", (event) => {
			if (cell.textContent === "") {
				cell.textContent = currentPlayer;
				if (currentPlayer === player1) {
					playerTurn(index, currentPlayer)
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

	console.log(cell, player);

console.log(board)
}


for (let i = 0; i < winningCombos.length; i++) {
	winningCombos[1][0] = winningCombos[i][0];
}
handleClick();
