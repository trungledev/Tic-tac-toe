import { useState } from "react";
export default function Player({ name: initialName,isActive, symbol, onChangeName }) {
  // Thay đổi từ span => input khi nhấn nút edit
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let displayName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    displayName = (
      <input
        type="text"
        className="player-name"
        value={playerName}
        onChange={handleChangeName}
      />
    );
  }
  function handleChangeName(e) {
    let newName = e.target.value;
    setPlayerName(newName);
    onChangeName(symbol, newName);
  }
  function handleEditMode() {
    setIsEditing((prev) => !prev);
  }
  return (
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {displayName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditMode}>{isEditing ? "Save" : "Edit"}</button>
      </li>
  );
}
