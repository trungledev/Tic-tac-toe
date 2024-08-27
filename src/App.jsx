import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Log from "./Components/Log";
let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [logs, setLogs] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });
  function handleChangeName(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }
  function handleClickCell(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] === null) {
      const updatedGameBoard = [...gameBoard];
      updatedGameBoard[rowIndex][colIndex] = currentPlayer;
      setGameBoard(() => [...updatedGameBoard].map((x) => [...x]));
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setLogs((prevLogs) => {
        return [
          `${players[currentPlayer]} : ${currentPlayer} place at ${rowIndex}, ${colIndex} `,
          ...prevLogs,
        ];
      });
    }
  }
  // console.log(logs);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol={"X"}
            isActive={currentPlayer == "X"}
            onChangeName={handleChangeName}
          />
          <Player
            name="Player 2"
            symbol={"O"}
            isActive={currentPlayer == "O"}
            onChangeName={handleChangeName}
          />
        </ol>
        <GameBoard gameBoard={gameBoard} onChangeBoard={handleClickCell} />
      </div>
     <Log logs={logs}/>
    </main>
  );
}

export default App;
