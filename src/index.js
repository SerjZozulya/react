import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store-redux";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state = {state}
                     dispatch = {store.dispatch.bind(store)}
                />
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))

