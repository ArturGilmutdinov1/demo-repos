import { autApi } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}


const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...action,
            ...action.data,
         }
      default:
         return state;
   }
}


const setAuthUsersData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getAuthUsersData = () => async (dispatch) => {
   let response = await autApi.me();
   if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUsersData(id, email, login, true))
   }
}

export const login = (mail, password, rememberMe) => async (dispatch) => {
   let response = await autApi.login(mail, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUsersData())
   }
}
export const logout = () => async (dispatch) => {
   let response = await autApi.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false))
   }
}


export default authReducer;
