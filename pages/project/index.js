import React from 'react';

import {PROJECT, FASHION_CAT, PUZZLES_PYTHON} from "../../src/library/helpers/Paths";

export default function Project() {

  return (
      <>
      <h1>Projects</h1>

      <h2>Test </h2>
        <a href={PROJECT+"/"+FASHION_CAT} >
            Fashion Cat
        </a>


      <h2>Learning</h2>
        <a>React </a>


      <h2>Extra</h2>
        <a href={PROJECT+"/"+PUZZLES_PYTHON}>puzzles Python in process</a>
      </>
  )

}


