
var scorex = 0, scoreo = 0;
var gameActive = true;
var currentPlayer = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];
var statusDisplay = document.querySelector('.game--status');

function winningMessage() {
    if (currentPlayer === 'X')
        scorex += 1;
    else
        scoreo += 1;
        document.getElementById("ScoreX").innerHTML=scorex.toString();
        document.getElementById("ScoreO").innerHTML=scoreo.toString();
    return `Player ${currentPlayer} has won!`;
};
function drawMessage() {
    return  `Game ended in a draw! NO Winner`;
};

function currentPlayerTurn() {
    return `It's ${currentPlayer}'s turn`;
};

statusDisplay.innerHTML = currentPlayerTurn();

var winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function CellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    if (currentPlayer === "X") {
        clickedCell.setAttribute("style", "color:red");
    }
    if (currentPlayer === "O") {
        clickedCell.setAttribute("style", "color:#105abe");
    }

}

function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function ResultValidation() {
    var roundWon = false;
    for (var i = 0; i <= 7; i++) {
        var winCondition = winningConditions[i];
        var a = gameState[winCondition[0]];
        var b = gameState[winCondition[1]];
        var c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '')
            continue;
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    var roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    PlayerChange();
}

function CellClick(clickedCellEvent) {
    var clickedCell = clickedCellEvent.target;
    var clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive)
        return;

    CellPlayed(clickedCell, clickedCellIndex);
    ResultValidation();
}

function RestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
function ResitGame(){
    scorex = 0, scoreo = 0;
    document.getElementById("ScoreX").innerHTML=scorex.toString();
    document.getElementById("ScoreO").innerHTML=scoreo.toString();
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', CellClick));
document.querySelector('.game--restart').addEventListener('click', RestartGame);
document.querySelector('.game--Resit').addEventListener('click', ResitGame);
