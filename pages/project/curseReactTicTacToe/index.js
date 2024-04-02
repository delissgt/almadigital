import {useState} from 'react';

import './index.css';
import Player from "../../../src/components/Player/Player";
import GameBoard from "../../../src/components/GameBoard";

export default function CurseReactTicTacToe () {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
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

            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
          </div>
            LOG
        </main>
      </>
  )

}