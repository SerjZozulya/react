import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addTask, subscribe, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <App state = {state}
                     addTask={addTask}
                     updateNewPostText = {updateNewPostText}
                />
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

