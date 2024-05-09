import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import Post from "./post";



let mapStateToProps = (state) => {
   return {
      postData: state.profillePage.postData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPostActionCreator: (newMessageBody) => {
         dispatch(addPostActionCreator(newMessageBody));
      }
   }
}

const PostConteiner = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostConteiner;


