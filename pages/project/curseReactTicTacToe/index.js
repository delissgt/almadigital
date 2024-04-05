import {useState} from 'react';

import './index.css';
import Player from "../../../src/components/Player/Player";
import GameBoard from "../../../src/components/GameBoard";
import Log from "../../../src/components/Log";
import GameOver from "../../../src/components/GameOver";
import {WINNING_COMBINATIONS} from "../../../src/components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


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
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });

  const activePlayer = deriveActivePlayer(gameTurns);
  // spread initialGameBoard array values
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
    ) {
      // winner = firstSquareSymbol;
      winner = players[firstSquareSymbol];

    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;


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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    })
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
              <Player
                  initialName='Player 1'
                  symbol='X'
                  isActive={activePlayer === 'X'}
                  onChangeName={handlePlayerNameChange}
              />
              <Player
                  initialName='Player 2'
                  symbol='O'
                  isActive={activePlayer === 'O'}
                  onChangeName={handlePlayerNameChange}
              />
            </ol>
            {(winner || hasDraw ) && <GameOver winner={winner} restart={handleRestart} />}
            <GameBoard
                onSelectSquare={handleSelectSquare}
                board={gameBoard}
            />
          </div>
            <Log turns={gameTurns}/>
        </main>
      </>
  )

}