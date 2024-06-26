import { useState } from 'react';

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ];

export default function GameBoard({onSelectSquare, board}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //  ---> ATTENTION SPREAD ARRAY INTO updatedBoard
  //     const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //
  //   onSelectSquare();
  // }

  // let gameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const {row, col} = square;
  //
  //   gameBoard[row][col] = player;
  // }

  return(
      <ol id='game-board'>
        {board.map( (row, rowIndex) => <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) =>
                <li key={colIndex}>
                  <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
            )}
          </ol>
        </li> )}
      </ol>
  )
}