import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    tasksData: tasksReducer,
    messagesData: messagesReducer,
    newsPage: newsReducer
})

let store = createStore(reducers)

export default store