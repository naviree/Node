const prompt = require("prompt-sync")();

const board = [
	["-", "-", "-"],
	["-", "-", "-"],
	["-", "-", "-"],
];

function displayBoard() {
	console.log("-------------");
	for (let i = 0; i < 3; i++) {
		let rowString = "| ";
		for (let j = 0; j < 3; j++) {
			rowString += board[i][j] + " | ";
		}
		console.log(rowString);
		console.log("-------------");
	}
}

function getNextMove() {
	const gatherRow = prompt("Please enter your row: ");
	const gatherColumn = prompt("Please enter your column: ");

	let row = parseInt(gatherRow);
	let column = parseInt(gatherColumn);

	return [row, column];
}

function gameBoard(playerSymbol) {
  let row, column;
  while (true) {
    [row, column] = getNextMove();
    if (board[row][column] === "-") {
      break;
    } else {
      console.log("This spot is already occupied. Please choose another spot.");
    }
  }
  board[row][column] = playerSymbol;
  displayBoard();
  const winner = checkWinner(board);
  if (winner) {
    console.log(`Player ${playerSymbol} wins!`);
    process.exit();
  }
}

function playGame() {
	let player1 = true;
	while (true) {
		if (player1) {
			console.log("Player 1's turn (X)");
			gameBoard("X");
		} else {
			console.log("Player 2's turn (O)");
			gameBoard("O");
		}
		player1 = !player1;
	}
}


function checkWinner(board) {
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] === board[i][1] &&
			board[i][1] === board[i][2] &&
			board[i][0] !== "-"
		) {
			console.log(board);
			return board[i][0];
		}
	}

	for (let i = 0; i < 3; i++) {
		if (
			board[0][i] === board[1][i] &&
			board[1][i] === board[2][i] &&
			board[0][i] !== "-"
		) {
			return board[0][i];
		}
	}

	if (
		(board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
		(board[0][2] === board[1][1] && board[1][1] === board[2][0])
	) {
		if (board[1][1] !== "-") {
			return board[1][1];
		}
	}

	return null;
}

displayBoard();
playGame();
