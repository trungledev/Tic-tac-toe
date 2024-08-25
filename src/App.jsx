import { useState } from "react";
import Player from "./Components/Player";

function App() {
  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });
  return (
    <div id="game-container">
      <ol id="players">
        <Player
          name="Player 1"
          symbol={"X"}
        />
        <Player
          name="Player 2"
          symbol={"O"}
        />
      </ol>
    </div>
  );
}

export default App;
