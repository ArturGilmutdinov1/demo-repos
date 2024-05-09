import React from "react";
import stl from "./Message.module.css"



const Message = (props) => {
   return (
      <div className={stl.messageItem}>
         {props.message}
      </div>
   )
}


export default Message;