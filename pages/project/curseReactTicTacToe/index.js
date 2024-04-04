import {useState} from 'react';

import './index.css';
import Player from "../../../src/components/Player/Player";
import GameBoard from "../../../src/components/GameBoard";
import Log from "../../../src/components/Log";


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

export default function CurseReactTicTacToe () {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {row: rowIndex, col: colIndex},
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
      <>
        <header>
          <img src="/game-logo.png" alt="Hand draw tiac tac toe board" />
          <h1>tic tac toe</h1>
        </header>

        <main>
          <div id="game-container">
            <ol id="players" className='highlight-player'>
              <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
              <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
            </ol>

            <GameBoard
                onSelectSquare={handleSelectSquare}
                turns={gameTurns}
            />
          </div>
            <Log turns={gameTurns}/>
        </main>
      </>
  )

}