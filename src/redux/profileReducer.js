import { profileApi, usersApi } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = ' SET_USER_PROFILE';
const SET_STATUS_PROFILE = ' SET_STATUS_PROFILE';

let initialState = {
   postData: [
      { id: 1, message: 'хехех', like: 1 },
      { id: 2, message: 'asdхех', like: 2 },
      { id: 3, message: 'adsasdad', like: 3 },
   ],
   newPostText: "",
   profile: null,
   status: "",
}


const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postData: [...state.postData, {
               id: 5,
               message: action.values,
               like: 0,
            }
            ],
         }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS_PROFILE: {
         return { ...state, status: action.status }
      }



      default:
         return state;
   }
}



export const addPostActionCreator = (values) => ({ type: ADD_POST, values });

const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS_PROFILE, status })

export const getUsersProfile = (userId) => async (dispatch) => {
   let response = await usersApi.getProfile(userId)
   dispatch(setUsersProfile(response.data))
}

export const getStatusProfile = (userId) => async (dispatch) => {
   let response = await profileApi.getStatus(userId)
   dispatch(setStatus(response.data))
}
export const updateStatusProfile = (status) => async (dispatch) => {
   let response = await profileApi.updateStatus(status)
   if (response.resultCode === 0) {
      dispatch(setStatus(status))
   }
}





export default profileReducer
