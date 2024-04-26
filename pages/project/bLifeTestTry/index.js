
import {Flex, Layout, Menu, theme, Card, Button, Row, Col, Rate, Badge} from 'antd';
import {HeartOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons";

import blife from "../../../src/assets/blife.png";
import imageHeader from "../../../src/assets/blife1.png";
import product from "../../../src/assets/blife-product.png";

const {Meta} = Card;

const iconFace = "M1023.914667 512c0-282.794667-229.205333-512-511.957334-512C229.205333 0 0 229.205333 0 512c0 255.488 187.221333 467.285333 431.957333 505.685333v-357.717333H301.994667v-148.010667h129.962666V399.189333c0-128.341333 76.458667-199.210667 193.365334-199.210666 56.021333 0 114.602667 9.984 114.602666 9.984v125.994666H675.413333c-63.573333 0-83.413333 39.466667-83.413333 79.957334V512h141.994667l-22.698667 148.010667h-119.296v357.717333c244.736-38.4 431.957333-250.197333 431.957333-505.728z"

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
          <Content style={{ backgroundColor: "white" }} >
            <section>
              <img src={imageHeader.src} style={{ width: '100%', height: '500px', objectFit: "cover", objectPosition: "top"  }} />
            </section>

            <section style={{ margin: "3rem" }}>
                <Row gutter={24} justify="space-evenly">
                  {/*<Space>*/}
                  <Col span={5} xs={12} md={6} lg={5} >
                    <Badge offset={[0, 40]} count={<div style={{ backgroundColor: 'white',  borderColor: "lightgray", padding: '5px', borderRadius: '12px', borderWidth: '1px', borderStyle: 'solid' }}><strong><HeartOutlined style={{color: 'lightpink', strokeWidth: '50'}}/> 22</strong></div>}>
                      <Badge offset={[0, 70]} count={<div style={{ backgroundColor: 'lightpink', borderColor: 'lightgray', padding: '5px', borderRadius: '12px', borderWidth: '1px', borderStyle: 'solid', color: "white" }}>30 %</div>} >
                    <Card
                        cover={<img src={product.src} />}

                    >
                      <Meta
                          title={<Row><Col span={8}>Citrate Mag</Col><Col span={8} offset={8}>$273.00</Col></Row>}
                          description={
                            <div>
                            <Row><Col span={8}>description</Col><Col span={8} offset={8}>$200.00</Col></Row>
                            <Row><Col span={16}><Rate allowHalf defaultValue={4.5} style={{ fontSize: '14px' }} /></Col></Row>
                              <br/>
                            <Row align="middle">
                              <Col span={12}>
                                <Row>COMPARTE</Row>
                                <Row>

                                  <Button size='small' type='text'><svg color='black' style={{ width: "1em", height: "1em", verticalAlign: "middle", fill: "black", overflow: "hidden" }}  viewBox={"0 0 1024 1024"} ><path d={iconFace}/></svg></Button>
                                  <Button size="small" type="text" ><TwitterOutlined /></Button>
                                  <Button size="small" type="text" ><InstagramOutlined /></Button>
                                </Row>
                              </Col>
                              <Col span={8} offset={4}>
                                <Button size="small" style={{ borderRadius: '11px' }}>Agregar</Button>
                              </Col>
                            </Row>
                          </div>
                          }
                      />
                    </Card>
                    </Badge>
                    </Badge>
                  </Col>
                  <Col span={5} xs={12} md={6} lg={5} >
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
                  <Col span={5} xs={12} md={6} lg={5} >
                    <Card

                        cover={<img/>}
                        actions={[
                          <Button>b1</Button>,
                          <Button>b2</Button>,
                          <Button>b3</Button>,
                        ]}
                    >
                      content card?
                    </Card>
                  </Col>
                  <Col span={5} xs={12} md={6} lg={5} >
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