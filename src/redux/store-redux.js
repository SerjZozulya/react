import {combineReducers, createStore} from "redux";
import projectReducer from "./project-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    tasksData: projectReducer,
    messagesData: messagesReducer,
    newsPage: newsReducer
})

let store = createStore(reducers)

export default store