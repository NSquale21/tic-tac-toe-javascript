let cells = document.querySelectorAll('.row > div');
let currentPlayer = '🔥'; 
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
		resetGame();
		return;
	}
	if(cell.textContent !== '') {
		return;
	}

	// draw current player value
	cell.textContent = currentPlayer;
	counter++;
	checkForWin();
	togglePlayer();
}

// switches between players
function togglePlayer() {
	if(currentPlayer === '🔥') {
		currentPlayer = '🌊';
	} else {
		currentPlayer = '🔥';
	}
}

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

function resetGame() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].textContent = '';
	}
	isGameOver = false;
	counter = 0;
	currentPlayer = '🔥';
	winner.textContent = '';
}








