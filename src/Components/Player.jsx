import { useState } from "react";
export default function Player({ name: initialName, symbol, onChangeName }) {
  // Thay đổi từ span => input khi nhấn nút edit
  const [playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  let displayName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    displayName = (
      <input type="text" className="player-name" onChange={handleChangeName} />
    );
  }
  function handleChangeName() {
    
  }
  return (
    <>
      <li>
        <span className="player">
          {displayName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  );
}
