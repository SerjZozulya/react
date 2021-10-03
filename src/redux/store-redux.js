import {combineReducers, createStore} from "redux";
import projectReducer from "./project-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    tasksData: projectReducer,
    messagesPage: messagesReducer
})

let store = createStore(reducers)

export default store