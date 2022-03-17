import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { store } from "./redux/redux-store/store";
import App from "./App";
import { Provider } from "react-redux";

axios.defaults.baseURL = 'http://localhost:8080/backend/';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
