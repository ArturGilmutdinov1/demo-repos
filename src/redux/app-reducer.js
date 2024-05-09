import { getAuthUsersData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
   initialized: false,
}


const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...action,
            initialized: true,
         }
      default:
         return state;
   }
}


export const initializedSuccess = () => { return { type: INITIALIZED_SUCCESS } }


export const initializedApp = () => (dispatch) => {
   let dispatchResult = dispatch(getAuthUsersData());

   Promise.all([dispatchResult])
      .then(() => dispatch(initializedSuccess()));
}

export default appReducer;
