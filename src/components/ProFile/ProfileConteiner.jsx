import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { witchAuthRedirect } from "../../hoc/witchAuthRedirect";
import { getUsersProfile } from "../../redux/profileReducer";
import { getStatusProfile, updateStatusProfile } from './../../redux/profileReducer';
import ProFile from "./ProFile";


function withRouter(Children) {
   return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}



class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserID;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getUsersProfile(userId);
      this.props.getStatusProfile(userId);
   }

   render() {
      return (
         <ProFile {... this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile} />
      )
   }

}



let mapStateToProps = (state) => ({
   profile: state.profillePage.profile,
   status: state.profillePage.status,
   authorizedUserID: state.auth.userId,
})



export default compose(
   connect(mapStateToProps, { getUsersProfile, getStatusProfile, updateStatusProfile }),
   withRouter,
   witchAuthRedirect,
)(ProfileContainer)