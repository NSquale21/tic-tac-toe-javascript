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

function checkForWin() {
	if(cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		winner.textContent = `${currentPlayer} Wins!`;
		isGameOver = true;
	} else if(cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
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








