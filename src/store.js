import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {userLoginReducer, userRgisterReducer} from "./reducers/userReducers"

const reducer= combineReducers({
    userLogin: userLoginReducer,
    userRegister:userRgisterReducer,
});

const userInfoFromStorage =JSON.parse(localStorage.getItem("userInfo"))
?localStorage.getItem("userInfo")
:null;

const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;