const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let winner = null;

const player1 = 'X';
const player2 = 'O';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick() {
  cells.forEach(cell => {
    cell.addEventListener('click', (event) => {
      if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        const winner = determineWinner(winningCombos);
        if (currentPlayer === player1) {
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        }
      } else {
        console.log(
            "This spot is already occupied. Please choose another spot.");
      }
    });
  });
}

function determineWinner(winningCombos) {
  for (i = 0; i < winningCombos.length; i++) {

    console.log(winningCombos[i][0]);
    console.log(winningCombos[i][1]);
    console.log(winningCombos[i][2]);
  }
}

function playerMove() {
      }

// <div class="cell" id="cell-0">X</div>
// [2, 4, 6]
handleClick()
determineWinner()