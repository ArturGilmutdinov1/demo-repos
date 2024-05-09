import { connect } from "react-redux";
import { compose } from "redux";
import { witchAuthRedirect } from "../../hoc/witchAuthRedirect";
import { sendMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
   return {
      dialogData: state.dialogPage.dialogData,
      messageData: state.dialogPage.messageData,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (newMessageText) => {
         dispatch(sendMessageActionCreator(newMessageText));
      }
   }
};




export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   witchAuthRedirect,
)(Dialogs)

