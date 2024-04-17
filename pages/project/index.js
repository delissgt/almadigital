import React from 'react';
import 'tailwindcss/tailwind.css';

import {
  PROJECT,
  FASHION_CAT,
  PUZZLES_PYTHON,
  CURSE_REACT_ESSENTIALS,
  CURSE_REACT_TIC_TAC_TOE,
  CURSE_REACT_PROJECT_INVESTMENT_CALCULATOR,
  CURSE_REACT_STYLING_COMPONENTS,
} from "../../src/library/helpers/Paths";

export default function Project() {

  return (
      <>
      <h1 className={'uppercase'}>Projects</h1>

      <h2>Test </h2>
        <a href={PROJECT+"/"+FASHION_CAT} >
            Fashion Cat
        </a>


      <h2>Learning</h2>
        <a href={PROJECT+"/"+CURSE_REACT_ESSENTIALS}>React Essentials</a>
        <br/>
        <a href={PROJECT+"/"+CURSE_REACT_TIC_TAC_TOE}>React Tic Tac Toe</a>
        <br/>
        <a href={PROJECT+"/"+CURSE_REACT_PROJECT_INVESTMENT_CALCULATOR}>Investment Calculator</a>
        <br/>
        <a href={PROJECT+"/"+CURSE_REACT_STYLING_COMPONENTS} >Styling Components</a>

      <h2>Extra</h2>
        <a href={PROJECT+"/"+PUZZLES_PYTHON}>puzzles Python in process</a>
      </>
  )

}


