import { useState } from "react";
import Player from "./Components/Player";

function App() {
  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });
  function handleChangeName(symbol, newName) {
    setPlayers((prev)=>{
      return {...prev, [symbol]: newName };
    });
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol={"X"} onChangeName={handleChangeName} />
        <Player name="Player 2" symbol={"O"} onChangeName={handleChangeName} />
      </ol>
    </div>
  );
}

export default App;
