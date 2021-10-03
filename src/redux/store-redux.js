import {combineReducers, createStore} from "redux";
import projectReducer from "./project-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    projectReducer: projectReducer,
    messagesReducer: messagesReducer
})

let store = createStore(reducers)

export default store