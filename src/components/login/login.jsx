import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/Preloader/FormControll/FormControl";


const LoginForm = (props) => {
   const maxLength = maxLengthCreator(50)

   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={'login'} name={"email"} component={Input} type="text" validate={[required, maxLength]} />
      </div>
      <div>
         <Field placeholder={'password'} name={"password"} component={Input} validate={[required, maxLength]} type="password" />
      </div>
      <div>
         <Field component={Input} name={"reremberMe"} type="checkbox" />
      </div>
      <div>
         <button>войти </button>
      </div>
   </form>
}

const LoginReduxForm = reduxForm({ form: 'contact' })(LoginForm)

const Login = (props) => {

   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.reremberMe)
   }


   if (props.isAuth) {
      return <Navigate to='/profile' />
   }

   else {
      return <main>
         <h2 >
            регистрация
         </h2>
         <LoginReduxForm onSubmit={onSubmit} />
      </main>
   }
}


let mapStateToProps = (state) => {
   return { isAuth: state.auth.isAuth }
}


export default connect(mapStateToProps, { login })(Login);