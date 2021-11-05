import {applyMiddleware, combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    tasksData: tasksReducer,
    messagesData: messagesReducer,
    newsPage: newsReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store