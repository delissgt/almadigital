import {useState} from 'react';


export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  // const [name, setName] = useState(name);

  function clickEditName(){
    setIsEditing(!isEditing);
  }

  // VERSION 2
  let playerName = <span className='player-name' >{name}</span>

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }


  return (
      <li>
        <span className='player'>

          {playerName}

          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={clickEditName}>{ isEditing ? "Save" : "Edit"}</button>
      </li>
  );
}