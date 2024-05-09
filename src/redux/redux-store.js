import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialogReducer";
import musicReducer from "./musicReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";
import appReducer from "./app-reducer";
const thunkMiddleware = thunk;

let reducers = combineReducers({
   profillePage: profileReducer,
   dialogPage: dialogReducer,
   friendsPage: usersReducer,
   musicPage: musicReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

