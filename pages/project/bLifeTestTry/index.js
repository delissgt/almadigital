
import {Flex, Layout, Menu, theme, Card, Button, Row, Col, Rate, Badge} from 'antd';
import {HeartOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons";

import blife from "../../../src/assets/blife.png";
import imageHeader from "../../../src/assets/blife1.png";
import product from "../../../src/assets/blife-product.png";

const {Meta} = Card;

console.log("bkl", blife)

const {Header, Footer, Content} = Layout;


export default function BLifeTestTry () {



  return(
      <>
        <Layout >
          <Header style={{ flex: 1, minWidth: 0}} >
            <div className="demo-logo"/>
            <Menu
                theme="light"
                mode="horizontal"
                items={[{key: 1, label: "Productos"}, {key: 2, label: "Promociones"}, {key: 3, label: "Nosotros"}]}
                defaultSelectedKeys={['2']}
            />
          </Header>
          <Content >
            <section>
              <img src={imageHeader.src} style={{ width: '100%', height: '500px', objectFit: "cover", objectPosition: "top"  }} />
            </section>

            <section style={{ margin: "3rem" }}>
                <Row gutter={24} justify="space-evenly">
                  {/*<Space>*/}
                  <Col span={5}>
                    <Badge count={<div style={{ backgroundColor: 'white',  borderColor: "lightgray", padding: '5px', borderRadius: '12px', borderWidth: '2px', borderStyle: 'solid' }}><HeartOutlined /> 22</div>}>
                      <Badge count={30} offset={[0, 50]}>
                    <Card
                        cover={<img src={product.src} />}

                    >
                      <Meta
                          title={<Row><Col span={8}>Citrate Mag</Col><Col span={8} offset={8}>$273.00</Col></Row>}
                          description={
                            <div>
                            <Row><Col span={8}>description</Col><Col span={8} offset={8}>$200.00</Col></Row>
                            <Row><Col span={16}><Rate allowHalf defaultValue={4.5} style={{ fontSize: '14px' }} /></Col></Row>
                            <Row align="middle">
                              <Col span={8}>
                                <Row>COMPARTE</Row>
                                <Row>
                                  <a style={{ color: 'darkgrey' }}><FacebookOutlined/></a>
                                  <Button size="small" type="text" ><TwitterOutlined /></Button>
                                  <Button size="small" type="text" ><InstagramOutlined /></Button>
                                </Row>
                              </Col>
                              <Col span={8} offset={8}>
                                <Button size="small" >Agregar</Button>
                              </Col>
                            </Row>
                          </div>
                          }
                      />
                    </Card>
                    </Badge>
                    </Badge>
                  </Col>
                  <Col span={5}>
                    <Card
                        cover={<p>dasdadasd</p>}
                        actions={[
                          <Button>b1</Button>,
                          <Button>b2</Button>,
                          <Button>b3</Button>,
                        ]}
                    >
                      content card
                    </Card>
                  </Col>
                  <Col span={5}>
                    <Card

                        cover={<img/>}
                        actions={[
                          <Button>b1</Button>,
                          <Button>b2</Button>,
                          <Button>b3</Button>,
                        ]}
                    >
                      content card
                    </Card>
                  </Col>
                  <Col span={5}>
                    <Card

                        cover={<img src={product.src} />}
                        actions={[
                          <Button>b1</Button>,
                          <Button>b2</Button>,
                          <Button>b3</Button>,
                        ]}
                    >
                      content card
                    </Card>
                  </Col>

                </Row>

            </section>
          </Content>
          <Footer>Footeeeer</Footer>
        </Layout>
      </>
  )

}