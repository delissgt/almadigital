import './index.css';
import Player from "../../../src/components/Player/Player";
import GameBoard from "../../../src/components/GameBoard";

export default function CurseReactTicTacToe () {
  return (
      <>
        <header>
          <img src="/game-logo.png" alt="Hand draw tiac tac toe board" />
          <h1>tic tac toe</h1>
        </header>

        <main>
          <div id="game-container">
            <ol id="players">
              <Player initialName='Player 1' symbol='X' />
              <Player initialName='Player 2' symbol='O' />
            </ol>

            <GameBoard />
          </div>
            LOG
        </main>
      </>
  )

}