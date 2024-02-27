import React from 'react';

import {PROJECT, FASHION_CAT, PUZZLES_PYTHON, CURSE_REACT_ESSENTIALS, CURSE_REACT_TIC_TAC_TOE} from "../../src/library/helpers/Paths";

export default function Project() {

  return (
      <>
      <h1>Projects</h1>

      <h2>Test </h2>
        <a href={PROJECT+"/"+FASHION_CAT} >
            Fashion Cat
        </a>


      <h2>Learning</h2>
        <a href={PROJECT+"/"+CURSE_REACT_ESSENTIALS}>React Essentials</a>
        <br/>
        <a href={PROJECT+"/"+CURSE_REACT_TIC_TAC_TOE}>React Tic Tac Toe</a>


      <h2>Extra</h2>
        <a href={PROJECT+"/"+PUZZLES_PYTHON}>puzzles Python in process</a>
      </>
  )

}


