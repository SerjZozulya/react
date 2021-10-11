import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store-redux";

export let rerenderEntireTree = (store) => {

    ReactDOM.render(
            <BrowserRouter>
                <App store = {store}
                />
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store))

