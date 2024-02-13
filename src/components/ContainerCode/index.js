import React, {useState, useEffect} from "react";

import {Row, Col, Card, Radio, Space} from 'antd';

const ContainerCode = ({ puzzle}) => {

  // const options =  {1: "int", 2: "str", 3: "boolean"}
  const options =  [{key: 1, value: "int"}, {key: 2, value: "str"}, {key: 3, value: "boolean"}]
  return (
      <>
        <Card>
          <p><strong>{puzzle.puzzle}</strong></p>
          <p>{puzzle.explanation}</p>
          {/*<p>{puzzle.options}</p>*/}

          <br/>
          <Radio.Group onChange={() => {console.log("change")}} >
            <Space direction="vertical">

              { puzzle['options'] &&
                puzzle['options'].map( ({key, value}) => (
                    <Radio value={key} key={key} >{value}</Radio>
                    ))
              }









            </Space>
          </Radio.Group>


        </Card>
      </>
  )
}

export default ContainerCode;