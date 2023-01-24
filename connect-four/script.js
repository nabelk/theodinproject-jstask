const player1 = prompt("First Player Name?");
const player2 = prompt("Second Player Name?");

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const dropToken = (column, player) => {
    const availableCells = board
      .filter((row) => row[column].getValue() === "")
      .map((row) => row[column]);

    if (!availableCells.length) return;

    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    return boardWithCellValues;
  };

  return { getBoard, dropToken, printBoard };
}

function Cell() {
  let value = "";

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

function GameController(playerOneName = player1, playerTwoName = player2) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: "X",
    },
    {
      name: playerTwoName,
      token: "O",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const checkWinner = (playerObj, direction, numConsecutive) => {
    const token = playerObj.token;
    const boardGame = board.printBoard();
    if (direction === "horizontal") {
      for (let i = 0; i < boardGame.length; i++) {
        for (let z = 0; z < boardGame[i].length - 3; z++) {
          if (
            boardGame[i][z] === token &&
            boardGame[i][z + 1] === token &&
            boardGame[i][z + 2] === token &&
            boardGame[i][z + 3] === token
          ) {
            return true;
          }
        }
      }
    } else if (direction === "vertical") {
      for (let row = 0; row < boardGame.length - 3; row++) {
        for (let col = 0; col < boardGame[row].length; col++) {
          if (
            boardGame[row][col] === token &&
            boardGame[row + 1][col] === token &&
            boardGame[row + 2][col] === token &&
            boardGame[row + 3][col] === token
          ) {
            return true;
          }
        }
      }
    } else if (direction === "diagonalRight") {
      for (let row = 3; row < boardGame.length; row++) {
        for (let col = 0; col < boardGame[row].length - 3; col++) {
          if (
            boardGame[row][col] === token &&
            boardGame[row - 1][col + 1] === token &&
            boardGame[row - 2][col + 2] === token &&
            boardGame[row - 3][col + 3] === token
          ) {
            return true;
          }
        }
      }
    } else {
      for (let row = 0; row < boardGame.length - numConsecutive + 1; row++) {
        for (
          let col = 0;
          col < boardGame[row].length - numConsecutive + 1;
          col++
        ) {
          let consecutive = 0;
          for (let i = 0; i < numConsecutive; i++) {
            if (direction === "diagonal") {
              if (boardGame[row + i][col + i] === token) {
                consecutive++;
              }
            }
          }
          if (consecutive === numConsecutive) {
            return true;
          }
        }
      }
    }
    return false;
  };

  let winner = false;

  const getWinner = () => {
    if (
      checkWinner(players[0], "horizontal", 4) ||
      checkWinner(players[0], "vertical", 4) ||
      checkWinner(players[0], "diagonal", 4) ||
      checkWinner(players[0], "diagonalRight", 4)
    ) {
      console.log(`${playerOneName} WON!`);
      winner = true;
      return playerOneName;
    } else if (
      checkWinner(players[1], "horizontal", 4) ||
      checkWinner(players[1], "vertical", 4) ||
      checkWinner(players[1], "diagonal", 4) ||
      checkWinner(players[1], "diagonalRight", 4)
    ) {
      console.log(`${playerTwoName} WON!`);
      winner = true;
      return playerTwoName;
    } else {
      winner = false;
    }
  };

  let countTurn = 0;

  const checkTie = () => {
    countTurn += 1;
    if (countTurn === 42 && winner === false) {
      console.log("Its A TIE");
      return true;
    }
    return false;
  };

  const playRound = (column) => {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);
    /*  This is where we would check for a winner and handle that logic,
          such as a win message. */
    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return {
    players,
    getWinner,
    checkTie,
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
  };
}

function ScreenController() {
  const game = GameController();
  const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

    // Render board squares
    board.forEach((row) => {
      row.forEach((cell, index) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our `playRound` function
        cellButton.dataset.column = index;
        cellButton.textContent = cell.getValue();
        // Give cell button bg color
        if (cell.getValue() === game.players[0].token) {
          cellButton.style.backgroundColor = "red";
        } else if (cell.getValue() === game.players[1].token) {
          cellButton.style.backgroundColor = "green";
        }
        boardDiv.appendChild(cellButton);
      });
    });
  };

  const winnerDisplay = () => {
    const winner = game.getWinner();
    if (winner === game.players[0].name || winner === game.players[1].name) {
      playerTurnDiv.textContent = `${winner} WON!`;
      const playAgainBtn = document.createElement("button");
      document.querySelector(".board").remove();
      playAgainBtn.textContent = "Play Again";
      playAgainBtn.addEventListener("click", () => window.location.reload());
      document.querySelector(".container").appendChild(playAgainBtn);
    }
  };

  const tieDisplay = () => {
    const tie = game.checkTie();
    if (tie === true) {
      playerTurnDiv.textContent = "It's A TIE";
      const playAgainBtn = document.createElement("button");
      document.querySelector(".board").remove();
      playAgainBtn.textContent = "Play Again";
      playAgainBtn.addEventListener("click", () => window.location.reload());
      document.querySelector(".container").appendChild(playAgainBtn);
    }
  };

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    // Make sure I've clicked a column and not the gaps in between
    if (!selectedColumn) return;
    game.playRound(selectedColumn);
    updateScreen();
    setTimeout(() => winnerDisplay(), 200);
    setTimeout(() => tieDisplay(), 200);
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
}

ScreenController();
