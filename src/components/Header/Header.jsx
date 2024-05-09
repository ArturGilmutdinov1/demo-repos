import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import stl from "./Header.module.css";
import ModuleWindow from "./moduleWndow/ModuleWindow";

const Header = (props) => {

   let [called, setCalled] = useState(false)

   let pressTheButton = (called) => {
      (called === true)
         ? setCalled(false)
         : setCalled(true)
   }


   return <header className={stl.header}>
      <img src='https://www.svgrepo.com/show/396535/fox.svg'></img>
      <div className={stl.login}>
         {props.isAuth
            ? <div onClick={() => pressTheButton(called)}>
               {props.login}
               {called && <ModuleWindow logout={props.logout} />}
               {!called && null}
            </div>
            : <NavLink to={'/login'}>войти</NavLink>}
      </div>
   </header>

}
export default Header