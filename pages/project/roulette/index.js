"use client";
import React, {useState, useEffect} from 'react';


const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
]

export default function  Roulette() {

  // const segments = [
  //     '1',
  //     '2',
  //     '3',
  //     '4',
  //     '5'
  // ]

  // const segColors = [
  //   '#EE4040',
  //   '#F0CF50',
  //   '#815CD1',
  //   '#3DA5E0',
  //   '#34A24F',
  // ]

  const onFinished = (winner) => {
    console.log(winner)
  }


  const [segments, setSegments] = useState([]);
  const [segColors, setSegColors] = useState([]);
  const [startRoulette, setStartRoulette] = useState(false);

  const saveData = () => {
    console.log("getData textare")
    let data = document.getElementById("elements").value
    data = data.split(',')
    console.log(data)
    setSegments(data)

    generateColors(data.length);
  }

  const generateColors = (totalSegments) => {
    let colors = [];
    console.log("colorss", segments.length)


    for (let i=0; i <= totalSegments; i++){
      console.log("---",i)
      let color = Math.floor(Math.random()*16777215).toString(16);
      colors.push("#"+color)
    }
    console.log("colross", colors)

    setSegColors(colors)

    setStartRoulette(true)

  }


  return(
      <main>
        <h1>roulette</h1>
        <textarea title={'insert all elements'} id={"elements"}/>
        <button onClick={saveData}>Guardar datos</button>


      </main>
  )
}