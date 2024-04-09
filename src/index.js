import ReactDOM from "react-dom/client";
import App from "./App";
import { setupStore } from "./redux/store";
import "./index.css";
import { Provider } from "react-redux";

import dotenv from 'dotenv';

dotenv.config();

const store = setupStore()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
