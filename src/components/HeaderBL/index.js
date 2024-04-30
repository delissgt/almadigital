import {Col, Layout, Menu, Row} from "antd";
import './HeaderBL.css';

import blife from "../../assets/blife.png";


const { Header } = Layout;

export default function HeaderBL() {
  return (
      <Header className="header-bl">
        <Row className="row-100">
          <Col span={5}>
            <div className="demo-logo"><img src={blife.src} width={'200em'} height={'61em'}/></div>
          </Col>
          <Col offset={3} span={10} >
            <Menu
                theme="light"
                mode="horizontal"
                items={[{key: 1, label: "Productos"}, {key: 2, label: "Promociones"}, {key: 3, label: "Nosotros"}]}
                defaultSelectedKeys={['2']}
            />
          </Col>
        </Row>
      </Header>
  )
}