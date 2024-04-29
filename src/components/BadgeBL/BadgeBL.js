import {Badge} from "antd";
import {HeartOutlined} from "@ant-design/icons";

export default function BadgeBL({textCount, type="", children }) {
   if (type === "HEART") {
     return (
         <Badge
             offset={[0, 40]}
             count={
               <div style={{ backgroundColor: 'white',  borderColor: "lightgray", padding: '5px', borderRadius: '15px', borderWidth: '1px', borderStyle: 'solid' }}>
                 <HeartOutlined
                     style={{color: 'lightpink', strokeWidth: '50'}}/>
                 {textCount}
               </div>
             }
         >{children}</Badge>
     )
   }

   return (
       <Badge
           offset={[0, 70]}
           count={
             <div style={{ backgroundColor: 'lightpink', borderColor: 'lightgray', padding: '5px', borderRadius: '15px', borderWidth: '1px', borderStyle: 'solid', color: "white" }}>
               {textCount}
             </div>
           }
       >{children}</Badge>
     )


}