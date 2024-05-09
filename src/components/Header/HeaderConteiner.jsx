import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderConteiner extends React.Component {


   render() {
      return <Header {...this.props} />
   }
}


const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderConteiner);