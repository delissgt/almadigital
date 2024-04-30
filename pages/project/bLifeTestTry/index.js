
import {Layout, Menu,Card, Row, Col} from 'antd';


import BadgeBL from "../../../src/components/BadgeBL/BadgeBL";
import CardBL from "../../../src/components/CardBL/CardBL";

import blife from "../../../src/assets/blife.png";
import imageHeader from "../../../src/assets/blife1.png";
import product from "../../../src/assets/blife-product.png";

const {Header, Footer, Content} = Layout;

const productsBL = [
  {
    "key": 1,
    "image": product,
    "title": "Citrate Mag",
    "price": 273.00,
    "description": "240 Cápsulas | 800gr",
    "discount": 200.00,
    "rating": 4.5,
  },
  {
    "key": 2,
    "image": product,
    "title": "Omega 3",
    "price": 273.00,
    "description": "180 Cápsulas | 40gr",
    "discount": 200.00,
    "rating": 3,
  },
  {
    "key": 3,
    "image": product,
    "title": "60 Billion",
    "price": 273.00,
    "description": "120 Cápsulas | 100gr",
    "discount": 200.00,
    "rating": 5,
  },
  {
    "key": 4,
    "image": product,
    "title": "Citrate Mag",
    "price": 273.00,
    "description": "240 Cápsulas | 800gr",
    "discount": 200.00,
    "rating": 0.5,
  }

]


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
                  {
                    productsBL.map((productItem)=> (
                        <Col span={5} xs={12} md={6} lg={5} >
                          <BadgeBL type="HEART" textCount=" 22">
                            <BadgeBL textCount="30 %">
                              <CardBL
                                  {...productItem}
                              />
                            </BadgeBL>
                          </BadgeBL>
                        </Col>
                    ))
                  }
                </Row>

            </section>
          </Content>
          <Footer>Footeeeer</Footer>
        </Layout>
      </>
  )

}