const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let winner = null;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  });

  if (winner) {
    winnerDisplay.innerHTML = `Winner: ${winner}`;
  }
}