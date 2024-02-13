import {Layout, Card, Radio, Space, Button, Row, Col} from "antd";
const {Header, Content, Footer, Sider} = Layout;

import React, { useState, useEffect } from "react";
import { Progress } from "antd";

import ContainerCode from "../../../src/components/ContainerCode";

// import puzzles from "../../../src/components/ContainerCode/puzzlesPython.json";


import {puzzlesTestPython} from "../../../src/components/ContainerCode/examplesPuzzlesPython";

console.log("puzzlesss", puzzlesTestPython)

const totalPuzzles = Object.keys(puzzlesTestPython).length

// console.log("totalPuzzles", totalPuzzles)
// console.log("totalPuzzles[0]", puzzlesTestPython[0])


export default function PuzzlesPython() {

  const [currentPuzzleId, setCurrentPuzzleId] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState({});
  const [valueAnswer, setValueAnswer] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false)
  

  const onChange = (e) => {
    // console.log('radio checkes', e.target.value)
    setValueAnswer(e.target.value)
  }

  const onClickCheck = () => {

      // console.log("currentPuzzleIs", currentPuzzleId)
      // console.log("currentPuzzleIs +1", currentPuzzleId +1)
      // console.log("totalPuzzles", totalPuzzles)
     if (currentPuzzleId + 1 < totalPuzzles) {


       console.log("------", currentPuzzleId + 1)
       setCurrentPuzzleId(currentPuzzleId + 1)
       setCurrentPuzzle(puzzlesTestPython[currentPuzzleId + 1])
     }else{
       // console.log("disabled")
       setButtonDisabled(true)
     }
  }



  useEffect(()=>{
    setCurrentPuzzle(puzzlesTestPython[0])

  }, [])
  return (
      <>
        <Row>
          <Col span={8} xs={1} md={8}></Col>
          <Col span={8} xs={22} md={8}>
            <Progress percent={10}/>
            <Card>
              {
                currentPuzzle && (
                    <ContainerCode options={currentPuzzle['options']} puzzle={currentPuzzle}/>
                )
              }


            </Card>
            <br/>

            <Button onClick={onClickCheck} disabled={buttonDisabled}>
              Check
            </Button>
          </Col>
          <Col span={8} xs={1} md={8}></Col>
        </Row>

      </>
  )


}