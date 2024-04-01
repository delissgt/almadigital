import {useState} from 'react';


export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  // const [name, setName] = useState(name);

  function clickEditName(){
    setIsEditing(true);
  }


  return (
      <li>
        <span className='player'>
          {
            isEditing
                ? <input type='text' required  value={name}/>
                : <span className='player-name' >{name}</span>
          }

          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={clickEditName}>{ isEditing ? "Save" : "Edit"}</button>
      </li>
  );
}