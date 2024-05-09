import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { TextArea } from "../../common/Preloader/FormControll/FormControl";
import MyPost from "./MyPost/Mypost";
import stl from "./post.module.css";


const maxLength = maxLengthCreator(20);

const PostForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <Field component={TextArea} name={'newMessageBody'} validate={[required, maxLength]} />
      <button >отправить</button>
   </form>

}


const PostReduxForm = reduxForm({ form: 'post' })(PostForm)


const Post = React.memo(props => {
   debugger
   let publishPost = (values) => {
      props.addPostActionCreator(values.newMessageBody)
   }


   let AllPosts = props.postData.map((el => <MyPost message={el.message} like={el.like} />))

   return <div className={stl.AreaText}>
      <PostReduxForm onSubmit={publishPost} />
      {AllPosts}
   </div >
})

export default Post;