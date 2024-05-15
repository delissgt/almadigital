import {useState, useRef} from 'react';


export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false)
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  let currentPlayerName = "unknown entity";
  if (submitted) {
    currentPlayerName = playerName
  }

  return (
      <section id="player">
        <h2>Welcome { currentPlayerName }</h2>
        <p>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
  );
}