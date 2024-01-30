import {Layout, Card, Radio, Space} from "antd";
const {Header, Content, Footer, Sider} = Layout;

import React from "react";
import { Progress } from "antd";


export default function PuzzlesPython() {

  return (
      <>
        <Progress percent={10}/>
        <Card>
          content
        </Card>
        <Space direction="vertical">
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
        </Space>

      </>
  )


}