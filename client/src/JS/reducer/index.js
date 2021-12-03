

import {combineReducers} from "redux";

import jobReducer from "./Job";
import userReducer from "./User";



const rootReducer = combineReducers({jobReducer , userReducer});
export default rootReducer;


