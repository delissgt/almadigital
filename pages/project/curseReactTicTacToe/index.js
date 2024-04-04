import {useState} from 'react';

import './index.css';
import Player from "../../../src/components/Player/Player";
import GameBoard from "../../../src/components/GameBoard";
import Log from "../../../src/components/Log";

export default function CurseReactTicTacToe () {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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