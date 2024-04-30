
import {Button, Card, Col, Rate, Row, ConfigProvider} from 'antd';
import product from "../../assets/blife-product.png";
import {InstagramOutlined, TwitterOutlined} from "@ant-design/icons";

const {Meta} = Card;
const iconFace = "M1023.914667 512c0-282.794667-229.205333-512-511.957334-512C229.205333 0 0 229.205333 0 512c0 255.488 187.221333 467.285333 431.957333 505.685333v-357.717333H301.994667v-148.010667h129.962666V399.189333c0-128.341333 76.458667-199.210667 193.365334-199.210666 56.021333 0 114.602667 9.984 114.602666 9.984v125.994666H675.413333c-63.573333 0-83.413333 39.466667-83.413333 79.957334V512h141.994667l-22.698667 148.010667h-119.296v357.717333c244.736-38.4 431.957333-250.197333 431.957333-505.728z"

export default function CardBL ({ image,  title, price, description, discount, rating, }) {

  return (
   <Card
       cover={<img src={image.src} />}
   >
     <Meta
         title={<Row><Col span={12}>{title}</Col><Col span={6} offset={6}>${price}</Col></Row>}
         description={
           <div>
             <Row><Col span={12}>{description}</Col><Col span={6} offset={6}>${discount}</Col></Row>
             <Row><Col span={16}><Rate allowHalf defaultValue={rating} style={{ fontSize: '14px' }} /></Col></Row>
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
               <Col span={7} offset={4}>
                 <ConfigProvider
                     theme={{
                       token: {
                         borderRadius: '12px',
                         contentFontSizeSM: "12px",
                         paddingBlockSM: "4px 10px",
                         colorPrimary: "yellow",
                         // defaultBorderColor: "yellow",
                         borderColor: "green",
                       }
                     }}
                 >
                 <Button size="small">Agregar</Button>
                 </ConfigProvider>
               </Col>
             </Row>
           </div>
         }
     />

   </Card>
  )
}