import {useState} from 'react';


export default function Player({initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function clickEditName(){
    setIsEditing((editing) => !editing);
  }

  function handleChange(event){
    console.log("event", event)
    setPlayerName(event.target.value);
  }


  // VERSION 2
  let editablePlayerName = <span className='player-name' >{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }


  return (
      <li className={isActive ? 'active' : undefined}>
        <span className='player'>

          {editablePlayerName}

          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={clickEditName}>{ isEditing ? "Save" : "Edit"}</button>
      </li>
  );
}