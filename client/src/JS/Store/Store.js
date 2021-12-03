import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk"

const composeEnhancer=window.__Redux_devtools_extention_compose__||compose;
 export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
    );

    