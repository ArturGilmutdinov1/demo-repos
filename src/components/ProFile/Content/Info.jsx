import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import stl from "./Info.module.css";
import ProfileStatus from './ProfileStatusThiwHoks';


const Info = (props) => {

   if (!props.profile) {
      return < Preloader />
   }

   return <div className={stl.content}>
      <div className={stl.board}>
      </div>
      <div className={stl.content__flex}>
         <div className={stl.photo}>
            <img src={
               props.profile.photos.small
                  ? props.profile.photos.small
                  : 'https://gas-kvas.com/uploads/posts/2023-01/1673412252_gas-kvas-com-p-kvadratnie-risunki-anime-6.jpg'
            }></img>
         </div>
         <div className={stl.information}>
            <div className={stl.name}>
               {props.profile.fullName}
            </div>
            <div className={stl.information__сomplete}>
               aboutMe:{props.profile.aboutMe}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>
   </div>
}
export default Info;