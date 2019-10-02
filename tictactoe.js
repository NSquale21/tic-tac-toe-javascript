let cells = document.querySelectorAll('.row > div');
let currentPlayer = String.fromCodePoint(0x1F525);
let winner = document.querySelector('#winner');
let counter = 0;
let isGameOver = false;
let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function() {
	resetGame();
});

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {
	let cell = e.target;
	if(isGameOver === true) {
		return;
	}
	// Prevents player from drawing if cell if already occupied
	if(cell.textContent !== '') {
		return;
	}
	// draw current player value
	cell.textContent = currentPlayer;
	counter++;
	checkForWin();
	togglePlayer();
}

// toggles between player 1 & player 2
function togglePlayer() {
	if(currentPlayer === String.fromCodePoint(0x1F525)) {
		currentPlayer = String.fromCodePoint(0x1F30A);
	} else {
		currentPlayer = String.fromCodePoint(0x1F525);
	}
}

// checks for winning combinations by index and currrent player
function checkCells(a, b, c, currentPlayer) {
	if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
			return true;
	} else {
			return false;
	}
}

function checkForWin() {
	if(checkCells(0, 1, 2, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(3, 4, 5, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(6, 7, 8, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(0, 3, 6, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(1, 4, 7, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(2, 5, 8, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(0, 4, 8, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(checkCells(2, 4, 6, currentPlayer)) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(counter === 9) {
		winner.textContent = 'Draw!';
		isGameOver = true;
	}
} 

// resets game and clears board after a win or draw
function resetGame() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].textContent = '';
	}
	isGameOver = false;
	counter = 0;
	currentPlayer = String.fromCodePoint(0x1F525);
	winner.textContent = '';
}