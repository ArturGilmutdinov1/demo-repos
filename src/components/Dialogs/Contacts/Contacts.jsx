import React from "react";
import stl from "./Contacts.module.css"
import { NavLink } from "react-router-dom";

const Contacts = (props) => {
   return <div className={stl.dialogItem}>
      <NavLink to={'/dialogs/' + props.id}>
         {props.name}
      </NavLink>
   </div>
}


export default Contacts;