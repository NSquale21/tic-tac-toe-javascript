let cells = document.querySelectorAll('.row > div');
let currentPlayer = '🔥'; 
let moveCounter = document.querySelector('.row > div');
let counter = 0;

moveCounter.addEventListener('click', function() {
	counter++;
	console.log(counter);
});

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {
	let cell = e.target;
	if(cell.textContent !== '') {
		return;
	}
	// draw current player value
	cell.textContent = currentPlayer;
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
		alert(`${currentPlayer} Wins!`);
	} else if(cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} else if(cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
		alert(`${currentPlayer} Wins!`);
	} 
}






