const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let board = ['', '', '', '', '', '', '', '', ''];

function handleMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer.toLowerCase());
    if (checkWin()) {
      message.textContent = `${currentPlayer} venceu!`;
      gameActive = false;
    } else if (checkDraw()) {
      message.textContent = 'Empate!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `É a vez do jogador ${currentPlayer}`;
    }
  }
}

function checkWin() {
  return winningConditions.some(combination => {
    return combination.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = `É a vez do jogador ${currentPlayer}`;
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
  });
}
