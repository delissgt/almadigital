
import {Layout, Menu,Card, Row, Col} from 'antd';


import BadgeBL from "../../../src/components/BadgeBL/BadgeBL";
import CardBL from "../../../src/components/CardBL/CardBL";

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
          <Header style={{ display: 'flex', alignItems: 'center' , backgroundColor: 'white'}} >
            <Row style={{ width: '100%' }}>
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
          <Content style={{ backgroundColor: "white" }} >
            <section>
              <img src={imageHeader.src} style={{ width: '100%', height: '500px', objectFit: "cover", objectPosition: "top"  }} />
            </section>

            <section style={{ margin: "3rem" }}>
                <Row gutter={24} justify="space-evenly">
                  <Col span={5} xs={12} md={6} lg={5} >
                    <BadgeBL type="HEART" textCount=" 22">
                      <BadgeBL textCount="30 %">
                    <CardBL
                        image={product}
                        title="Citrate Mag"
                        price="273.00"
                        description="240 Cápsulas | 800gr"
                        discount="200.00"
                    />
                    </BadgeBL>
                    </BadgeBL>
                  </Col>
                  <Col span={5} xs={12} md={6} lg={5} >
                    <Card
                        cover={<p>dasdadasd</p>}
                    >
                      content card
                    </Card>
                  </Col>
                  <Col span={5} xs={12} md={6} lg={5} >
                    <Card

                        cover={<img/>}

                    >
                      content card?
                    </Card>
                  </Col>
                  <Col span={5} xs={12} md={6} lg={5} >
                    <Card

                        cover={<img src={product.src} />}

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