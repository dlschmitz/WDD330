
const statusDisplay = document.querySelector('.status');

let active = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `Player ${currentPlayer}...You won!`;
const drawMessage = () => `It's a draw! \r\n Try again!`;
const currentPlayersTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayersTurn();

function cellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayersTurn();
}

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

function result() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winMessage();
        active = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        active = false;
        return;
    }

    playerChange();
}

function cellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('index')
    );

    if (gameState[clickedCellIndex] !== "" || !active) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    result();
}

function restartGame() {
    active = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayersTurn();
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart').addEventListener('click', restartGame);